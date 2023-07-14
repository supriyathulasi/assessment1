import React, { useEffect, useState } from 'react';

import first from './first.css';

const Circle = ({ counter, color, onIncrement }) => (
  <div
    className="circle"
    style={{ backgroundColor: color }}
    onClick={onIncrement}
  >
    <div className="counter">{counter}</div>
    <div className="color">{color}</div>
  </div>
);

const Task1 = ({ onCircleCountChange, circleCount }) => {
  const [circles, setCircles] = useState([{ counter: 0, color: 'yellow' }]);

  const handleIncrement = (index) => {
    setCircles((prevCircles) => {
      const newCircles = [...prevCircles];
      newCircles[index].counter += 1;
      newCircles[index].color = generateRandomColor();
      return newCircles;
    });
  };

  const handleDuplicateCircle = (index) => {
    if (circles.length >= 10) {
      return; // Limit the number of circles to a maximum of 10
    }

    const newCircle = {
      counter: circles[index].counter + 1, // Increment the counter by 1
      color: index === 0 ? 'yellow' : generateRandomColor(),
    };

    setCircles((prevCircles) => {
      const newCircles = [...prevCircles];
      newCircles.splice(index + 1, 0, newCircle);
      return newCircles;
    });
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const resetCounter = (index) => {
    setCircles((prevCircles) => {
      const newCircles = [...prevCircles];
      newCircles[index].counter = 0;
      return newCircles;
    });
  };

  const circlesInRows = Math.ceil(circles.length / 2);

  // Call onCircleCountChange whenever the circles are updated
  useEffect(() => {
    onCircleCountChange(circles.length);
  }, [circles, onCircleCountChange]);

  return (
    <div className="circles-container">
      <div className="row">
        {circles.slice(0, circlesInRows).map((circle, index) => (
          <div key={index} className="circle-wrapper">
            <Circle
              counter={circle.counter}
              color={circle.color}
              onIncrement={() => handleIncrement(index)}
            />
            <button onClick={() => resetCounter(index)}>Reset</button>
          </div>
        ))}
      </div>
      <div className="row">
        {circles.slice(circlesInRows).map((circle, index) => (
          <div key={index} className="circle-wrapper">
            <Circle
              counter={circle.counter}
              color={circle.color}
              onIncrement={() => handleIncrement(index + circlesInRows)}
            />
            <button onClick={() => resetCounter(index + circlesInRows)}>Reset</button>
          </div>
        ))}
      </div>
      <button onClick={() => handleDuplicateCircle(circles.length - 1)}>Duplicate</button>
    </div>
  );
};

export default Task1;
