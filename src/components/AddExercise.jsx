import React from 'react'

export default function AddWorkout() {
    return (
    
            <div class="card">
                {/* <div className="add-workout__header"> */}
                <h3 className="add-workout__title">Add a New Exercise</h3>
                {/* </div> */}
                <input className="inpt-workout-name" placeholder="Name"/>
                <input className="inpt-workout-description" placeholder="Description"/>
            </div>

    )
}
