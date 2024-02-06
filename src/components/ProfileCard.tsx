import { LeaderboardEntry, ProfilesProps } from "../types";

export default function ProfileCard({ Leaderboard }: ProfilesProps) {
  return <div id="profile">{Item(Leaderboard)}</div>;
}

function Item(data: LeaderboardEntry[]) {
  return (
    <>
      {data.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            <img src={value.img} alt="" />

            <div className="info">
              <h3 className="name text-dark">{value.name}</h3>
              <span>{value.location}</span>
            </div>
          </div>
          <div className="item">
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </>
  );
}
