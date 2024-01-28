import React, { useState, ChangeEvent} from 'react';

const TextBox = ({customLabel = 'Enter Text:', initialValue = ''}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div id="textbox2">
      <input
        type="password"
        id="myTextBox"
        value={inputValue}
        onChange={handleChange}
        placeholder={customLabel}
        className="custom-input" 
      />
    </div>
  );
};

export default TextBox;