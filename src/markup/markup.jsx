import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// Layout
// import Header from "./layout/header";
// import Footer from "./layout/footer";

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import Error from './pages/error-404';
import PhysicianBillingServices from './pages/physician-billing-services';
import MedicalClaimBilling from './pages/medical-claim-billing';
import InternalMedicineAndNephrologyBillingServices from './pages/internal-medicine-and-nephrology-billing-service';
import RadiologyBillingServices from './pages/radiology-billing-services';
import CardiologyMedicalBilling from './pages/cardiology-medical-billing';
import ImprovingYourFinancialHealthWithProfitEnhancementServices from './pages/improving-your-financial-health-with-profit-enhancement-services';
import ICD10MedicalCoding from './pages/ICD-10-medical-coding';
import MedicalBillingCodingServices from './pages/medical-billing-coding-services';
import MaximizeYourReimbursementRateWithOurMedicalBillingAndCollectionServices from './pages/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services';
import StreamliningMedicalARRecovery from './pages/streamlining-medical-AR-recovery';
import PracticeManagement from './pages/practice-management';
import VerificationOfHealthcareInsuranceEligibility from './pages/verification-of-healthcare-insurance-eligibility';
import RevenueCycleManagementCompany from './pages/revenue-cycle-management-company';
import DenialManagementServices from './pages/denial-management-service';
import PhysicianCredentialing from './pages/physician-credentialing';
import OurSpecialities from './pages/our-specialities';
import BlogDetails1 from './pages/blog-details-1';
import BlogDetails2 from './pages/blog-details-2';
import BlogDetails3 from './pages/blog-details-3';
import BlogDetails4 from './pages/blog-details-4';
import OptimizeHealthcareFinancesRcmMasteryUnleashed from './pages/optimize-healthcare-Finances-rcm-mastery-unleashed';
// import handler from './pages/api/mail';

class Markup extends Component{
	render(){
		return(
			<>	
			
				<BrowserRouter>
					
					<Routes>
						
						<Route element={<ThemeLayout />}>
							<Route path="*" element={<Error />} />
							<Route path='/' element={<Index />} />
							<Route path='/about-us' element={<AboutUs />} />
							<Route path='/team' element={<Team />} />
							<Route path='/services' element={<Services />} />
							<Route path='/service-detail' element={<ServiceDetail />} />
							<Route path='/faq' element={<Faq />} />
							<Route path='/contact-us' element={<ContactUs />} />
							<Route path='/booking' element={<Booking />} />
							<Route path='/blogs' element={<BlogGrid />} />
							{/* <Route path='/blog-details' element={<BlogDetails />} /> */}
							{/* <Route path='/api/mail' element={handler}/> */}
							<Route path='/blog-details-1'  element={<BlogDetails1 />} />
							<Route path='/blog-details-2'  element={<BlogDetails2/>} />
							<Route path='/blog-details-3'  element={<BlogDetails3/>} />
							<Route path='/blog-details-4'  element={<BlogDetails4 />} />
							<Route path='/optimize-healthcare-Finances-rcm-mastery-unleashed'  element={<OptimizeHealthcareFinancesRcmMasteryUnleashed />} />
							<Route path='/physician-billing-services'  element={<PhysicianBillingServices/>} />
							<Route path='/medical-claim-billing'  element={<MedicalClaimBilling/>} />	
							<Route path='/internal-medicine-and-nephrology-billing-service'  element={<InternalMedicineAndNephrologyBillingServices/>} />	
							<Route path='/radiology-billing-services'  element={<RadiologyBillingServices/>} />
							<Route path='/cardiology-medical-billing'  element={<CardiologyMedicalBilling/>} />
							<Route path='/improving-your-financial-health-with-profit-enhancement-services'  element={<ImprovingYourFinancialHealthWithProfitEnhancementServices/>} />
							<Route path='/medical-billing-coding-services'  element={<MedicalBillingCodingServices/>} />
							<Route path='/ICD-10-medical-coding'  element={<ICD10MedicalCoding/>} />
							<Route path='/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services'  element={<MaximizeYourReimbursementRateWithOurMedicalBillingAndCollectionServices/>} />
							<Route path='/streamlining-medical-AR-recovery'  element={<StreamliningMedicalARRecovery/>} />
							<Route path='/practice-management'  element={<PracticeManagement/>} />
							<Route path='/verification-of-healthcare-insurance-eligibility'  element={<VerificationOfHealthcareInsuranceEligibility/>} />
							<Route path='/revenue-cycle-management-company'  element={<RevenueCycleManagementCompany/>} />
							<Route path='/denial-management-service'  element={<DenialManagementServices/>} />
							<Route path='/physician-credentialing'  element={<PhysicianCredentialing/>} />
							<Route path='/our-specialities'  element={<OurSpecialities />} />
						</Route>
						
						<Route path="/form-login" element={<FormLogin />} />
						<Route path="/form-register" element={<FormRegister />} />
						<Route path='/form-forget-password' element={<FormForgetPassword />} />
						
					</Routes>
					
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}
function ThemeLayout(){
	return(
		<>
			{/* <Header /> */}
			<Outlet />
			{/* <Footer /> */}
		</>
	);
}
export default Markup;