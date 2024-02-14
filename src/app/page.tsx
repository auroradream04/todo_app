'use client'

import { useState } from "react";
import Navbar from "./components/home/Navbar";

export default function Home() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="w-[100vw] h-[100vh] px-40 py-28">
      <div className="border border-white w-full h-full">
        <Navbar setActivePage={setActivePage} />
        <h1>{activePage}</h1>
      </div>
    </div>
  );
}
