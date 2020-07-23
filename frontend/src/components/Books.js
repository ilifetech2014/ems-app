import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Sidebar from'./Sidebar';
import data from '../data'
export class Books extends Component {
    render() {
        return (
            <div>
            <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li className="current"><a>BOOKS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        
        <main id="content" className="main-content-wrapper">
            <div className="shop-area pt--40 pb--80 pt-sm--30 pb-sm--60">
                <div className="container">
                    <div className="row">
                    <Sidebar/>
                        <div className="col-lg-9 order-lg-2 mb-md--40">
                            
                            <div className="shop-toolbar">
                                <div className="shop-toolbar__grid-list">
                                    <ul className="nav">
                                        <li>
                                            <a className="active" data-toggle="tab" href="#grid"><i className="fa fa-th"></i></a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#list"><i className="fa fa-list"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="shop-toolbar__shorter">
                                    <label>Short By:</label>
                                    <select className="short-select nice-select">
                                        <option value="1">Relevance</option>
                                        <option value="2">Name, A to Z</option>
                                        <option value="3">Name, Z to A</option>
                                        <option value="4">Price, low to high</option>
                                        <option value="5">Price, high to low</option>
                                    </select>
                                </div>
                                <span className="shop-toolbar__product-count">There Are 13 Products.</span>
                            </div>
                           
                            <div className="main-shop-wrapper">
                                <div className="tab-content" id="myTabContent-2">
                                    <div className="tab-pane show active" id="grid">
                                        <div className="product-grid-view three-column">

                                                 
     
                                                    <div className="products row">
                                                    {
                                                      data.products.map(product=>
                                                        
                                                          <div className="product-box product-box-hover-up product-box-height bg--white color-1 col-lg-3">
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
                                                                  <div className="product-box__detail">
                                                                  <Link to = {'/product'+ product._id}><button className="btn btn-md detail">View Detail</button></Link>
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
                                                           

                                            


                                            
                                            
                                            <div className="row no-gutters">
                                                <div className="col-12">
                                                    <ul className="pagination">
                                                        <li className="prev"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                                                        <li className="current"><a href="#">1</a></li>
                                                        <li><a href="#">2</a></li>
                                                        <li><a href="#">3</a></li>
                                                        <li><a href="#">4</a></li>
                                                        <li className="next"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="list">
                                        <div className="product-list-view">
                                            <div className="product-box product-box--list bg--white">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-box__img">
                                                        <img src="assets/img/books/Holy_Buhari.jpg" alt="product" className="primary-image"/>
                                                        <img src="assets/img/books/Holy_Buhari.jpg" alt="product" className="secondary-image"/>
                                                            <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-box__content">
                                                        <h3 className="product-box__title"><Link   to='/book1'>ஸஹீஹி லில் இமாமில் புகாரீ</Link></h3>
                                                            <div className="ratings">
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="product-box__price">
                                                                <span className="regular-price">$180.00</span>
                                                                <span className="sale-price">$160.00</span>
                                                            </div>
                                                            <p className="product-box__desc">
                                                            கருணாகர காரூண்யனான அல்லாஹ்வின்  திருநாமத்தைக் கொண்டு இதைத் தொடங்குகிறேன்.  அல்லாஹ்வுக்கே எல்லாப் புகழும்  அவனோ எமக்கு நேரானா பாதையை நேர்வழியாகக் காட்டியவன்
                                                            </p>
                                                            <div className="product-box__action action-4">
                                                                <a href="#" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i> Add to cart</a>
                                                                <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                                                <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box product-box--list bg--white">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-box__img">
                                                        <img src="assets/img/books/Holy_Yasin.jpg" alt="product" className="primary-image"/>
                                                        <img src="assets/img/books/Holy_Yasin.jpg" alt="product" className="secondary-image"/>
                                                            <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-box__content">
                                                        <h3 className="product-box__title"><Link   to='/book2'>யாஸீன் மௌலானா(ரலி) மௌலிது </Link></h3>
                                                            <div className="ratings">
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="product-box__price">
                                                                <span className="regular-price">$120.00</span>
                                                                <span className="sale-price">$100.00</span>
                                                            </div>
                                                            <p className="product-box__desc">
                                                            ஜமாலிய்யா அஸ்ஸையித் யாஸீன் மௌலானா(ரலி) அவர்கள் நபிகள் நாயகம்(ஸல்) அவர்களின் 33 ஆம் தலைமுறைப் பேரராக இலங்கை திக்குவல்லை எனும் ஊரின் 29-19-1899 அன்று பிறந்தார்கள்
                                                            </p>
                                                            <div className="product-box__action action-4">
                                                                <a href="#" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i> Add to cart</a>
                                                                <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                                                <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box product-box--list bg--white">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-box__img">
                                                        <img src="assets/img/books/Holy_Yaasin.jpg" alt="product" className="primary-image"/>
                                                        <img src="assets/img/books/Holy_Yaasin.jpg" alt="product" className="secondary-image"/>
                                                            <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-box__content">
                                                        <h3 className="product-box__title"><Link   to='/book3'>யாஸீன் நாயகம் (ரலி) </Link></h3>
                                                            <div className="ratings">
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="product-box__price">
                                                                <span className="regular-price">$130.00</span>
                                                                <span className="sale-price">$90.00</span>
                                                            </div>
                                                            <p className="product-box__desc">
                                                            ஜமாலிய்யா செய்யிது யாஸீன் மௌலானா அவர்கள் திக்குவலை எனும் ஊரில் 1899இல் பிறந்து வெலிகமையில் வாழ்ந்து 1966ஆம் ஆண்டு தென்னிந்தியாவில் திருமுல்லைவாசல் எனும் ஊரில் இறையடிச் சேர்ந்தார்கள்.
                                                            </p>
                                                            <div className="product-box__action action-4">
                                                                <a href="#" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i> Add to cart</a>
                                                                <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                                                <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box product-box--list bg--white">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-box__img">
                                                        <img src="assets/img/books/abbasiyakkal1.jpg" alt="product" className="primary-image"/>
                                                        <img src="assets/img/books/abbasiyakkal1.jpg" alt="product" className="secondary-image"/>
                                                            <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-box__content">
                                                        <h3 className="product-box__title"><Link   to='/book4'>அப்பாஸியாக்கள் </Link></h3>
                                                            <div className="ratings">
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="product-box__price">
                                                                <span className="regular-price">$110.00</span>
                                                                <span className="sale-price">$80.00</span>
                                                            </div>
                                                            <p className="product-box__desc">
                                                            உமவிய்ய ஆட்சி முடிய அப்பாஸிகள் ஆட்சி ஆரம்பமாயிற்று. அது அறிவிற்கொரு முக்கிய காலமாயிற்றெனக் கூறலாம். எல்லாம் கலைகளும் ஆங்கிருந்தே அக்காலை வெளியாயின என்பது வெள்ளிடைமலை.
                                                            </p>
                                                            <div className="product-box__action action-4">
                                                                <a href="#" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i> Add to cart</a>
                                                                <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                                                <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box product-box--list bg--white">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-box__img">
                                                        <img src="assets/img/books/Ezha.jpg" alt="product" className="primary-image"/>
                                                        <img src="assets/img/books/Ezha.jpg" alt="product" className="secondary-image"/>
                                                            <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-box__content">
                                                        <h3 className="product-box__title"><Link   to='/book5'>ஈழவள நாட்டில் பயிர் பெருக்க வாரீர் </Link></h3>
                                                            <div className="ratings">
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="product-box__price">
                                                                <span className="regular-price">$140.00</span>
                                                                <span className="sale-price">$190.00</span>
                                                            </div>
                                                            <p className="product-box__desc">
                                                            ஈழ வள நாட்டில் பயிர் பெருக்க வாரீர் என்ற இந்த கவிதை நூல் ஸ்ரீலங்கா சாகித்திய மண்டலத்தால் வருடம் 1967 அக்டோபர் மாதத்தில் நடந்த கவியரங்கில் தேர்தெடுக்கப்பட்ட சிறந்த மரபுத் தமிழ் வழி கவிதை நூலாகும்.
                                                            </p>
                                                            <div className="product-box__action action-4">
                                                                <a href="#" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i> Add to cart</a>
                                                                <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                                                <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box product-box--list bg--white">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-box__img">
                                                        <img src="assets/img/books/ManithaNew.jpg" alt="product" className="primary-image"/>
                                                        <img src="assets/img/books/ManithaNew.jpg" alt="product" className="secondary-image"/>
                                                            <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-box__content">
                                                        <h3 className="product-box__title"><Link   to='/book6'>மனிதா </Link></h3>
                                                            <div className="ratings">
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="product-box__price">
                                                                <span className="regular-price">$70.00</span>
                                                                <span className="sale-price">$60.00</span>
                                                            </div>
                                                            <p className="product-box__desc">
                                                            ஓரு குருவிடம் பேசிப்பார்க்கலாம். பேசும்போது உரியமாதிரி முறையோடு பேசவேண்டும். அப்போதுதான் தான் யாரென்பதைக் காட்டிக்கொடுப்பார் அல்லாமல் அதற்கு மாற்றமாய் போய் பேசினால் பொதுவாய் ஆலிம்களுடன் பேசுவதைப் போலிருக்கும். 
                                                            </p>
                                                            <div className="product-box__action action-4">
                                                                <a href="#" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i> Add to cart</a>
                                                                <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                                                <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box product-box--list bg--white">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-box__img">
                                                        <img src="assets/img/books/KurunjiSuvai.jpg" alt="product" className="primary-image"/>
                                                        <img src="assets/img/books/KurunjiSuvai.jpg" alt="product" className="secondary-image"/>
                                                            <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-box__content">
                                                        <h3 className="product-box__title"> <Link   to='/book7'>குறிஞ்சிச் சுவை </Link></h3>
                                                            <div className="ratings">
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="product-box__price">
                                                                <span className="regular-price">$90.00</span>
                                                                <span className="sale-price">$70.00</span>
                                                            </div>
                                                            <p className="product-box__desc">
                                                            எங்கணுமழகு, சுற்றிப் பார்க்குமிடனெல்லாம் சுவைதரும் எழிற் காட்சிகள். பலப்பல நிறங்களைக் காழ்ந்து மனிதனைத் தன் பக்கம் இழுக்கின்றது மகாபெரும் சத்து. பிரபஞ்சமே அதாய்த் திகழ்கின்ற தெனின் பொய்ப்படாது.
                                                            </p>
                                                            <div className="product-box__action action-4">
                                                                <a href="#" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i> Add to cart</a>
                                                                <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                                                <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box product-box--list bg--white">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-box__img">
                                                        <img src="assets/img/books/iraivali.jpg" alt="product" className="primary-image"/>
                                                        <img src="assets/img/books/iraivali.jpg" alt="product" className="secondary-image"/>
                                                            <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-box__content">
                                                        <h3 className="product-box__title"><Link   to='/book8'>இறைவலிய் செய்யித் முஹம்மத் மௌலானா </Link></h3>
                                                            <div className="ratings">
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="product-box__price">
                                                                <span className="regular-price">$95.00</span>
                                                                <span className="sale-price">$70.00</span>
                                                            </div>
                                                            <p className="product-box__desc">
                                                            எம் தந்தை நாயகம் ஜமாலிய்யா ஸெய்யித் யாஸீன் மௌலானா அல்ஹாஷிமிய் ரலியல்லாஹு அன்ஹு அவர்களின் தாயார் உம்மு ஹபீபாக் கண்ணே யாவார்கள். உம்மு ஹபீபாக் கண்ணே அவர்களின் தகப்பனார் ஸெய்யித் முஹம்மத் மௌலானா அவர்கள்.
                                                            </p>
                                                            <div className="product-box__action action-4">
                                                                <a href="#" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i> Add to cart</a>
                                                                <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                                                <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box product-box--list bg--white">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-box__img">
                                                        <img src="assets/img/books/Quthubuhal.jpg" alt="product" className="primary-image"/>
                                                        <img src="assets/img/books/Quthubuhal.jpg" alt="product" className="secondary-image"/>
                                                            <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-box__content">
                                                        <h3 className="product-box__title"><Link   to='/book9'>குதுபுகள் திலகம் யாஸீன் மௌலானா (ரலி) </Link></h3>
                                                            <div className="ratings">
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="product-box__price">
                                                                <span className="regular-price">$108.00</span>
                                                                <span className="sale-price">$90.00</span>
                                                            </div>
                                                            <p className="product-box__desc">
                                                            அஹ்மதியத்தால் பிரகாசித்துக் கொண்டிருக்கும் வல்லமை மிக்க காலத்தின் அதிபதி எம் ஆருயிர் தந்தை குத்புஸ்ஸமான் ஷம்ஷூல் வுஹூத் ஜமாலியா அஸ்ஸெய்யித் கலீல் அவ்ன் அல் ஹஸனிய்யுல் ஹூஸைனிய்யுல் ஹாஷிமிய் மௌலானா நாயகம் அவர்களின் தந்தை நாயகமான 
                                                            </p>
                                                            <div className="product-box__action action-4">
                                                                <a href="#" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i> Add to cart</a>
                                                                <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                                                <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-box product-box--list bg--white">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-box__img">
                                                        <img src="assets/img/books/Oliyai.jpg" alt="product" className="primary-image"/>
                                                        <img src="assets/img/books/Oliyai.jpg" alt="product" className="secondary-image"/>
                                                            <a href="#" data-toggle="modal" data-target="#productModal" className="product-box__quick-view"><i className="fa fa-search"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-box__content">
                                                        <h3 className="product-box__title"><a href="#">ஒளியை மறைக்கத் துணியும் தூசி</a></h3>
                                                            <div className="ratings">
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star rated"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="product-box__price">
                                                                <span className="regular-price">$108.00</span>
                                                                <span className="sale-price">$90.00</span>
                                                            </div>
                                                            <p className="product-box__desc">
                                                            வஹ்ஹாபிகள் யார் என்பது பற்றியும் இக்கும்பல் எவ்வாறு உற்பத்தியானது என்பது பற்றியும் எழுதியுள்ளோம். இந்த வஹ்ஹாபிகளின் கோட்பாடுகளும், கொள்கைகளும் என்ன என்பதை வகைப்படுத்தி எழுதியுள்ளமையால் வஹ்ஹாபிகளை இலகுவாக இனம் கண்டு கொள்ளவியலும். 
                                                            </p>
                                                            <div className="product-box__action action-4">
                                                                <a href="#" className="add-to-cart" data-toggle="tooltip" data-placement="top" title="Add to cart"><i className="fa fa-shopping-bag"></i> Add to cart</a>
                                                                <a href="#" className="add-to-wishlist" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"></i></a>
                                                                <a href="#" className="add-to-compare" data-toggle="tooltip" data-placement="top" title="Add to compare"><i className="fa fa-refresh"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="pagination">
                                                <li className="prev"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                                                <li><a href="#">1</a></li>
                                                <li className="current"><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li className="next"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                      
                      
                      
                    
                    </div>
                </div>
            </div>
        </main>
       
        
        <a class="scroll-to-top" href="#"><i class="fa fa-angle-up"></i></a>

       
        <div class="modal fade product-modal" id="productModal" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div class="row">
                    <div class="col-md-5">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="custCarousel" class="carousel slide" data-ride="carousel" align="center">
                                
                                <div class="carousel-inner">
                                    <div class="carousel-item active"> <img src="assets/img/books/Holy_Buhari.jpg" alt="Hills"/> </div>
                                    <div class="carousel-item "> <img src="assets/img/books/KurunjiSuvai.jpg" alt="Hills"/> </div>
                                    <div class="carousel-item "> <img src="assets/img/books/Holy_Buhari.jpg" alt="Hills"/> </div>
                                    <div class="carousel-item"> <img src="assets/img/books/Holy_Buhari.jpg" alt="Hills"/> </div>
                                </div>  <a class="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span class="carousel-control-prev-icon"></span> </a> <a class="carousel-control-next" href="#custCarousel" data-slide="next"> <span class="carousel-control-next-icon"></span> </a> 
                                <ol class="carousel-indicators list-inline">
                                    <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel"> <img src="assets/img/books/Holy Buhari Sheriff.jpg" class="img-fluid"/> </a> </li>
                                    <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="assets/img/books/Kurunji Suvai.jpg" class="img-fluid"/> </a> </li>
                                    <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="assets/img/books/Holy Buhari Sheriff.jpg" class="img-fluid"/> </a> </li>
                                    <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src="assets/img/books/Holy Buhari Sheriff.jpg" class="img-fluid"/> </a> </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                    <div class="col-md-7">
                        <div class="modal-box product">
                            <h3 class="product-title">
                            ஸஹீஹி லில் இமாமில் புகாரீ</h3>
                            <div class="product-price">
                                <span class="regular-price">$100.50</span>
                                <span class="sale-price">$98.98</span>
                            </div>
                            <a class="product-link" href="single-book.html">See all featurs</a>
                            <p class="product-availability">200 In Stock</p> 
                            <div class="product-action-wrapper">
                                <div class="quantity">
                                    <input type="number" class="quantity-input" name="qty" id="qty" value="1" min="1"/>
                                </div>
                                <button type="button" class="btn btn-style-1 add-to-cart color-1">
                                    Add To Cart
                                </button>
                            </div>  
                            
                            <div class="social-share">
                                <h4>Share This Product</h4>
                                <ul class="social boxed-social">
                                    <li class="social__item"><a href="#" class="social__link facebook"><i class="fa fa-facebook"></i></a></li>
                                    <li class="social__item"><a href="#" class="social__link twitter"><i class="fa fa-twitter"></i></a></li>
                                    <li class="social__item"><a href="#" class="social__link google-plus"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="social__item"><a href="#" class="social__link pinterest"><i class="fa fa-pinterest"></i></a></li>
                                    <li class="social__item"><a href="#" class="social__link linkedin"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
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
}
export default Books