'use client';

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Animation variants
const fadeLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
};

 

const cardVariant = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export const Blog1 = () => (
  <section className="w-full px-6 py-20 lg:py-20 bg-background overflow-hidden">
    <div className="container mx-auto flex flex-col gap-14">
      {/* Header Section */}
      <motion.div
        className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeLeft}
      >
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Oral Health Insights
        </h2>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="gap-2 px-6 py-2 text-base">
            View all articles <MoveRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-xl border bg-card overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            variants={cardVariant}
            whileHover={{ scale: 1.02 }}
          >
            <video
              src={post.video}
              className="aspect-video w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight text-primary">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {post.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Blog post data
const blogPosts = [
  {
    title: "5 Signs You Need a Dental Checkup",
    description:
      "Ignoring dental symptoms can lead to complications. Here’s what to watch out for and when to visit your dentist.",
    video: "/image/hero2.mp4",
  },
  {
    title: "What to Expect with Dental Implants",
    description:
      "A step-by-step guide to understanding the dental implant process and how it restores your smile.",
    video: "/image/hero3.mp4",
  },
  {
    title: "Benefits of Teeth Whitening",
    description:
      "Learn how professional teeth whitening can boost your confidence and improve oral aesthetics.",
    video: "/image/hero4.mp4",
  },
  {
    title: "Is Oral Surgery Right for You?",
    description:
      "Oral surgery can sound intimidating. We break down the most common procedures and what they involve.",
    video: "/image/hero5.mp4",
  },
];
