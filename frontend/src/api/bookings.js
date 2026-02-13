import API from "/src/api/api.js";

const submit_form = async (form_data) => {
    try {
        const response = await API.post(
            '/bookings/add_booking',
            form_data
        );
        return response;
    } catch (err) {

        console.error("Backend Validation Error:", err.response?.data);

        return err.response;
    }
};

export { submit_form };