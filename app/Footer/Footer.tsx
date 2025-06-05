import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold flex items-center gap-2">
            <span className="text-primary text-2xl">🦷</span>
            dental<span className="text-primary">health</span>
          </div>
          <p className="text-muted-foreground text-sm">
            With 15+ years of experience, our clinic offers top-notch, stress-free dental care. Book your appointment today for a healthier smile!
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Useful Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Our Services</Link></li>
            <li><Link href="#">Appointment</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Our Services</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="#">Cosmetic Dentistry</Link></li>
            <li><Link href="#">General Dentistry</Link></li>
            <li><Link href="#">Certified Dentist</Link></li>
            <li><Link href="#">New Technology</Link></li>
            <li><Link href="#">Accept Insurance</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Follow Us</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-center gap-2">
              <Twitter className="w-4 h-4" /> <Link href="#">Twitter</Link>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="w-4 h-4" /> <Link href="#">Facebook</Link>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4" /> <Link href="#">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-12 border-t border-white/10 pt-6 px-6 text-sm flex flex-col sm:flex-row justify-between text-muted-foreground">
        <p>© Copyright 2024 UIxroot</p>
        <Link href="#" className="hover:underline">
          Terms and Condition
        </Link>
      </div>
    </footer>
  );
};
