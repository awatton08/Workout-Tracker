import React, { useState, useContext } from 'react'
import Exercise from "./Exercise"
import { ExerciseContext } from './App';


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
                        return <Exercise key={ exercise.id } { ...exercise } />
                    })
                }
            </div>
            
            <div className="exercise-list__add-exercise-btn-container">
                {!selectedExerciseId && <button  className="btn" onClick={handleExerciseAdd}>Add Exercise</button>}
            </div>
        </div>
    )
}
