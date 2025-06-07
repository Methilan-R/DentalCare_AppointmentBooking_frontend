'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const reviews = [
    {
      text: "The team was professional, friendly, and made me feel at ease throughout the entire process. My smile has never looked better, and I truly appreciate the personalised attention I was given.",
      name: "Mark Jhonson",
      service: "Dental Filling",
      avatar: "/image/product_2.png",
      bg: "bg-blue-50",
    },
    {
      text: "The team was professional, friendly, and made me feel at ease throughout the entire process. My smile has never looked better, and I truly appreciate the personalised attention I was given.",
      name: "Mark Jhonson",
      service: "Dental Cleaning",
      avatar: "/image/p_img34.png",
      bg: "bg-yellow-50",
    },
    {
      text: "The team was professional, friendly, and made me feel at ease throughout the entire process. My smile has never looked better, and I truly appreciate the personalised attention I was given.",
      name: "Mark Jhonson",
      service: "Teeth Whitening",
      avatar: "/image/p_img44.png",
      bg: "bg-cyan-50",
    },
  ];

  return (
    <section className="w-full py-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
        >
          See What Our <br />
          <span className="text-primary">Clients have to Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-muted-foreground text-base md:text-lg mb-12"
        >
          With over 15 years of experience, our clinic is dedicated to providing
          top-notch dental care. Our team of professionals ensures every visit is
          comfortable and stress-free.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className={`rounded-xl ${review.bg} p-6 text-left shadow-sm`}
            >
              <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Service taken – {review.service}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
