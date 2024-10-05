import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Node Express!');
});

app.get('/app', (req, res) => {
  res.send("Hello from App")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});