import { easeInOut, motion } from "framer-motion";
import { benefits } from "../../utils/data";

export default function BenefitsSection() {
  return (
    <section className="!tw-py-20 md:!tw-py-30  tw-relative tw-overflow-hidden benefits-section-home1">
      <div className="container tw-mx-auto tw-px-4 tw-relative">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true }}
          className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-center tw-text-gray-900 tw-mb-12 tw-flex tw-justify-center"
        >
          <span className="tw-flex tw-flex-col tw-justify-between">
            <span className="tw-p-3"> Why Choose Us for Your Practice?</span>
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

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3  tw-gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10 }}
      whileInView={{
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.2, delay: 0.2 },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="tw-relative tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-text-center tw-transition-all tw-duration-300 tw-hover:tw-shadow-xl tw-overflow-hidden"
    >
      {/* Cool border radius effect */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-blue-400 tw-to-purple-500 tw-opacity-75 tw-transition-all tw-duration-300 tw-group-hover:tw-opacity-100"></div>
      <div className="tw-absolute tw-top-[2px] tw-left-[2px] tw-right-[2px] tw-bottom-[2px] tw-bg-white tw-rounded-2xl tw-z-10"></div>

      {/* Icon Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        className="tw-relative tw-z-20 tw-w-20 tw-h-20 tw-rounded-full tw-bg-gradient-to-br tw-from-blue-400 tw-to-purple-500 tw-flex tw-items-center tw-justify-center tw-mb-4 tw-p-1"
      >
        <div className="tw-w-full tw-h-full tw-rounded-full tw-bg-white tw-flex tw-items-center tw-justify-center">
          <Icon className="tw-w-10 tw-h-10 tw-text-blue-600" />
        </div>
      </motion.div>

      <h3 className="tw-relative tw-z-20 tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-2">
        {title}
      </h3>
      <p className="tw-relative tw-z-20 tw-text-gray-600">{description}</p>

      {/* Animated Line Effect */}
      <motion.div
        className="tw-relative tw-z-20 tw-w-12 tw-h-1 tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-500 tw-mt-4 tw-rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}
