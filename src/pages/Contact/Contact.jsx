import { useState } from "react";
import { motion } from "framer-motion";
import ContactSection from "./ContactSection";
import StartYourJourney from "./StartYourJourney";


const Contact = () => {
  return (
    <>
      <StartYourJourney />
      <ContactSection />
    </>
  );
};

export default Contact;
