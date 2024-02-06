import React, { useEffect, useState } from 'react';

interface LeaderboardProps {
  apiUrl: string;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ apiUrl }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setLeaderboardData(data))
      .catch((error) => console.error('Error fetching leaderboard data:', error));
  }, [apiUrl]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboardData.map((entry) => (
          <li key={entry.id}>
            {entry.username} - {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
