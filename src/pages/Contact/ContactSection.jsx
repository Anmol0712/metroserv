import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { CONTACT_INFO } from "../../config/siteConfig";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-center mb-16 text-[#1F8A8A]"
        >
          Let's Contact
        </motion.h2>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-start items-start gap-8"
        >
          <InfoRow icon={<MapPin />} text={CONTACT_INFO.addressLine1} />
          <InfoRow icon={<Mail />} text={CONTACT_INFO.email} />
          <InfoRow icon={<Phone />} text={CONTACT_INFO.phone} />
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-gray-700">
      <div className="bg-teal-100 text-teal-600 p-3 rounded-xl flex-shrink-0">
        {icon}
      </div>
      <span className="text-base break-words">{text}</span>
    </div>
  );
}
