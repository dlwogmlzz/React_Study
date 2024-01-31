import React, { useState, useReducer } from "react";
import Student from "./Student";

const ACTION_TYPE = {
  add: 'add-student',
  delete: 'delete-student',
  mark: 'mark-student'
} 

// reducer선언
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.add:
      // 학생이름
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case ACTION_TYPE.delete:
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case ACTION_TYPE.mark:
      return {
        count: state.count,
        students: state.students.map(student => {
          if(student.id === action.payload.id) {
            return {...student, isHere: !student.isHere}
          }
          return student;
        })
      }
    default:
      return state;
  }
};

const initialState = {
  // 현재 학생수,...
  count: 0,
  students: [
    // {
    //   id: Date.now(),
    //   name: 'James',
    //   // 현재 출석했는지 여부
    //   isHere: false,
    // },
  ],
};

function App() {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        // input안에 있는 값이 달라질때마다, name 스테이트를 업데이트 시켜줌(e.target.value로)
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPE.add, payload: { name } });
        }}
      >
        추가
      </button>
      {studentInfo.students.map((student) => {
        return (
          <Student
            dispatch={dispatch}  
            key={student.id}
            name={student.name}  
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}

export default App;
