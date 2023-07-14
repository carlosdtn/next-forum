import "../global.css"
import AppLayout from "@/components/layouts/app-layout"
import AuthLayout from "@/components/layouts/auth-layout"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import Head from "next/head"
import { AuthContextProvider } from "@/context/AuthContext"

export default function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter().pathname

  if (typeof window === "undefined") {
    return <></>
  } else {
    return (
      <>
        <Head>
          <title>Focus</title>
        </Head>
        <AuthContextProvider>
          {route.includes("auth") ? (
            <AuthLayout>
              <Component {...pageProps} />
            </AuthLayout>
          ) : (
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          )}
        </AuthContextProvider>
      </>
    )
  }
}
