'use client'

import { useState } from "react";
import Navbar from "./components/globals/Navbar";
import HomePage from "./components/home/HomePage";
import Todo from "./components/todo/Todo";

export default function Home() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="w-[100vw] h-[100vh] px-40 py-28">
      <Navbar setActivePage={setActivePage} />
      <div className="border border-white w-full h-full">
        {activePage === 'home' && <HomePage />}
        {activePage === 'to-do-app' && <Todo />}
      </div>
    </div>
  );
}
