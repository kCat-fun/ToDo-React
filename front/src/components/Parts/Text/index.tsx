import { fontSize, fontType } from './index.css'

const Text = (props: {
  text: string
  size?: keyof typeof fontSize
  type?: keyof typeof fontType
}) => {
  return (
    <p
      className={`${fontSize[props.size ?? 'normal']} ${
        fontType[props.type ?? 'normal']
      }`}
    >
      {props.text}
    </p>
  )
}

export default Text
