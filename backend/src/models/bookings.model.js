import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        phone:{
            type: String,
            required: true,
        },
        check_in_date:{
            type: String,
            required: true,
        },
        check_out_date:{
            type: String,
            required: true,
        },
        room_type:{
            type: String,
            required: true,
        },
        guest_count:{
            type: {
                adults: {
                    type: Number,
                    required: true,
                },
                children: {
                    type: Number,
                    required: true,
                }
            },
            required: true,
        },
        special_request:{
            type: String,
        },


    }, {timestamps: true}
)

export default mongoose.model("Bookings", bookingSchema);