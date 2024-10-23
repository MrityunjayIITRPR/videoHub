import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="my-2">
      <div className="flex items-center p-1 border border-b-slate-100">
        <img
          className="h-6"
          alt="userlogo"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
