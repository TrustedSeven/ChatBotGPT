import React, { useState } from "react";
import "./Chat.module.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form
        className="chat-form"
        onSubmit={(event) => {
          event.preventDefault();
          const input = event.target.elements.message;
          const text = input.value;
          input.value = "";
          // Send the message to the GPT-3 model and add the response to the chat
          // Add your code here…
        }}
      >
        <input type="text" placeholder="Enter your message" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
