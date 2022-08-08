import React, { useState } from 'react';

const NewuserForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const handleNameChange = (event: React.ChangeEvent <HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    };
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUser = { name, email }
        console.log(newUser)
    };
    return (
        <div>
            <h2>Create New User</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                <label htmlFor="">
                    Name
                    <input type="text" id='name' value={name} onChange={handleNameChange} required/>
                </label>
         </div>
                <div>
                <label htmlFor="">
                    Email
                    <input type="text" id='email' value={email} onChange={handleEmailChange} required/>
                </label>
                </div>
                <button type='submit'>Create User</button>
            </form>
        </div>
    );
};

export default NewuserForm;