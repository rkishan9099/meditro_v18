import React from "react";
import { motion } from "framer-motion";
import EvaluationForm from "./evaluation-form";
import {
  fadeInFromTop,
  hoverEffect,
  infiniteRotate,
  leftRightAnimation,
  upDownAnimation,
} from "../../utils/animation";
import plusOrange from "../../images/shap/plus-orange.png";
import squareBlue from "../../images/shap/square-blue.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";

import appointmentShape from "../../images/home/appointment-shape.png";

const FinalCTA = () => {
  return (
    <section className="tw-py-20 tw-px-4 md:tw-px-8 lg:tw-px-16  tw-overflow-hidden tw-relative">
      <div class="appointment-one__bg !tw-z-[-10]">
        <div class="appointment-one__bg__inner"></div>
        <div class="appointment-one__bg__shape">
          <div class="appointment-one__bg__shape__1">
            <div class="appointment-one__bg__shape__2"></div>
          </div>
        </div>
      </div>
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
      <motion.div
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
      </motion.div>
      <motion.div
        {...fadeInFromTop}
        {...hoverEffect}
        className="tw-inline-block tw-absolute tw-top-[40%] tw-left-[5%]  "
      >
        <motion.img
          className="md:tw-h-auto md:tw-w-auto sm:tw-h-24 sm:tw-w-24 tw-h-16 tw-w-16"
          src={squareBlue}
          alt="Square"
          {...upDownAnimation}
        />
      </motion.div>
      <div className="!tw-z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 0.3,
            },
          }}
          viewport={{ once: true }}
          className="tw-mt-10  tw-text-accentOrange-500 tw-p-8 tw-rounded-xl tw-text-center"
        >
          <h3 className="tw-text-2xl tw-font-bold tw-mb-4 !tw-text-accent-500">
            Get Expert Insights on Your Practice – Absolutely Free!
          </h3>
          <p className="tw-text-lg tw-mb-4">
            📌 Fill out the form now to receive a detailed evaluation report on
            how to increase revenue and improve efficiency.
          </p>
          <p className="tw-text-md tw-font-semibold">
            ✅ No Cost | ✅ No Obligation | ✅ Actionable Insights
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="tw-mt-6 tw-px-6 tw-py-3 tw-bg-accent-500 tw-text-white tw-text-lg tw-font-bold tw-rounded-md tw-shadow-md tw-hover:tw-bg-green-800 tw-transition tw-duration-300"
          >
            Get Your Free Evaluation
          </motion.button>
        </motion.div>
        <motion.div
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
          className="lg:tw-w-1/2 tw-mx-auto md:tw-my-30 tw-my-20"
        >
          <EvaluationForm />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
