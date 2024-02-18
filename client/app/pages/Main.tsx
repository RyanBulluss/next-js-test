import React from "react";
import GameArea from "../components/GameArea";
import Leaderboard from "../components/Leaderboard";
import Comments from "../components/Comments";

interface Props {
  currentGame: string;
  setCurrentGame: any;
}

const Main: React.FC<Props> = ({ currentGame, setCurrentGame }) => {
  return (
    <div className="p-6">
      <div className="flex gap-8">
        <GameArea />
        <Leaderboard />
        ads
      </div>
      <Comments />
    </div>
  );
};

export default Main;
