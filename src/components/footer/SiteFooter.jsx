import React from "react";
// Images
import Logo from "../../images/logo/logo.png";
import footerBg from "../../images/background/footer.jpg";
import ptImg1 from "../../images/shap/wave-blue.png";
import ptImg2 from "../../images/shap/circle-dots.png";
import ptImg3 from "../../images/shap/plus-blue.png";
import ptImg4 from "../../images/shap/wave-blue.png";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(" + footerBg + ")" }}
    >
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="widget widget_info">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="widget footer_widget ml-50">
                <h3 className="footer-title">Quick Links</h3>
                <ul>
                  <li>
                    <Link to="/about-us">
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">
                      <span>Contact Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <span>Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">
                      <span>FAQs</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-3 col-6">
                    <div className="widget footer_widget">
                        <h3 className="footer-title">Our Service</h3>
                        <ul>
                            <li><Link to="/medical-claim-billing"><span>Medical claim billing</span></Link></li>
                            <li><Link to="/radiology-billing-services"><span>Radiology billing services</span></Link></li>
                            <li><Link to="/cardiology-medical-billing"><span>Cardiology medical billing</span></Link></li>
                        </ul>
                    </div>
                </div> */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 ft-contact">
              <div className="contact-bx">
                <div className="icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-number">
                  <span>Contact Us</span>
                  <a href="mailto:info@keymedsolution.com">
                    info@keymedsolution.com
                  </a>
                  <br />
                  <a href="tel:+13364999299">+1 (336) 499-9299</a>
                  <br />
                  <a href="javascript:void(0)">
                    Greensboro, North Carolina, USA
                  </a>
                </div>
              </div>
              <br />
              <div className="footer-social-link">
                <ul className="social-media">
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/people/Key-Medsolution/100093008652071/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/company/key-medsolutions/"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/key_medsolution/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tw-mt-6 tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-gap-2 tw-text-center tw-mb-4">
            <h6 className="tw-font-semibold tw-text-accent-400 !tw-mb-0">Disclaimer:</h6>
              <p className=" tw-leading-tight !tw-p-0 !tw-m-0">
                All services are subject to a <b className="tw-font-extrabold">24-month contract</b> unless
                stated otherwise. Terms & Conditions apply.
              </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12 text-center">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()} Key MedSolutions
                {/* Design & Developed by <a href="https://themeforest.net/user/themetrades" rel="noreferrer" target="_blank" className="text-secondary">ThemeTrades</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="pt-img1 animate-wave" src={ptImg1} alt="" />
      <img className="pt-img2 animate1" src={ptImg2} alt="" />
      <img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
      <img className="pt-img4 animate-wave" src={ptImg4} alt="" />
    </footer>
  );
};

export default SiteFooter;
