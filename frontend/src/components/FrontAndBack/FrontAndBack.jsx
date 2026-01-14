import { useEffect, useState } from 'react';

export default function FrontAndBack() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:3001/api/health')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage('Error: ' + err.message));
  }, []);

  return (
    <div>
      <h1>Frontend talking to Backend</h1>
      <p>{message}</p>
    </div>
  );
}
