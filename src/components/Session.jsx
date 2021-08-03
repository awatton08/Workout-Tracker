import React from 'react'

export default function Session(props) {
    const { session, handleSessionChange } = props

    const handleChange = (changes) => {

        handleSessionChange(session.id, { ...session, ...changes })
    }

    return (
        <div>
            <label>Reps</label><input onInput={ e => handleChange({ reps: e.target.value })} value={session.reps} type="number"/>
            <label>Sets</label><input onInput={ e => handleChange({ sets: e.target.value })} value={session.sets} type="number"/>
            <br/>
        </div>
    )
}
