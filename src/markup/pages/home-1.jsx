import React, { useState } from "react";
import Header from "../layout/header";
import Hero from "../../components/Home/hero-1";
import ServicesSection from "../../components/Home/services-section";
import BenefitsSection from "../../components/Home/benefits-section";
import HowItWorksAndCTA from "../../components/Home/how-it-works";
import CallToAction from "../../components/Home/call-to-action";
import Footer from "../layout/footer";
import SiteFooter from "../../components/footer/SiteFooter";
import EvaluationFormModal from "../../components/Model/EvaluationFormModal";

const HomePage1 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  }
  return (
    <>
      <Header />
      <div className="tailwind-scope fold:tw-red-500 sm:tw-red-500">
        <Hero handleShow={handleShow} />
        <ServicesSection />
        <BenefitsSection />
        <HowItWorksAndCTA />
        <CallToAction handleShow={handleShow}/>
        <SiteFooter />
      </div>
      <EvaluationFormModal show={show} handleClose={handleClose} />

    </>
  );
};

export default HomePage1;
