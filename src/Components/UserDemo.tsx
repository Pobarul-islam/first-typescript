import React from 'react';

type userDemoProps = {
    users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[]
}
const UserDemo = ({users}: userDemoProps) => {
    
    return (
        <div>
            <h1>User Management Demo</h1>
            {
                users.map(user => {
                    return <div>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{ user.age}</p>
                    </div>
                })
            }
        </div>
    );
};

export default UserDemo;