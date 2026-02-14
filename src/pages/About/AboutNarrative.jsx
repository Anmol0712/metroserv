import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Users,
  Target
} from "lucide-react";

const About = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-white">

      {/* ===== Background Image ===== */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aboutN.png"
          alt="About Background"
          className="w-full h-full object-cover opacity-[0.06]"
        />
      </div>

      {/* Soft Teal Side Glow */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#1F8A8A]/10 to-transparent z-0" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#1F8A8A]/10 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ===== Top Section ===== */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
            Building technology that helps businesses{" "}
            <span className="text-[#1F8A8A]">
              move faster, smarter,
            </span>{" "}
            and with confidence
          </h2>

          <div className="w-20 h-[3px] bg-[#1F8A8A] mt-6 mb-8 rounded-full" />

          <p className="text-lg text-slate-600 leading-relaxed">
            We are a forward-thinking IT company helping businesses build,
            scale, and optimize through smart technology solutions. Our goal
            is simple — to reduce complexity and turn ideas into impactful
            digital experiences.
          </p>
        </div>

        {/* ===== Middle Grid ===== */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Text Block */}
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Our team specializes in software development, IT consulting,
              and end-to-end technology support. We design solutions that
              are agile, secure, and future-ready — built to evolve as your
              business grows.
            </p>

            <p>
              With a strong focus on collaboration, speed, and continuous
              improvement, we work closely with our clients to understand
              their vision and deliver technology that creates real business value.
            </p>

            <p className="text-slate-900 font-medium">
              We don’t aim to be just another service provider —
              we strive to be a trusted technology partner in our clients’
              growth journey.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-6">

            <FeatureCard
              icon={<Target size={26} />}
              title="Technology with Purpose"
              desc="Every solution is aligned with real business outcomes, not trends."
            />

            <FeatureCard
              icon={<Rocket size={26} />}
              title="Built for Scale"
              desc="Architectures designed to grow seamlessly with your organization."
            />

            <FeatureCard
              icon={<Users size={26} />}
              title="Collaborative by Design"
              desc="We work as an extension of your team, not just a vendor."
            />

            <FeatureCard
              icon={<ShieldCheck size={26} />}
              title="Long-Term Partnership"
              desc="Focused on sustainable value, not short-term delivery."
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group p-6 rounded-2xl
                 bg-white/80 backdrop-blur-sm
                 border border-slate-200
                 shadow-sm hover:shadow-lg
                 transition-all duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center
                      rounded-xl bg-[#1F8A8A]/10 text-[#1F8A8A]
                      mb-4 group-hover:scale-110 transition">
        {icon}
      </div>

      <h4 className="text-lg font-semibold text-slate-900 mb-2">
        {title}
      </h4>

      <p className="text-slate-600 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
