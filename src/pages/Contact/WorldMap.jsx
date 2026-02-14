// export default function WorldMap() {
//   return (
//     <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
//       <iframe
//         title="NexBrites Location"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273.5486226287169!2d77.14332630966983!3d28.491823760205712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fbd31caf20d%3A0x69f3620878987182!2sNexBrites!5e0!3m2!1sen!2sin!4v1769667865040!5m2!1sen!2sin"
//         className="w-full h-full border-0"
//         loading="lazy"
//         allowFullScreen
//         referrerPolicy="no-referrer-when-downgrade"
//       />
//     </div>
//   );
// }

import { useState } from "react";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorldMap() {
  const [showGoogleMap, setShowGoogleMap] = useState(false);

  return (
    <section className="bg-gray-100 px-6 py-20 mt-2">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-xl">
        <div className="relative h-[480px]">

          <AnimatePresence mode="wait">

            {/* 🌍 WORLD MAP (DEFAULT) */}
            {!showGoogleMap && (
              <motion.div
                key="world"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
              >
                {/* SVG MAP */}
                <svg
                  viewBox="0 0 2000 1001"
                  className="absolute inset-0 h-full w-full opacity-80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M178 397l79-22 63 28 80-16 69 17 72-8 65 23
                       83-19 88 27 79-24 64 14 79-21 66 18 82-23
                       93 30 61-14 89 25 65-19 76 18v216H178z"
                    fill="#1f2937"
                  />
                </svg>

                {/* PIN */}
                <motion.button
                  onClick={() => setShowGoogleMap(true)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center focus:outline-none"
                >
                  {/* Pin container */}
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 ring-8 ring-teal-500/30"
                    whileHover={{
                      boxShadow: "0 0 0 20px rgba(20,184,166,0.25)",
                    }}
                    transition={{
                      duration: 0.10,
                      ease: "easeOut",
                    }}
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </motion.div>

                  {/* Label */}
                  <div className="mt-4 rounded-full bg-white/95 px-9 py-2 text-sm font-semibold text-gray-1000 shadow-lg backdrop-blur">
                    METROSERV
                  </div>

                  <span className="mt-3 text-xs text-gray-300">
                    Click to view location
                  </span>
                </motion.button>

                {/* TEXT */}
                <div className="absolute bottom-10 left-10 max-w-sm text-white">
                  <h2 className="mb-3 text-2xl font-bold">
                    Global Presence
                  </h2>
                  <p className="text-gray-300">
                    Discover our exact office location with a smooth transition.
                  </p>
                </div>
              </motion.div>
            )}

            {/* 🗺 GOOGLE MAP */}
            {showGoogleMap && (
              <motion.iframe
                key="google"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                title="METROSERV Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273.5486226287169!2d77.14332630966983!3d28.491823760205712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fbd31caf20d%3A0x69f3620878987182!2sNexBrites!5e0!3m2!1sen!2sin!4v1769667865040!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
