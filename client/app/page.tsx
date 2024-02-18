"use client"
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import { allGames } from "./globalConstants";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";

export default function Home() {
  const [games, setGames] = useState(allGames);
  const [currentGame, setCurrentGame] = useState("");

  return <main className="flex min-h-[100vh]">
      <Sidebar games={games} setCurrentGame={setCurrentGame} />
      <Main currentGame={currentGame} setCurrentGame={setCurrentGame} />
    </main>;
}
