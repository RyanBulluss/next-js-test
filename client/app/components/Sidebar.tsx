import React from "react";

interface Props {
  games: any[];
  setCurrentGame: any;
}

const Sidebar: React.FC<Props> = ({ games, setCurrentGame }) => {
  return (
    <div className="bg1 w-48 hidden 2xl:block">
      <div className="flex flex-col text-xl font-semibold">
        <button className="text-2xl font-bold text-left mb-8 px-3 py-6 hover:bg-gray-800">
          Minigames
        </button>
        {games.map((game: any) => (
          <button
            onClick={() => setCurrentGame(game)}
            className="p-3 hover:bg-gray-800 text-left"
          >
            {game}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
