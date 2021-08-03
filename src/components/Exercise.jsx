import React, { useContext } from 'react'
import { ExerciseContext } from './App';

export default function Exercise(props) {

    const {
        id,
        name,
        description,
        sessions,
        
    } = props;

    const { handleExerciseSelect } = useContext(ExerciseContext)

    return (
    
        <div className="exercise-card">
            <h2>{name}</h2>
            <h2>{sessions[0].sets}x{sessions[0].reps}</h2>
            <button onClick={() => handleExerciseSelect(id)}>Edit</button>
            <button>Session</button>
            <hr/>
            <p>{description}</p>
        </div>
        
    )
}
