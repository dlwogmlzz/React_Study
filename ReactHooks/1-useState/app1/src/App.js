import { useState } from 'react'

function App() {
  const [ time, setTime ] = useState(1)

  const updateTime = () => {
    // setTime(time + 1)
    let newTime
    if ( time >= 12 ) {
      alert('새벽이 되었습니다.')
      newTime = 1
    } else {
      newTime = time + 1
    }
    setTime(newTime)
  }

  console.log('시간이 1시간 경과하였습니다.')

  return (
    <div>
      <span>현재 시각: { time }시 </span>
      <button onClick={ updateTime }>Update</button>      
    </div>
  );
}

export default App;
