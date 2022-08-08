import React, { useState } from 'react';
import './App.css';

type user = {
  id: number,
  name: string,
  email: string

}
function App() {
  const [user, setUsers] = useState<user>({} as user)
  
  const handleAddUser = () => {
    setUsers({id: 1, name: "Pobarul isalm", email: "pobarulslam10@gmail.com"})
    console.log(user)
  } 
  return (
    <div className="App">
      <h1>Users: </h1>
      <button  onClick={handleAddUser}>Add user</button>
      <h2>{user.name}</h2>
     

     
    </div>
  );
}

export default App;
