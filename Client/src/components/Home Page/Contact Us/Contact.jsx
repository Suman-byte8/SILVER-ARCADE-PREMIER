import React from "react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-center text-4xl font-thin mb-8">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Form */}
        <form className="flex-1 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        {/* Map */}
        <div className="flex-1">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=25.004537314864635,88.13319698281303&hl=en&z=14&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
