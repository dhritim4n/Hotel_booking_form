import { useEffect, useState } from "react";
import Toast from "./ui/Toast.jsx";
import { submit_form } from "../api/bookings.js";

export default function BookHotel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    check_in_date: "",
    check_out_date: "",
    room_type: "",
    guest_count: {
      adults: 1,
      children: 0,
    },
    special_request: "",
  });

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Required Fields Check
    if (!formData.name || !formData.email || !formData.phone || !formData.room_type) {
      setToast({
        show: true,
        message: "Please fill in all required contact and room details.",
        type: "error",
      });
      return;
    }

    // 2. Email Format Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setToast({
        show: true,
        message: "The email format is invalid. Please check and try again.",
        type: "error",
      });
      return;
    }

    // 3. Phone Length Check (Basic)
    if (formData.phone.length < 7) {
      setToast({
        show: true,
        message: "Please enter a valid phone number.",
        type: "error",
      });
      return;
    }

    // 4. Date Logic Validation
    const today = new Date().setHours(0, 0, 0, 0);
    const checkIn = new Date(formData.check_in_date).getTime();
    const checkOut = new Date(formData.check_out_date).getTime();

    if (!formData.check_in_date || !formData.check_out_date) {
      setToast({
        show: true,
        message: "Please select both check-in and check-out dates.",
        type: "error",
      });
      return;
    }

    if (checkIn < today) {
      setToast({
        show: true,
        message: "Check-in date cannot be in the past.",
        type: "error",
      });
      return;
    }

    if (checkOut <= checkIn) {
      setToast({
        show: true,
        message: "Check-out date must be at least one day after check-in.",
        type: "error",
      });
      return;
    }

    // 5. Guest Count Check
    if (formData.guest_count.adults < 1) {
      setToast({
        show: true,
        message: "At least one adult is required per room.",
        type: "error",
      });
      return;
    }

    const submit_response = await submit_form(formData);

    if (!submit_response) {
      setToast({
        show: true,
        message: "Something went wrong. Please try again later.",
        type: "error",
      })
    }

    if(submit_response.data.success) {
      setToast({
        show: true,
        message: "Form Submitted !",
        type: "success",
      });
      setFormData({...initialState}); 
    }

  };

  return (
    <div id='book-hotel' className="min-h-screen flex items-center justify-center p-6 bg-(--bg-light)">
      <Toast
        isVisible={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-lg overflow-hidden border-t-4 border-(--secondary-color)">
        <div className="bg-(--primary-color) p-8 text-white">
          <h2 className="text-3xl font-serif font-bold">Reserve Your Stay</h2>
          <p className="text-gray-400 mt-2">Experience luxury tailored to your needs.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Full Name *</label>
            <input
              type="text"
              name="name"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2 transition-colors"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={onChange}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Email Address *</label>
            <input
              type="email"
              name="email"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2 transition-colors"
              placeholder="john@example.com"
              value={formData.email}
              onChange={onChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2 transition-colors"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={onChange}
              required
            />
          </div>

          {/* Dates */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Check-in *</label>
            <input
              type="date"
              name="check_in_date"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2"
              value={formData.check_in_date}
              onChange={onChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Check-out *</label>
            <input
              type="date"
              name="check_out_date"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2"
              value={formData.check_out_date}
              onChange={onChange}
              required
            />
          </div>

          {/* Room Type */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Room Type *</label>
            <select
              name="room_type"
              className="bg-transparent border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2"
              value={formData.room_type}
              onChange={onChange}
              required
            >
              <option value="">Select a room...</option>
              <option value="deluxe">Deluxe Suite</option>
              <option value="executive">Executive King</option>
              <option value="penthouse">Presidential Penthouse</option>
            </select>
          </div>

          {/* Guest Count */}
          <div className="flex gap-4 md:col-span-2 bg-gray-50 p-4 rounded-md">
            <div className="flex-1">
              <label className="text-xs uppercase tracking-wider font-bold text-(--text-muted)">Adults</label>
              <input
                type="number"
                min="1"
                name="guest_count.adults"
                className="w-full bg-transparent border-b border-gray-300 py-1"
                value={formData.guest_count.adults}
                onChange={onChange}
              />
            </div>
            <div className="flex-1">
              <label className="text-xs uppercase tracking-wider font-bold text-(--text-muted)">Children</label>
              <input
                type="number"
                min="0"
                name="guest_count.children"
                className="w-full bg-transparent border-b border-gray-300 py-1"
                value={formData.guest_count.children}
                onChange={onChange}
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Special Requests</label>
            <textarea
              name="special_request"
              rows="2"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2 resize-none"
              placeholder="Dietary requirements, high floor, etc."
              value={formData.special_request}
              onChange={onChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 bg-(--accent-color) hover:bg-[#cf6d1d] text-white font-bold py-4 rounded-md transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
}