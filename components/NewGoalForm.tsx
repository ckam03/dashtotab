import { useState, KeyboardEvent } from "react";

interface props {
    addGoal: addGoal;
}
const NewGoalForm: React.FC<props> = ({ addGoal }) => {
    const [newGoal, setnewGoal] = useState<string>("");

    const onSubmit = (event: KeyboardEvent) => {
        if (event.key === "Enter") {        
            addGoal(newGoal);
            setnewGoal("");
            console.log(newGoal);         
          }
        };
  return (
    <>
      <input
        type="text"
        placeholder="Add Goal"
        value={newGoal}
        onChange={(event) => {
          setnewGoal(event.target.value);
        }}
        className="focus:ring-1 focus:border-none focus:ring-green-500 bg-white bg-opacity-70 text-gray-700 p-1 pl-2 rounded-lg"
        onKeyDown={onSubmit}
      ></input>
    </>
  );
};
export default NewGoalForm;
