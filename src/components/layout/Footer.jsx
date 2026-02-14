import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/route";
import Logo from "../ui/Logo";
import { CONTACT_INFO } from "../../config/siteConfig";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

const handleNavigationClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-slate-300 relative overflow-hidden">
      {/* Subtle top divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4 relative z-10">

        {/* BRAND */}
        <div>
          <Logo />
          
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            Engineering digital clarity for businesses that want to grow
            with confidence.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-teal-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-600/25"
            >
              <FaLinkedinIn className="text-white text-sm" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-teal-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-600/25"
            >
              <FaFacebookF className="text-white text-sm" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-teal-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-600/25"
            >
              <FaInstagram className="text-white text-sm" />
            </a>
          </div>

        </div>

        {/* COMPANY LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-5">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" onClick={handleNavigationClick} className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 hover:font-medium inline-block">About Us</Link></li>
            <li><Link to="/services" onClick={handleNavigationClick} className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 hover:font-medium inline-block">Services</Link></li>
            <li><Link to="/careers" onClick={handleNavigationClick} className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 hover:font-medium inline-block">Careers</Link></li>
            <li><Link to="/contact" onClick={handleNavigationClick} className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 hover:font-medium inline-block">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-5">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to={ROUTES.SERVICE_WEB} onClick={handleNavigationClick} className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 hover:font-medium inline-block">Web Development</Link></li>
            <li><Link to={ROUTES.SERVICE_APP} onClick={handleNavigationClick} className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 hover:font-medium inline-block">Mobile Apps</Link></li>
            <li><Link to={ROUTES.SERVICE_CLOUD} onClick={handleNavigationClick} className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 hover:font-medium inline-block">Cloud Solutions</Link></li>
            <li><Link to={ROUTES.SERVICE_UIUX} onClick={handleNavigationClick} className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 hover:font-medium inline-block">UI / UX Design</Link></li>
            <li><Link to={ROUTES.SERVICE_MARKETING} onClick={handleNavigationClick} className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 hover:font-medium inline-block">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-5">
            Contact
          </h4>

          <ul className="space-y-5 text-sm">

            {/* INDIA ADDRESS */}
            <li className="flex items-start gap-3">
              <MapPin size={40} className="mt-1 text-teal-400" />
              <a
                href="https://maps.app.goo.gl/tjjFJLdBTMcYtEfg9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 leading-relaxed inline-block"
              >
                {CONTACT_INFO.addressLine1}
              </a>
            </li>

            {/* EMAIL */}
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-teal-400" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 inline-block"
              >
                {CONTACT_INFO.email}
              </a>
            </li>

            {/* PHONE */}
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-teal-400" />
              <a
                className="hover:text-teal-400 transition-all duration-500 hover:translate-x-1 inline-block cursor-default"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} METROSERV Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
