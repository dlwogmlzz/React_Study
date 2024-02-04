import { useState } from 'react';

// 커스텀훅 useInput
export function useInput(initialValue, submitAction) {
	const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

	const handleSubmit = () => {
		setInputValue("");
		submitAction(inputValue);
	};

	return [inputValue, handleChange, handleSubmit];
}