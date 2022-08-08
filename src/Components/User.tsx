import React from 'react';

type userProps = {
    user: {
        name: string;
        age: number;
        isRegisterd: boolean;
        lang: string[];
    }
}
const User = ({user}:userProps) => {
    return (
        <div>
            <h3>User</h3>
            <h2>{user.name}</h2>
            <p>{user.age} Years Old</p>
            {user.isRegisterd ? <p>Registerd user</p> : <p>Not Registerd</p>}
            <p>Speaks: 
                {
                    user.lang.map((language, index) => {
                        return <span key={index}>{ language} </span>
                   })
                }
            </p>
       
        </div>
    );
};

export default User;