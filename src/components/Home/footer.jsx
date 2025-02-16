import React from "react";
import { motion } from "framer-motion";
import { Clipboard, FileCheck, BarChart3, Phone } from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  fadeInFromTop,
  hoverEffect,
  fadeIn,
  upDownAnimation,
} from "../../utils/animation";
import { Link } from "react-router-dom";

const Footer = () => {
  const routes = [
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
    { name: "Services", path: "/services" },
    { name: "FAQs", path: "/faq" },
    { name: "Privacy Policy", path: "/" },
  ];

  return (
      <footer className="tw-bg-gray-800 tw-text-white tw-py-12 tw-px-4 tw-md:tw-px-8 tw-lg:tw-px-16">
    
        
    <div className="tw-max-w-6xl tw-mx-auto tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
    <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="tw-text-xl tw-font-semibold tw-mb-4">Quick Links</h3>
            <ul className="tw-space-y-2">
              {routes?.map((link) => (
                <li key={link}>
                  <Link
                    to={link.path}
                    className="tw-hover:tw-text-blue-300 tw-transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="tw-text-xl tw-font-semibold tw-mb-4">Contact Info</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
            <p>Address: 123 Business St, City, State 12345</p>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="tw-text-xl tw-font-semibold tw-mb-4">Disclaimer</h3>
            <p className="tw-text-sm tw-text-gray-400">
              * This service requires a 24-month contract. Terms & Conditions
              apply.
            </p>
          </motion.div>
        </div>
      </footer>
  );
};

export default Footer;
