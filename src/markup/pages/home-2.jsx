import React, { useState } from 'react'
import Header from '../layout/header'
import Main from '../../components/Home2/main'
import WhyEvaluate from '../../components/Home2/why-evaluate'
import HowItWorks from '../../components/Home2/how-it-works'
import EvaluationBenefits from '../../components/Home2/evaluation-benefits'
import Testimonials from '../../components/Home2/testimonials'
import Faqs from '../../components/Home2/faqs'
import FinalCTA from '../../components/Home2/final-cta'
import Footer from "../layout/footer";
import FinalCTASection from '../../components/Home2/FinalCallToAtion'
import EvaluationFormModal from '../../components/Model/EvaluationFormModal'
import SiteFooter from '../../components/footer/SiteFooter'

const HomePage2 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <Main/>
      <WhyEvaluate handleShow={handleShow}/>
      <HowItWorks/>
      <EvaluationBenefits/>
      <Testimonials/>
      <Faqs/>
      {/* <FinalCTA/> */}
      <FinalCTASection handleShow={handleShow} />
      <SiteFooter />
      <EvaluationFormModal show={show} handleClose={handleClose} />
    </>
  )
}

export default HomePage2
