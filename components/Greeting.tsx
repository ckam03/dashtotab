import { useState, useEffect, useContext } from "react";
import { ToggleContext } from "./ToggleContext";

const Greeting = () => {
  let todaysDate = new Date();
  let hour: number = todaysDate.getHours();
  const {toggled3} = useContext(ToggleContext);
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const bgGreeting = () => {
      if (hour < 12) {
        setGreeting("Good Morning, Chris");
      } else if (hour < 18) {
        setGreeting("Good Afternoon, Chris");
      } else {
        setGreeting("Good Evening, Chris");
      }
    };

    bgGreeting();
  }, [hour]);

  return <> {toggled3 ? <div>{greeting}</div> : false}</>;
};
export default Greeting;
