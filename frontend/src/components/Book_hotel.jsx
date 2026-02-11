import { useEffect, useState } from "react";

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
    special_requests: "",
  });
  
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

  useEffect(
    () => console.log(formData),
    [formData] 
  )

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-lg overflow-hidden border-t-4 border-(--secondary-color)">
        <div className="bg-(--primary-color) p-8 text-white">
          <h2 className="text-3xl font-serif font-bold">Reserve Your Stay</h2>
          <p className="text-gray-400 mt-2">Experience luxury tailored to your needs.</p>
        </div>

        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Full Name</label>
            <input
              type="text"
              name="name"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2 transition-colors"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={onChange}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Email Address</label>
            <input
              type="email"
              name="email"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2 transition-colors"
              placeholder="john@example.com"
              value={formData.email}
              onChange={onChange}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2 transition-colors"
              placeholder="+1 234 567 890"
              value={formData.phone}
              onChange={onChange}
            />
          </div>

          {/* Dates */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Check-in</label>
            <input
              type="date"
              name="check_in_date"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2"
              value={formData.check_in_date}
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Check-out</label>
            <input
              type="date"
              name="check_out_date"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2"
              value={formData.check_out_date}
              onChange={onChange}
            />
          </div>

          {/* Room Type */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold mb-1 text-(--primary-color)">Room Type</label>
            <select
              name="room_type"
              className="bg-transparent border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2"
              value={formData.room_type}
              onChange={onChange}
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
              name="special_requests"
              rows="2"
              className="border-b-2 border-gray-200 focus:border-(--secondary-color) outline-none py-2 resize-none"
              placeholder="Anything else we should know?"
              value={formData.special_requests}
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