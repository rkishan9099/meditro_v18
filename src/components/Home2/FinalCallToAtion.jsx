"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import React from "react";
import plusOrange from "../../images/shap/plus-orange.png";
import squareBlue from "../../images/shap/square-blue.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";
import ptImg2 from "../../images/shap/circle-dots.png";

import appointmentShape from "../../images/home/appointment-shape.png";
import {
  fadeInFromTop,
  hoverEffect,
  infiniteRotate,
  leftRightAnimation,
  upDownAnimation,
} from "../../utils/animation";
import EvaluationForm from "./evaluation-form";
import bnrImg1 from "../../images/banner/img1.jpg";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";
import topImage from "../../images/background/footer-shape.png"


export default function FinalCTASection(props) {
  const { handleShow } = props;
  return (
    <>
      <section className=" final-cta1 tw-relative tw-py-24 md:tw-py-32 lg:tw-py-40 tw-px-4 md:tw-px-6 lg:tw-px-8 tw-overflow-hidden">
        <img src={topImage} alt="top imaeg" className="tw-w-full tw-absolute tw-top-0 tw-left-0" />
        <motion.div
          {...fadeInFromTop}
          {...hoverEffect}
          className="tw-inline-block tw-absolute tw-top-[5%] tw-left-[10%]  "
        >
          <motion.img
            className="md:tw-h-auto md:tw-w-auto sm:tw-h-24 sm:tw-w-24 tw-h-16 tw-w-16"
            src={plusOrange}
            alt="Rotating Star"
            {...infiniteRotate}
          />
        </motion.div>
        <motion.div
          {...fadeInFromTop}
          {...hoverEffect}
          className="tw-inline-block tw-absolute tw-top-[25%] tw-right-[10%]  "
        >
          <motion.img
            className="md:tw-h-auto md:tw-w-auto sm:tw-h-24 sm:tw-w-24 tw-h-16 tw-w-16"
            src={squareDotsOrange}
            alt="squareDotsOrange"
            {...leftRightAnimation}
          />
        </motion.div>
        {/* <motion.div
          {...fadeInFromTop}
          {...hoverEffect}
          className="tw-inline-block tw-absolute tw-top-[50%] tw-right-[15%]  "
        >
          <motion.img
            className="md:tw-h-auto md:tw-w-auto sm:tw-h-24 sm:tw-w-24 tw-h-16 tw-w-16"
            src={appointmentShape}
            alt="appointmentShape"
            {...leftRightAnimation}
          />
        </motion.div> */}
        <motion.div
          {...fadeInFromTop}
          {...hoverEffect}
          className="tw-inline-block tw-absolute tw-top-[70%] tw-left-[5%]  "
        >
          <motion.img
            className="md:tw-h-auto md:tw-w-auto sm:tw-h-24 sm:tw-w-24 tw-h-16 tw-w-16"
            src={squareBlue}
            alt="Square"
            {...upDownAnimation}
          />
        </motion.div>
        {/* Soft Gradient Overlay */}
        {/* <div
        className="tw-absolute tw-inset-0 tw-z-10"
        style={{
          background: `linear-gradient(135deg, #e9e9fc 0%, #dadbfb 40%, #f4f5fd 70%, #f2f2ff 100%)`,
          opacity: 0.9, // Adjust opacity to maintain readability
        }}
      /> */}

        {/* Content */}

        {/* <img className="pt-img2 animate1" src={ptImg2} alt=""/> */}

        <div className="tw-relative tw-z-20 tw-container tw-mx-auto tw-max-w-5xl tw-text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="tw-text-3xl md:tw-text-3xl lg:tw-text-3xl tw-font-extrabold tw-mb-6 tw-leading-tight tw-text-gray-900"
          >
            Get Expert Insights on Your Practice
            <span className="tw-block tw-text-accent tw-mt-2">
              Absolutely Free!
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="tw-text-xl md:tw-text-2xl tw-mb-12 tw-max-w-3xl tw-mx-auto tw-font-light tw-text-gray-800"
          >
            Fill out the form now to receive a detailed evaluation report on how
            to increase revenue and improve efficiency
          </motion.p>
          {/* Features List */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-gap-6 tw-mb-12 "
          >
            {["No Cost", "No Obligation", "Actionable Insights"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="tw-flex tw-items-center tw-justify-center tw-text-lg tw-bg-white/40 tw-rounded-full tw-py-2 tw-px-6 tw-text-gray-900 border-gradient"
                >
                  <CheckCircle className="tw-mr-2 tw-h-6 tw-w-6 tw-text-accent" />
                  <span>{item}</span>
                </motion.li>
              )
            )}
          </motion.ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShow}
            className="tw-mt-6 tw-px-6 tw-py-3 tw-bg-accent-500 tw-text-white tw-text-lg tw-font-bold tw-rounded-md tw-shadow-md tw-transition tw-duration-300"
          >
            Get Your Free Evaluation
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="tw-absolute tw-container tw-top-10 tw-left-10 tw-w-20 tw-h-20 tw-border-2 tw-border-white/20 tw-rounded-full tw-z-10 tw-animate-pulse" />
        <div className="tw-absolute tw-container tw-bottom-10 tw-right-10 tw-w-32 tw-h-32 tw-border-2 tw-border-accent/20 tw-rounded-full tw-z-10 tw-animate-pulse" />
      </section>

      <div className="benefits-section-home1">
        {/* <div
          className="page-banner banner-lg contact-banner"
          style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
        >
       
          <img className="pt-img1 animate-wave" src={animateWave} alt="" />
          <img className="pt-img2 animate2" src={animate2} alt="" />
          <img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
        </div> */}
          <div className="container">
            {/* <div className="contact-wraper"> */}
              {/* <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2,
                  },
                }}
                viewport={{ once: true }}
                className="tw-w-full tw-h-full tw-mx-auto md:tw-py-30 tw-py-20"
              >
                <EvaluationForm />
              </motion.div> */}
            {/* </div> */}
          </div>
      </div>
    </>
  );
}
