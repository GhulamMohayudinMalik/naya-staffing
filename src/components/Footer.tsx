import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Check } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Footer Top CTA with Video Background */}
      <div className="relative overflow-hidden py-32 text-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover"
          >
            <source src="https://breezyrecruit.com/wp-content/uploads/2025/08/footer.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 animate-fade-in-up">
            Ready to Find the Perfect Fit?
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto">
            Partner with BreezyRecruit to find the talent your business deserves. Whether you’re hiring for one role or building an entire team, we’re here to deliver customized solutions that work. Take the first step toward your next great hire—schedule a call with us today!
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#081120] text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Us */}
            <div>
              <h4 className="text-white font-bold text-xl mb-6">About Us</h4>
              <p className="text-sm leading-relaxed">
                BreezyRecruit is a modern recruitment agency dedicated to connecting top talent with forward-thinking companies through innovative hiring solutions. We offer a full range of services including Recruitment Process Outsourcing (RPO), direct hire, contract-to-hire, temporary staffing, executive search, and high-volume hiring across industries like IT, healthcare, industrial, retail, and more.
              </p>
            </div>

            {/* Empty Column for Spacing (as per HTML) */}
            <div className="hidden lg:block"></div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-xl mb-6">Contact info</h4>
              <div className="space-y-4 text-sm">
                <p>7901 4th St N Ste 300<br />St Petersburg FL 33702</p>
                <p className="font-bold">+1 (727) 241-9513</p>
                <p className="hover:text-[#EF6A0B] transition-colors">
                  <a href="mailto:info@breezyrecruit.com">info@breezyrecruit.com</a>
                </p>
                
                {/* Social Icons */}
                <div className="flex items-center gap-4 pt-4">
                  <a href="https://www.instagram.com/breezyrecruit_llc" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-[#EF6A0B] transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="https://www.linkedin.com/company/breezyrecruitllc/" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-[#EF6A0B] transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://www.facebook.com/breezyrecruitllc" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-[#EF6A0B] transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href="https://youtube.com/@breezyrecruit" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-[#EF6A0B] transition-all">
                    <Youtube size={18} />
                  </a>
                  <a href="https://x.com/BreezyRecruit" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-[#EF6A0B] transition-all">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-xl mb-6 uppercase tracking-wider">quick links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about-us" },
                  { name: "Service", href: "/services" },
                  { name: "Contact Us", href: "/contact-us" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="flex items-center gap-2 hover:text-[#EF6A0B] transition-colors text-sm">
                      <Check size={14} className="text-[#EF6A0B]" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#050b15] py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© Copyrights 2026 | BreezyRecruit | <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
