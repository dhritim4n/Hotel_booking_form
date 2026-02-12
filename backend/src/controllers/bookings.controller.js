import Bookings from "../models/bookings.model.js";



const add_booking = async (req, res) => {
    var {
        name,
        email,
        phone,
        check_in_date,
        check_out_date,
        room_type,
        guest_count,
        special_request
    } = req.body;

    try {
        await Bookings.create({
            name,
            email,
            phone,
            check_in_date,
            check_out_date,
            room_type,
            guest_count,
            special_request
        })
        return res.status(200).json({
            success: true,
            message: "Booking submitted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

const get_bookings = async (req, res) => {
    try {
        const bookings = await Bookings.find();
        return res.status(200).json({
            success: true,
            bookings
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

const remove_booking = async (req, res) => {
    const { id } = req.params;
    try {
        await Bookings.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Booking removed successfully"
        })

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: "Something went wrong"
        }
        )
    }
}


export {
    get_bookings,
    add_booking
}
