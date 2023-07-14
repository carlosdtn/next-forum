import React from "react"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import firebase_app from "@/firebase/config"
import { CredentialsProps } from "@/utils/types"

const auth = getAuth(firebase_app)

export const AuthContext = React.createContext({})

export const useAuthContext = () => React.useContext(AuthContext)

type Props = {
  children: React.ReactNode
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user context: ", user)
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}
