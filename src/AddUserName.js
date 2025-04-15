import { useContext, useState, useEffect } from "react";
import { NameContext, DayThemeContext } from "./App";
import Button from "./Button";
import Input from "./Input";

export default function AddUserName({ loading }) {
  const [name, setName] = useContext(NameContext);
  const [dayTheme, setDayTheme] = useContext(DayThemeContext);
  const [nameInput, setNameInput] = useState("");
  const [inputLength, setInputLength] = useState(0);

  useEffect(() => {
    setInputLength(nameInput.length);
  }, [nameInput]);

  //ADD USER NAME
  const handleAddName = (e) => {
    e.preventDefault();

    if (!nameInput.trim()) return;

    const upperCase = (nameInput) => {
      return (
        nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase()
      );
    };

    localStorage.setItem("habitTrackerUserName", upperCase(nameInput));
    setName(upperCase(nameInput));
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
              placeholder={"First name:"}
              minLength={1}
              maxLength={15}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <br />

            {inputLength === 15 && (
              <div
                className={`max-length transition-all duration-500 ${
                  dayTheme ? "text-red-500" : "text-white"
                }`}
              >
                15 Characters max!
              </div>
            )}
            <Button text={"Submit Name"} type={"submit"} />
          </form>
        </div>
      )}
    </div>
  );
}
