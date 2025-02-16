import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Stethoscope } from "lucide-react";
import DoctorChild from "../../images/home/doctorChild.png";
import {
  fadeInLeft,
  hoverEffect,
  infiniteRotate,
  leftRightAnimation,
} from "../../utils/animation";
import clinicfileIcon from "../../images/home/clinicfileIcon.png";
import { faqs } from "../../utils/data";
import { Accordion } from "react-bootstrap";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="container tw-rounded-xxl tw-h-auto tw-w-full tw-flex tw-justify-center tw-items-center  sm:tw-py-20 tw-py-10  tw-mb-16 tw-overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="tw-w-full tw-grid tw-grid-cols-5  md:tw-rounded-3xl tw-rounded-xl tw-overflow-hidden tw-text-black md:tw-pt-7 md:tw-pl-7 !tw-p-3 tw-pb-0 lg:!tw-pr-0  !tw-border-accentOrange-500" style={{border:"1px solid"}}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="lg:tw-col-span-3 tw-col-span-5 tw-flex tw-flex-col lg:tw-gap-y-6 tw-gap-y-4 tw-z-10"
        >
          <div className="tw-font-semibold tw-flex tw-items-center tw-gap-x-1">
            <motion.span {...infiniteRotate}>
              <Stethoscope className="tw-w-6 tw-h-6 tw-mr-2 tw-text-green-400 " />
            </motion.span>
            <span> FAQ'S</span>
          </div>
          <div className="tw-text-2xl tw-font-bold">
            Got Questions? We Have Answers.
          </div>
          {/* <div>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="tw-mb-4"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className={`tw-flex tw-flex-col  tw-w-full tw-p-3 tw-bg-gray-100  tw-transition-all tw-duration-200 tw-ease-in-out tw-rounded-md tw-focus:tw-outline-none`}
                >
                  <div className="tw-flex tw-items-center tw-gap-x-2">
                    <AnimatePresence mode="wait">
                      <div className="tw-bg-blue-500 tw-rounded-full tw-p-2">
                        {activeIndex === index ? (
                          <motion.div
                            key="minus"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Minus />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="plus"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Plus />
                          </motion.div>
                        )}
                      </div>
                    </AnimatePresence>
                      <span className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-!tw-text-start">
                      {faq.question}
                    </span>
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                          <p className="tw-p-4 tw-ps-0 tw-mb-0 tw-text-gray-700 !tw-text-start">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div> */}
          <div className="row">
            <div className="col-lg-12">
              <Accordion
                defaultActiveKey=""
                className="accordion ttr-accordion1"
              >
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.div>

        <div className="lg:tw-col-span-2 lg:tw-flex tw-hidden tw-justify-end tw-w-full tw-items-end tw-!tw-w-full tw-relative">
          <img
            src={DoctorChild}
            alt=" doctor child"
            className=" tw-object-contain tw-h-full tw-w-full  lg:!tw-w-4/5  lg:tw-h-full"
          />
          <motion.div
            {...fadeInLeft}
            {...hoverEffect}
            className="tw-absolute tw-left-[10%] tw-bottom-[20%]"
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
    </motion.div>
  );
};

export default Faqs;
