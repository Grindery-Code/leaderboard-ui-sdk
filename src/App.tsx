// import { useState } from 'react'
import "./App.css";
import Leaderboard from "./components/LeaderBoard";

function App() {
  const sampleData = [
    { id: 1, image: "User1", address: 'jnjhfvjefbjdbjbjbdjhbdjhbehbfjhbejh', score: 100 },
    { id: 2, image: "User2", address: 'jnjhfvjefbjdbjbjbdjhbdjhbehbfjhbejh', score: 90 },
  ];
  return <Leaderboard leaderboardData={sampleData} />;
}

export default App;
