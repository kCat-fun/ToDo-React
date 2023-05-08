const CheckBox = (props: {
  label?: string // ?を入れることで、labelの値を渡すかどうかを任意としている
  handler?: () => void
}) => {
  return (
    <label onChange={props.handler}>
      <input type="checkbox"></input>
      {props.label}
    </label>
  )
}

export default CheckBox
