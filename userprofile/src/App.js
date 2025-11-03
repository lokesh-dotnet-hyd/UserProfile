import React from 'react';
import Header from './Header';
import Profile from './profile';
import Footer from './Footer';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName]=useState("")
  return (
    <div className="App">
      <Header Name={name} />
      

      <div className="Profile">
        <input type="text"
      placeholder='Enter Name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      ></input>
        <Profile
          name={name}
          role="Software Consultant"
          location="Bangalore, India"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
