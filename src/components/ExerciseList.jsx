import React, { useContext } from 'react'
import Exercise from "./Exercise"
import { ExerciseContext } from './App';
import EditExercise from './EditExercise';


export default function ExerciseList(props) {
    const {
        exercises
    } = props;
    
    const {selectedExerciseId, handleExerciseAdd} = useContext(ExerciseContext)

    return (
        <div className="exercise-list">
            <div>
                {
                    exercises.map(exercise => {
                   
                        return (
                            <div>
                                {exercise.id !== selectedExerciseId
                                    ? <Exercise key={ exercise.id } { ...exercise } />
                                    : <EditExercise key={ exercise.id } { ...exercise } />}
                            </div>
                        )
                    })
                }
            </div>
            
            <div className="exercise-list__add-exercise-btn-container">
                {!selectedExerciseId && <button  className="btn" onClick={handleExerciseAdd}>Add Exercise</button>}
            </div>
        </div>
    )
}
