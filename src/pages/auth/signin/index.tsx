import ButtonWithIcon from "@/components/buttons/icon-button"
import Logo from "@/components/logo"
import GoogleLogo from "@/components/icons/google-logo"
import GithubLogo from "@/components/icons/github-logo"
import { MoveRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Separator } from "@radix-ui/react-separator"
import { set, useForm } from "react-hook-form"
import { BaseSyntheticEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/router"
import signIn from "@/firebase/auth/signin"
import { CredentialsProps } from "@/utils/types"

const Signin = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const router = useRouter()

  const { register, handleSubmit } = useForm<CredentialsProps>()

  const onSubmit = async (
    values: CredentialsProps,
    e?: BaseSyntheticEvent<object, any, any>
  ) => {
    e?.preventDefault()
    setEmail(values?.username)
    setPassword(values?.password)

    const { result, error } = await signIn(email, password)

    if (error) {
      return console.log(error)
    }
    console.log(result)
    return router.push("/")
  }

  return (
    <div className="flex flex-col justify-between p-2 rounded-xl w-72">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <Logo />
        <h2 className="pr-1 text-2xl font-bold text-white">Inicia sesión</h2>
      </div>
      <div className="flex flex-col mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-2">
            <label className="text-white">
              Usuario
              <Input
                className="text-white bg-transparent"
                type="text"
                {...register("username")}
              />
            </label>
            <label className="text-white">
              Contraseña
              <Input
                className="text-white bg-transparent"
                type="password"
                {...register("password")}
              />
            </label>
          </div>
          <Button
            className="w-full mt-4 text-black bg-white hover:bg-white/80"
            variant="icon"
            type="submit"
          >
            Continuar
          </Button>
        </form>
      </div>
      <hr className="my-5 h-0.5 border-t bg-neutral-100 opacity-100 dark:opacity-50" />
      <div className="flex flex-col justify-center mt-2 gap-y-4">
        <ButtonWithIcon variant="icon" size="default">
          <GoogleLogo className="w-6 h-6 mr-2" />
          Continuar con Google
        </ButtonWithIcon>
        <ButtonWithIcon variant="icon" size="default">
          <GithubLogo className="w-6 h-6 mr-2 fill-white" />
          Continuar con Github
        </ButtonWithIcon>
      </div>
      {/* <div className="flex justify-center">
        <a href="#" className="flex items-center text-blue-600 hover:underline">
          Continuar con correo <MoveRight className="h-5 ml-2" />
        </a>
      </div> */}
    </div>
  )
}

export default Signin
