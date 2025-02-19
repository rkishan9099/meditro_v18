import React from "react";
import { BackgroundLines } from "../ui/background-lines";
import ThankYouImage from "../../images/home/thank-you.jpg";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <BackgroundLines className="sm:!tw-h-[calc(100vh--110px)] tw-flex tw-items-center tw-justify-center tw-w-full tw-flex-col tw-px-5 sm:tw-my-0 tw-my-20 tw-overflow-hidden">
     
     {/* sss */}
      <motion.div
        initial={{ scale: 0.70, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="tw-shadow-xl before:tw-backdrop-blur tw-backdrop-blur-lg tw-bg-transparent tw-flex tw-flex-col tw-items-center md:tw-gap-y-3 tw-gap-y-1 tw-rounded-2xl lg:tw-px-20 md:tw-px-10 md:tw-py-6 sm:tw-px-10 sm:tw-py-7 tw-p-5  sm:tw-max-w-[50%] tw-max-w-[90%]  !tw-border-accent-500"
        style={{border:"1px solid"}}
      >
         <motion.img
          src={ThankYouImage}
          alt="Thank you"
          className="tw-w-full md:tw-w-[90%]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.h1
          className="sm:!tw-text-4xl tw-text-3xl sm:tw-font-extrabold tw-font-bold tw-text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Thank You!
        </motion.h1>
        <motion.div
          className="tw-text-center sm:tw-text-xl tw-text-[18px]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          We appreciate you taking the time to submit the form. Your input is valuable to us!
        </motion.div>
       <Link to="/"> <button type="button" className="tw-py-3 tw-px-6 tw-bg-accentOrange-500 tw-text-white tw-rounded-3xl hover:tw-bg-white hover:tw-text-accentOrange-500 tw-transition-colors tw-duration-300">Back to home</button></Link>
      </motion.div>
    </BackgroundLines>
  );
};

export default Thankyou;
