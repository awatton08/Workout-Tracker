import React from 'react'
import Exercise from "./Exercise"

export default function ExerciseList() {
    

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
                <button  className="btn">Add exercise</button>
            </div>
        </div>
    )
}
