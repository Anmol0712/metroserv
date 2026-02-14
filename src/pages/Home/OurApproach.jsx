import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    desc: "We deeply explore your business challenges, uncovering opportunities that set the foundation for success.",
  },
  {
    title: "Define",
    desc: "We clearly outline goals, strategies, and measurable outcomes, ensuring absolute alignment with your vision.",
  },
  {
    title: "Design",
    desc: "We craft innovative, user-focused designs that merge creativity, usability, and branding into seamless experiences.",
  },
  {
    title: "Develop",
    desc: "We build robust, scalable, and future-ready digital solutions tailored to your business growth requirements.",
  },
  {
    title: "Deploy",
    desc: "We launch solutions with precision, ensuring smooth transitions, minimal disruption, and maximum market impact.",
  },
  {
    title: "Deliver",
    desc: "We provide ongoing support, optimization, and measurable results that continuously empower your business journey.",
  },
];

const OurApproach = () => {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal-700">
            Our Approach
          </h2>

          <p className="mt-4 text-lg font-medium text-slate-600">
            A structured and human-centered way of turning ideas into reliable
            digital outcomes.
          </p>

          {/* subtle divider */}
          <div className="mt-6 w-20 h-[3px] rounded-full bg-teal-500/80" />
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative grid md:grid-cols-5 gap-6 md:gap-10 items-start"
            >
              {/* Step Number */}
              <div className="md:col-span-1">
                <span className="text-3xl md:text-4xl font-semibold text-teal-500/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
                  {step.desc}
                </p>

                {/* subtle horizontal divider */}
                <div className="mt-6 h-px w-full bg-slate-200" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurApproach;
