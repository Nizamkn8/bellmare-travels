"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Plane,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Map,
  Landmark,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Bus,
    title: "Tourist Bus Rental",
    description:
      "Comfortable and spacious buses for sightseeing, family vacations, and group tours with modern amenities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Travel",
    description:
      "Professional transportation solutions for meetings, conferences, employee travel, and corporate events.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Reliable airport pickup and drop-off services with punctual arrivals and departures.",
  },
  {
    icon: Landmark,
    title: "Pilgrimage Tours",
    description:
      "Convenient travel arrangements to popular pilgrimage destinations with experienced drivers.",
  },
  {
    icon: GraduationCap,
    title: "School & College Trips",
    description:
      "Safe and dependable transportation for educational tours, excursions, and campus events.",
  },
  {
    icon: Heart,
    title: "Wedding Transportation",
    description:
      "Elegant transportation solutions for weddings, receptions, and family celebrations.",
  },
  {
    icon: Users,
    title: "Family Tours",
    description:
      "Create unforgettable memories with customized family travel packages and comfortable journeys.",
  },
  {
    icon: Map,
    title: "Custom Tour Packages",
    description:
      "Personalized travel itineraries designed around your schedule, budget, and destinations.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Travel Solutions for Every Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bellmare Travels offers reliable, comfortable, and affordable
            transportation services for individuals, families, businesses,
            schools, and organizations. Wherever you're headed, we'll help make
            your journey smooth and memorable.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">
                  Enquire Now
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 to-sky-500 p-10 text-white md:p-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold md:text-4xl">
              Ready for Your Next Journey?
            </h3>

            <p className="mt-6 text-lg text-blue-100">
              Whether you're planning a family vacation, corporate event,
              pilgrimage, airport transfer, or a customized tour, Bellmare
              Travels is here to make every trip safe, comfortable, and
              memorable.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
                Book Now
              </button>

              <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-600">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
