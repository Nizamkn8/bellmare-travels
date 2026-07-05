"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "9847698881"; // Replace with your number
  const message = encodeURIComponent(
    "Hi! I'm interested in your travel packages."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
