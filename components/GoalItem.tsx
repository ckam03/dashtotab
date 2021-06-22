interface props {
    goal: goalItem;
    toggleGoal: ToggleGoal;
  }
  
  const GoalItem: React.FC<props> = ({ goal, toggleGoal }) => {
    return (
      <>
        <li
          style={{ textDecoration: goal.isCompleted ? "line-through" : "" }}
          className="text-gray-700 bg-white bg-opacity-70 rounded-lg p-2 flex justify-between"
        >
          {goal.text}
          <label>
            <input
              name="goaltoggle"
              type="checkbox"
              checked={goal.isCompleted}
              //onclick
              onChange={() => {
                toggleGoal(goal);
              }}
            />
          </label>
        </li>
      </>
    );
  };
  export default GoalItem;
  