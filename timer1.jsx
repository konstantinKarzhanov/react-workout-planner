import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

// CSS variables
const buttonColor = '#4CAF50';
const buttonHoverColor = '#45a049';

// Workout Timer component
const WorkoutTimer = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    updateTimer();
  }, [elapsedTime]);

  // Format time in HH:MM:SS
  const formatTime = (milliseconds) => {
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    let hours = Math.floor(milliseconds / 1000 / 60 / 60);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Update the timer display
  const updateTimer = () => {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(elapsedTime);
  };

  // Start the timer
  const startTimer = () => {
    if (startTime === null) {
      setStartTime(Date.now() - elapsedTime);
      setTimerInterval(
        setInterval(() => {
          setElapsedTime(Date.now() - startTime);
        }, 10)
      );
    }
  };

  // Stop the timer
  const stopTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(timerInterval);
    setStartTime(null);
    setElapsedTime(0);
  };

  return (
    <div className="container">
      <h1>Workout Timer</h1>
      <h2 id="timer">00:00:00</h2>
      <button
        id="startButton"
        className="button"
        style={{ backgroundColor: buttonColor }}
        onClick={startTimer}
      >
        Start
      </button>
      <button
        id="stopButton"
        className="button"
        onClick={stopTimer}
      >
        Stop
      </button>
      <button
        id="resetButton"
        className="button"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
};

ReactDOM.render(<WorkoutTimer />, document.getElementById('root'));
