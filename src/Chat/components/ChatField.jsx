import React, { useState, useRef } from "react";
import "../css/chatfield.css";

const ChatField = ({}) => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset height to recalculate
    const maxHeight = 4 * parseInt(getComputedStyle(textarea).lineHeight); // 4 líneas máx
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (text.trim()) onSend(text);
      setText("");
      textareaRef.current.style.height = "auto";
    }
  };

  const onSend = (e) => {
    setText("");
    textareaRef.current.style.height = "auto";
  };

  return (
    <div className="text-field-container">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu mensaje..."
        className="chat-textarea"
      />
      <button
        onClick={() => text.trim() && onSend(text)}
        className="send-button"
      >
        Enviar
      </button>
    </div>
  );
};

export default ChatField;
