import React from "react"

import Smurf from "./Smurf"

const SmurfList = ({ smurfs, didEditSmurf, didRemoveSmurf }) => {
    return (
        <>
            {smurfs.map(smurf => (
                <Smurf
                    key={smurf.id}
                    {...smurf}
                    onEdit={didEditSmurf}
                    onRemove={didRemoveSmurf}
                />
            ))}
        </>
    )
}

export default SmurfList
