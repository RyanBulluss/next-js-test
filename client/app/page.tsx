"use client"
import React, { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/home")
      .then(response => response.json())
      .then(
        data => {
          setMessage(data.message);
          setPeople(data.people);
        }
      );
  }, []);

  return <main className="bg-blue-500">
    {message}
    {people.map((p, idx) => <div key={idx}>{p}</div>)}
    </main>;
}
