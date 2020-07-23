import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Footer extends Component{
render(){
    return(
        <div>


<footer className="footer">
              <div className="subscription-area primary-bg">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-md-5 mb-sm--30">
                              <div className="subscription-text">
                                  <div className="subscription-text__icon">
                                      <i className="fa fa-envelope-open color--white"></i>
                                  </div>
                                  <div className="subscription-text__right">
                                      <h3 className="color--white">Newsletter</h3>
                                      <p className="color--white">Sign up for our newsletter to get up-to-date from us</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-7">
                              <form className="newsletter-form validate" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate="">
                                  <input type="email" className="newsletter-form__input" id="email" placeholder="Enter your email.."/>
                                  <input type="submit" value="Subscribe" className="newsletter-form__submit"/>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-top">
                  <div className="container">
                   <div className="row pt--40 pb--40">
                          <div className="col-md-4 mb-sm--30">
                              <div className="method-box">
                                  <div className="method-box__icon">
                                      <i className="fa fa-phone"></i>
                                  </div>
                                  <div className="method-box__content">
                                      <h4>+88 123 456 7899</h4>
                                      <p>Free support line!</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4 mb-sm--30">
                              <div className="method-box">
                                  <div className="method-box__icon">
                                      <i className="fa fa-envelope-o"></i>
                                  </div>
                                  <div className="method-box__content">
                                      <h4>info@emsmedia.net</h4>
                                      <p>Orders Support!</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="method-box">
                                  <div className="method-box__icon">
                                      <i className="fa fa-map-marker"></i>
                                  </div>
                                  <div className="method-box__content">
                                      <h4>6507 Elmwood Avenue Rocky Mountt </h4>
                                      <p>Our Address</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-12">
                              <hr className="line"/>
                          </div>
                      </div>
                      <div className="row pt--40 pb--40">
                          <div className="col-lg-8 mb-md--30">
                              <div className="row">
                                  <div className="col-md-4 mb-sm--30">
                                      <div className="footer-widget">
                                          <h3 className="widget-title">Contact US</h3>
                                          <ul className="widget-menu">
                                              <li><Link  to='/'>Brands</Link></li>
                                              <li><Link  to='/'>Gift Vouchers</Link></li>
                                              <li><Link  to='/'>Affiliates</Link></li>
                                              <li><Link  to='/'>Wishlist</Link></li>
                                              <li><Link  to='/'>Order History</Link></li>
                                              <li><Link  to='/'>Track Your Order</Link></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-md-4 mb-sm--30">
                                      <div className="footer-widget">
                                          <h3 className="widget-title">CUSTOMER SERVICE</h3>
                                          <ul className="widget-menu">
                                              <li><Link  to='/contact'>Contact</Link></li>
                                              <li><Link  to='/'>Returns</Link></li>
                                              <li><Link  to='/'>Order History</Link></li>
                                              <li><Link  to='/'>Site Map</Link></li>
                                              <li><Link  to='/'>My Account</Link></li>
                                              <li><Link  to='/'>Unsubscribe Notification</Link></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="footer-widget">
                                          <h3 className="widget-title">INFORMATION</h3>
                                          <ul className="widget-menu">
                                              <li><Link  to='/'>About Us</Link></li>
                                              <li><Link  to='/'>Delivery Information</Link></li>
                                              <li><Link  to='/'>Privacy Policy</Link></li>
                                              <li><Link  to='/'>Terms & Conditions</Link></li>
                                              <li><Link  to='/'>Warranty</Link></li>
                                              <li><Link  to='/'>FAQ</Link></li>
                                              <li><Link  to='/'>Login</Link></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4">
                              <div className="footer-widget mb--40">
                                  <h3 className="widget-title">DOWNLOAD APP</h3>
                                  <div className="app-btn-group">
                                      <a href="#" className="app-btn apple-btn">App store</a>
                                      <a href="#" className="app-btn gplay-btn">Play store</a>
                                  </div>
      
                              </div>
                              <div className="footer-widget social-widget">
                                  <h3 className="widget-title">Follow Us</h3>
                                  <ul className="social social-2">
                                      <li className="social__item">
                                          <a className="social__link" href="facebook.com"  data-toggle="tooltip" data-placement="top" title="facebook">
                                              <i className="fa fa-facebook"></i>
                                          </a>
                                      </li>
                                      <li className="social__item">
                                          <a className="social__link" href="twitter.com"  data-toggle="tooltip" data-placement="top" title="twitter">
                                              <i className="fa fa-twitter"></i>
                                          </a>
                                      </li>
                                      <li className="social__item">
                                          <a className="social__link" href="pinterest.com"  data-toggle="tooltip" data-placement="top" title="pinterest">
                                              <i className="fa fa-pinterest"></i>
                                          </a>
                                      </li>
                                      <li className="social__item">
                                          <a className="social__link" href="linkedin.com"  data-toggle="tooltip" data-placement="top" title="linkedin">
                                              <i className="fa fa-linkedin"></i>
                                          </a>
                                      </li>
                                      <li className="social__item">
                                          <a className="social__link" href="vimeo.com"  data-toggle="tooltip" data-placement="top" title="vimeo">
                                              <i className="fa fa-vimeo"></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-12">
                              <hr className="line"/>
                          </div>
                      </div>
                      <div className="row pt--40 pb--40">
                          <div className="col-12 text-center">
                              <a href="/home" className="footer-logo">
                                  <img src="assets/img/logo/footer-logo.png" alt="logo"/>
                              </a>
                          </div>
                      </div>
                      <div className="row pb--30">
                          <div className="col-12 text-center">
                              <ul className="footer-menu">
                                  <li><a href="#">எங்களைப் பற்றி</a></li>
                                  <li><a href="#">நூற்கள்</a></li>
                                  <li><a href="#">நிகழ்ச்சிகள்</a></li>
                                  <li><a href="#"> கல்வி</a></li>
                                  <li><a href="#">மனிதா</a></li>
                                  <li><a href="#">ஒரே உள்ளமை</a></li>
                                  <li><a href="#">அறிவுக் களஞ்சியம்</a></li>
                                  
                              </ul>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-12">
                              <hr className="line"/>
                          </div>
                      </div>
                      <div className="row pt--40 pb--40">
                          <div className="col-md-4 text-md-left text-center mb-sm--30">
                             
                              <p className="copyright-text">Copyright &copy; 2020  <a href="index.html"><span className="foot">EMS Media</span></a> All rights reserved.</p>
                             
                          </div>
                          <div className="col-md-4 text-md-right text-center">
                              <img src="assets/img/icons/payment-icon.png" alt="payment"/>
                          </div>
                <div className="col-md-4 text-md-right text-center">
                              <p className="copyright-text">Powered by  <a href="https://ilifetech.in/" target="_blank"><span className="foot">ilife technologies</span></a> </p>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
          </div>
    )
}
}
export default Footer