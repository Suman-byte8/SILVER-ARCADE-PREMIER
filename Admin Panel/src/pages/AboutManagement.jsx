import React from "react";
import AboutUsSection from "../components/AboutManagement/AboutUsSection";
import ContentBlock from "../components/AboutManagement/ContentBlocks";
// Importing AmenityCard and ServiceCard components
import AmenityCard from "../components/AboutManagement/AmenityCard";
import ServiceCard from "../components/AboutManagement/ServiceCard";








const contentBlocksData = [
  {
    title: "Perfect Stay in the Heart of Malda",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7EP488H3OTGjK31iF44sev2ZpXC4_Rbp2NkrJ3wXw7qenEM51HxJT11ifDWwvIM5HYvB5wg1Id80X1BcV_QwbRTbuwk6gVy7gPddP8XQj2R103b5d3fTpq5otb04MPxasxQ579A8ACLB-xHkRpLbjF7sv794VKH0klXeQB3MVhOydC6KTYfXnYeS-E1odGsd3WSQjpNVVPbhOyV9BcydHi-LP-rDEsXVnf-TZV8lJBU3SIAuqibC71U4tAwabEZdtEw9jQ7EaFVg",
    alt: "A photo of the hotel lobby with a 'Silver Arcade Premier' sign.",
    description:
      "Conveniently located in the heart of the city, our hotel provides easy access to major business hubs and popular tourist attractions. Silver Arcade Premier provides easy access to major business hubs and popular tourist attractions, ensuring a convenient and enjoyable stay for all our guests. Whether you're here for business or relaxation, our prime location ensures convenience at every turn.",
    descriptionLabel: "Description",
    rows: 3,
  },
  {
    title: "Elegant Rooms & Premium Features",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5xops8Ps_rcYnul8EgHAB-I9DTpre8HQtAiNs2o9vmc-uH0nAKOus5U-NvVrxvBVc8w6tFtvttimMmFr6G8yj22cIpiHx35czn784a34CDL_fieVzmtV8l5-pqta1oOorj_Dgcv9AulEnh8AG-xz_TuSg2pNfVXjHJU4nQhNHfMhF_IFXoE1EE2t_Nk9U6OqZ4ZJPSQqwyJp-ps-XefnpD4_Ywhn18ecPvUgozQXa5Mkab6Tsr36Y5aneQQnpUlFZGEfg2487rbE",
    alt: "A hotel room with a neatly made bed and a bedside table with a lamp.",
    description: `Each of our rooms features:
Plush king-size beds
Contemporary decor
High-speed Wi-Fi and smart entertainment options`,
    descriptionLabel: "Features (one per line)",
    rows: 4,
  },
  {
    title: "Dining & Leisure",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOqTcFDAobhPtjlMAIWyF7ay2I8s6tiG_XJV_u5wY-GkRDGwnfJEGIDSLu7go7Zlt30G6WgtOpllMXdkgnYJJSN7nxPcP2glvUEbuCEfTJPtWeLrAYvbrQ_5-Xeq8ulY28KaG-UPBWia24LAywtJDr-1JSvlXKZxJxnjbgUJtkSPqGGP0MLxO4IIJegPLbnhpXdBGgJh15n58w9UPSJ4depPj-8TW2qQq61DO5JOHAXKWuPNAUp6xVXp-pnn6bRPE78G4NVrfvTK4",
    alt: "A dining table set for two with wine glasses.",
    description:
      "Indulge in the flavors of our multi-cuisine restaurant and unwind at our stylish bar. From local delicacies to international favorites, our culinary offerings cater to every palate.",
    descriptionLabel: "Description",
    rows: 3,
  },
  {
    title: "Our Hospitality Promise",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1RTy0UrPLvL3EviOJBX20duRmvJBqOOi4xIyma63gM3-4uGcexzefUuID5KGN95unYQLY9mgcfNdZ7rv__RB53FW8EYeK7yozXiygd4nT3Q6iMcgvFDvmGcuCfbdnrymM_P8cySzvAdZ4MyYIlb1IJadXBt5qQ0SfkithhVRuFlE3t0mMDUQiTJJrJjOJqfZr_aeLeGvamYFttzlGEhFVLPP0AEssk0B_DKJI_ehwfygcdzg6-8514dN05WPhORZ7f-k6OSzJR1E",
    alt: "A receptionist smiling at the front desk.",
    description:
      "At Silver Arcade Premier, we believe in more than just providing a room; we create experiences. Our team is dedicated to understanding our guest's individuality and delivering personalized service with a warm, welcoming smile. Our commitment to excellence ensures you receive the finest experience from check-in to check-out.",
    descriptionLabel: "Description",
    rows: 3,
  },
  {
    title: "Why Choose Silver Arcade Premier?",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_thoWoyC19jWzyczT_ML3FviawpwsL6QbyfUTRfBDMfL25vxKTL9Y4YhXwHXLXEiEBu5bvrJodFl1OIcb6fQwkyqw9QAnyOZ3mTh8OACHvXtqydcGoRRDX52wkddjN6k-bOkIqwUTBINzNN2DQruxggdXPxAwpn3zRZm-gOvSyrpVAYWzdzgzTk7XUrGnkwBj1YwhpeTP6A9Dt4L5m_px94ghG7XJTUU-p6H0veW58L-dbEadJYJIzpuDlxmCfVy0V2bBnPGjsPY",
    alt: "A well-lit hotel lobby with comfortable seating and plants.",
    description: `Prime location with easy access to business hub
Restaurant and bar for fine dining and relaxation
Exceptional service with a personal touch`,
    descriptionLabel: "Reasons (one per line)",
    rows: 4,
  },
];

