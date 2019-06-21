import React, { useState } from "react"

import AddSmurfForm from "./AddSmurfForm"

const Smurf = props => {
    const [isEditing, setIsEditing] = useState(false)

    const didStartEdit = () => {
        setIsEditing(true)
    }

    const didEndEdit = smurf => {
        setIsEditing(false)
        props.onEdit(props.id, smurf)
    }

    const SmurfView = () => {
        return (
            <>
                <h3>{props.name}</h3>
                <p>{props.age}</p>
                <p>{props.height}</p>
                <button onClick={didStartEdit}>Edit</button>
            </>
        )
    }

    return (
        <>
            {isEditing ? (
                <AddSmurfForm didSubmitSmurf={didEndEdit} {...props} />
            ) : (
                <SmurfView />
            )}
        </>
    )
}

export default Smurf
