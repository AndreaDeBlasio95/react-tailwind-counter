import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("unknown entity");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSetName = () => {
    setName(inputValue.trim() || "unknown entity");
    setInputValue("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-teal-400 to-blue-600">
      <div className=" mt-8 bg-black bg-opacity-75 p-10 rounded-lg text-white shadow-xl">
        <h1 className="text-3xl font-bold">THE ALMOST FINAL COUNTDOWN</h1>
        <p className=" mb-4">
          Stop the timer once you estimate that time is (almost) up
        </p>
        <label
          htmlFor="nameInput"
          className="flex flex-row text-lg justify-center"
        >
          Welcome {name}
        </label>
        <div className="flex flex-row justify-center">
          <input
            id="nameInput"
            type="text"
            placeholder="Max"
            value={inputValue}
            onChange={handleInputChange}
            className="mt-2 px-4 py-2 bg-white text-black rounded focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={handleSetName}
            className="px-4 mt-2 bg-slate-400 hover:bg-slate-700 text-white  font-bold rounded shadow text-sm"
          >
            Set Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
