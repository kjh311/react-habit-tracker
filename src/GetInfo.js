import { useEffect } from "react";

const GetInfo = ({ habits, setHabits, setName, setLoading }) => {
  useEffect(() => {
    // *** Delete LocalStorage info ***
    localStorage.removeItem("habitTrackerHabits");
    localStorage.removeItem("habitTrackerUserName");

    // Get name
    const storedUserName = localStorage.getItem("habitTrackerUserName");
    if (storedUserName) {
      setName(storedUserName);
    }

    // Get habbits
    const storedHabits = localStorage.getItem("habitTrackerHabits");
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }

    setLoading(false);
  }, []);

  return null;
};

export default GetInfo;
