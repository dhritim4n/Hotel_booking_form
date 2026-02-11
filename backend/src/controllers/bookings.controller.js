import Bookings from "../models/bookings.model.js";



const submit_form = async (req, res) => {
    var { 
        check_in_date,
        check_out_date,
        room_type,
        guest_count,
        special_request
    } = req.body;

    try {
        await Bookings.create({
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


export {
    submit_form,
    get_bookings
}
