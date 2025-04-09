import { useContext, useState } from "react";
import { NameContext } from "./App";

export default function AddUserName() {
  const [name, setName] = useContext(NameContext);
  const [nameInput, setNameInput] = useState("");

  //ADD USER NAME
  const handleAddName = (e) => {
    e.preventDefault();

    if (!nameInput.trim()) return;

    localStorage.setItem("habitTrackerUserName", nameInput);
    setName(nameInput);
    setNameInput("");
  };

  return (
    <div>
      {!name && (
        <div className="card">
          <p>
            {/* Welcome to Habit Tracker. <br /> */}
            Please enter your name to get started:
          </p>
          <form
            className="border border-black rounded-lg p-2 m-2 "
            onSubmit={handleAddName}
          >
            <input
              className="border rounded p-2 m-2"
              type="text"
              value={nameInput}
              placeholder="Enter your name:"
              onChange={(e) => setNameInput(e.target.value)}
            />
            <br />
            <button className="p-2 m-2 bg-blue-400 hover:bg-blue-600 border border-black rounded-lg">
              Submit Name
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
