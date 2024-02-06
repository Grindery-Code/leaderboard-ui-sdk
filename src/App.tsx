// import { useState } from 'react'
import "./App.css";
import "./index.css";
import Board from "./components/Board";
// import Leaderboard from "./components/LeaderBoard";
import { LeaderboardData } from "./data/data";

function App() {
  const sampleData = [
    { id: 1, image: "User1", address: 'jnjhfvjefbjdbjbjbdjhbdjhbehbfjhbejh', score: 100 },
    { id: 2, image: "User2", address: 'jnjhfvjefbjdbjbjbdjhbdjhbehbfjhbejh', score: 90 },
  ];
  return <Board LeaderboardData={LeaderboardData} />;
  // return <Leaderboard leaderboardData={sampleData} />;
}

export default App;
