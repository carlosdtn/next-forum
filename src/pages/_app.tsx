import "../global.css"
import { Inter } from "next/font/google"
import AppLayout from "@/components/layouts/app-layout/index"
import AuthLayout from "@/components/layouts/auth-layout/index"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

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
        <body className={inter.className}>
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
