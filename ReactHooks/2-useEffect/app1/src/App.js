import React, { useState, useEffect } from 'react'

export default function App() {
  // state생성
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  const UpdateCount = () => {
    setCount(count + 1)
  }
  // 화면에 처음 마운팅 될때만 실행된다. 
  useEffect(() => {
    console.log('마운팅🔥')
  }, [])

  // 렌더링 될때, 업데이트 될떄마다 매번 실행됨
  useEffect(() => {
    console.log('렌더링 👍🏻')
  })

  // Count, Name이 업데이트 될때 각 console.log가 실행된다.
  // 마운트 + [ count ]가 변경될때만 실행
  useEffect(() => {
    console.log('Count변경❗️')
  }, [count]) // []배열에 count state가 들어가면 count이 변경될때만 console.log가 찍힌다.

  // 마운트 + [ name ]이 변경될때만 실행
  useEffect(() => {
    console.log('Name변경⭐️')
  }, [name]) // []배열에 name state가 들어가면 name이 변경될때만 console.log가 찍힌다.

  const InputChange = (e) => {
    // input을 입력할때마다 name이 업데이트된다.
    setName(e.target.value)
  }

  return (
    <div>
      <span>Count: { count }</span>
      <button onClick={ UpdateCount }>+</button><hr />
      {/* input에 내용물이 바뀔때마다 InputChange함수를 불러준다. */}
      <div>Name: { name }</div>
      <input type='text' value={ name } onChange={ InputChange }/>
    </div>
  )
}
