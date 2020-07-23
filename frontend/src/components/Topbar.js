import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Navbar extends Component{
render(){
    return(
        <div>
        <header className="header header-2">
              <div className="header-top header-2--top d-sm-none d-md-block d-none d-sm-block">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-lg-6 text-lg-left text-center">
                              
                              <ul className="contact-info contact-info--1">   
                                  <li className="contact-info__list"><i className="fa fa-envelope-open"></i><a href="mailto:demo@company.com">info@emsmedia.net</a></li>  
                                  <li className="contact-info__list"><i className="fa fa-phone"></i><a href="tel:+88 123 456 7899">+88 123 456 7899</a></li>
                              </ul>
                            
                          </div>
                          <div className="col-lg-6 text-right">
                          
                              <div className="header-top__nav header-top__nav--1 d-flex justify-content-lg-end justify-content-center">
                                      <div className="user-info header-top__nav--item">
                                      <div className="dropdown header-top__dropdown">
                                      <Link   to='/contact'>
                                             Contact us
                                          </Link>
                                         
                         
                                      </div>
                    </div>
                  <div className="user-info header-top__nav--item  d-sm-none d-md-block d-none d-sm-block">
                                      <div className="dropdown header-top__dropdown">
                                      <Link   to='/register'>
                                             Register
                                          </Link>
                                         
                         
                                      </div>
                    </div>
                    
                    <div className="user-info header-top__nav--item">
                    <div className="dropdown header-top__dropdown">
                    <Link   to='/login'>
                                             Login
                                          </Link>
                                          
                      </div>
                                  </div>
                                  <div className="currency-selector header-top__nav--item d-sm-none d-md-block d-none d-sm-block">
                                      <div className="dropdown header-top__dropdown">
                                          
                                          <a className="dropdown-toggle" id="currencyID" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <span>Currency: </span>
                                              USD
                                          </a>
                                          <div className="dropdown-menu" aria-labelledby="currencyID">
                                              <a className="dropdown-item" href="#">USD</a>
                                              <a className="dropdown-item" href="#">EURO</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="language-selector header-top__nav--item">
                                      <div className="dropdown header-top__dropdown d-sm-none d-md-block d-none d-sm-block">
                                          <ul className="social social-round-small">
                                                  <li className="social__item">
                                                      <a href="facebook.com" className="social__link"><i className="fa fa-facebook"></i></a>
                                                  </li>
                                                  <li className="social__item">
                                                      <a href="twitter.com" className="social__link"><i className="fa fa-twitter"></i></a>
                                                  </li>
                                                  <li className="social__item">
                                                      <a href="pinterest.com" className="social__link"><i className="fa fa-pinterest"></i></a>
                                                  </li>
                                                  <li className="social__item">
                                                      <a href="google.plus.com" className="social__link"><i className="fa fa-google-plus"></i></a>
                                                  </li>
                                                  
                                              </ul>
                                      </div>
                                  </div>
                              </div>
                                                
                          </div>
                      </div>
                  </div>
              </div>
              <div className="header-top header-2--top d-none d-sm-block d-md-none d-block d-sm-none">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-12">
                              
                                 
                                  
                                  <ul className="contact-info contact-info--1">   
                                      <li className="contact-info__list"><i className="fa fa-envelope-open"></i><a href="mailto:demo@company.com">info@emsmedia.net</a></li>  
                                      <li className="contact-info__list"><i className="fa fa-phone"></i><a href="#">+88 123 456 7899</a></li>
                                      
                                
                                       <li className="contact-info__list"><a href="mailto:demo@company.com">Contact us</a></li>  
                                      <li className="contact-info__list"><a href="#">Login</a></li>
                                      
                                
                                   
                                    
                                      
                                
                                  
                                  </ul>
                                
                              </div>
                              <div className="col-lg-6 text-right">
                                  <div className="header-top__nav header-top__nav--1 d-flex justify-content-lg-end justify-content-center">
                                          <div className="user-info header-top__nav--item">
                                          <div className="dropdown header-top__dropdown">
                                          <Link   to='/contact'>
                                                 Contact us
                                              </Link>
                                             
                                                 
                                          </div>
                                          </div>
                                      <div className="user-info header-top__nav--item  d-sm-none d-md-block d-none d-sm-block">
                                          <div className="dropdown header-top__dropdown">
                                          <Link   to='/register'>
                                                 Register
                                              </Link>
                                           
                                                 
                                          </div>
                                          </div>
                                          
                                          <div className="user-info header-top__nav--item">
                                          <div className="dropdown header-top__dropdown">
                                          <Link   to='/login'>
                                                 Login
                                              </Link>
                                              
                                              </div>
                                      </div>
                                      <div className="currency-selector header-top__nav--item d-sm-none d-md-block d-none d-sm-block">
                                          <div className="dropdown header-top__dropdown">
                                              
                                              <a className="dropdown-toggle" id="currencyID" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  <span>Currency: </span>
                                                  USD
                                              </a>
                                              <div className="dropdown-menu" aria-labelledby="currencyID">
                                                  <a className="dropdown-item" href="#">USD</a>
                                                  <a className="dropdown-item" href="#">EURO</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="language-selector header-top__nav--item">
                                          <div className="dropdown header-top__dropdown d-sm-none d-md-block d-none d-sm-block">
                                              <ul className="social social-round-small">
                                                      <li className="social__item">
                                                          <a href="facebook.com" className="social__link"><i className="fa fa-facebook"></i></a>
                                                      </li>
                                                      <li className="social__item">
                                                          <a href="twitter.com" className="social__link"><i className="fa fa-twitter"></i></a>
                                                      </li>
                                                      <li className="social__item">
                                                          <a href="pinterest.com" className="social__link"><i className="fa fa-pinterest"></i></a>
                                                      </li>
                                                      <li className="social__item">
                                                          <a href="google.plus.com" className="social__link"><i className="fa fa-google-plus"></i></a>
                                                      </li>
                                                      
                                                  </ul>
                                          </div>
                                      </div>
                                  </div>
                                                    
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="header-middle header-2--middle d-flex align-items-center">
                      <div className="container">
                          <div className="row align-items-center">
                              <div className="col-xl-8 col-lg-8 tex-md-left text-center">
                                  
                                  <a className="logo-box" href="index.html">
                                      <img src="assets/img/logo/logo-blue.png" alt="logo"/>
                                  </a>
                                 
                              </div>
                              <div className="col-xl-4 col-lg-4">
                                            <form action="#" className="search-form search-form--1">
                                      <div className="search-form__group search-form__group--select">
                                          <select name="category" id="searchCategory" className="search-form__select">
                                              <option value="all">All Categories</option>
                                              <optgroup label="Books, Magazines">
                                                
                                              </optgroup>
                                              <optgroup label="Audio">
                                                 
                                              </optgroup>
                                              <optgroup label="video">
                                                
                                              </optgroup>
                                              
                                          </select>
                                      </div>
                                      <input type="text" className="search-form__input" placeholder="Enter your search..."/>
                                      <button className="search-form__submit hover-scheme-1">
                                          <i className="fa fa-search"></i>
                                      </button>
                                  </form>
                              </div>
                             
                          </div>
                      </div>
                  </div>
             
              <div className="header-bottom header-2--bottom primary-bg">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-lg-10 d-none d-lg-block">
                              <nav className="main-navigation">
                                 
                                  <ul className="mainmenu ">
                                      <li className="mainmenu__item active menu-item-has-children">
                                      <Link   to='/home' className="mainmenu__link bk">எங்களைப் பற்றி</Link>
                                          <ul className="sub-menu">
                                             <li className="menu-item-has-children">
                                                  <a href="#">நிறுவனர்</a>
                                                  <ul className="sub-menu">
                                                       <li><Link   to='/vappa'>வாப்பா நாயகம்</Link></li>
                                                      <li><Link   to='/thanthai'>தந்தை நாயகம்</Link></li>
                                                      <li><Link   to='/appa'>அப்பா நாயகம்</Link></li>
                                                      
                                                  </ul>
                                              </li>
                                             <li>
                                    <a href="#">அஹ்லுல்பைத்<br/> (அநந்தரர்கள்) </a>
                                  </li>
                
      
      
                              <li>
                                    <a href="#">கொள்கைகள் </a>
                                  </li>
                                          </ul> 
                                      </li>
                                      <li className="mainmenu__item menu-item-has-children">
                                      <Link   to='/books' className="mainmenu__link">நூற்கள்</Link>
                                         <ul className="sub-menu">
                                             
                                              
                                            <li><Link   to='/akarathi'>அகராதி</Link></li>
                      <li><Link   to='/ubathesa_korvai'>உபதேசக் கோர்வை </Link></li>
                      <li><Link   to='/kavithai_noolkal'>கவிதை நூற்கள் </Link></li>
                      <li><Link   to='/gnana_vilaka_noolkal'>ஞான விளக்க நூற்கள் </Link></li>
                      <li><Link   to='/tamil_ilakiya_noolkal'>தமிழ் இலக்கிய நூல் </Link></li>
                      <li><Link   to='/moulith_noolkal'>மௌலித் நூற்கள் </Link></li>
                      <li><Link   to='/yaseen_noolkal'>யாஸீன் மௌலானா(ரலி) <br/>நூற்கள்</Link></li>
                      <li><Link   to='/varalatru_noolkal'>வரலாற்று நூற்கள் </Link></li>
                      <li><Link   to='/vahapiya_ethirpu_noolkal'>வஹ்ஹாபிய்ய எதிர்ப்பு <br/>நூற்கள் </Link></li>
                      <li><Link   to='/varithathukkal'>வாரிதாதத்துக்கள் <br/>(இறை ஞான வெளிப்பாடு) </Link></li>
                                          </ul> 
                                      </li>
                                      <li className="mainmenu__item menu-item-has-children">
                                          <a href="#" className="mainmenu__link"> நிகழ்ச்சிகள்</a>
                       <ul className="sub-menu">
                      <li><Link   to='/gallery'>புகைப்படங்கள்</Link></li>
                      <li><a href="# ">காணொளி </a></li>
                      <li> <Link   to='/audio'>ஆடியோ </Link></li>
                      <li><a href="# ">நிகழ்வுகள்</a></li>
                      </ul>
                      
                                      </li>
                                      <li className="mainmenu__item menu-item-has-children">
                                          <a href="#" className="mainmenu__link">கல்வி</a>
                      <ul className="sub-menu">
                      <li>
                                    <a href="#">ஜாமீஆ யாசீன் அறபுக் கல்லூரி     </a>
                                  </li>
                
      
      
                              <li>
                                    <a href="#">மதரஸா நிறுவனர் பற்றி </a>
                                  </li>
                                  <li className="menu-item-has-children">
              <a href="#">கல்விக்கு உதவிடுவோம்  </a>
              <ul>
                                <li><a href="#"> English and Arabic brochure </a></li>
                                      <li><a href="#"> தமிழ் சிற்றேடு</a></li>
                                          </ul>
                        </li>
              
                      </ul>
                                      </li>
                                      <li className="mainmenu__item menu-item-has-children">
                                          <a href="#" className="mainmenu__link">மனிதா</a>
                               <ul className="sub-menu">
                        <li>
                          <a href="#">மகான்கள் </a>
                        </li>
                
      
      
                              <li>
                                    <a href="#">அமுத மொழிகள் </a>
                                  </li>
                
      
      
                              <li>
                                    <a href="#">சிந்திக்க சில நொடிகள் </a>
                                  </li>
                
      
      
                              <li>
                                    <a href="#">ஐயமும் - தெளிவும்  </a>
                                  </li>
                
      
      
                          </ul>
                                      </li>
                     <li className="mainmenu__item menu-item-has-children">
                                          <a href="#" className="mainmenu__link"> ஒரே உள்ளமை</a>
                       <ul className="sub-menu">
                        <li className="menu-item-has-children">
                                                  <a href="#">ஏக உள்ளமை</a>
                                                  <ul className="sub-menu">
                                                      <li><a href="#">ஏக காட்சி</a></li>
                                                      
                                                      
                                                  </ul>
                                              </li>
                      </ul>
                      
                                      </li>
                                      <li className="mainmenu__item">
                                          <a href="#" className="mainmenu__link">அறிவுக் களஞ்சியம்</a>
                                      </li>
                    
                                  </ul>
                              
                              </nav>
                          </div>
                          <div className="col-lg-2 d-none d-lg-block">
                          <Link   to='/video'><button type="button" className="yellow btn-lg"><i className="fa fa-play"></i>  EMS WEB TV Channel</button></Link>
              </div>
                      </div>
                      <div className="row">
                          <div className="col-12 d-flex d-lg-none">
                             
                              <div className="mobile-menu"></div>
                             
                          </div>
                      </div>
                  </div>
              </div>
      
            
              <div className="fixed-header">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-2">
                           
                              <a className="sticky-logo" href="index.html">
                                  <img src="assets/img/logo/logo-white.png" alt="logo"/>
                              </a>
                             
                          </div>
                          <div className="col-lg-10">
                              
                             <nav className="sticky-navigation">
                                  <ul className="mainmenu sticky-menu">
                                      <li className="mainmenu__item active menu-item-has-children sticky-has-child">
                                      <Link   to='/home' className="mainmenu__link">எங்களைப் பற்றி</Link>
                                          <ul className="sub-menu hidden-sub">
                                              <li className="menu-item-has-children sticky-has-child">
                                                  <a href="#">நிறுவனர்</a>
                                                  <ul className="sub-menu hidden-sub"> <li><Link   to='/vappa'>வாப்பா நாயகம்</Link></li>
                                                        
                                                
                                                
                                                 <li><Link   to='/thanthai'>தந்தை நாயகம்</Link></li>
                                                 <li><Link   to='/appa'>அப்பா நாயகம்</Link></li>
                                                 
                                            
                                                  </ul>
                                              </li>
                                              <li>
                                                  <a href="#">அஹ்லுல்பைத்<br/> (அநந்தரர்கள்) </a>
                                              </li>
                                              <li>
                                                  <a href="#">கொள்கைகள்</a>
                                              </li>
                                           
                                          </ul>
                                      </li>
                                      <li className="mainmenu__item menu-item-has-children sticky-has-child">
                                      <Link   to='/books' className="mainmenu__link">நூற்கள்</Link>
                                          <ul className="sub-menu hidden-sub">
                                              <li><a href="#">அகராதி</a></li>
                      <li><a href="# ">உபதேசக் கோர்வை </a></li>
                      <li><a href="# ">கவிதை நூற்கள் </a></li>
                      <li><a href="# ">ஞான விளக்க நூற்கள் </a></li>
                      <li><a href="# ">தமிழ் இலக்கிய நூல் </a></li>
                      <li><a href="# ">மௌலித் நூற்கள் </a></li>
                      <li><a href="#">யாஸீன் மௌலானா(ரலி) <br/>நூற்கள்</a></li>
                      <li><a href="# ">வரலாற்று நூற்கள் </a></li>
                      <li><a href="#">வஹ்ஹாபிய்ய எதிர்ப்பு <br/>நூற்கள் </a> </li>
                      <li><a href="# ">வாரிதாதத்துக்கள் <br/>(இறை ஞான வெளிப்பாடு) </a></li>
                                            
                                            
                                          </ul>
                                      </li>
                                      <li className="mainmenu__item menu-item-has-children  sticky-has-child">
                                          <a href="#" className="mainmenu__link">நிகழ்ச்சிகள்</a>
                      <ul className="sub-menu hidden-sub">
                                              <li> <Link   to='/gallery'>புகைப்படங்கள்</Link></li>
                      <li><a href="# ">காணொளி </a></li>
                      <li> <Link   to='/audio'>ஆடியோ </Link></li>
                      <li><a href="# ">நிகழ்வுகள்</a></li>
                                            
                                          </ul>
                                      </li>
                                      <li className="mainmenu__item menu-item-has-children  sticky-has-child">
                                          <a href="#" className="mainmenu__link">கல்வி</a>
                      <ul className="sub-menu hidden-sub">
                      <li>
                                    <a href="#">ஜாமீஆ யாசீன் அறபுக் கல்லூரி     </a>
                                  </li>
                
      
      
                              <li>
                                    <a href="#">மதரஸா நிறுவனர் பற்றி </a>
                                  </li>
                                  <li className="menu-item-has-children">
              <a href="#">கல்விக்கு உதவிடுவோம்  </a>
              <ul>
                                <li><a href="#"> English and Arabic brochure </a></li>
                                      <li><a href="#"> தமிழ் சிற்றேடு</a></li>
                                          </ul>
                        </li>
              
                      </ul>
                                      </li>
                                      <li className="mainmenu__item menu-item-has-children sticky-has-child">
                                          <a href="#" className="mainmenu__link">மனிதா</a>
                                         <ul className="sub-menu hidden-sub">
                        <li>
                          <a href="#">மகான்கள் </a>
                        </li>
                
      
      
                              <li>
                                    <a href="#">அமுத மொழிகள் </a>
                                  </li>
                
      
      
                              <li>
                                    <a href="#">சிந்திக்க சில நொடிகள் </a>
                                  </li>
                
      
      
                              <li>
                                    <a href="#">ஐயமும் - தெளிவும்  </a>
                                  </li>
                
      
      
                          </ul>
                                      </li>
                    <li className="mainmenu__item menu-item-has-children sticky-has-child">
                                          <a href="#" className="mainmenu__link"> ஒரே உள்ளமை</a>
                       <ul className="sub-menu hidden-sub">
                        <li className="menu-item-has-children">
                                                  <a href="#">ஏக உள்ளமை</a>
                                                  <ul className="sub-menu">
                                                      <li><a href="#">ஏக காட்சி</a></li>
                                                      
                                                      
                                                  </ul>
                                              </li>
                      </ul>
                      
                                      </li>
                                      <li className="mainmenu__item">
                                          <a href="#" className="mainmenu__link">அறிவுக் களஞ்சியம்</a>
                                      </li>
                                  </ul>
                                  <div className="sticky-mobile-menu">
                                      <span className="sticky-menu-btn"></span>
                                  </div>
                              </nav>
                            
                          </div>
                      </div>
                  </div>
              </div>
            
      
          </header>
        
        
        
        
        
        </div>



    )
}
}
export default Navbar