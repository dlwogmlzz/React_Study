// context를 사용하려면 먼저 createContext를 import해야 한다.
import { createContext } from 'react';

// 여기서 createContext의 인자인 초기값 null의 의미는 ?
// export const ThemeContext = createContext(null)
// 만약에 하위 컴포넌트가 useContext로 ThemeContext에 대한 정보를 받아왔는데, 
// 상위 컴포넌트에서 해당 context의 Provider로 감싸주지 않고, value가 없는 상황일때,
// ThemeContext.js에서 createContext()괄호 안의 인자가 초기값이 된다.    
export const ThemeContext = createContext("hello") 