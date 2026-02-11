import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { bookings_router } from './routes/bookings.routes.js';


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/bookings", bookings_router)

export default app;