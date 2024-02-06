import React, { useEffect, useState } from "react";

interface LeaderboardProps {
  apiUrl?: string;
  leaderboardData?: Array<{ id: number; username: string; score: number }>;
  customStyles?: React.CSSProperties;
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  apiUrl,
  leaderboardData,
  customStyles,
}) => {
  const [data, setData] = useState<
    Array<{ id: number; username: string; score: number }>
  >([]);

  useEffect(() => {
    if (apiUrl) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((fetchedData) => setData(fetchedData))
        .catch((error) =>
          console.error("Error fetching leaderboard data:", error)
        );
    } else if (leaderboardData) {
      setData(leaderboardData);
    }
  }, [apiUrl, leaderboardData]);

  return (
    <div style={customStyles}>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Participant</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.username}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
