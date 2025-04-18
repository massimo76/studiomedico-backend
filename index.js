const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy user
const fakeUser = {
  email: 'test@example.com',
  password: '123456'
};

// Routes
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === fakeUser.email && password === fakeUser.password) {
    return res.status(200).json({
      message: 'Login riuscito!',
      token: 'fake-jwt-token'
    });
  } else {
    return res.status(401).json({
      message: 'Credenziali non valide.'
    });
  }
});

// Default route (per evitare "Cannot GET /")
app.get('/', (req, res) => {
  res.send('StudioMedico Backend API è attiva!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend StudioMedico in ascolto sulla porta ${PORT}`);
});