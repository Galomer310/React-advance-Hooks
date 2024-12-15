import React, { useRef, useState } from "react";

const CharacterCounter = () => {
  const inputRef = useRef(null);
  
  const [charCount, setCharCount] = useState(0);

  const handleInput = () => {
    if (inputRef.current) {
      setCharCount(inputRef.current.value.length);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1>Character Counter</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        onInput={handleInput}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "10px",
          fontSize: "16px",
        }}
      />
      <p>
        Character Count: <strong>{charCount}</strong>
      </p>
    </div>
  );
};

export default CharacterCounter;
