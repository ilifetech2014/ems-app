import React, { Component, useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from'axios';
import data from '../data';
import {useSelector,useDispatch} from 'react-redux';
import {listProducts}from '../actions/productActions';
function Home(props) { 
   
   const productList = useSelector(state=>state.productList);
   const {products,loading,error}=productList;
   const dispatch  =useDispatch();

   useEffect(()=>
   {
  dispatch(listProducts());
       return()=>{

       };
   },[])

   
        return (
          <div>
         <main id="content" className="main-content-wrapper">
      
              
              <div className="hero-area pb--40 pb-sm--30">
                  <div className="container">
                      <div className="row custom-row">
                          <div className="col-lg-3">
                             
                              <div className="category-nav">
                                 
      
                              <ul className="category-nav__menu" id="js-cat-nav">
                              <h2 className="category-nav__title" id="js-cat-nav-title"><i className="fa fa-bars"></i> <span>Categories</span></h2>
                                  <li className="category-nav__menu__item">
                                  <Link   to='/akarathi'> <i className="fa fa-angle-double-right" aria-hidden="true"></i>அகராதி</Link>
                                
                                  </li>
                                  <li className="category-nav__menu__item">
                                  <Link   to='/ubathesa_korvai'> <i className="fa fa-angle-double-right" aria-hidden="true"></i>உபதேசக் கோர்வை</Link>
                                 
                                  </li>
                                  <li className="category-nav__menu__item">
                                  <Link   to='/kavithai_noolkal'>  <i className="fa fa-angle-double-right" aria-hidden="true"></i>கவிதை நூற்கள்</Link>
                                  </li>
                                  <li className="category-nav__menu__item">
                                  <Link   to='/gnana_vilaka_noolkal'>  <i className="fa fa-angle-double-right" aria-hidden="true"></i>ஞான விளக்க நூற்கள்</Link>
                                      <div className="category-nav__submenu">
                                        
                                      </div>
                                  </li>
                                  <li className="category-nav__menu__item">
                                  <Link   to='/tamil_ilakiya_noolkal'>  <i className="fa fa-angle-double-right" aria-hidden="true"></i>தமிழ் இலக்கிய நூல்</Link>
                                      <div className="category-nav__submenu">
                                        
                                      </div>
                                  </li>
                                  <li className="category-nav__menu__item">
                                  <Link   to='/moulith_noolkal'><i className="fa fa-angle-double-right" aria-hidden="true"></i> மௌலித் நூற்கள்</Link>
                                  </li>
                                  <li className="category-nav__menu__item">
                                  <Link   to='/yaseen_noolkal'><i className="fa fa-angle-double-right" aria-hidden="true"></i> யாஸீன் மௌலானா(ரலி) நூற்கள்</Link>
                                  </li>
                                  <li className="category-nav__menu__item">
                                  <Link   to='/varalatru_noolkal'> <i className="fa fa-angle-double-right" aria-hidden="true"></i>வரலாற்று நூற்கள்</Link>
                                  </li>
                                  <li className="category-nav__menu__item hidden-lg-menu-item">
                                  <Link   to='/vahapiya_ethirpu_noolkal'><i className="fa fa-angle-double-right" aria-hidden="true"></i>வஹ்ஹாபிய்ய எதிர்ப்பு நூற்கள்</Link>
                                  </li>
                                  <li className="category-nav__menu__item hidden-lg-menu-item">
                                  <Link   to='/varithathukkal'><i className="fa fa-angle-double-right" aria-hidden="true"></i> வாரிதாதத்துக்கள் (இறை ஞான வெளிப்பாடு)</Link>
                                  </li>
                                 
                              </ul>
                              </div> 
                           
                              <div className="category-mobile-menu"></div>
                          </div>
                          <div className="col-lg-6 col-md-12 mb-sm--30">
                          <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="assets/img/slider/home2-slider1.jpg"
                              alt="First slide"
                            />
                           
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="assets/img/slider/home2-slider1.jpg"
                              alt="Third slide"
                            />
                        
                          
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="assets/img/slider/home2-slider1.jpg"
                              alt="Third slide"
                            />
                        
                           
                          </Carousel.Item>
                        </Carousel>
                          </div>
                          <nav class="navbar navbar-expand-lg navbar-dark navbar-right bg-dark d-none d-sm-block d-md-none d-block d-sm-none d-none d-md-block d-lg-none">
                          <a class="navbar-brand" href="#">CATEGORIES</a>
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup1" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNavAltMarkup1">
                            <div class="navbar-nav">
                            <ul class="navbar-nav">
                           
                           
                         <li class="nav-item">
                              <a class="nav-link" href="/akarathi" id="navbardrop1">
                              <i class="fa fa-angle-double-right"></i>அகராதி
                              </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/ubathesa_korvai" id="navbardrop1">
                            <i class="fa fa-angle-double-right"></i>உபதேசக் கோர்வை
                            </a>
                          </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/kavithai_noolkal" id="navbardrop1">
                              <i class="fa fa-angle-double-right" ></i>
                              கவிதை நூற்கள்
                              </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/gnana_vilaka_noolkal" id="navbardrop1">
                            <i class="fa fa-angle-double-right"></i>
                            ஞான விளக்க நூற்கள்
                            </a>
                          </li>

                          <li class="nav-item">
                          <a class="nav-link" href="/tamil_ilakiya_noolkal" id="navbardrop1">
                          <i class="fa fa-angle-double-right"></i>
                          தமிழ் இலக்கிய நூல்
                          </a>
                        </li>
                        
                        <li class="nav-item">
                        <a class="nav-link" href="/moulith_noolkal" id="navbardrop1" >
                        <i class="fa fa-angle-double-right"></i>
மௌலித் நூற்கள்
                        </a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link" href="/yaseen_noolkal" id="navbardrop1">
                      <i class="fa fa-angle-double-right" ></i>
யாஸீன் மௌலானா(ரலி) நூற்கள்
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/varalatru_noolkal" id="navbardrop1">
                      <i class="fa fa-angle-double-right"></i>
வரலாற்று நூற்கள்
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/vahapiya_ethirpu_noolkal" id="navbardrop">
                      <i class="fa fa-angle-double-right"></i>
வஹ்ஹாபிய்ய எதிர்ப்பு நூற்கள்
                      </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/varithathukkal" id="navbardrop1">
                    <i class="fa fa-angle-double-right"></i>
வாரிதாதத்துக்கள்
                    </a>
                  </li>
                          </ul>
                            </div>
                          </div>
                        </nav>
                          <div className="col-lg-3 col-md-4 d-md-none d-lg-block">
                              <div className="row no-gutters">
                                  <div className="col-md-12 col-sm-6">
                                      <div className="promo-box full-width mb-mdsm--10 mb-xsm--10">
                                          <a href="#">
                                              <img src="assets/img/books/voices.png" alt="promo"/>
                                          </a>
                                      </div>
                                  </div>
                                  <div className="col-md-12 col-sm-6">
                                      <div className="promo-box full-width">
                                          <a href="#">
                                              <img src="assets/img/books/finance.jpg" alt="promo"/>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
             
             
              
              <div className="promo-area section-padding section-sm-padding">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="promo-box mb-sm--20">
                                  <a href="#"><img src="assets/img/books/banner1.jpg" alt="promo"/></a>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="promo-box">
                                  <a href="#"><img src="assets/img/books/banner2.jpg" alt="promo"/></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            
              <div className="category-porducts-area section-padding section-sm-padding">
                  <div className="container">
                      <div className="row"></div>
                      <div className="row no-gutters">
                          <div className="col-lg-3 col-md-4">
                              
                              <div className="promo-box w-sm-100">
                                  <a href="#">
                                      <img src="assets/img/books/book1.jpg" alt="promo"/>
                                  </a>
                              </div>
                          </div>
                          <div className="col-lg-9 col-md-8 mt-sm--30">
                              <div className="row no-gutters">
                                  <div className="col-lg-4">
                                      <div className="product-box product-box-hover-up product-box-height bg--white color-1 ">
                                          <div className="product-box__img">
                                              <iframe width="280" height="278" src="https://www.youtube.com/embed/9I0Tu_GAuf4" frameborder="{0}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                                         
                                            
                                             
                                          </div>
                                          <div className="product-box__content">
                                              <h3 className="product-box__title"><a href="#">gnanathin padikal </a></h3>
                                              <div className="entry-meta">
                                                  <span className="post-author">
                                                      <span className="post-by">230 views</span>
                                                     
                                                  </span>
                                                  <span className="post-separator">|</span>
                                                  <span className="post-date">1 month ago</span>
                                              </div>
                                             
                                          </div>
                                         
                                      </div>
                                      </div>
                                      <div className="col-lg-4  d-none d-xl-block d-none d-lg-block d-xl-none ">
                                      <div className="product-box product-box-hover-up product-box-height bg--white color-1">
                                          <div className="product-box__img">
                                              <iframe width="280" height="278" src="https://www.youtube.com/embed/s2R3-AFSQYk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                           
                                              <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                          </div>
                                          <div className="product-box__content">
                                              <h3 className="product-box__title"><a href="#">வஹ்தத்துல் வுஜூதி வஹ்தத்துல் வுஜூதி</a></h3>
                                              <div className="entry-meta">
                                                  <span className="post-author">
                                                      <span className="post-by">230 views</span>
                                                     
                                                  </span>
                                                  <span className="post-separator">|</span>
                                                  <span className="post-date">1 month ago</span>
                                              </div>
                                             
                                          </div>
                                         
                                      </div>
                                      </div>
                                      <div className="col-lg-4  d-none d-xl-block d-none d-lg-block d-xl-none ">
                                      <div className="product-box product-box-hover-up product-box-height bg--white color-1">
                                          <div className="product-box__img">
                                              <iframe width="280" height="278" src="https://www.youtube.com/embed/ySZW8DNDfPk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                              
                                              <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                          </div>
                                          <div className="product-box__content">
                                              <h3 className="product-box__title"><a href="#">Wappa Nayagam Bk Rls </a></h3>
                                              <div className="entry-meta">
                                                  <span className="post-author">
                                                      <span className="post-by">230 views</span>
                                                     
                                                  </span>
                                                  <span className="post-separator">|</span>
                                                  <span className="post-date">1 month ago</span>
                                              </div>
                                              
                                            
                                          </div>
                                         
                                      </div>
                                  
                                  </div>
                              </div>
                              <div className="row no-gutters">
                                 
                                     <div className="col-lg-4 ">
                                          <div className="product-box horizontal horizontal--2 bg--white color-1">
                                              <div className="product-box__img">
                                                  <iframe width="280" height="112" src="https://www.youtube.com/embed/ie9vmOHxZds" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                              </div>
                                          </div>
                                          </div>
                                          <div className="col-lg-4 d-none d-xl-block d-none d-lg-block d-xl-none ">
                                          <div className="product-box horizontal horizontal--2 bg--white color-1 ">
                                              <div className="product-box__img">
                                                  <iframe width="280" height="112" src="https://www.youtube.com/embed/s2R3-AFSQYk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                              </div>
                                             
                                          </div>
                                          </div>
                                          <div className="col-lg-4 d-none d-xl-block d-none d-lg-block d-xl-none ">
                                          <div className="product-box horizontal horizontal--2 bg--white color-1">
                                              <div className="product-box__img">
                                                  <iframe width="280" height="112" src="https://www.youtube.com/embed/ie9vmOHxZds" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                              </div>
                                       
                                          </div>
                                       
                                      </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            
              <div className="category-porducts-area section-padding section-sm-padding">
                  <div className="container">
                      <div className="row no-gutters">
                          <div className="col-lg-3 col-md-4">
                            
                              <div className="promo-box w-sm-100">
                                  <a href="#">
                                      <img src="assets/img/books/book2.jpg" alt="promo"/>
                                  </a>
                              </div>
                          </div>
                          <div className="col-lg-9 col-md-8 mt-sm--30">
                              <div className="row no-gutters">
                            
                              <Carousel>
                              <Carousel.Item>
                              <div className="products">
                              {
                                data.products.map(product=>
                                  
                                    <div className="product-box product-box-hover-up product-box-height bg--white color-1 col-lg-4">
                                        <div className="product-box__img">
                                        <Link to = {'/product'+ product._id}> <img src={`${product.image}`} alt="product" className="primary-image"/></Link>
                                        <Link to = {'/product'+ product._id}><img src={`${product.image}`} alt="product" className="secondary-image"/></Link>
                                            
                                        </div>
                                        <div className="product-box__content">
                                            <h3 className="product-box__title">  <Link to = {'/product'+ product._id}>{product.name}</Link></h3>
                                           
                                            <div className="ratings">
                                                <i className="fa fa-star rated"></i>
                                                <i className="fa fa-star rated"></i>
                                                <i className="fa fa-star rated"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="product-box__price">
                                                <span className="sale-price">{product.price}.00</span>
                                            </div>
                                            
                                        </div>
                                        <div className="product-box__action action-3">
                                            <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                            <Link to = {'/cart'+ product._id} className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i></Link>
                                            <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                        </div>
                                    </div>
                                    
                                    )

                              }
                            
                                      </div>
                               
                              </Carousel.Item>
                              
                            
                            
                              
                            </Carousel>
                                </div>
                               
                                
                               
                              
                              <div className="row no-gutters">
                                  
                              <div className="col-lg-4">
                                          <div className="product-box horizontal horizontal--2 bg--white color-1">
                                              <div className="product-box__img">
                                                  <img src="assets/img/books/Kamoos.jpg" alt="product" className="primary-image"/>
                                                  <img src="assets/img/books/Kamoos.jpg" alt="product" className="secondary-image"/>
                                              </div>
                                              <div className="product-box__content">
                                                  <h3 className="product-box__title"><a href="#">அகராதி</a></h3>
                                                  <div className="ratings">
                                                      <i className="fa fa-star rated"></i>
                                                      <i className="fa fa-star rated"></i>
                                                      <i className="fa fa-star rated"></i>
                                                      <i className="fa fa-star"></i>
                                                      <i className="fa fa-star"></i>
                                                  </div>
                                                  <div className="product-box__price">
                                                      <span className="regular-price">$100.00</span>
                                                      <span className="sale-price">$90.00</span>
                                                  </div>
                                              </div>
                                          </div>
                                          </div>
                                          <div className="col-lg-4  d-none d-xl-block d-none d-lg-block d-xl-none ">
                                          <div className="product-box horizontal horizontal--2 bg--white color-1">
                                              <div className="product-box__img">
                                                  <img src="assets/img/books/ManithaNew.jpg" alt="product" className="primary-image"/>
                                                  <img src="assets/img/books/ManithaNew.jpg" alt="product" className="secondary-image"/>
                                              </div>
                                              <div className="product-box__content">
                                                  <h3 className="product-box__title"><a href="#">உபதேசக் கோர்வை</a></h3>
                                                  <div className="ratings">
                                                      <i className="fa fa-star rated"></i>
                                                      <i className="fa fa-star rated"></i>
                                                      <i className="fa fa-star rated"></i>
                                                      <i className="fa fa-star"></i>
                                                      <i className="fa fa-star"></i>
                                                  </div>
                                                  <div className="product-box__price">
                                                      <span className="sale-price">$100.00</span>
                                                  </div>
                                              </div>
                                          </div>
                                          </div>
                                          <div className="col-lg-4 d-none d-xl-block d-none d-lg-block d-xl-none ">
                                          <div className="product-box horizontal horizontal--2 bg--white color-1">
                                              <div className="product-box__img">
                                                  <img src="assets/img/books/Ezha.jpg" alt="product" className="primary-image"/>
                                                  <img src="assets/img/books/Ezha.jpg" alt="product" className="secondary-image"/>
                                              </div>
                                              <div className="product-box__content">
                                                  <h3 className="product-box__title"><a href="#">கவிதை நூற்கள்</a></h3>
                                                  <div className="ratings">
                                                      <i className="fa fa-star rated"></i>
                                                      <i className="fa fa-star rated"></i>
                                                      <i className="fa fa-star rated"></i>
                                                      <i className="fa fa-star"></i>
                                                      <i className="fa fa-star"></i>
                                                  </div>
                                                  <div className="product-box__price">
                                                      <span className="sale-price">$100.00</span>
                                                  </div>
                                              </div>
                                          </div>
                                          </div>
                                      
                                      </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              

              
              <div className="promo-area section-padding section-sm-padding">
                  <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <div className="promo-box">
                                  <a href="#"><img src="assets/img/books/slider.jpg" alt="promo"/></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
             
              <div className="category-list-area bg--white pt--80 pb--80 pt-sm--60 pb-sm--60">
                  <div className="container">
                      <div className="row mb--30">
                          <div className="col-12">
                              <div className="section-title title-1">
                                  <h2>OUR CATEGORIES</h2>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-4 col-md-6 mb--30">
                              <div className="category-box">
                                  <h2 className="category-box__title">நூற்கள்</h2>
                                  <ul className="category-box__list">
                                      <li><a href="#">அகராதி</a></li>
                                      <li><a href="#">உபதேசக் கோர்வை</a></li>
                                      <li><a href="#">கவிதை நூற்கள்</a></li>
                                      <li><a href="#">ஞான விளக்க நூற்கள்</a></li>
                                     
                                  </ul>
                                  <div className="category-box__img">
                                      <img src="assets/img/books/abbasiyakkal.jpg" alt="Category"/>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mb--30">
                              <div className="category-box">
                                  <h2 className="category-box__title">நிகழ்ச்சிகள்</h2>
                                  <ul className="category-box__list">
                                       <li><a href="#">புகைப்படங்கள்</a></li>
                                      <li><a href="#">காணொளி</a></li>
                                      <li><a href="#">ஆடியோ</a></li>
                                      <li><a href="#">நிகழ்வுகள்</a></li>
                                  </ul>
                                  <div className="category-box__img">
                                      <img src="assets/img/books/arputha.jpg" alt="Category"/>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mb--30">
                              <div className="category-box">
                                  <h2 className="category-box__title">கல்வி</h2>
                                  <ul className="category-box__list">
                                    <li>
                                    <a href="#">ஜாமீஆ யாசீன் அறபுக் கல்லூரி     </a>
                                  </li>
                
      
      
                              <li>
                                    <a href="#">மதரஸா நிறுவனர் பற்றி </a>
                                  </li>
                                  </ul>
                                  <div className="category-box__img">
                                      <img src="assets/img/books/arabu_eakiya_vazharchi.jpg" alt="Category"/>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mb--30">
                              <div className="category-box">
                                  <h2 className="category-box__title">மனிதா</h2>
                                  <ul className="category-box__list">
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
                                  <div className="category-box__img">
                                      <img src="assets/img/books/arul_mozhi.jpg" alt="Category"/>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mb-md--30">
                              <div className="category-box">
                                  <h2 className="category-box__title">ஒரே உள்ளமை</h2>
                                  <ul className="category-box__list">
                                     <li><a href="#"> ஏக காட்சி</a></li>
                                  </ul>
                                  <div className="category-box__img">
                                      <img src="assets/img/books/bakthipaamaalai.jpg" alt="Category"/>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mb-md--30">
                              <div className="category-box">
                                  <h2 className="category-box__title">அறிவுக் களஞ்சியம்</h2>
                                  <ul className="category-box__list">
                                    <li>
                                    <a href="#">தமிழ் </a>
                                  </li>
                
      
      
                              <li>
                                    <a href="#">விருதுகள்  </a>
                                  </li>
                
      
      
                              <li>
                                    <a href="#">நூல் விமர்சனங்கள்  </a>
                                  </li>
                
                                  </ul>
                                  <div className="category-box__img">
                                      <img src="assets/img/books/barsanjimawlid.jpg" alt="Category"/>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
              </div>
             
              
          </main>
         
      
         
      
        
          <a className="scroll-to-top" href="#"><i className="fa fa-angle-up"></i></a>
          <div className="products">
          {
            data.products.map(product=>

          <div className="modal fade product-modal" id="productModal" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="row">
                    <div className="col-md-5">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="custCarousel" class="carousel slide" data-ride="carousel" align="center">
                                
                                <div class="carousel-inner">
                                    <div class="carousel-item active"> <img src={`${product.image}`} alt="Hills"/> </div>
                                    <div class="carousel-item "> <img src={`${product.image}`} alt="Hills"/> </div>
                                    <div class="carousel-item "> <img src={`${product.image}`} alt="Hills"/> </div>
                                    <div class="carousel-item"> <img src={`${product.image}`}alt="Hills"/> </div>
                                </div>  <a class="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span class="carousel-control-prev-icon"></span> </a> <a class="carousel-control-next" href="#custCarousel" data-slide="next"> <span class="carousel-control-next-icon"></span> </a> 
                                <ol class="carousel-indicators list-inline">
                                    <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel"> <img src={`${product.image}`} class="img-fluid"/> </a> </li>
                                    <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src={`${product.image}`} class="img-fluid"/> </a> </li>
                                    <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src={`${product.image}`} class="img-fluid"/> </a> </li>
                                    <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src={`${product.image}`} class="img-fluid"/> </a> </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                        </div>
                    
                        <div className="col-md-7">
                        <div className="modal-box product">
                        <h3 className="product-box__title">  <Link to = {'/product'+ product._id}>{product.name}</Link></h3>
                            <div className="product-price">
                                <span className="regular-price">Rs.{product.price}</span>
                               
                            </div>
                         
                
                            <div className="product-action-wrapper">
                                <div className="quantity">
                                    <input type="number" className="quantity-input" name="qty" id="qty" value="1" min="1"/>
                                </div>
                                <button type="button" className="btn btn-style-1 add-to-cart color-1">
                                    Add To Cart
                                </button>
                            </div>  
                           
                            <div className="social-share">
                                <h4>Share This Product</h4>
                                <ul className="social boxed-social">
                                    <li className="social__item"><a href="#" className="social__link facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li className="social__item"><a href="#" className="social__link twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li className="social__item"><a href="#" className="social__link google-plus"><i className="fa fa-google-plus"></i></a></li>
                                    <li className="social__item"><a href="#" className="social__link pinterest"><i className="fa fa-pinterest"></i></a></li>
                                    <li className="social__item"><a href="#" className="social__link linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        
       
                    </div>
                </div>
              </div>
            </div>
     
          </div>
            )
          }
          </div>
          </div>
      
      
    
      
      
          
        );
      
      }
      export default Home
