import ExerciseList from "./ExerciseList";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ExerciseContext = React.createContext();

function App() {
  const [ exercises, setExercises ] = useState(sample);
  const [ selectedExerciseId, setSelectedExerciseId ] = useState();

  //const selectedExercise = exercises.find((exercise) => exercise.id === selectedExerciseId);

  // Adds a new, blank exercise to the state list, then selects it for editing
  const handleExerciseAdd = () => {
    const newExercise = {
      id: uuidv4(),
      name: "",
      description: "",
      sessions: [{id: uuidv4(), reps: 0, sets:0}]
    }
    console.log(newExercise)
    setExercises([...exercises, newExercise])
    setSelectedExerciseId(newExercise.id)
  }

  
  const handleExerciseSelect = (id) => {
    console.log(id)
    setSelectedExerciseId(id);
  }

  const exerciseContextValue = {
    handleExerciseAdd,
    handleExerciseSelect,
    selectedExerciseId
  }

  return (
    <>
      <ExerciseContext.Provider value={ exerciseContextValue }>
        <h1>Hello React</h1>
        {selectedExerciseId }
        <ExerciseList selectedExerciseId={selectedExerciseId} exercises={ exercises }/>
      </ExerciseContext.Provider>
    </>
  );
}

const sample = [
  {
    id: 1,
    name: "Bench Press",
    description: "Press benches, just do it",
    sessions: [
      {reps: 12, sets: 4},
      {reps: 12, sets: 3},
      {reps: 10, sets: 3},
    ]

  },
  {
    id: 2,
    name: "Lunges",
    description: "Good for legs",
    sessions: [
      {reps: 20, sets: 3},
      {reps: 20, sets: 2},
      {reps: 20, sets: 2},
    ]
  },
  {
    id: 3,
    name: "Skullcrushers",
    description: "Tricep workout",
    sessions: [
      {reps: 20, sets: 3},
      {reps: 15, sets: 3},
      {reps: 10, sets: 3},
    ]
  }];

export default App;
