const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/api/health', (req, res) => res.status(200).json({ ok: true }));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Mongo Connected'))
  .catch(err => console.error('Mongo Error', err));

app.listen(process.env.PORT || 5000, () => console.log('API Running'));