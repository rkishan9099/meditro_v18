// import React from "react";
// import { Quote } from "lucide-react";
// import { testimonials } from "../../utils/data";

// const Testimonials = () => {
//   return (
//     <section className="!tw-py-20 tw-px-2  sm:tw-px-4 md:tw-px-8 lg:tw-px-16 tw-overflow-hidden ">
//       <div className="container tw-mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             transition: {
//               duration: 0.6,
//               delay: 0.3,
//               ease: easeInOut,
//             },
//           }}
//           viewport={{ once: true }}
//           className="sm:tw-text-3xl tw-text-2xl tw-font-bold tw-text-center tw-mb-12 md:tw-mb-16 tw-flex tw-justify-center"
//         >
//           <span className="tw-flex tw-flex-col tw-justify-between">
//             <span className="sm:tw-p-3 tw-p-0 tw-pb-1">
//               See What Other Doctors Are Saying
//             </span>
//             <span className="tw-flex">
//               <motion.span
//                 className="tw-relative tw-z-20 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-accent-400  tw-to-accentOrange-500  tw-rounded-full tw-rounded-tr-none tw-rounded-br-none"
//                 initial={{ opacity: 0, x: -150 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3, ease: easeInOut }}
//                 viewport={{ once: true }}
//               />
//               <motion.span
//                 className="tw-relative tw-z-20 tw-w-full tw-h-1 tw-bg-gradient-to-r  tw-from-accentOrange-500  tw-to-accent-500  tw-rounded-full tw-rounded-tl-none tw-rounded-bl-none"
//                 initial={{ opacity: 0, x: 150 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3, ease: easeInOut }}
//                 viewport={{ once: true }}
//               />
//             </span>
//           </span>
//         </motion.h2>

//         <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index == 0 ? -50 : 50 }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//                 transition: {
//                   duration: 0.5,
//                 },
//               }}
//               viewport={{ once: true }}
//               className="tw-bg-gray-100 tw-p-8 tw-pb-0 tw-rounded-[20px] tw-shadow-md tw-flex tw-flex-col tw-gap-y-3 tw-group"
//             >
//               <Quote size={48} strokeWidth={2} className="tw-text-accent-500" />
//               <p className="tw-text-lg tw-text-gray-700 tw-mb-0">
//                 {testimonial.quote}
//               </p>

//               <div className="tw-flex tw-justify-end tw-mt-auto">
//                 <div className="tw-relative tw-flex tw-flex-col tw-bg-accent-500 tw-rounded-tl-3xl tw-rounded-tr-3xl tw-p-3 tw-overflow-hidden">
//                   {/* Expanding Background */}
//                   <span className="tw-absolute tw-inset-0 tw-w-0 tw-h-full tw-transition-all tw-bg-white tw-opacity-100 group-hover:tw-w-full tw-duration-300 tw-ease-in-out"></span>

//                   {/* Text with correct layering */}
//                   <p className="tw-relative tw-z-10 tw-font-bold tw-mb-0 tw-text-white tw-transition-all tw-duration-300 group-hover:!tw-text-accent-500">
//                     {testimonial.author}
//                   </p>
//                   <p className="tw-relative tw-z-10 tw-font-bold tw-mb-0 tw-mt-auto tw-text-white tw-transition-all tw-duration-300 group-hover:!tw-text-accent-500">
//                     {testimonial.position}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { easeInOut, motion } from "framer-motion";

// Import Images
import testShape from "../../images/testimonials/shape.png";
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import testPic4 from "../../images/testimonials/pic4.jpg";
import testPic5 from "../../images/testimonials/pic5.jpg";
import testPic6 from "../../images/testimonials/pic6.jpg";
import plusOrange from "../../images/shap/plus-orange.png";
import squareBlue from "../../images/shap/square-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import circleOrange2 from "../../images/shap/circle-orange-2.png";

class Testimonials extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <section className="section-area section-sp3 testimonial-wraper">
          <div className="container">
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
                  See What Other Doctors Are Saying
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
            <div className="row align-items-center">
              <div className="col-lg-6 text-center">
                <div className="thumb-wraper">
                  <img className="bg-img" src={testShape} alt="" />
                  <ul>
                    <li data-member="1">
                      <Link to="#">
                        <img src={testPic1} alt="" />
                      </Link>
                    </li>
                    <li data-member="2">
                      <Link to="#">
                        <img src={testPic2} alt="" />
                      </Link>
                    </li>
                    <li data-member="3">
                      <Link to="#">
                        <img src={testPic3} alt="" />
                      </Link>
                    </li>
                    <li data-member="4">
                      <Link to="#">
                        <img src={testPic4} alt="" />
                      </Link>
                    </li>
                    <li data-member="5">
                      <Link to="#">
                        <img src={testPic5} alt="" />
                      </Link>
                    </li>
                    <li data-member="6">
                      <Link to="#">
                        <img src={testPic6} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <Slider {...settings} className="testimonial-slide">
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          This evaluation helped me identify billing issues that
                          were costing my practice thousands. I highly recommend
                          it!
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">DR Shah</h5>
                        <p>Internal Medicine</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                          I had no idea how much revenue I was losing until I
                          got my free report. The insights were eye-opening!
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">DR Patel</h5>
                        <p>Family Medicine</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate1" src={plusOrange} alt="" />
          <img className="pt-img2 animate2" src={squareBlue} alt="" />
          <img className="pt-img3 animate3" src={circleDots} alt="" />
          <img className="pt-img4 animate4" src={circleOrange2} alt="" />
        </section>
      </>
    );
  }
}

export default Testimonials;
