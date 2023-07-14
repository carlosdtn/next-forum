import Header from "@/components/header"
import { useAuthContext } from "@/context/AuthContext"
import { Sidebar } from "lucide-react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    console.log("user: ", user)
    if (user == null) router.push("/auth/signin")
  }, [user])

  return (
    <>
      {user?.providerId ? (
        <>
          <div className="flex flex-col items-center w-11/12 max-w-2xl gap-10 py-12 mx-auto">
            <Header />
            {children}
          </div>
        </>
      ) : (
        <h1>{`Only logged in users can view this page ${user?.providerId}`}</h1>
      )}
    </>
  )
}

export default AppLayout
