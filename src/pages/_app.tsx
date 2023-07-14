import "../global.css"
import AppLayout from "@/components/layouts/app-layout"
import AuthLayout from "@/components/layouts/auth-layout"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import { useEffect, useState } from "react"

export const metadata = {
  title: "Next Forum",
  description: "Foro de discusión sobre quejas y sugerencias ciudadanas",
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter().pathname

  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (typeof window === "undefined") {
    return <></>
  } else {
    return (
      <html lang="es">
        <body>
          {route.includes("auth") ? (
            <AuthLayout>
              <Component {...pageProps} />
            </AuthLayout>
          ) : (
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          )}
        </body>
      </html>
    )
  }
}
