import ButtonWithIcon from "@/components/buttons/icon-button"
import Logo from "@/components/logo"
import GoogleLogo from "@/components/icons/google-logo"
import GithubLogo from "@/components/icons/github-logo"
import { Separator } from "@radix-ui/react-separator"
import { MoveRight } from "lucide-react"

const Signin = () => {
  return (
    <div className="flex flex-col justify-between p-2 rounded-xl w-72">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <Logo />
        <h2 className="pr-1 text-2xl font-bold text-white">Inicia sesión</h2>
      </div>
      <div className="flex flex-col justify-center mt-8 gap-y-4">
        <ButtonWithIcon variant="icon" size="default">
          <GoogleLogo className="w-6 h-6 mr-2" />
          Continuar con Google
        </ButtonWithIcon>
        <ButtonWithIcon variant="icon" size="default">
          <GithubLogo className="w-6 h-6 mr-2 fill-white" />
          Continuar con Github
        </ButtonWithIcon>
      </div>
      <div className="flex justify-center">
        <a href="#" className="flex items-center text-blue-600 hover:underline">
          Continuar con correo <MoveRight className="h-5 ml-2" />
        </a>
      </div>
    </div>
  )
}

export default Signin
