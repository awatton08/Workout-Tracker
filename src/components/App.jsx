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

    setExercises([...exercises, newExercise])
    setSelectedExerciseId(newExercise.id)
  }

  
  const handleExerciseSelect = (id) => {
    setSelectedExerciseId(id);
  }

  const handleExerciseChange = (id, exercise) => {
    const newExercises = [...exercises]
    const index = newExercises.findIndex(r => r.id === id);
    newExercises[index] = exercise;
    setExercises(newExercises);
  }

  const exerciseContextValue = {
    handleExerciseAdd,
    handleExerciseSelect,
    selectedExerciseId,
    handleExerciseChange
  }

  return (
    <>
      <ExerciseContext.Provider value={ exerciseContextValue }>
        <h1>Hello React</h1>
        { selectedExerciseId }
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
      {id: uuidv4(), reps: 12, sets: 4},
      {id: uuidv4(), reps: 12, sets: 3},
      {id: uuidv4(), reps: 10, sets: 3}
    ]

  },
  {
    id: 2,
    name: "Lunges",
    description: "Good for legs",
    sessions: [
      {id: uuidv4(), reps: 20, sets: 3},
      {id: uuidv4(), reps: 20, sets: 2},
    ]
  },
  {
    id: 3,
    name: "Skullcrushers",
    description: "Tricep workout",
    sessions: [
      {id: uuidv4(), reps: 20, sets: 3},
      {id: uuidv4(), reps: 15, sets: 3},
      {id: uuidv4(), reps: 10, sets: 3}
    ]
  }];

export default App;
