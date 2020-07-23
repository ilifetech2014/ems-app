import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
export class Kavithai_Noolkal extends Component {
    render() {
        return (
            <div>
            <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li className="current"><a>கவிதை நூற்கள்</a></li>
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
                    <div class="col-lg-9 order-lg-2 order-1 mb-md--30">
                    <div class="row">
                        <div className="col-lg-6 mb--30">
                            <article class="post sticky single-post format-image">
                                <header class="entry-header text-center">
                                   
                                    <h1 class="post-title">நாயகர் பன்னிரு பாடல்   </h1>
                                    
                                </header>
                                <div class="post-thumbnail">
                                <Link  to='/book14'><img src="assets/img/books/naayagar.jpg" width={240} height={278}/></Link>
                                </div>
                                <div class="post-info text-center">
                                    <div class="post-content">
                                        <p>பூமிக்கே புனிதம் சேர்த்த மதீனாநகர் வாழும் – மனித இனத்துக்கே மாண்பு சேர்த்த மாநபி ஸல்லல்லாஹூ ...</p>
                                    </div>
                                   <Link  to='/book14' className="btn btn-read-more btn-style-3">View More</Link>
                         
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-6 mb--30">
                            <article class="post sticky single-post format-image">
                                <header class="entry-header text-center">
                                   
                                    <h1 class="post-title">அற்புத அகில நாதர்  </h1>
                                    
                                </header>
                                <div class="post-thumbnail">
                                <Link  to='/book13'><img src="assets/img/books/arputha.jpg" width={240} height={278}/></Link>
                                </div>
                                <div class="post-info text-center">
                                    <div class="post-content">
                                        <p>இஃது முஹம்மது நபி ஸல்லல்லாஹூ அலைஹி வஸல்லம் அவர்களை பற்றி, அவர்களின் திருப்பேரர்   ...</p>
                                    </div>
                                   <Link  to='/book13' className="btn btn-read-more btn-style-3">View More</Link>
                         
                                </div>
                            </article>
                        </div>
                     
                        <div className="col-lg-6 mb--30">
                        <article class="post sticky single-post format-image">
                            <header class="entry-header text-center">
                               
                                <h1 class="post-title">குதுபுகள் திலகம் யாஸீன் மௌலானா (ரலி)  </h1>
                                
                            </header>
                            <div class="post-thumbnail">
                            <Link  to='/book9'><img src="assets/img/books/Quthubuhal.jpg" width={240} height={278}/></Link>
                            </div>
                            <div class="post-info text-center">
                                <div class="post-content">
                                    <p>அஹ்மதியத்தால் பிரகாசித்துக் கொண்டிருக்கும் வல்லமை மிக்க காலத்தின் அதிபதி எம் ஆருயிர் தந்தை...</p>
                                </div>
                               <Link  to='/book9' className="btn btn-read-more btn-style-3">View More</Link>
                     
                            </div>
                        </article>
                    </div>
        
                    <div className="col-lg-6 mb--30">
                    <article class="post sticky single-post format-image">
                        <header class="entry-header text-center">
                           
                            <h3 class="post-title">இறைவலிய் செய்யித் முஹம்மத் மௌலானா   </h3>
                            
                        </header>
                        <div class="post-thumbnail">
                        <Link  to='/book8'><img src="assets/img/books/iraivali.jpg" width={240} height={278}/></Link>
                        </div>
                        <div class="post-info text-center">
                            <div class="post-content">
                                <p>எம் தந்தை நாயகம் ஜமாலிய்யா ஸெய்யித் யாஸீன் மௌலானா அல்ஹாஷிமிய் ரலியல்லாஹு அன்ஹு ...</p>
                            </div>
                           <Link  to='/book8' className="btn btn-read-more btn-style-3">View More</Link>
                 
                        </div>
                    </article>
                </div>
                <div className="col-lg-6 mb--30">
                <article class="post sticky single-post format-image">
                    <header class="entry-header text-center">
                       
                        <h3 class="post-title">ஈழவள நாட்டில் பயிர் பெருக்க வாரீர்   </h3>
                        
                    </header>
                    <div class="post-thumbnail">
                    <Link  to='/book5'><img src="assets/img/books/Ezha.jpg" width={240} height={278}/></Link>
                    </div>
                    <div class="post-info text-center">
                        <div class="post-content">
                            <p>ஈழ வள நாட்டில் பயிர் பெருக்க வாரீர் என்ற இந்த கவிதை நூல் ஸ்ரீலங்கா சாகித்திய மண்டலத்தால் வருடம் 1967 ...</p>
                        </div>
                       <Link  to='/book5' className="btn btn-read-more btn-style-3">View More</Link>
             
                    </div>
                </article>
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
                    <div class="tab-content product-thumb-large">
                            <div id="thumb1" class="tab-pane active show fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                            <div id="thumb2" class="tab-pane fade">
                                <img src="assets/img/books/madhab.jpg" alt="product thumb"/>
                            </div>
                            <div id="thumb3" class="tab-pane fade">
                                <img src="assets/img/books/hajj.png" alt="product thumb"/>
                            </div>
                            <div id="thumb4" class="tab-pane fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                            <div id="thumb5" class="tab-pane fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                            <div id="thumb6" class="tab-pane fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                            <div id="thumb7" class="tab-pane fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                            <div id="thumb8" class="tab-pane fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                        </div>
               <div class="product-thumbnail">
                            <div class="thumb-menu owl-carousel" id="thumbmenu" >
                                <div class="thumb-menu-item">
                                    <a href="#thumb1" data-toggle="tab" class="nav-link active">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb2" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb3" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb4" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb5" data-toggle="tab" class="nav-link active">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb6" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb7" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb8" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="modal-box product">
                            <h3 class="product-title">PEACE AND SUBMISSION</h3>
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
export default Kavithai_Noolkal