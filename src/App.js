import mySvg from "./assets/send.svg";
import { useState } from "react";
import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "bot",
      message: "How can I help you today?",
    },
  ]);

  function clearChat() {
    setChatLog([
      {
        user: "bot",
        message: "How can I help you today?",
      },
    ]);
  }

  async function submitHandler(e) {
    e.preventDefault();

    let chatLogNew = [...chatLog, { user: "user", message: `${input}` }];
    setInput("");
    setChatLog(chatLogNew);
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: chatLogNew.map((message) => message.message).join("\n"),
      }),
    });

    const data = await response.json();
    setChatLog([...chatLogNew, { user: "bot", message: `${data.message}` }]);
  }

  return (
    <>
      <div className="App">
        <aside className="sidebar">
          <div className="side-menu-button" onClick={clearChat}>
            <span className="side-menu-btn-span">+</span>New Chat
          </div>
        </aside>
        <section className="chatbox">
          <div className="chat-log">
            {chatLog.map((message, index) => (
              <ChatMessage message={message} key={index} />
            ))}
          </div>
          <div className="chat-input-holder">
            <form className="chatForm" onSubmit={submitHandler}>
              <input
                className="textarea"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                rows="1"
                placeholder="Ask Codex..."
                style={{ resize: "none" }}
              ></input>
              <button className="searchBtn" type="submit">
                <img
                  className="searchSvg"
                  src={mySvg}
                  alt="send button"
                  onClick={submitHandler}
                />
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "bot" && "bot"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "bot" && "bot"}`}>
          {message.user === "bot" && (
            <img className="avatar-img bot" src={bot} alt="bot avatar" />
          )}
          {message.user === "user" && (
            <img className="avatar-img" src={user} alt="user avatar" />
          )}
        </div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};

export default App;
