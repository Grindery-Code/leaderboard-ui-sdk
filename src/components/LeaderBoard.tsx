import React, { useEffect, useState } from "react";
import "./leaderboard.css"; // Import the stylesheet

interface LeaderboardProps {
  apiUrl?: string;
  leaderboardData?: Array<{ id: number; image: string; address: string; score: number }>;
  customStyles?: React.CSSProperties;
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  apiUrl,
  leaderboardData,
  customStyles,
}) => {
  const [data, setData] = useState<
    Array<{ id: number; image: string; address: string; score: number }>
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
    <div style={{ ...customStyles }} className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr className="table-header">
            <th className="table-cell">#</th>
            <th className="table-cell">Participant</th>
            <th className="table-cell">Pts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={entry.id} className="table-row">
              <td className="table-cell">{index + 1}</td>
              <td className="table-cell participant-cell">
                <div className="participant-info">
                  <img
                    src={entry.image}
                    alt={`Participant ${index + 1}`}
                    className="participant-image"
                  />
                  <span className="participant-address">{entry.address}</span>
                </div>
              </td>
              <td className="table-cell score-cell">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
