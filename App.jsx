import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
            className="outline-none px-4 py-1 rounded-full text-white bg-red-500 hover:bg-red-700 transition-colors duration-300"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button 
            className="outline-none px-4 py-1 rounded-full text-white bg-green-500 hover:bg-green-700 transition-colors duration-300"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button 
            className="outline-none px-4 py-1 rounded-full text-white bg-blue-500 hover:bg-blue-700 transition-colors duration-300"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button 
            className="outline-none px-4 py-1 rounded-full text-white bg-yellow-500 hover:bg-yellow-700 transition-colors duration-300"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button 
            className="outline-none px-4 py-1 rounded-full text-white bg-pink-500 hover:bg-pink-700 transition-colors duration-300"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
