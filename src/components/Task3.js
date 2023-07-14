import React from 'react';
import { useLocation } from 'react-router-dom';

const Task3 = () => {
  const location = useLocation();
  const userDetails = location.state && location.state.userDetails;

  return (
    <div>
      <h2>User Details</h2>
      {userDetails ? (
        <div className="user-container">
          <img src={userDetails.avatar} alt={userDetails.username} />
          <h3>ID: {userDetails.id}</h3>
          <h3>Name: {`${userDetails.first_name} ${userDetails.last_name}`}</h3>
          <p>Email: {userDetails.email}</p>
        </div>
      ) : (
        <p>No user details found.</p>
      )}
    </div>
  );
};

export default Task3;
