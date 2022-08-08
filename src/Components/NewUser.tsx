import React, { useState, MouseEvent, ChangeEvent } from 'react';

const NewUser = () => {
    const [userName, setUserName] = useState("")
    const handleUserNameChange = (event:ChangeEvent<HTMLInputElement>) => {
        setUserName(event?.target.value)
    }
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
       console.log(userName)
    }
    return (
        <div>
            <h2>Create New User</h2>
            <input type="text" placeholder='Enter User Name' value={userName} 
                onChange={handleUserNameChange} />
            <p>{userName}</p>
            <button onClick={handleClick}>Show Name</button>
        </div>
    );
};

export default NewUser;