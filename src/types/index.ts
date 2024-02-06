export interface LeaderboardEntry {
    img: string;
    name: string;
    location: string;
    score: number;
  }
  
  export interface ProfilesProps {
    Leaderboard: LeaderboardEntry[];
  }
  