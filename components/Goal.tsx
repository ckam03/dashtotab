import { useState, useContext } from "react";
import NewGoalForm from "./NewGoalForm";
import GoalItem from "./GoalItem";
import { ToggleContext } from "./ToggleContext";

const Goal = () => {
  const goalsArray: goalItem[] = [];
  const [goals, setGoals] = useState(goalsArray);
  const { toggled4 } = useContext(ToggleContext);
  //passes a variable of type addGoal
  const createGoal: addGoal = (goal: string) => {
    const newGoal = {
      text: goal,
      isCompleted: false,
    };
    setGoals([...goals, newGoal]);
  };

  const toggleGoal: ToggleGoal = (selectedGoal: goalItem) => {
    const newGoals = goals.map((goal) => {
      if (goal === selectedGoal) {
        return {
          ...goal,
          isCompleted: !goal.isCompleted,
        };
      }
      return goal;
    });
    setGoals(newGoals);
  };

  return (
    <>
      {toggled4 ? (
        <div className="px-14 py-4 rounded-lg bg-white bg-opacity-40 backdrop-filter backdrop-blur-2xl absolute right-10">
          <h1 className="text-gray-600 text-center text-xl">Weekly Goals</h1>
          <ul className="text-gray-900 py-2 space-y-2">
            {goals.map((goal, index) => (
              <GoalItem goal={goal} key={index} toggleGoal={toggleGoal} />
            ))}
          </ul>
          <NewGoalForm addGoal={createGoal} />
        </div>
      ) : (
        false
      )}
    </>
  );
};
export default Goal;
