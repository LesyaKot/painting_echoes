import express from 'express';
import cors from 'cors';

console.log('Server file loaded');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://painting-echoes.vercel.app',
      'https://www.painting-echoes.vercel.app',
    ],
  }),
);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
