// pages/AllDoctors/page.tsx

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Doctor = {
  name: string;
  specialty: string;
  description: string;
  image: string;
};

const doctors: Doctor[] = [
  {
    name: "Dr. Emily Carter",
    specialty: "Cosmetic Dentist",
    description:
      "Dr. Carter specializes in enhancing smiles through advanced cosmetic procedures like veneers, teeth whitening, and smile makeovers.",
    image: "/image/doc1.avif",
  },
  {
    name: "Dr. Raj Malhotra",
    specialty: "Oral Surgeon",
    description:
      "Performs complex procedures like wisdom tooth removal and dental implants with precision and care.",
    image: "/image/doc3.webp",
  },
  {
    name: "Dr. Anrew Lopez",
    specialty: "Pediatric Dentist",
    description:
      "Focused on children’s dental health. Makes every visit a comfortable experience for kids.",
    image: "/image/doc8.avif",
  },
  {
    name: "Dr. James Bennett",
    specialty: "Orthodontist",
    description:
      "Expert in braces and Invisalign to help patients get a beautifully aligned smile.",
    image: "/image/doc4.avif",
  },
  {
    name: "Dr. Sophie Nguyen",
    specialty: "Endodontist",
    description:
      "Specialist in root canal treatments and saving teeth through advanced endodontic therapy.",
    image: "/image/doc5.avif",
  },
  {
    name: "Dr. Sophie Nguyen",
    specialty: "Endodontist",
    description:
      "Specialist in root canal treatments and saving teeth through advanced endodontic therapy.",
    image: "/image/doc6.avif",
  },
];

const AllDoctors = () => {
  return (
    <div className="w-full py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Meet Our Dental Experts
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Our team of specialized dentists brings years of expertise in providing top-quality dental care for all age groups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-all p-6 flex flex-col gap-4"
            >
              <div className="w-full h-52 relative rounded-md overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">{doc.name}</h3>
                <Badge variant="outline">{doc.specialty}</Badge>
                <p className="text-muted-foreground text-sm mt-2">
                  {doc.description}
                </p>
              </div>
              <Button variant="secondary" className="mt-auto w-fit">
                Book Appointment
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ This is the fix!
export default AllDoctors;
