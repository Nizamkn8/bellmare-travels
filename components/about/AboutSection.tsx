"use client";

import { motion } from "framer-motion";
import {
  Bus,
  ShieldCheck,
  Clock3,
  Users,
  MapPinned,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    description:
      "Passenger safety is our highest priority. Our vehicles are regularly maintained and driven by experienced professionals.",
  },
  {
    icon: Clock3,
    title: "Always On Time",
    description:
      "We value your time by providing punctual pickups and dependable transportation services.",
  },
  {
    icon: Bus,
    title: "Comfortable Fleet",
    description:
      "Travel in clean, spacious, and well-maintained buses equipped for a smooth journey.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "We strive to deliver friendly service and memorable travel experiences for every customer.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            About Bellmare Travels
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Your Trusted Partner for Comfortable & Memorable Journeys
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bellmare Travels is dedicated to providing safe, comfortable, and
            affordable travel experiences. Whether you're planning a family
            vacation, corporate outing, pilgrimage, school excursion, or group
            tour, we ensure every journey is enjoyable from start to finish.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/bus/bus1.png"
              alt="Bellmare Travels"
              className="h-[550px] w-full rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Making Every Journey Special
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              Our goal is to provide exceptional transportation services with
              comfort, safety, and professionalism at the heart of everything
              we do. From short city trips to long-distance tours, we take pride
              in offering reliable travel solutions tailored to your needs.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We believe travel is about more than reaching a destination—it's
              about creating memorable experiences. That's why our team works
              tirelessly to ensure every customer enjoys a hassle-free journey.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPinned className="mt-1 h-7 w-7 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Wide Travel Coverage
                  </h4>
                  <p className="text-gray-600">
                    Serving local, interstate, and customized travel routes for
                    individuals and groups.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HeartHandshake className="mt-1 h-7 w-7 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Personalized Service
                  </h4>
                  <p className="text-gray-600">
                    We understand every journey is unique, and we tailor our
                    services to match your travel needs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-3xl border bg-white border-gray-100 p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
