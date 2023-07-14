import type { ControllerRenderProps, FieldValues } from "react-hook-form"

export type FieldType = ControllerRenderProps<FieldValues, string>

export type IconProps = {
  className?: string
}

export type CredentialsProps = {
  username: string
  password: string
}
