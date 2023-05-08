import { useEffect } from 'react'

const List = (props: {
  textDatas: string[]
  handleClick: (position: number) => void
}) => {
  useEffect(() => {}, [props.textDatas])
  return (
    <ol>
      {props.textDatas.map((data, index) => {
        return (
          <li key={`${data}-${index}`} onClick={() => props.handleClick(index)}>
            {data}
          </li>
        )
      })}
    </ol>
  )
}

export default List
