import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import handler from '../pages/api/mail';
// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";


class QuoteHome extends Component{
	render(){
		// const sgMail = require('@sendgrid/mail');
		// sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
		async function handleOnSubmit(e) {
			e.preventDefault();
		  
			const formData = {};
		  
			Array.from(e.currentTarget.elements).forEach(field => {
			  if ( !field.name ) return;
			  formData[field.name] = field.value;
			});
            console.log(formData);
			// const msg = {
			// 	to: 'parthchauhan05@gmail.com', // Change to your recipient
			// 	from: 'info@keymedsolution.com', // Change to your verified sender,
			// 	subject: `[Global UpHire] New application for ${formData.name}`,
			// 	html:`
			// 	<!DOCTYPE html>
			// 	<html lang="en">
			// 	<head>
			// 		<meta charset="UTF-8" />
			// 		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			// 		<title></title>
			// 	</head>
			// 	<body>
			// 		<p>${formData.message}</p>
			// 	</body>
			// 	</html>`
			// }
			// sgMail.send(msg).then(() => {
			// 	console.log('Email sent!');
			// })

		  }
		return (
			<>
								
				<div className="page-content bg-white quote">
                        <div className="page-banner banner-lg contact-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>	
							<div className="heading-bx text-center">
								<h6 className="title-ext text-secondary">Submit your inquiry</h6>
							</div>
							<img className="pt-img1 animate-wave" src={animateWave} alt=""/>
							<img className="pt-img2 animate2" src={animate2} alt=""/>
							<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
						</div>
						<section className="">
						<div className="container">
							<div className="contact-wraper">
								<div className="row">
									<div className="col-lg-6 mb-30">
										<form onSubmit={handleOnSubmit} method="POST" encType="text/plain" className="form-wraper contact-form ajax-form">
											<div className="ajax-message"></div>
											<div className="row">
												<div className="form-group col-md-12">
													<input name="name" type="text" required className="form-control" placeholder="Your Name"/>
												</div>
												<div className="form-group col-md-12">
													<input name="email" type="email" required className="form-control" placeholder="Email"/>
												</div>
												<div className="form-group col-md-12">
													<input name="phone" type="text" required className="form-control" placeholder="Phone Numbers"/>
												</div>
												<div className="form-group col-md-12">
													<textarea name="message" required className="form-control" placeholder="Please briefly describe your requirements"></textarea>
												</div>
												<div className="col-lg-12">
													<button name="submit" type="submit" value="Submit" className="btn w-100 btn-secondary btn-lg">Submit inquiry</button>
												</div>
											</div>
										</form>
									</div>
									<div className="col-lg-6 mb-30">
										<div className="contact-info ovpr-dark" style={{backgroundImage: "url("+pic1+")"}}>
											<div className="info-inner">
												<h4 className="title mb-30">Contact Us For Any Informations</h4>
												<div className="icon-box">
													<h6 className="title"><i className="ti-map-alt"></i>Location</h6>		
													<p>Greensboro, North Carolina, USA</p>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>		
													<a href="mailto:info@keymedsolution.com" className="text-white">info@keymedsolution.com</a>
													<br />
													<a href="tel:+13362906077" className="text-white">+1 (336) 290-6077</a>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
													<ul className="social-media">
														<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/people/Key-Medsolution/100093008652071/"><i className="fab fa-facebook"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/key-medsolutions/"><i className="fab fa-linkedin"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/key_medsolution/"><i className="fab fa-instagram"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>					
					
				
				</div>
								
			</>
		);
	}
}

export default QuoteHome;