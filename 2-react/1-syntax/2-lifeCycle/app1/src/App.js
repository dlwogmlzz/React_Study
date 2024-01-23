// CSS
import { useState } from 'react'
import './App.css';
import LocalCart from './components/LocalCart'
import Counter from './components/Counter'

// JSX 문법
function App() {
  // JS
  const [ isOpen, setIsOpen ] = useState(false)
  const [ number, setNumber ] = useState(0)

  // XML
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{ isOpen ? '닫기' : '열기' }</button>
      {/* 로컬스테이트 */}
      { isOpen && <LocalCart /> }
      { isOpen && <LocalCart /> }
      { isOpen && <LocalCart /> }
      <hr />
      {/* props로 넘겨준 경우 */}
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
    </>
  );
}

// import를 할수 있게 준비를 해라는 의미
export default App;
