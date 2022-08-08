import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUsers] = useState<null>(null)
  
  const handleAddUser = () => {
    setUsers({id: 1, name: "Pobarul isalm", email: "pobarulslam10@gmail.com"})
    console.log(user)
  }
  return (
    <div className="App">
      <h1>Users: </h1>
      <button  onClick={handleAddUser}>Add user</button>
     
     
    </div>
  );
}

export default App;
