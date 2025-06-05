import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="w-full py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-bold tracking-tight">
            Get in Touch With Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Have questions or need to book a dental appointment? Fill out the form or contact us directly and we’ll get back to you shortly.
          </p>

          <div className="flex flex-col gap-4 text-base">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <span>contact@dentalhealth.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span>1234 Main Street, Suite 101, Anytown, USA 12345</span>
            </div>
          </div>

          {/* Optional map placeholder */}
          <div className="mt-8 w-full h-64 rounded-lg overflow-hidden shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=dental%20clinic&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              title="Dental Clinic Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-muted p-8 rounded-lg shadow-lg flex flex-col gap-6">
          <div>
            <label className="block mb-1 font-medium text-sm">Your Name</label>
            <Input type="text" placeholder="Full Name" required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Email</label>
            <Input type="email" placeholder="your@email.com" required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Phone Number</label>
            <Input type="tel" placeholder="+1 234 567 890" required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Your Message</label>
            <Textarea placeholder="Tell us how we can help..." rows={5} required />
          </div>
          <Button type="submit" className="w-full mt-4">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
