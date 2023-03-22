import mySvg from "./assets/send.svg";
import bot from "./assets/bot.svg";
import user from "./assets/user.svg";
import { useState } from "react";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [value, setValue] = useState("");
  const [isAi, setIsAi] = useState(false);
  const [uniqueId, setUniqueId] = useState("");

  function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    setUniqueId(`id-${timestamp}-${hexadecimalString}`);
  }

  function ChatStripe(isAi, value, uniqueId) {
    return (
      <div className={`wrapper ${isAi && "ai"}`}>
        <div className="chat">
          <div className="profile">
            <img
              src={`${isAi ? bot : user}`}
              alt={`${isAi ? "bot" : "user"}`}
            />
          </div>
          <div className="message" id={uniqueId}>
            {value}
          </div>
        </div>
      </div>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();

    setFormSubmitted(true);
  };

  return (
    <>
      <div id="app">
        <div id="chat_container"></div>
        {
          <div className={`wrapper ${isAi && "ai"}`}>
            <div className="chat">
              <div className="profile">
                <img
                  src={`${isAi ? bot : user}`}
                  alt={`${isAi ? "bot" : "user"}`}
                />
              </div>
              <div className="message" id={uniqueId}>
                {value}
              </div>
            </div>
          </div>
        }
        <form>
          <textarea
            className="textarea"
            name="prompt"
            rows="1"
            cols="1"
            placeholder="Ask Codex..."
            style={{ resize: "none" }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></textarea>
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
    </>
  );
}

export default App;
