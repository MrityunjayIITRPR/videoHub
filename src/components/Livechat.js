import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { NameGenerate } from "../utils/RandomName";
import randomQuote from "../utils/RandomName";

const Livechat = () => {
  const [liveMessage, setLivemessage] = useState("");
  const messagesList = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: NameGenerate(),
          message: randomQuote(),
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2 className="border-b-2 m-2">Chat Message</h2>
      <div className="p-2 h-[510px] border border-black bg-gray-100 rounded-lg flex flex-col-reverse overflow-y-scroll">
        {messagesList.length !== 0 &&
          messagesList.map((message, index) => (
            <ChatMessage
              name={message?.name}
              key={index}
              message={message?.message}
            />
          ))}
      </div>
      <form
        className="flex w-full py-2  border  border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mrityunjay",
              message: liveMessage,
            })
          );
          setLivemessage("");
        }}
      >
        <input
          className="w-96 ml-2 border border-black rounded-md"
          placeholder=" Chat.."
          type="text"
          onChange={(e) => {
            setLivemessage(e.target.value);
          }}
          value={liveMessage}
        />
        <button className="px-2 mx-2 bg-green-300 border rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default Livechat;
