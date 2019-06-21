import React from "react"

import Smurf from "./Smurf"

const SmurfList = ({ smurfs }) => {
    return (
        <>
            {smurfs.map(smurf => (
                <Smurf key={smurf.id} {...smurf} />
            ))}
        </>
    )
}

export default SmurfList
