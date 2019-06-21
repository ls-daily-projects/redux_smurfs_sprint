import React from "react"

import Smurf from "./Smurf"

const SmurfList = ({ smurfs, didEditSmurf }) => {
    return (
        <>
            {smurfs.map(smurf => (
                <Smurf key={smurf.id} {...smurf} onEdit={didEditSmurf} />
            ))}
        </>
    )
}

export default SmurfList
