import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/data");

      const result = await response.json();

      setData([...data, result.message + " " + data.length]);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <div className="container my-10 flex h-3/4 w-3/4 flex-col items-center justify-between rounded-3xl border p-10 shadow-lg">
        <ul className="container flex flex-col items-center">
          {data.map((item, index) => (
            <li key={index} className="underline">
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={fetchData}
          className="w-full max-w-[600px] rounded border border-sky-800 bg-sky-500 py-2"
        >
          Klick
        </button>
      </div>
    </div>
  );
}

export default App;
