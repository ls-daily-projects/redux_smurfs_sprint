import React from "react"

const Smurf = ({ name, age, height }) => {
    return (
        <>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{height}</p>
        </>
    )
}

export default Smurf
