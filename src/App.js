import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  const handleColorClick = (newColor) => {
    document.body.style.backgroundColor = newColor;
    setColor(newColor);
  };

  return (
    <div className="w-full h-screen duration-200 flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl text-white font-semibold mb-8 text-center">
        Click on a color
      </h1>
      <div className="flex gap-4">
        <button
          onClick={() => handleColorClick("black")}
          className="color-button"
          style={{ backgroundColor: "black" }}
        >
          black
        </button>
        <button
          onClick={() => handleColorClick("yellow")}
          className="color-button"
          style={{ backgroundColor: "yellow" }}
        >
          yellow
        </button>
        <button
          onClick={() => handleColorClick("green")}
          className="color-button"
          style={{ backgroundColor: "green" }}
        >
          green
        </button>
        <button
          onClick={() => handleColorClick("red")}
          className="color-button"
          style={{ backgroundColor: "red" }}
        >
          red
        </button>
        <button
          onClick={() => handleColorClick("yellow")}
          className="color-button"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
