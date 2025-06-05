import { MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export const AppointmentForm = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        {/* Form Section */}
        <div className="flex flex-col gap-6 max-w-md">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Book Your <br />
            <span className="text-primary">Appointment</span>
          </h2>
          <p className="text-muted-foreground text-base">
            With 15+ years of experience, our clinic offers top-notch,
            stress-free dental care. Book your appointment today for a healthier smile!
          </p>

          <form className="flex flex-col gap-4">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Email" required />
            <div className="flex gap-4 flex-col sm:flex-row">
              <Input type="tel" placeholder="Phone number" required />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-fit">
              Book Now
            </Button>
          </form>
        </div>

        {/* Image + Location Section */}
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <Image
            src="/clinic.jpg" // Replace with actual image path
            alt="Clinic Building"
            width={700}
            height={500}
            className="rounded-xl object-cover w-full h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm">
            <MapPin className="text-primary w-4 h-4" />
            <div>
              <p className="text-sm font-medium">Our Location</p>
              <p className="text-xs text-muted-foreground">
                1234 Main Street, Suite 101 <br /> Anytown, USA 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
