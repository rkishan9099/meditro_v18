import React from "react";
import { easeInOut, motion } from "framer-motion";

const WhyEvaluate = ({handleShow}) => {
  return (
    <section className="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen  tw-overflow-hidden tw-px-6 md:tw-px-12 !tw-py-10 sm:tw-py-0 why-evaluate-home2">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.3,
            ease: easeInOut,
          },
        }}
        viewport={{ once: true }}
        className="sm:tw-text-3xl tw-text-2xl tw-font-bold tw-text-center  tw-flex tw-justify-center"
      >
          <div
          className="tw-absolute tw-inset-0"
          style={{
            background: `linear-gradient(135deg, #e9e9fc 0%, #dadbfb 40%, #f4f5fd 70%, #f2f2ff 100%)`,
            opacity: 0.5, // Adjust opacity to maintain readability
            zIndex: -1,
          }}
        />
        <span className="tw-flex tw-flex-col tw-justify-between">
          <span className="sm:tw-p-3 tw-p-0 tw-pb-1">
            Is Your Practice Running at Its Full Potential?
          </span>
          <span className="tw-flex">
            <motion.span
              className="tw-relative tw-z-20 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-accent-400  tw-to-accentOrange-500  tw-rounded-full tw-rounded-tr-none tw-rounded-br-none"
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeInOut }}
              viewport={{ once: true }}
            />
            <motion.span
              className="tw-relative tw-z-20 tw-w-full tw-h-1 tw-bg-gradient-to-r  tw-from-accentOrange-500  tw-to-accent-500  tw-rounded-full tw-rounded-tl-none tw-rounded-bl-none"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeInOut }}
              viewport={{ once: true }}
            />
          </span>
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.2,
          },
        }}
        viewport={{ once: true }}
        className="tw-mt-6 tw-text-lg md:tw-text-xl tw-text-center tw-max-w-3xl "
      >
        Many medical practices lose revenue without realizing it due to
        inefficiencies in billing, workflow, or patient management. Our free
        evaluation will analyze your practice’s operations and show you where
        you can optimize for higher profitability and smoother operations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: 0.4,
          },
        }}
        viewport={{ once: true }}
        className="tw-mt-8 tw-p-6 md:tw-p-8  tw-rounded-lg tw-shadow-xl tw-border before:tw-backdrop-blur  tw-bg-transparent tw-backdrop-blur-md tw-w-full tw-max-w-[600px] tw-brightness-125"
      >
        <h3 className="tw-text-xl tw-font-semibold tw-mb-4 tw-text-accentOrange-400">
          Common problems we identify:
        </h3>
        <ul className="tw-space-y-4">
          {[
            "Unbilled or underpaid insurance claims",
            "Billing errors leading to delayed payments",
            "Inefficient scheduling reduces patient flow",
            "Revenue leakage due to denied claims",
          ].map((problem, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.2,
                },
              }}
              viewport={{ once: true }}
              className="tw-flex tw-items-center tw-gap-2"
            >
              <span className="tw-text-accentOrange-400 tw-text-lg">✔</span>
              <span>{problem}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.button
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.6 },
          },
        }}
        onClick={handleShow}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="tw-mt-8 tw-bg-accentOrange-500 tw-text-white tw-py-3 tw-px-6 tw-rounded-lg tw-text-lg tw-font-bold tw-shadow-lg tw-hover:tw-bg-accentOrange-700 tw-transition-all tw-duration-300"
      >
        Get Your Free Evaluation
      </motion.button>
    </section>
  );
};

export default WhyEvaluate;