const amenitiesData = [
  {
    title: "Rooftop Lounge",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuIN27aOj7_aVFqlbogfhwdiiz315IPRfNFGZyaFNSaGtMzTnDqhJpW83UnsQlFQ9ntPenuQZnbovuZDE2tbysAstj91zSwWiaMl7elWNW51wMYjP3Z5EmGu3xliHKjj_ZLdflEq_mM7l-qX4fuKYBVRFHjNStc1OHZprqsCYTtPaY6642vc9NFE0m5mW_PbkCa_P7EnZydv3188AJ4y0d0sc1l1IhBxnBQBAlVoWkrefbQdwYLti8VNblc28QweHmRU26JPrjAGw",
    alt: "Rooftop lounge with tables and city view.",
    description:
      "Enjoy stunning city views from our rooftop lounge, where you can unwind in a relaxed and serene atmosphere.",
  },
  {
    title: "Bar",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCnZnbETno4S6yThYC8mLcosFB_tyzS0ddtxCQgdNW5LSEU2qgvE0YfIrDJ5gH9h35OxzeDvy1Nzuo3wFiKG6OhKvlBbjdgtG_vP7g-eJX6WL97e3lz63x06MSom5hv9BQPs5CqHKY5PlPtjdBCB8veEnfoZ_7TkbFWSy_tdXxCrjQ8QcZySk_mAD-6UHOr7lIWr7V8OxcT9FOwX-DHskOmk4ZDc9Hu3mEwP5zdU_i8LDo80TLyVvrzmVxNWGXK7PNjr-kxSXrL7o",
    alt: "A stylish bar with stools and a stocked shelf.",
    description:
      "Enjoy a wide selection of handcrafted cocktails and spirits at our stylish and inviting bar.",
  },
  {
    title: "Fine Dine",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlpUiR3T6_GiZ4O37dn3BD14utmgp7_dYLbUdlLWA8bwd7OBKecHgSZD5KpcPEBftWGaJlqMQ0IeMAj7X4gR0WsCHYG2iMIAQg1kURrQDWBw9U2ZCJe3C3oUilW1CO1PFkvLpeezE4N1x4EgEar-jGEeQwHOtpShNvNLjm39xNJiDqEVNyupP876L65P00VtErZt_1jKCfoTJyKCgEJTeU7oXuLiu6QZzUHnCW815RqdSJLzpTkNyBTDvY8RCNqmZdrDPPPFxuuQY",
    alt: "An elegantly set dining table.",
    description:
      "Experience exquisite culinary delights at our fine-dining restaurant, crafted by top chefs.",
  },
];

