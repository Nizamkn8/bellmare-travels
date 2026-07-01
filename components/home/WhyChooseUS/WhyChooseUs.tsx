"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Bus,
  Users,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Well-maintained buses with experienced drivers for a secure journey.",
  },
  {
    icon: Clock3,
    title: "Always On Time",
    description:
      "Reliable transportation with punctual pickups and drop-offs.",
  },
  {
    icon: Bus,
    title: "Luxury Fleet",
    description:
      "Modern AC coaches with premium seating and onboard comfort.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Friendly staff dedicated to providing a smooth travel experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 transition-colors duration-300"
      style={{ background: "var(--background)" }}
    >
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            centered
            subtitle="WHY CHOOSE US"
            title="Travel With Confidence"
          />
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-2xl border p-8 shadow-sm"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.15,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                  }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl"
                  style={{
                    background:
                      "color-mix(in srgb, var(--primary) 12%, transparent)",
                  }}
                >
                  <Icon
                    size={32}
                    style={{ color: "var(--primary)" }}
                  />
                </motion.div>

                {/* Title */}
                <h3
                  className="mb-4 text-xl font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-7"
                  style={{ color: "var(--muted)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
