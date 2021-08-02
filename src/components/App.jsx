import ExerciseList from "./ExerciseList";
import { useState } from "react";


function App() {
  const [ exercises, setExercises ] = useState(sample);
  return (
    <>
      <h1>Hello React</h1>
      <ExerciseList exercises={ exercises }/>
    </>
  );
}

const sample = [
  {
    id: 1,
    name: "Bench Press",
    reps: 5,
    sets: 3
  },
  {
    id: 2,
    name: "Lunges",
    reps: 5,
    sets: 3
  },
  {
    id: 3,
    name: "Skullcrushers",
    reps: 5,
    sets: 3
  }];

export default App;
