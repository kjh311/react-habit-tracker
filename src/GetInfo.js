import { useEffect } from "react";

const GetInfo = ({ habits, setHabits, setName, setLoading }) => {
  useEffect(() => {
    // Get name
    // const storedUserName = localStorage.getItem("habitTrackerUserName");
    // if (storedUserName) {
    //   setName(storedUserName);
    // }

    // // Get habbits
    // const storedHabits = localStorage.getItem("habitTrackerHabits");
    // if (storedHabits) {
    //   setHabits(JSON.parse(storedHabits));
    // }

    // Delete LocalStorage info
    localStorage.removeItem("habitTrackerHabits");
    localStorage.removeItem("habitTrackerUserName");

    console.log("Habits", habits);
    setLoading(false);
  }, []);

  return null;
};

export default GetInfo;
