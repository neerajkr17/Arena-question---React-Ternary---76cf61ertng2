import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  const [day, setDay] = useState('');
  const date = new Date();

  useEffect(() => {
    setDay(date.toLocaleString(window.navigator.language, { weekday: 'long' }));
  }, [date]);

  const setTheMessage = (day) => {
    switch (day) {
      case 'Monday':
        return 'Hey Mango Monday';
      case 'Tuesday':
        return 'Hey Tomato Tuesday';
      case 'Wednesday':
        return 'Hey Windy Wednesday';
      case 'Thursday':
        return 'Hey Thunder Thursday';
      case 'Friday':
        return 'Hey Fun Friday';
      case 'Saturday':
        return 'Hey Smooth Saturday';
      case 'Sunday':
        return 'Hey Sugar Sunday';
      default:
        return 'unknown day';
    }
  };

  const msg = setTheMessage(day);

  return (
    <div id="main">
      <h1>{msg}</h1>
    </div>
  );
};

export default App;

