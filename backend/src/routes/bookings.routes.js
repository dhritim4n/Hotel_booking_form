import { Router } from "express";
import {
    get_bookings,
    submit_form
} from "../controllers/bookings.controller.js";
import { validate } from "../middlewares/bookings.middlewares.js";


const bookings_router = Router();

bookings_router.get("/", get_bookings)
bookings_router.post("/submit_form", validate, submit_form)


export {
    bookings_router

};