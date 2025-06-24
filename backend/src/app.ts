import express from 'express';
import cors from 'cors';
import productRouters from './routers/productRouters'
import 'dotenv/config'

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/api',productRouters)
app.get('/', (req, res) => {
  res.send('Hallo sekai');
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});