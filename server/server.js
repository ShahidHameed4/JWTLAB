import express from 'express'
import cors from 'cors' // important for recieving api calls

import * as dotenv from 'dotenv';
import userRouter from './Routes/User.js'
import ArticleRouter from './Routes/ArticleRoute.js'
dotenv.config();
import upload from 'express-fileupload'
app.use(upload());
import job from './Routes/JobRoutes.js'
import jobApp from './Routes/JobAppRoute.js'
import AppReview from './Routes/AppReviewRoute.js'
import connectDB from './database/db.js'
connectDB();
const app = express()
app.use(cors()) // important for recieving api calls
app.use(express.static('public'))
app.use(express.json())

app.use('/api/job', job)
app.use('/api/jobApp', jobApp)
app.use('/api/AppReview', AppReview)
app.use('/api/user', userRouter)
app.use('/api/article', ArticleRouter)






app.listen(3001)
