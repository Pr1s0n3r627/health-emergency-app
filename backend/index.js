const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/health-emergency', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', apiRoutes);

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
