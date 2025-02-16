import { easeInOut, motion } from "framer-motion";

import { useMediaQuery } from "usehooks-ts";
import { services } from "../../utils/data";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const mdMatches = useMediaQuery("(min-width: 1024px)");
  return (
    <section className="tw-py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
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
              <span className="tw-p-3">
                Comprehensive Services to Build Your Practice
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
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
            className="tw-text-xl tw-text-gray-600 tw-max-w-3xl tw-mx-auto"
          >
            From start-up to smooth operations, our tailored services cover
            every aspect of your clinic's financial and administrative needs.
          </motion.p>
        </div>


        <div className="container">
            <div className="row">
              {services.map((service, index) => {
                const isMd = mdMatches; // Use media query result
                // Define animation behavior based on mdMatches value
                const initialX = isMd
                  ? index % 3 === 0
                    ? -50
                    : index % 3 === 2
                    ? 50
                    : 0
                  : index % 2 === 0
                  ? -20
                  : 20;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: initialX }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: index * 0.1 },
                    }}
                    viewport={{ once: true }}
                    className="col-lg-4 col-md-6 mb-30 service_card"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="feature-container feature-bx2 feature1"
                    >
                      <div className="feature-box-xl mb-20">
                        <span className="icon-cell">
                          <service.icon />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="ttr-title">{service.title}</h5>
                        <p>{service.description}</p>
                        {/* <Link
                          to="/service-detail"
                          className="btn btn-primary light"
                        >
                          View More
                        </Link> */}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
      </div>
    </section>
  );
}

