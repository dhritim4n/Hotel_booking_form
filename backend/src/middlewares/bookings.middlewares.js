import { body, validationResult } from "express-validator";

/*
        check_in_date,
        check_out_date,
        room_type,
        guest_count,
        special_request
*/
// check validation for this 

const isValid = [
    body("check_in_date").notEmpty().withMessage("Check in date is required"),
    body("check_out_date").notEmpty().withMessage("Check out date is required"),
    body("room_type").notEmpty().withMessage("Room type is required"),
    body("guest_count").notEmpty().withMessage("Guest count is required")
]



const validate = [
    ...isValid,
    (req, res, next) => {
   const errors = validationResult(req)

   if(!errors.isEmpty()){
    return res.status(400).json({
        success: false,
        errors: errors.array().map(err => err.msg)
    })
   }
   next()

    }
]

export{
    validate
}