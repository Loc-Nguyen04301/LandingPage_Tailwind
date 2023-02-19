import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white shadow-md">
      <Navbar />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
