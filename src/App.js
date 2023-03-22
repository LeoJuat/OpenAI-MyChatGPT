// import mySvg from "./assets/send.svg";
import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

function App() {
  return (
    <>
      <div className="App">
        <aside className="sidebar">
          <div className="side-menu-button">
            <span className="side-menu-btn-span">+</span>New Chat
          </div>
        </aside>
        <section className="chatbox">
          <div className="chat-log">
            <div className="chat-message">
              <div className="chat-message-center">
                <div className="avatar">
                  <img className="avatar-img" src={user} alt="user avatar" />
                </div>
                <div className="message">Hello world</div>
              </div>
            </div>
          </div>

          <div className="chat-message bot">
            <div className="chat-message-center">
              <div className="avatar bot">
                <img className="avatar-img bot" src={bot} alt="bot avatar" />
              </div>
              <div className="message">I am an AI</div>
            </div>
          </div>

          <div className="chat-input-holder">
            <textarea
              className="textarea"
              rows="1"
              placeholder="Ask Codex..."
              style={{ resize: "none" }}
            ></textarea>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
