import { ButtonHTMLAttributes } from 'react'

export type ButtonSize = 'lg'

export type ButtonColor = 'primary'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize
  color?: ButtonColor
}
