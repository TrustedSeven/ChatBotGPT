import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">{/* Add messages here */}</div>
      <form className="chat-form">
        <input type="text" placeholder="Enter your message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
