import React, { useState } from "react"

const AddSmurfForm = props => {
    const initialSmurf = {
        name: props.name || "",
        age: props.age || "",
        height: props.height || ""
    }

    const [name, setName] = useState(initialSmurf.name)
    const [age, setAge] = useState(initialSmurf.age)
    const [height, setHeight] = useState(initialSmurf.height)

    const handleSubmit = e => {
        e.preventDefault()
        props.didSubmitSmurf({ name, age, height })
        setName("")
        setAge("")
        setHeight("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Smurf Name</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <label htmlFor="age">Smurf Age</label>
            <input
                id="age"
                type="text"
                value={age}
                onChange={e => setAge(e.target.value)}
            />

            <label htmlFor="height">Smurf Height</label>
            <input
                id="height"
                type="text"
                value={height}
                onChange={e => setHeight(e.target.value)}
            />
            <button>Add Smurf</button>
        </form>
    )
}

export default AddSmurfForm
