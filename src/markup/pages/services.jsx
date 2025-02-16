import React, { Component } from "react";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

// Elements
import FeatureSection3 from "../elements/feature-section3";
import TeamSection from "../elements/team";
import LatestNewsSection from "../elements/latest-news-slider";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import { services } from "../../utils/data";
import { useMediaQuery } from "usehooks-ts";

const Services = () => {
  const mdMatches = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="banner-wraper">
          <div
            className="page-banner"
            style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Services</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-home"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>{" "}
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Services
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
            <img className="pt-img2 animate2" src={circleDots} alt="" />
            <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
          </div>
        </div>

        <section className="section-area section-sp1">
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
        </section>
        {/* 					
					<FeatureSection3 />
					
					<TeamSection />
					
					<LatestNewsSection /> */}
      </div>

      <Footer />
    </>
  );
};

export default Services;
