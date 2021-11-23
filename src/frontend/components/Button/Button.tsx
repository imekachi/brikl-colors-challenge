import clsx from 'clsx'
import style from './Button.module.css'
import { ButtonProps } from './Button.types'

const getClassName = ({
  className,
  size = 'lg',
  color = 'primary',
}: ButtonProps) => {
  return clsx(style.button, className, {
    '-lg': size === 'lg',
    '-primary': color === 'primary',
  })
}

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button {...props} className={getClassName(props)}>
      {children}
    </button>
  )
}

export type { ButtonProps } from './Button.types'
export default Button
