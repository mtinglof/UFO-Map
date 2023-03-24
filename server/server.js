const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Item = require('./item')
const app = express();
require('./db');

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});