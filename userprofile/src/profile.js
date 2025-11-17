import React from 'react';

function Profile(props) {
  const { name, role, location, email } = props;

  const containerStyle = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    margin: '2rem auto',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '1rem',
  };

  const detailStyle = {
    margin: '0.5rem 0',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>User Profile</h2>
      <p style={detailStyle}><strong>Name:</strong> {name}</p>
      <p style={detailStyle}><strong>Email:</strong> {email}</p>
      <p style={detailStyle}><strong>Role:</strong> {role}</p>
      <p style={detailStyle}><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default Profile;
