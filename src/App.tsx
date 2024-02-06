// import { useState } from 'react'
import "./App.css";
import Leaderboard from "./components/LeaderBoard";

function App() {
  const sampleData = [
    { id: 1, username: "User1", score: 100 },
    { id: 2, username: "User2", score: 90 },
  ];
  return <Leaderboard leaderboardData={sampleData} />;
}

export default App;
