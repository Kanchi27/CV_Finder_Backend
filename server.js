import express from 'express';
import bodyparser from 'body-parser';
import mysql from 'mysql2'
import cors from 'cors';
import dotenv from 'dotenv';
import './models/index.js';
import router from './routes/index.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//cors should be above Routes
app.use('/api/resume', router)



const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log("Yey, your server is running on port 8080");
});