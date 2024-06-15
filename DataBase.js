// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const cors = require('cors');

// // Set up MongoDB connection
// mongoose.connect('mongodb://localhost:27017/MusicPro', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define a User model
// const User = mongoose.model('User', {
//   username: String,
//   password: String,
// });

// // Configure middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Create API endpoints for registration and login
// app.post('/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = new User({ username, password });
//     await user.save();
//     res.json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username, password });
//     if (user) {
//       res.json({ message: 'Login successful' });
//     } else {
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
