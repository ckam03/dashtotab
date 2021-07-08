import { useState, useEffect, useContext, KeyboardEvent } from "react";
import { ToggleContext } from "./ToggleContext";

const Greeting = () => {
  let todaysDate = new Date();
  let hour: number = todaysDate.getHours();
  const {toggled3} = useContext(ToggleContext);
  const [greeting, setGreeting] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<any>("");
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

  const onSubmit = (e: KeyboardEvent) => {
    if (e.key === "Enter") {

        if (localStorage.name === null) {

          localStorage.setItem('name', name)
        }
      
    }
    else {
      setData(localStorage.getItem('name'))
    }
  }

  return (
    <>
      {toggled3 ? (
        <div>
          {greeting}
          {/* <input
            className="bg-transparent w-40 border-none text-3xl focus:border-gray-50 focus:ring-gray-50 rounded-lg"
            type="text"
            value={data}
            onChange={(event) => setName(event?.target.value)}
            onKeyDown={onSubmit}
          /> */}
        </div>
      ) : (
        false
      )}
    </>
  );
};
export default Greeting;
