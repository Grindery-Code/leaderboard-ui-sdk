/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { LeaderboardEntry } from "../types"; // Adjust the import based on your actual types

interface BoardProps {
  LeaderboardData: LeaderboardEntry[];
}

export default function Board({ LeaderboardData }: BoardProps) {
  const [period, setPeriod] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPeriod(Number(e.currentTarget.dataset.id));
  };

  return (
    <div className="board">
      <h1 className="leaderboard">Leaderboard</h1>

      <div className="duration">
        <button onClick={handleClick} data-id="7">
          7 Days
        </button>
        <button onClick={handleClick} data-id="30">
          30 Days
        </button>
        <button onClick={handleClick} data-id="0">
          All-Time
        </button>
      </div>

      <ProfileCard Leaderboard={between(LeaderboardData, period)} />
    </div>
  );
}

function between(data: LeaderboardEntry[], between: number) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  const filter: any = data.filter((val: any) => {
    const userDate = new Date(val.dt);
    if (between === 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with descending order
  return filter.sort((a: any, b: any) => b.score - a.score);
}
