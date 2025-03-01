import React, { useLayoutEffect, useState } from "react";
import Header from "../layout/header";
import Hero from "../../components/Home/hero-1";
import ServicesSection from "../../components/Home/services-section";
import BenefitsSection from "../../components/Home/benefits-section";
import HowItWorksAndCTA from "../../components/Home/how-it-works";
import CallToAction from "../../components/Home/call-to-action";
import SiteFooter from "../../components/footer/SiteFooter";
import EvaluationFormModal from "../../components/Model/EvaluationFormModal";
import { Helmet } from "react-helmet";
import { updateMetaTag } from "../../lib/utils";

const metaInformation = [
  {
    key: "title",
    value: "Medical Billing for New Clinics | Expert RCM Services",
  },
  {
    key: "description",
    value: "Launch your clinic with expert RCM services. From credentialing to billing, we handle it all—no upfront costs, no hidden fees. Get started today!",
  },
  {
    key: "google-site-verification",
    value: "iPYAcF8mibClwS4PeljKHWU6Vfz5TIOP09L3h8wh8TI",
  },
];

const HomePage1 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  useLayoutEffect(() => {
   metaInformation.forEach((meta) => {
     updateMetaTag(meta.key, meta.value);
   });
  }, []);

  return (
    <>
      <Helmet>
        <title>Medical Billing for New Clinics | Expert RCM Services</title>
      </Helmet>
      <Header />
      <div className="tailwind-scope fold:tw-red-500 sm:tw-red-500">
        <Hero handleShow={handleShow} />
        <ServicesSection />
        <BenefitsSection />
        <HowItWorksAndCTA />
        <CallToAction handleShow={handleShow} />
        <SiteFooter />
      </div>
      <EvaluationFormModal show={show} handleClose={handleClose} />
    </>
  );
};

export default HomePage1;
