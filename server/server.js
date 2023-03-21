const express = require('express');
const mongoose = require('mongoose');
const itemsRouter = require('./routes/items');

const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/my-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Load routes
app.use('/api/items', itemsRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));