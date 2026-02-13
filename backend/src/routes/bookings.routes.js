import { Router } from "express";
import {
    get_bookings,
    add_booking
} from "../controllers/bookings.controller.js";
import { validate } from "../middlewares/bookings.middlewares.js";


const bookings_router = Router();

bookings_router.get("/", get_bookings)
bookings_router.post("/add_booking", validate, add_booking)


export {
    bookings_router

};