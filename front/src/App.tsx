import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './components/Parts/Text'
import Button from './components/Parts/Button'
import CheckBox from './components/Parts/CheckBox'
import List from './components/Parts/List'

function App() {
  const [count, setCount] = useState(0)
  function countUp() {
    setCount((count) => count + 1)
  }
  function countDown() {
    setCount((count) => count - 1)
  }
  const [wordList, setWordList] = useState(['html', 'css', 'javascript'])
  function changeWordList(index: number) {
    wordList.splice(index, 1)
    setWordList([...wordList])
  }

  return (
    <>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <Button label={`カウントアップ`} handler={countUp}></Button>
      <Button label={`カウントダウン`} handler={() => countDown()}></Button>
      <Text text={`count is ${count}`} size="large" type="danger" />
      <CheckBox label="hoge"></CheckBox>
      <List textDatas={wordList} handleClick={changeWordList}></List>
      <Text text="テストこめんと" size="large" type="danger" />
      {wordList.map((word) => (
        <Text text={word} type="alert" />
      ))}
    </>
  )
}

export default App