const servicesData = [
  {
    title: "24/7 Concierge",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ0Me87eUfFjqHe1nxFotGzya4drjJDRwGi7kH72jOoTTmydVZrPxGmq-7Y_g0TfsbY9DkVgXTN35pUwfd6sQbxV-K4_9r4uzdYenPMWEEfrLZMNKf9R6uFSIe_dToyuTILBUozPaVKpd7D4lBwgbhSN9aHOs_3jP4pfHeSs21U9RKc0QOrtnEbpdf1fNdNblL7pRSxOBE5cvIPFMqMPKrwsUW7H4iKSDK2m1G3Brtn9A-0rxuUtWQR3EzVIwRU-NICHadJXCEAiw",
    alt: "A concierge helping a guest at the reception desk.",
    description:
      "Our professional concierge team is available around the clock to assist with reservations, transportation, and special requests.",
  },
  {
    title: "Luxury Spa",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdFaTwO08sogYxKBXoOE_pT0bN2UuJZJqzGJgRjXxVnluhOeCVHD1mmarm2QUKiREFK58DiYx97QMyD3hK9H2YCSAYGCD-x0Wn7SOjgQLUeqjZT32-dh93C4lA7S0pyx3dVjiJWil3Cr7Cx8so8-WQXEKMClLSxdPeJnZr_c-cKpPrhelaJ4cy6otPOdhB_PlpqO5ZL1Q-yMnK-frczbjX2gT1XJcgxGiX-D_y7uYXurjns986zOFbd42AeZ-_Sm3_hgCxg1pUvoY",
    alt: "A serene spa room with massage beds and candles.",
    description:
      "Rejuvenate your senses with our wide range of spa treatments, designed to help you relax and unwind in a tranquil environment.",
  },
  {
    title: "Daily Housekeeping",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3t3_tCKPERCRusJcfqTzpLLWrPWo2j4wRGIF9t3ZHMBy3arwtA373uzCRyzw92D48PX4DOyibU0XHIzPr92CV6I71O7VJ5dU1m0yRCJjHvtDOGdgFVxICqKcc3Wk1iZcN1oF01p2SNJf7hb_XVJar4TzKsez81UACeMs4IrVGV5kwZp4v5oVfyJK059DBC5h6cn1c6_usQbKxpC66UkBBLiDKxFlHIaAXe8wljBTOGhxpPaN51UU0jlQ7-fTY0CrmECFz2ou_eRU",
    alt: "Housekeeping staff cleaning a room.",
    description:
      "Enjoy spotless rooms and fresh linens every day with our meticulous housekeeping service.",
  },
  {
    title: "Event Planning",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJlJrX0E33H5ipVo9HCsv4db3kILS-ZSDmviDmSR4mNMnRVrfBIWXonELkkaUAZaHvGmkbrdirJxTywQxZJy_fGhVofmIYb74vnXTCqi6iTGXOuXtfagjD9XucHpgRy8ZvSaPXVJxeTy4YDxbpBgkBW_6k2oy4M8eiXU3BhYtW2BQeQjQg_Utp4HKaGVgi9lA-KM3FHmG_LN6WYn1bPJuBTD4gqsnzbcUoGY-ko9Bk9ya6ZjsDtbtvDGzEcWkmKGkWgXRB8d3rF1E",
    alt: "A well-decorated event space with round tables and chairs.",
    description:
      "Host memorable events with our expert planning team, from catering, decor, and logistics.",
  },
  {
    title: "Private Dining",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYZ3_5z08XXNZxm6-vdIIUO4lJzQKEmqKU5hDvNZxxIMcXEgqWsgQQlq_8NvO_jLjCEUImPa6Uz2nowSxnsBzvRkWgUMbv68M688CMNbLtEDhrahNPh1foH7bSo-breccxAt6SaF1j1tGFE5rDCtAFUIh_vYUmX2eZkWLZXjT2cSA_sM9tTdzNXj-i9ydDExE-b9-Tiql-wFpnNlmoGfYAP_yO4BMGA5FSiI1-Fz6SX-wPO-gQS_yE6YVVJPqH8h9QLStqHCU6rM8",
    alt: "A private dining room with a long table.",
    description:
      "Experience personalized dining in our exclusive private settings.",
  },
];

const AboutManagement = () => {
  return (
    <div className="max-w-[1200px] mx-auto min-h-screen ">
      <div className="container mx-auto p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Panel - Website Content
          </h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Publish Changes
          </button>
        </header>
        <main>
          <AboutUsSection />

          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Content Blocks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentBlocksData.map((block, index) => (
                <ContentBlock key={index} {...block} />
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Our Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {amenitiesData.map((amenity, index) => (
                <AmenityCard key={index} {...amenity} />
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Our Exceptional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutManagement;
