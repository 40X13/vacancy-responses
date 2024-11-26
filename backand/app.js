import express from 'express';
import vacanciesRouter from './routers/vacancies-router.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import {vacanciesCollection} from './repositories/db.js';

export const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/vacancies', vacanciesRouter);

app.get('/api/vacancies/drop', (req, res) => {
    console.log('попал в дроп?');
    vacanciesCollection.drop();
});




