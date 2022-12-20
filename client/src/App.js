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

import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "./Chat";
import namer from "korean-name-generator";

const socket = io.connect("http://localhost:3001");

function App() {
  const [showChat, setShowChat] = useState(false);
  const settledRoom = "1";
  const generatedUserName = namer.generate(true);
  useEffect(() => {
    socket.emit("join_room", settledRoom);
    setShowChat(true);
  }, []);
  return (
    <div className="App">
      <Hero />
      <SpaceBetweenPage />
      <SpaceBetweenPage />
      <SpaceBetweenPage />
      <Game />
      <SpaceBetweenPage />
      <Winner />
      <SpaceBetweenPage />
      <History />
      <SpaceBetweenPage />
      <WinnerRecord />
      <SpaceBetweenPage />
      <RealTimeRanking />
      <SpaceBetweenPage />
      <div className="Chat">
        {showChat && (
          <Chat
            socket={socket}
            username={generatedUserName}
            room={settledRoom}
          />
        )}
      </div>
    </div>
  );
}

export default App;
