import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Pill } from "lucide-react";
import EvaluationForm from "./evaluation-form.jsx";
import { TextGenerateEffect } from "../ui/text-generate-effect.jsx";

const Main = () => {
  const words = "Are You Losing Revenue Without Knowing? Find Out for Free!";
  return (
    <div className="tw-min-h-screen  md:tw-px-8 lg:tw-px-16 tw-py-20 sm:tw-px-4 tw-px-0 tw-flex tw-w-full tw-items-center tw-overflow-hidden hero-main-2">
      <div className="container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row lg:tw-pt-0 md:tw-pt-[200px] tw-pt-[100px] tw-pb-[50px]  tw-items-center tw-justify-between">
        <div
          className="tw-absolute tw-inset-0"
          style={{
            background: `linear-gradient(135deg, #e9e9fc 0%, #dadbfb 40%, #f4f5fd 70%, #f2f2ff 100%)`,
            opacity: 0.5, // Adjust opacity to maintain readability
            zIndex: -1,
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:tw-w-1/2 tw-mb-10 lg:tw-mb-0 tw-text-center lg:tw-text-left"
        >
          <h1 className="tw-text-2xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-4 tw-text-accent-500 !tw-text-start">
            <TextGenerateEffect
              className="tw-text-2xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-4 tw-text-accent-500 !tw-text-start"
              words={words}
            />
          </h1>
          <h2 className="!tw-text-xl md:tw-text-xl tw-mb-6 tw-text-gray-700 tw-dark:tw-text-gray-300 !tw-text-start">
            Fill out the quick form, and we'll provide a detailed evaluation of
            your practice—100% FREE.
          </h2>
          <ul className="tw-text-lg tw-mb-8">
            <li className="tw-flex tw-items-center tw-mb-2 tw-text-black">
              <Stethoscope className="tw-w-6 tw-h-6 tw-mr-2 tw-text-green-400 tw-animate-pulse" />
              <span className="!tw-text-start">
                Identify missed revenue opportunities
              </span>
            </li>
            <li className="tw-flex tw-items-center tw-mb-2 tw-text-black">
              <Pill className="tw-w-6 tw-h-6 tw-mr-2 tw-text-green-400 tw-animate-spin" />
              <span className="!tw-text-start">
                Improve billing & workflow efficiency
              </span>
            </li>
            <li className="tw-flex tw-items-center tw-text-black">
              <HeartPulse className="tw-w-6 tw-h-6 tw-mr-2 tw-text-green-400 tw-animate-bounce" />
              <span className="!tw-text-start">
                Get expert insights with no cost or commitment
              </span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:tw-w-1/2 tw-w-full mt-5"
        >
          <EvaluationForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
