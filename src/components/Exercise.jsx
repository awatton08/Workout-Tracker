import React from 'react'

export default function Exercise(props) {

    const {
        name,
        reps,
        sets
    } = props;

    return (
        <>
            <h3>{name}: {reps}x{sets}</h3>
        </>
    )
}
