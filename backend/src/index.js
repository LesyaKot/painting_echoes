import express from 'express';
import cors from 'cors';

console.log('Server file loaded');

const app = express();
app.use(cors());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend alive 🚀' });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
