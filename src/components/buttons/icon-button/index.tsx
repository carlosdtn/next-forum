import { Button } from "@/components/ui/button"

type Props = {
  children: React.ReactNode
  variant:
    | "default"
    | "primary"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "icon"
    | "link"
    | null
    | undefined
  size: "default" | "sm" | "lg" | "icon" | null | undefined
}

const ButtonWithIcon: React.FC<Props> = ({ children, variant, size }) => {
  return (
    <Button variant={variant} size={size}>
      {children}
    </Button>
  )
}

export default ButtonWithIcon
