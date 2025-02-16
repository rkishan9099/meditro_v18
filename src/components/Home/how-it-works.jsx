"use client";

import { motion, easeInOut } from "framer-motion";
import { steps } from "../../utils/data";
import { useState } from "react";
import CustomerServiceagent from "../../images/home/customer-service-agent.svg"

export default function HowItWorksAndCTA() {
  const [rotate, setRotate] = useState();
  return (
    <section className="md:tw-py-32 tw-py-0 how-it-works-hom2">
      <div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="tw-w-full tw-text-center tw-mb-16 tw-flex tw-flex-col tw-items-center"
      >
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-4 tw-flex tw-items-center tw-justify-center tw-gap-x-3 tw-!tw-w-full"
        >
          <span className="tw-flex tw-flex-col tw-justify-between">
            <span className="tw-p-3">How We Support You</span>
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
        </motion.h3>
      </div>

      <div className="sm:tw-h-[80vh] tw-h-[65vh] max-sm:tw-h-full  tw-overflow-hidden tw-flex tw-flex-col tw-justify-center tw-items-center tw-relative  px-2">
        <motion.div
          className="tw-flex max-sm:tw-hidden tw-justify-center tw-items-center tw-relative tw-aspect-square lg:tw-p-16 md:tw-p-10 sm:tw-p-8 tw-p-4 z-20"
          onHoverStart={() => setRotate(true)}
          onHoverEnd={() => setRotate(false)}
        >
          {/* Static Content (Not Rotating) */}
          <div className="tw-flex tw-justify-center tw-items-center tw-bg-gray-200 md:tw-p-3 tw-p-2 tw-rounded-full tw-z-10">
            <div className="sm:tw-h-[175px] sm:tw-w-[175px] tw-h-[125px] tw-w-[125px] tw-rounded-full tw-bg-white tw-flex tw-justify-center tw-items-center">
              <span className="sm:tw-text-2xl tw-text-xl tw-font-bold tw-text-center">
                {/* <CustomerServiceagent /> */}
                {/* How We Support&nbsp;
                <span className="tw-text-accentOrange-500">You</span> */}
                 <img src={CustomerServiceagent} alt="Customer Service" width={"80px"} />
              </span>
            </div>
          </div>

          {/* Rotating Background Grid */}
          <motion.div
            className="tw-grid tw-grid-cols-2 tw-gap-5 tw-absolute tw-inset-0 tw-h-full"
            animate={{ rotate: rotate ? 360 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="tw-bg-accent-500 tw-rounded-tl-full tw-rounded-tr-md tw-rounded-bl-md"></div>
            <div className="tw-bg-accentOrange-500 tw-rounded-tr-full tw-rounded-tl-md tw-rounded-br-md"></div>
            <div className="tw-bg-accentOrange-500 tw-rounded-bl-full tw-rounded-tl-md tw-rounded-br-md"></div>
            <div className="tw-bg-accent-500 tw-rounded-br-full tw-rounded-tl-md tw-rounded-bl-md"></div>
          </motion.div>
        </motion.div>

        <div className="tw-h-full max-sm:tw-hidden tw-absolute tw-z-[-10] px-2">
          <div className="tw-grid tw-grid-cols-2 lg:tw-gap-20 md:tw-gap-10 tw-gap-5 tw-items-center tw-h-full ">
            <motion.div
              className="!tw-rounded-xxl tw-p-3 tw-h-full sm:tw-max-h-[250px] tw-max-h-[200px] tw-relative tw-overflow-hidden tw-shadow-[2px_5px_34px_10px_rgba(204,204,204,0.65)]"
              style={{ borderRadius: "42px" }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }} // Ensures animation plays once when in view
            >
              <div className="tw-absolute tw-top-0 tw-left-0 sm:tw-p-5 tw-p-3 tw-bg-accent-500 tw-text-white tw-rounded-br-full sm:tw-text-2xl tw-text-xl sm:tw-font-extrabold tw-font-bold">
                01
              </div>
              <div
                className="!tw-rounded-xxl tw-h-full border-2 lg:!tw-p-10 md:!tw-p-8 sm:!tw-p-4 !tw-p-3 tw-flex tw-flex-col tw-justify-center tw-items-start tw-gap-y-2"
                style={{ borderRadius: "30px" }}
              >
                <div className="lg:tw-text-4xl md:tw-text-3xl tw-text-2xl md:tw-font-extrabold tw-font-bold tw-text-start">
                  Initial consultation
                </div>
                <div className="tw-text-xl sm:tw-font-bold tw-font-semibold tw-text-start">
                  Understand your needs
                </div>
              </div>
            </motion.div>
            <motion.div
              className="!tw-rounded-xxl tw-p-3 tw-h-full sm:tw-max-h-[250px] tw-max-h-[200px] tw-relative tw-overflow-hidden tw-shadow-[2px_5px_34px_10px_rgba(204,204,204,0.65)]"
              style={{ borderRadius: "42px" }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }} // Ensures animation plays once when in view
            >
              <div className="tw-absolute tw-top-0 tw-right-0 sm:tw-p-5 tw-p-3 tw-bg-accentOrange-500 tw-text-white tw-rounded-bl-full sm:tw-text-2xl tw-text-xl sm:tw-font-extrabold tw-font-bold">
                02
              </div>
              <div
                className="!tw-rounded-xxl tw-h-full border-2 lg:!tw-p-10 md:!tw-p-8 sm:!tw-p-4 !tw-p-3 tw-flex tw-flex-col tw-justify-center tw-items-end tw-gap-y-2"
                style={{ borderRadius: "30px" }}
              >
                <div className="lg:tw-text-4xl md:tw-text-3xl tw-text-2xl md:tw-font-extrabold tw-font-bold tw-text-end">
                  Credentialing
                </div>
                <div className="tw-text-xl sm:tw-font-bold tw-font-semibold tw-text-end">
                  Insurance verification
                </div>
              </div>
            </motion.div>
            <motion.div
              className="!tw-rounded-xxl tw-p-3 tw-h-full sm:tw-max-h-[250px] tw-max-h-[200px] tw-relative tw-overflow-hidden tw-shadow-[2px_5px_34px_10px_rgba(204,204,204,0.65)]"
              style={{ borderRadius: "42px" }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }} // Ensures animation plays once when in view
            >
              <div className="tw-absolute tw-bottom-0 tw-left-0 sm:tw-p-5 tw-p-3 tw-bg-accentOrange-500 tw-text-white tw-rounded-tr-full sm:tw-text-2xl tw-text-xl sm:tw-font-extrabold tw-font-bold">
                03
              </div>
              <div
                className="!tw-rounded-xxl tw-h-full border-2 lg:!tw-p-10 md:!tw-p-8 sm:!tw-p-4 !tw-p-3 tw-flex tw-flex-col tw-justify-center tw-items-start  tw-gap-y-2"
                style={{ borderRadius: "30px" }}
              >
                <div className="lg:tw-text-4xl md:tw-text-3xl tw-text-2xl md:tw-font-extrabold tw-font-bold tw-text-start">
                  Full RCM support
                </div>
                <div className="tw-text-xl sm:tw-font-bold tw-font-semibold tw-text-start">
                  Billing, claims, denial management
                </div>
              </div>
            </motion.div>
            <motion.div
              className="!tw-rounded-xxl tw-p-3 tw-h-full sm:tw-max-h-[250px] tw-max-h-[200px] tw-relative tw-overflow-hidden tw-shadow-[2px_5px_34px_10px_rgba(204,204,204,0.65)]"
              style={{ borderRadius: "42px" }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }} // Ensures animation plays once when in view
            >
              <div className="tw-absolute tw-bottom-0 tw-right-0 sm:tw-p-5 tw-p-3 tw-bg-accent-500 tw-text-white tw-rounded-tl-full sm:tw-text-2xl tw-text-xl sm:tw-font-extrabold tw-font-bold">
                04
              </div>
              <div
                className="!tw-rounded-xxl tw-h-full border-2 lg:!tw-p-10 md:!tw-p-8 sm:!tw-p-4 !tw-p-3 tw-flex tw-flex-col tw-justify-center tw-items-end tw-gap-y-2"
                style={{ borderRadius: "30px" }}
              >
                <div className="lg:tw-text-4xl md:tw-text-3xl tw-text-2xl md:tw-font-extrabold tw-font-bold tw-text-end">
                  Practice reporting
                </div>
                <div className="tw-text-xl sm:tw-font-bold tw-font-semibold tw-text-end">
                  Financial analysis for growth
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 sm:tw-hidden">
          {/* <h2 className="tw-text-3xl tw-font-bold tw-text-center tw-mb-12 tw-flex tw-justify-center">
            <span className="tw-flex tw-flex-col tw-justify-between">
              <span className="tw-p-3 tw-text-accent-500">
                How We Support You
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
          </h2> */}
          <div className="tw-flex tw-flex-col tw-items-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="tw-flex tw-items-start tw-mb-8 tw-w-full tw-max-w-2xl "
                initial={{ opacity: 0, x: index % 2 == 0 ? -100 : 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: index * 0.2 },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 0.97, transition: { duration: 0.3 } }}
              >
                <div
                  className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-px-6 tw-py-4 tw-flex tw-items-start tw-w-full tw-relative tw-overflow-hidden"
                  style={{ borderRadius: "15px" }}
                >
                  <div
                    className={`tw-absolute tw-top-0  sm:tw-p-5 tw-p-3  tw-text-white  sm:tw-text-2xl tw-text-xl sm:tw-font-extrabold tw-font-bold ${
                      index % 2 == 0
                        ? "tw-bg-accent-500 tw-left-0 tw-rounded-br-full"
                        : "tw-bg-accentOrange-500 tw-right-0 tw-rounded-bl-full"
                    }`}
                  >
                    {index + 1}
                  </div>
                  {/* <div className="tw-mr-4 tw-bg-primary tw-text-primary-foreground tw-rounded-full tw-p-3">
                  {<step.icon size={24} className="tw-text-white" />}
                </div> */}
                  <div className="tw-flex tw-flex-col tw-items-center tw-w-full ">
                    <h3
                      className={`tw-text-xl tw-font-semibold tw-mb-2 tw-text-center ${
                        index % 2 == 0
                          ? "tw-text-accent-500"
                          : "tw-text-accentOrange-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="tw-text-gray-600 tw-text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
