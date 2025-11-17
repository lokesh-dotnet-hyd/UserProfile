import React, { useState } from "react";
import Header from "./Header";
import Profile from "./profile";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");

  
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
   
    setShowProfile(!showProfile);
  };

  return (
    <div className="App">
      <Header Name={name} />

      {!showProfile ? (
        <div className="Profile">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label>Location:</label>
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button onClick={toggleProfile}>Show Profile</button>
        </div>
      ) : (
        <div class="userprofile">
          <Profile
            name={name}
            location={location}
            email={email}
            role="Software Consultant"
          />
          <button onClick={toggleProfile}>Back to Form</button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
