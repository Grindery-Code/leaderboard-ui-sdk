/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

interface LeaderboardProps {
  apiUrl?: string | any;
  leaderboardData?: Array<{
    id: number;
    image: string;
    address: string;
    score: number;
  }>;
  customStyles?: React.CSSProperties;
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  apiUrl,
  leaderboardData = [],
  customStyles,
}) => {
  const [data, setData] = useState<
    Array<{ id: number; image: string; address: string; score: number }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        setError("Error fetching leaderboard data");
      } finally {
        setLoading(false);
      }
    };

    if (!leaderboardData.length && apiUrl) {
      fetchData();
    } else {
      setData(leaderboardData);
      setLoading(false);
    }
  }, [apiUrl, leaderboardData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (data.length === 0) {
    return <p>No leaderboard data available</p>;
  }

  return (
    <div style={{ ...customStyles }} className="my-leaderboard-container">
      <h2 className="my-leaderboard-title">Leaderboard</h2>
      <table className="my-leaderboard-table">
        <thead>
          <tr className="my-table-header">
            <th className="my-table-cell">#</th>
            <th className="my-table-cell">Participant</th>
            <th className="my-table-cell">Pts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={entry.id} className="my-table-row">
              <td className="my-table-cell">{index + 1}</td>
              <td className="my-table-cell my-participant-cell">
                <div className="my-participant-info">
                  <img
                    src={entry.image}
                    alt={`Participant ${index + 1}`}
                    className="my-participant-image"
                  />
                  <span className="my-participant-address">
                    {entry.address}
                  </span>
                </div>
              </td>
              <td className="my-table-cell my-score-cell">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
