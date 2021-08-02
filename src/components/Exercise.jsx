import React, { useContext } from 'react'
import { ExerciseContext } from './App';

export default function Exercise(props) {

    const {
        id,
        name,
        description,
        sessions,
        
    } = props;

    const { handleExerciseSelect, selectedExerciseId } = useContext(ExerciseContext)

    const staticExercise = (
        <div className="exercise-card">
            <h2>{name}</h2>
            <h2>Goal: {sessions[0].reps}x{sessions[0].sets}</h2>
            <button onClick={() => handleExerciseSelect(id)}>Edit</button>
            <button>Session</button>
            <hr/>
            <p>{description}</p>
        </div>
    )
    const editExercise = (
        <div className="exercise-card">
            <input placeholder={name}/>
            <button onClick={() => handleExerciseSelect(null)}>X</button>
            <h2>Goal: </h2>
            <label>Reps</label><input placeholder={sessions[0].reps} type="number"/>
            <label>Sets</label><input placeholder={sessions[0].sets} type="number"/>
            <button onClick={() => handleExerciseSelect(id)}>Edit</button>
            <button>Session</button>
            <hr/>
            <label>Description</label>
            <textarea placeholder={description} type="text"/>
            <hr/>
            <h2>History</h2>
            {sessions.map(session => {
                        return (
                            <>
                                <label>Reps</label><input placeholder={session.reps} type="number"/>
                                <label>Sets</label><input placeholder={session.sets} type="number"/>
                                <br/>
                            </>
                        )
                    })}
        </div>
    )

    return (
        <>
            {selectedExerciseId !== id && staticExercise}
            {selectedExerciseId === id && editExercise}
        </>
    )
}
