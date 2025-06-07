'use client';

import { useState, FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample service data
interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Dental Filling",
    description:
      "Dental fillings are used to restore teeth damaged by decay. Our fillings blend naturally with your teeth and ensure long-lasting protection.",
  },
  {
    title: "Oral Surgery",
    description:
      "We provide safe and efficient oral surgery procedures, including tooth extractions, to treat complex dental conditions with care.",
  },
  {
    title: "Dental Implants",
    description:
      "Dental implants are a permanent solution for missing teeth. They look, feel, and function like natural teeth, improving both health and confidence.",
  },
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile with our professional teeth whitening treatments. Safe, effective, and noticeably brighter after just one visit.",
  },
];

interface AccordionItemProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  description,
  isOpen,
  onClick,
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="border-b"
  >
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 text-left"
    >
      <span className="text-lg font-medium">{title}</span>
      <span
        className={`text-xl bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-md transition-transform duration-300 hover:bg-gray-100 ${
          isOpen ? "rotate-45" : ""
        }`}
      >
        {isOpen ? "−" : "+"}
      </span>
    </button>

    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <p className="pb-4 pr-4 text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  </motion.div>
);

const DentalAccordionSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full px-6 py-6 lg:py-12 overflow-hidden">
      <motion.div
        className="container shadow-xl rounded-2xl mx-auto bg-blue-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid container grid-cols-1 gap-8 items-center lg:grid-cols-2">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 px-4"
          >
            <div className="flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block border px-2 py-1 text-sm rounded-md text-primary border-primary w-fit"
              >
                Services
              </motion.div>
              <h2 className="text-3xl lg:text-5xl tracking-tighter font-regular max-w-xl text-left">
                Comprehensive Dental Care
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Explore our range of professional dental treatments tailored for your needs.
              </p>
            </div>

            {/* Accordion Items */}
            <div className="mt-4">
              {services.map((service, index) => (
                <AccordionItem
                  key={index}
                  title={service.title}
                  description={service.description}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-md aspect-square overflow-hidden"
          >
            <Image
              src="/image/dent.jpeg"
              alt="Your image description"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DentalAccordionSection;
