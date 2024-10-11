import React, { useState } from 'react';
import axios from '../services/api';

const Emergency = () => {
  const [tips, setTips] = useState('');

  const handleEmergency = () => {
    axios.post('/emergency', {})
      .then((response) => setTips(response.data.tips))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Emergency Assistance</h2>
      <button onClick={handleEmergency}>Get Emergency Tips</button>
      {tips && <p>{tips}</p>}
    </div>
  );
};

export default Emergency;
