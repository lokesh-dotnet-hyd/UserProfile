import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header Name="Lokesh" />
      <div className="Profile">
        <Profile
          name="Lokesh"
          email="lokesh@example.com"
          role="Software Consultant"
          location="Bangalore, India"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
