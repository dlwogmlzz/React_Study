import React, { useState } from 'react'

const heavyWork = () => {
  console.log('무거운 작업')
  return ['김혜경', '김민서']
} 

export default function App() {
  // const [ names, setNames ] = useState(heavyWork())
  // useState안에 콜백함수를 사용해서 return을 하면 맨처음 화면이 렌더링될때 한번만 heavyWork의 console.log가 실행되게 된다.
  const [ names, setNames ] = useState(() => {
    return heavyWork()
  })
  // 입력한 input창안에 어떤 값이 들어있는지 알고 싶을때
  const [ input, setInput ] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value) 
  }

  const handleUpload = () => {
    setNames((prevState) => {
      console.log('이전 state: ', prevState)
      return([input, ...prevState])
    })
  }

  // console.log(input)

  return (
    <div>
      {/* input창에 입력을 할때마다 핸들링을 해줄 함수를 호출할수 있도록 onChange를 사용 */}
      <input type='text' value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      { names.map((name, idx) => {
        // 리액트에서 map을 써서 엘리먼트를 출력할때는 key에 index를 넣어줘야 한다.
        return <p key={idx}>{ name }</p>
      })}
    </div>  
  )
}
