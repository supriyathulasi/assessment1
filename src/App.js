import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';

import Nav from './components/Nav';
import NotFound from './components/NotFound';

const App = () => {
  const [circleCount, setCircleCount] = useState(1);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);

  const handleCircleCountChange = (count) => {
    setCircleCount(count);
  };

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Task1 onCircleCountChange={handleCircleCountChange} />}
          />
         <Route
  path="/task2"
  element={<Task2 circleCount={circleCount} setSelectedUserDetails={setSelectedUserDetails} />}
/>

          
          <Route
  path="/task3"
  element={<Task3 userDetails={selectedUserDetails} setSelectedUserDetails={setSelectedUserDetails} />}
/>

         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
