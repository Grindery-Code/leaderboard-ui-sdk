// import { useState } from 'react'
import "./App.css";
import "./index.css";
import { sampleData } from "./data/data";
import Leaderboard from "./components/LeaderBoard";

function App() {
  return <Leaderboard leaderboardData={sampleData} />;
}

export default App;
