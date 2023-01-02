import "./App.css";
import "./Chat.css";
import Hero from "./components/Main";
import Game from "./components/Game";
import NavBar from "./components/Navbar";
import Winner from "./components/Winner";
import History from "./components/History";
import WinnerRecord from "./components/WinnerRecord";
import SpaceBetweenPage from "./components/SpaceBetweenPage";
import RealTimeRanking from "./components/RealTimeRanking";
import SmallSpace from "./components/SmallSpace";
import Space1 from "./components/Space1";

import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "./Chat";
import namer from "korean-name-generator";

const socket = io.connect("http://localhost:3001");

function App() {
  const [showChat, setShowChat] = useState(false);
  const [chatOn, setChatOn] = useState(false);
  const settledRoom = "1";
  const generatedUserName = namer.generate(true);
  useEffect(() => {
    socket.emit("join_room", settledRoom);
    setShowChat(true);
  }, []);

  useEffect(() => {}, [chatOn]);

  return (
    <div className="App">
      <Hero />
      <NavBar />
      <SpaceBetweenPage />
      <SpaceBetweenPage />

      <div id="game">
        <SmallSpace />
      </div>
      <Game />
      <SpaceBetweenPage />
      <div id="winner">
        <SmallSpace />
      </div>
      <Winner />

      <SpaceBetweenPage />
      <div id="history">
        <SmallSpace />
      </div>
      <History />

      <SpaceBetweenPage />
      <WinnerRecord />
      <SpaceBetweenPage />
      <SpaceBetweenPage />
      <SpaceBetweenPage />
      <SpaceBetweenPage />
      <SpaceBetweenPage />
      <SpaceBetweenPage />
      <RealTimeRanking />
      <SpaceBetweenPage />

      {chatOn && showChat ? (
        <div className="Chat">
          <Chat
            setChatOn={setChatOn}
            socket={socket}
            username={generatedUserName}
            room={settledRoom}
          />
        </div>
      ) : (
        <button
          type="button"
          className="chatting-button"
          onClick={() => setChatOn(true)}
        >
          Live Chat
        </button>
      )}
    </div>
  );
}

export default App;
