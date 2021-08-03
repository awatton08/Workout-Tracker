import React, { useContext } from 'react'
import { ExerciseContext } from './App'
import Session from "./Session"

export default function EditExercise(props) {

    const { handleExerciseSelect, handleExerciseChange } = useContext(ExerciseContext)

    const exercise = props;
    
    const handleChange = (changes) => {
        handleExerciseChange(exercise.id, { ...exercise, ...changes })
    }

    const handleSessionChange = (id, session) => {
        const newSessions = [...exercise.sessions]
        const index = newSessions.findIndex(i => i.id === id)
        newSessions[index]=session
        handleChange({ sessions: newSessions })
    }

    return (
        <div className="exercise-card">
            <input value={exercise.name} onInput={ e => handleChange({ name: e.target.value })}/>
            <button onClick={() => handleExerciseSelect(null)}>X</button>
            <button>Session</button>
            <hr/>
            <label>Description</label>
            <textarea value={exercise.description} onInput={ e => handleChange({ description: e.target.value })} type="text"/>
            <hr/>
            <h2>Sessions</h2>
            {
                exercise.sessions.map(session => {
                    return (
                        <Session key={session.id} handleSessionChange={handleSessionChange} session={session}/>
                    )
                })
            }
        </div>
    )
}
