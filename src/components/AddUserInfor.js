import React from "react";
import { useState } from "react";


const AddUserInfor = (props) => {

    
    const [name, setName] = useState('')
    const [address, setAddress] = useState('HCM')
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: name,
            age: age

        });

    }
    return (
        <div>
            my name is: {name} and {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your Name:</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)} />
                {/* <button>Submit</button> */}


                <label>Your Name:</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfor;