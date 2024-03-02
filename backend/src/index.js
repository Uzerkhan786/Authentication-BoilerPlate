import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { mongoDBconnection } from './config/db.js';
import { router } from './routes/index.js';
const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router);
app.listen(3001, () => {
    mongoDBconnection();
    console.log('Server is connected on port 3001');
})