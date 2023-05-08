import { container } from './index.css'

const Button = (props: {
  label?: string // ?を入れることで、labelの値を渡すかどうかを任意としている
  children?: React.ReactNode[]
  handler?: () => void
}) => {
  return (
    <button className={container} onClick={props.handler}>
      {props.label}
      {props.children}
    </button>
  )
}

export default Button
