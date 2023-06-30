import React from "react"

interface ButtonProps {
  children: React.ReactNode
  title?: React.ReactNode
  className?: string
  variant?: string
  size?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, variant, size, ...rest } = props
    return <button className={className}></button>
  }
)

Button.displayName = "Button"

export default Button
