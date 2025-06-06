"use client"
import { useState, FC } from "react";
import Image from "next/image";

// Sample service data
interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Dental Filling",
    description:
      "Dental fillings are used to restore teeth damaged by decay. Our fillings blend naturally with your teeth and ensure long-lasting protection."
  },
  {
    title: "Oral Surgery",
    description:
      "We provide safe and efficient oral surgery procedures, including tooth extractions, to treat complex dental conditions with care."
  },
  {
    title: "Dental Implants",
    description:
      "Dental implants are a permanent solution for missing teeth. They look, feel, and function like natural teeth, improving both health and confidence."
  },
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile with our professional teeth whitening treatments. Safe, effective, and noticeably brighter after just one visit."
  }
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
  onClick
}) => (
  <div className="border-b">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 text-left"
    >
      <span className="text-lg font-medium">{title}</span>
      <span className="text-xl">{isOpen ? "−" : "+"}</span>
    </button>
    {isOpen && (
      <p className="pb-4 text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

const DentalAccordionSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full px-6 py-6 lg:py-4">
      <div className="container mx-auto bg-amber-50">
        <div className="grid border-none shadow-md rounded-lg container grid-cols-1 gap-8 items-center lg:grid-cols-2">
          {/* Text Section */}
          <div className="flex flex-col gap-6 px-4">
            <div className="flex flex-col gap-4">
              {/* Replace with your actual Badge component */}
              <div className="inline-block border px-2 py-1 text-sm rounded-md text-primary border-primary w-fit">
                Services
              </div>
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
          </div>

          {/* Image Placeholder */}
         <div className="relative rounded-md aspect-square overflow-hidden">
      <Image
        src="/image/dent.jpeg"
        alt="Your image description"
        fill
        className="object-cover"
      />
    </div>
        </div>
      </div>
    </div>
  );
};

export default DentalAccordionSection;
