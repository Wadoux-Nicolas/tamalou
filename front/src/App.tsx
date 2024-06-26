import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenuBurger from "./components/MenuBurger.tsx";
import PenguinComponent from "./components/avatar.tsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <PenguinComponent/>
    </>
  );
}

export default App;
