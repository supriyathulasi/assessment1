import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Task2 = ({ circleCount }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://random-data-api.com/api/users/random_user?size=${circleCount}`
        );
        if (!response.ok) {
          throw new Error('Error fetching users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [circleCount]);

  const handleViewDetails = (user) => {
    navigate('/task3', { state: { userDetails: user } });
  };

  return (
    <div className="container">
      {users.map((user) => (
        <div key={user.id} className="user-container">
          <img src={user.avatar} alt={user.username} />
          <h3>ID: {user.id}</h3>
          <h2>Name: {`${user.first_name} ${user.last_name}`}</h2>
          <p>Email: {user.email}</p>
          <button onClick={() => handleViewDetails(user)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default Task2;
