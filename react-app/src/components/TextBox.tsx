import React, { useState, ChangeEvent} from 'react';

const TextBox = ({customLabel = 'Enter Text:', initialValue = ''}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="myTextBox"
        value={inputValue}
        onChange={handleChange}
        placeholder={customLabel}
      />
      <p></p>
    </div>
  );
};

export default TextBox;