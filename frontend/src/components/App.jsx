import React from 'react';
import DailyCheckup from './DailyCheckup';
import Emergency from './Emergency';

const App = () => {
  return (
    <div>
      <h1>Health Emergency App</h1>
      <DailyCheckup />
      <Emergency />
    </div>
  );
};

export default App;
