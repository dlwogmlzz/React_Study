import React from 'react';

const ACTION_TYPE = {
  add: 'add-student',
  delete: 'delete-student',
  mark: 'mark-student'
} 

const Student = ({ name, dispatch, id, isHere }) => {
	return (
		<div>
			<span style={{
				textDecoration: isHere ? 'line-through' : 'none',
				color: isHere ? 'red' : 'black',
			}}
			onClick={() => {
				dispatch({ type: ACTION_TYPE.mark, payload: { id }})
			}}
			>{name}</span>
			<button onClick={() => {
				dispatch({type: ACTION_TYPE.delete, payload: { id }})
			}}>삭제</button>
		</div>
	);
};

export default Student;