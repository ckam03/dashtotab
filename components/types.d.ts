interface goalItem {
    text: string;
    isCompleted: boolean;
}

type addGoal = (goal: string) => void;
type weatherLocation = (location: string) => void;
type ToggleGoal = (selectedGoal: goalItem) => void;

interface componentToggleProps {
    name: string;
    toggle: boolean;
    isOn: boolean;
    toggleID: number;
}

type toggleProps = (toggleProps: componentToggleProps) => void;