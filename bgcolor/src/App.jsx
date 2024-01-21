import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-center text-8xl items-center" style={{color:"beige"}}>Background Color Changer</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-12 shadow-lg bg-white px-4 py-3 rounded-full">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={() => setColor("#E6E6FA")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "#E6E6FA" }}
            >
              Levander
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "green", color: "white" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "gray",color:"white" }}
            >
              Gray
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "olive",color:"white" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "black",color:"white" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "pink"}}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "purple",color:"white"}}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
