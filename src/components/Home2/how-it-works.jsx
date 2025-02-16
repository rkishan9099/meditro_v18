import React from "react";
import { easeInOut, motion } from "framer-motion";
import { BookText, ChartNetwork, CheckCircle, CircleCheckBig, Zap } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { page2steps } from "../../utils/data";

const HowItWorks = () => {
  const mdMatches = useMediaQuery("(min-width: 1024px)");



  return (
    <section className="!tw-py-10 sm:!tw-py-20 md:!tw-py-30 tw-px-4 md:tw-px-8 lg:tw-px-16 how-it-works tw-overflow-hidden">
      <div className="tw-mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,delay: 0.3, ease: easeInOut
            },
          }}
          viewport={{ once: true }}
            className="sm:tw-text-3xl tw-text-2xl tw-font-bold tw-text-center tw-mb-12 md:tw-mb-16 tw-flex tw-justify-center tw-my-5"
        >
          <span className="tw-flex tw-flex-col tw-justify-between">
            <span className="sm:tw-p-3 tw-p-0 tw-pb-1">How Our Free Evaluation Works</span>
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
        <div className="container  tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-x-8 tw-gap-y-14">
          {page2steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: mdMatches ? 50:0 , x: mdMatches ? 0 : index % 2 === 0 ? -50 : 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                x:0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                },
              }}
              viewport={{once:true}}
                className="tw-flex tw-flex-col  tw-bg-white !tw-rounded-xl md:!tw-px-8 tw-px-4 tw-relative tw-pt-20 tw-group"
            >
              <div className="tw-bg-accent-600 group-hover:tw-bg-accent-800 tw-text-white tw-rounded-xl tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-mb-4 tw-absolute tw-top-[-30px]">
                <step.icon size={24} className="" />
              </div>
              <p className="tw-text-lg  tw-text-gray-700">{step.title}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="tw-mt-12 tw-text-center"
        >
            <p className="tw-text-xl tw-font-bold tw-text-gray-800">
            ⏳ Turnaround Time: Get your report within 48 hours.
          </p>

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
                  className="tw-flex tw-items-center tw-justify-center tw-text-lg tw-bg-white/40 tw-rounded-full tw-py-1 tw-px-6 tw-text-gray-900 border-gradient"
                >
                  <CheckCircle className="tw-mr-2 tw-h-6 tw-w-6 tw-text-accent" />
                  <span>{item}</span>
                </motion.li>
              )
            )}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
