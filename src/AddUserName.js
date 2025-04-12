import { useContext, useState } from "react";
import { NameContext, DayThemeContext } from "./App";
import Button from "./Button";
import Input from "./Input";

export default function AddUserName({ loading }) {
  const [name, setName] = useContext(NameContext);
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);
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
      {!loading && !name && (
        <div
          className={`card text-center transition-all duration-500 ${
            dayTheme
              ? "dayTheme2 text-black dayCard"
              : "nightTheme5 text-white nightCard"
          }`}
        >
          <form
            className={`border transition-all duration-500 ${
              dayTheme ? "dayTheme3 text-black" : "nightTheme2 text-white"
            } rounded-lg p-2 m-2`}
            onSubmit={handleAddName}
          >
            <h1 className="text-xl">WELCOME!!</h1>
            <p className="text-center">
              Please enter your name to get started:
            </p>

            <Input
              placeholder={"Enter your name:"}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <br />
            <Button text={"Submit Name"} type={"submit"} />
          </form>
        </div>
      )}
    </div>
  );
}
