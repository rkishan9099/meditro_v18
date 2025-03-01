import React, { useState } from "react";
import Header from "../layout/header";
import Main from "../../components/Home2/main";
import WhyEvaluate from "../../components/Home2/why-evaluate";
import HowItWorks from "../../components/Home2/how-it-works";
import EvaluationBenefits from "../../components/Home2/evaluation-benefits";
import Testimonials from "../../components/Home2/testimonials";
import Faqs from "../../components/Home2/faqs";
import FinalCTA from "../../components/Home2/final-cta";
import Footer from "../layout/footer";
import FinalCTASection from "../../components/Home2/FinalCallToAtion";
import EvaluationFormModal from "../../components/Model/EvaluationFormModal";
import SiteFooter from "../../components/footer/SiteFooter";
import { Helmet } from "react-helmet";

const HomePage2 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Helmet>
        <title>Free Medical Practice Assessment – Identify Missed Revenue
        </title>
        <meta
          name="title"
          content="Free Medical Practice Assessment – Identify Missed Revenue"
        />
        <meta
          name="description"
          content="Get a free evaluation of your medical practice to uncover revenue leaks, billing inefficiencies, and growth opportunities. No cost, no obligation—sign up now!"
        />
        <meta name="google-site-verification" content="iPYAcF8mibClwS4PeljKHWU6Vfz5TIOP09L3h8wh8TI" />

      </Helmet>
      <Header />
      <Main />
      <WhyEvaluate handleShow={handleShow} />
      <HowItWorks />
      <EvaluationBenefits />
      <Testimonials />
      <Faqs />
      {/* <FinalCTA/> */}
      <FinalCTASection handleShow={handleShow} />
      <SiteFooter />
      <EvaluationFormModal show={show} handleClose={handleClose} />
    </>
  );
};

export default HomePage2;
