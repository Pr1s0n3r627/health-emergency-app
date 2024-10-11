import React, { useState, useEffect } from 'react';
import axios from '../services/api';

const DailyCheckup = () => {
  const [readings, setReadings] = useState([]);
  const [bp, setBp] = useState('');
  const [sugar, setSugar] = useState('');

  useEffect(() => {
    axios.get('/readings')
      .then((response) => setReadings(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/readings', { bp, sugar })
      .then(() => alert('Reading Saved'))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Daily Check-Up</h2>
      <form onSubmit={handleSubmit}>
        <input value={bp} onChange={(e) => setBp(e.target.value)} placeholder="Blood Pressure" />
        <input value={sugar} onChange={(e) => setSugar(e.target.value)} placeholder="Blood Sugar" />
        <button type="submit">Submit</button>
      </form>

      <h3>Past Readings</h3>
      <ul>
        {readings.map((reading, index) => (
          <li key={index}>BP: {reading.bp}, Sugar: {reading.sugar}</li>
        ))}
      </ul>
    </div>
  );
};

export default DailyCheckup;
