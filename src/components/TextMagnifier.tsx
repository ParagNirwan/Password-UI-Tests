import React, { useState } from "react";

interface TextMagnifierProps {
  initialText: string;
}

const TextMagnifier: React.FC<TextMagnifierProps> = ({ initialText }) => {
  const [text, setText] = useState(initialText);
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleCursorMove = (event: React.MouseEvent<HTMLInputElement>) => {
    const cursorPos = getCaretPosition(event.target as HTMLInputElement);
    setCursorPosition(cursorPos);
  };

  const getCaretPosition = (input: HTMLInputElement) => {
    return input.selectionStart || 0;
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        onMouseMove={handleCursorMove}
      />
      <div style={{ fontSize: "20px", marginTop: "10px" }}>
        {text.charAt(cursorPosition)}
      </div>
    </div>
  );
};

export default TextMagnifier;
