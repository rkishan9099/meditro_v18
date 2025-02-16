import React from "react";
import { easeInOut, motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { features } from "../../utils/data";

const EvaluationBenefits = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="tw-relative tw-overflow-hidden  tw-py-16 sm:tw-px-8 tw-px-4 tw-text-white"
    >
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
        className="sm:tw-text-3xl tw-text-2xl tw-font-bold tw-text-center tw-mb-12 md:tw-mb-16 tw-flex tw-justify-center"
      >
        <span className="tw-flex tw-flex-col tw-justify-between">
          <span className="sm:tw-p-3 tw-p-0 tw-pb-1">
            Why Doctors Choose Us for Their Practice Evaluation
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

      <div className="tw-flex tw-flex-col tw-items-center tw-gap-y-5">
        {features.map((step, index) => (
          <motion.div
            key={index}
            className="tw-flex tw-items-start tw-mb-8 tw-w-full tw-max-w-2xl tw-shadow-lg"
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
              className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-flex sm:tw-flex-row tw-flex-col tw-sm:tw-justify-between  sm:tw-items-start tw-items-center sm:tw-gap-y-0 tw-gap-y-2 tw-w-full"
              style={{ borderRadius: "15px" }}
            >
              <div className="tw-w-full tw-flex tw-justify-between tw-relative">
                <div
                  className={` ${
                    index % 2 == 0
                      ? "tw-bg-accent-500 "
                      : "tw-bg-accentOrange-500"
                  }  tw-absolute tw-h-full polygon-right-point-clip-path tw-w-16 tw-rounded-bl-xl tw-flex tw-items-center tw-text-2xl tw-font-extrabold tw-justify-center tw-text-white tw-top-6`}
                >
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <div
                  className={` ${
                    index % 2 == 0
                      ? "tw-bg-accent-500 "
                      : "tw-bg-accentOrange-500"
                  }  tw-absolute tw-h-full  tw-w-4 tw-rounded-tl-xl `}
                ></div>
                <div
                  className={` ${
                    index % 2 == 0
                      ? "tw-bg-accent-700 tw-border-accent-900"
                      : "tw-bg-accentOrange-700 tw-border-l-accentOrange-900"
                  }  tw-absolute tw-h-6   tw-w-4 tw-rounded-tl-full tw-rounded-bl-full border-l`}
                ></div>
                <h3 className="sm:!tw-text-xl !tw-text-[18px]  !tw-break-all tw-font-semibold tw-mb-2 !tw-text-black tw-w-full tw-py-5 sm:!tw-ps-20 !tw-ps-16 max-[400px]:!tw-text-[14px] !tw-pe-1">
                  {step.title}-{step.description}
                </h3>
                <div
                  className={` ${
                    index % 2 == 0
                      ? "tw-bg-accent-500 "
                      : "tw-bg-accentOrange-500"
                  } tw-flex tw-items-center sm:tw-px-8 tw-px-4`}
                >
                  <step.icon size={36} className="tw-text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="tw-mt-6 tw-text-lg tw-text-center tw-text-black"
      >
        💡 We’ve helped doctors optimize their practices and recover lost
        revenue. Now it’s your turn.
      </motion.p>
    </motion.section>
  );
};

export default EvaluationBenefits;
