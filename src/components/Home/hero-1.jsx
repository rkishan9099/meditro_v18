import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, TrendingUp } from "lucide-react";
import { Button } from "react-bootstrap";
import doctorImg from "./../../images/home/doctor-bg.png";
// import doctorImg from "./../../images/main-banner/doctor.png";
import plusOrange from "../../images/shap/plus-orange.png";
import squareBlue from "../../images/shap/square-blue.png";
import heroShapeIcon2 from "../../images/home/heroShapeIcon2.png";
import clinicfileIcon from "../../images/home/clinicfileIcon.png";

import {
  fadeIn,
  fadeInFromTop,
  fadeInLeft,
  fadeInRight,
  hoverEffect,
  infiniteRotate,
  leftRightAnimation,
  upDownAnimation,
} from "../../utils/animation";
import { statsData } from "../../utils/data";
import { NumberTicker } from "../ui/number-ticker";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function Hero({ handleShow }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const floatingIcons = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };
  const subTitle =
    " Everything You Need to Start and Grow Your Clinic – All in One Place";
  const mainTitle = [
    {
      text: "Start",
    },
    {
      text: "Your",
    },
    {
      text: "Clinic",
    },
    {
      text: "With",
    },
    {
      text: "Confidence.",
      className: "tw-text-accent-500 ",
    },
  ];
  return (
    <div className="tailwind-scope">
      <div className="tw-relative tw-min-h-screen tw-flex tw-justify-center tw-items-center tw-bg-gradient-to-b tw-from-blue-50 tw-to-white tw-overflow-hidden ">
        {/* Animated background elements */}
        {/* <h1 className="!tw-text-blue-500 !tw-green-red-500">dndmdd</h1> */}

        <div className="tw-absolute tw-inset-0 tw-overflow-hidden">
          {/* <div className="tw-absolute tw-top-20 tw-left-10 tw-w-72 tw-h-72 tw-bg-blue-200 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-xl tw-opacity-70 tw-animate-blob" /> */}
          <div className="tw-absolute tw-top-72 tw-right-10 tw-w-72 tw-h-72 tw-bg-green-200 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-xl tw-opacity-70 tw-animate-blob tw-animation-delay-2000" />
          {/* <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" /> */}
        </div>

        {/* Main content */}
        <div className="tw-relative container tw-mx-auto tw-px-4 tw-pt-20 lg:tw-pt-32">
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-12 tw-items-center">
            {/* Left column - Text content */}
            <motion.div
              className="tw-space-y-6 md:!tw-order-1 !tw-order-2 lg:tw-h-auto tw-h-min"
              {...fadeInLeft}
            >
              {/* Floating icons */}
              {/* <div className="relative hidden lg:block">
              <motion.div
                className="tw-absolute -tw-top-16 tw-left-0"
                variants={floatingIcons}
                animate="animate"
              >
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-8 left-32"
                variants={floatingIcons}
                animate="animate"
              >
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
              </motion.div>
              <motion.div
                className="absolute top-0 left-64"
                variants={floatingIcons}
                animate="animate"
              >
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
              </motion.div>
            </div> */}

              <div className="tw-relative">
                <motion.div
                  {...fadeInFromTop}
                  {...hoverEffect}
                  className="tw-inline-block tw-absolute sm:tw-bottom-[50%] sm:tw-right-[20%] tw-right-0 tw-bottom-[80%]  "
                >
                  <motion.img
                    className="md:tw-h-auto md:tw-w-auto sm:tw-h-24 sm:tw-w-24 tw-h-12 tw-w-12"
                    src={plusOrange}
                    alt="Rotating Star"
                    {...infiniteRotate}
                  />
                </motion.div>
                <div className="heading-bx hero-heading">


                <motion.div
                  className=" title-ext text-secondary tw-px-4 tw-py-2 tw-rounded-full tw-text-sm tw-font-bold tw-mb-2"
                  {...fadeInUp}
                  >
                  Launch Your Healthcare Practice
                </motion.div>
                  </div>
              </div>
              <motion.h1
                className="tw-text-4xl lg:tw-text-6xl tw-font-bold tw-text-gray-900 tw-leading-tight tw-text-start"
                {...fadeInUp}
              >
                <TypewriterEffect
                  words={mainTitle}
                  className="!tw-text-gray-900"
                />
              </motion.h1>

              <motion.h2
                className="tw-text-xl lg:tw-text-2xl tw-text-[#1f2278] tw-mt-6 tw-text-start"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <TextGenerateEffect
                  className="tw-text-xl lg:tw-text-2xl tw-!tw-font-bold tw-text-[#1f2278] tw-!tw-leading-tight"
                  words={subTitle}
                />
              </motion.h2>

              <motion.div
                className="tw-flex sm:tw-flex-row tw-flex-col sm:tw-items-center tw-items-start sm:tw-gap-x-4 tw-gap-y-4 tw-mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="/"
                  onClick={handleShow}
                  className="tw-relative book-now active:!tw-text-white tw-inline-flex tw-items-center tw-px-12 tw-py-3 tw-overflow-hidden tw-text-lg tw-font-medium tw-text-white border-2 tw-bg-accent-500 tw-border-accent-500 tw-rounded-full tw-hover:!tw-text-blue-500 tw-group tw-hover:tw-bg-blue-500"
                >
                  <span className="tw-absolute tw-left-0 tw-block tw-w-full tw-h-0 tw-transition-all tw-bg-white tw-group-active:tw-text-white tw-opacity-100 group-hover:tw-h-full tw-top-1/2 group-hover:tw-top-0 tw-duration-400 tw-ease"></span>
                  <span className="tw-absolute tw-right-0 tw-flex tw-items-center tw-justify-start tw-w-10 tw-h-10 tw-duration-300 tw-transform tw-translate-x-full group-hover:tw-translate-x-0 tw-ease">
                    <ArrowRight />
                  </span>
                  <span className="tw-relative">Book Now</span>
                </a>
              </motion.div>

              {/* Stats */}
              {/* <motion.div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-mt-12" {...fadeIn}>
                {statsData?.map((stat, index) => (
                  <div key={index} className="tw-text-center">
                    <div className="tw-text-2xl tw-font-bold tw-text-accent-600">
                      {index !== 2 ? (
                        <NumberTicker
                          value={stat.number}
                          className="whitespace-pre-wrap !text-blue-600"
                        />
                      ) : (
                        stat.number
                      )}
                    </div>
                    <div className="tw-text-sm tw-text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div> */}
              <div className="tw-relative lg:tw-h-auto md:tw-h-[200px] tw-h-[100px]">
                <motion.div
                  {...fadeInLeft}
                  {...hoverEffect}
                  className="tw-absolute tw-left-0 tw-top-7"
                >
                  <motion.img
                    src={heroShapeIcon2}
                    alt="Rotating Star"
                    className="md:tw-h-auto md:tw-w-auto sm:tw-h-12 sm:tw-w-12 tw-h-8 tw-w-8"
                    {...infiniteRotate}
                  />
                </motion.div>
                <motion.div
                  {...fadeInLeft}
                  {...hoverEffect}
                  className="tw-absolute tw-right-0"
                >
                  <motion.img
                    src={clinicfileIcon}
                    {...leftRightAnimation}
                    alt="Clinic file"
                    className="md:tw-h-auto md:tw-w-auto sm:tw-h-12 sm:tw-w-12 tw-h-8 tw-w-8"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right column - Image */}
            <motion.div
              className="tw-relative md:!tw-order-2 tw-!tw-order-1"
              {...fadeInRight}
            >
              <div className="tw-relative tw-z-10 tw-banner-img tw-flex tw-justify-center">
                <motion.div
                  {...fadeInRight}
                  {...hoverEffect}
                  className="tw-absolute sm:tw-top-0 tw-top-[50px] sm:tw-right-0 tw-max-[640px]:tw-left-0"
                >
                  <motion.img
                    src={squareBlue}
                    alt="Rotating Star"
                    className="md:tw-h-auto md:tw-w-auto sm:tw-h-12 sm:tw-w-12 tw-h-8 tw-w-8"
                    {...upDownAnimation}
                  />
                </motion.div>
                <motion.img
                  src={doctorImg}
                  alt="Doctor"
                  className="tw-rounded-2xl lg:tw-w-11/12 md:tw-w-4/5 tw-w-full"
                  {...upDownAnimation} // Spread animation properties here
                />

                {/* Floating card */}
                {/* <motion.div
                      className="absolute bottom-6 left-6 bg-white md:p-4 p-2 rounded-xl shadow-lg sm:ms-0 ms-2"
                {...fadeInRight}
              >
                <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">
                      Success Rate
                    </div>
                    <div className="md:text-2xl text-md font-bold text-gray-900">
                      98%
                    </div>
                  </div>
                </div>
              </motion.div> */}
              </div>

              {/* Background decoration */}
              {/* <div className="absolute -right-4 -bottom-4 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl -z-10" /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
