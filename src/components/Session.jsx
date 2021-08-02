import React from 'react'

export default function Session(props) {
    const { session } = props
    return (
        <div>
            <label>Reps</label><input placeholder={session.reps} type="number"/>
            <label>Sets</label><input placeholder={session.sets} type="number"/>
        </div>
    )
}
