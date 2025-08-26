import React from "react";

const AboutUsSection = () => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4 text-gray-700">
      About Us Section
    </h2>
    <div className="space-y-4">
      <div>
        <label
          className="block text-sm font-medium text-gray-600"
          htmlFor="about-title"
        >
          Title
        </label>
        <input
          className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-0"
          id="about-title"
          type="text"
          defaultValue="About Us"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-600"
          htmlFor="about-image"
        >
          Header Image
        </label>
        <div className="mt-1 flex items-center">
          <img
            alt="A collage of hotel amenities like a reception, a bed and a lobby."
            className="w-40 h-20 object-cover rounded-md mr-4"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQGmq_kgWB0Mk97DTqIQvoIzHg0k0JKFwWPUUK7KzsNAZhxq5S2-oRkab7ZRUK1yQAarOfSzPJ2nkDZWe1gGNREDV_umx9jsEegxNZVDXGR4xUCgXRo9mWTRCrvp_Vn-db2lR83ZDBnV4x_uvEngW6F4z_dvsTqnDjP0Bm4Sl2so_k9k3bGC2oIuoMW3gXCHR02gscyS_dX-Ofb02cMhDiB2dF4eLX9m095PPNThaVPjMvH4prA1687mjl4f--CUZYkvvTAlLwhU0"
          />
          <input
            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            id="about-image"
            type="file"
          />
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-600"
          htmlFor="about-description"
        >
          Description
        </label>
        <textarea
          className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-0"
          id="about-description"
          rows="4"
          defaultValue="Silver Arcade Premier is a luxury boutique hotel in Malda, offering a one-of-a-kind experience that combines elegance, comfort, and modern amenities. Known as the business-class hotel of the Mango City of Bengal, we take pride in offering our guests a truly memorable stay. Our prime location ensures that guests can easily explore the city's attractions while enjoying a tranquil and relaxing environment."
        ></textarea>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
