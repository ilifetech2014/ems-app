import React, { Component } from 'react'

export class Audio extends Component {
    render() {
        return (
            <div>
           
            <main id="content" className="main-content-wrapper">
                <div className="single-post-area pt--40 pb--80 pt-sm--30 pb-sm--60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 order-lg-2 order-1 mb-md--30">
                                <div className="single-post-wrapper">
                                    <article className="post post-details mb--60 mb-sm--40">
                                        <header className="entry-header text-center">
                                            
                                            <h1>EMS AUDIO</h1>
                                           
                                        </header>
                                           <div className="row">
                                        <div className="post-thumbnail col-lg-4 audio-box">
                                        
                                        <audio controls>
                                       
                                        <source src="assets/audio/Maid with the Flaxen Hair.mp3" type="audio/mpeg"/>
                                      Your browser does not support the audio element.
                                      </audio>
                                                
                                                
                                     </div>
                                          <div className="post-thumbnail col-lg-4 audio-box">
                                            <audio controls>
                                                <source src="assets/audio/Sleep Away.mp3" type="audio/mpeg"/>
                                                
                                                Your browser does not support the audio tag.
                                            </audio>
                                        </div>
                                        <div className="post-thumbnail col-lg-4 audio-box">
                                            <audio controls>
                                                <source src="assets/audio/Maid with the Flaxen Hair.mp3" type="audio/mpeg"/>
                                                
                                                Your browser does not support the audio tag.
                                            </audio>
                                        </div>
                                        </div>
                                        <div className="row">
                                          <div className="post-thumbnail col-lg-4 audio-box">
                                            <audio controls>
                                                <source src="assets/audio/Sleep Away.mp3" type="audio/mp3"/>
                                                
                                                Your browser does not support the audio tag.
                                            </audio>
                                        </div>
                                          <div className="post-thumbnail col-lg-4 audio-box">
                                           <audio controls>
                                                <source src="assets/audio/Maid with the Flaxen Hair.mp3" type="audio/ogg"/>
                                                
                                                Your browser does not support the audio tag.
                                            </audio>
                                        </div>
                                        <div className="post-thumbnail col-lg-4 audio-box">
                                            <audio controls>
                                                <source src="assets/audio/Sleep Away.mp3" type="audio/ogg"/>
                                                
                                                Your browser does not support the audio tag.
                                            </audio>
                                        </div>
                                        </div>
                                    
                                    </article>
                                    <div className="comment">
                                        <div className="comment-respond">
                                            <h3 className="comment-reply-title">LEAVE A REPLY</h3>
                                            <ul className="comment-list">
                                                <li>
                                                    <div className="single-comment">
                                                        <div className="comment-avatar">
                                                            <img src="assets/img/others/comment-1.jpg" alt="comment"/>
                                                        </div>
                                                        <div className="comment-info">
                                                            <div className="comment-meta">
                                                                <h5 className="comment-author"><a href="#">Julia Rebeca</a></h5>
                                                                <span className="comment-date">30 Janurary, 2018</span>
                                                                <a href="#" className="reply">Reply</a>
                                                            </div>
                                                            <div className="comment-content">
                                                                <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia cntur magn lores eos qui ratione voluptatem sequi nesciunt. Neque porro</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="children">
                                                        <li>
                                                            <div className="single-comment">
                                                                <div className="comment-avatar">
                                                                    <img src="assets/img/others/comment-2.jpg" alt="comment"/>
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="comment-meta">
                                                                        <h5 className="comment-author"><a href="#">Admin</a></h5>
                                                                        <span className="comment-date">30 Janurary, 2018</span>
                                                                        <a href="#" className="reply">Reply</a>
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia cntur magn lores eos qui ratione voluptatem sequi nesciunt. Neque porro</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="single-comment">
                                                        <div className="comment-avatar">
                                                            <img src="assets/img/others/comment-3.jpg" alt="comment"/>
                                                        </div>
                                                        <div className="comment-info">
                                                            <div className="comment-meta">
                                                                <h5 className="comment-author"><a href="#">Julia Rebeca</a></h5>
                                                                <span className="comment-date">30 Janurary, 2018</span>
                                                                <a href="#" className="reply">Reply</a>
                                                            </div>
                                                            <div className="comment-content">
                                                                <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia cntur magn lores eos qui ratione voluptatem sequi nesciunt. Neque porro</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <form className="form comment-form">
                                                <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span></p>
                                                <div className="form-row mb--20">
                                                    <div className="col-12">
                                                        <div className="form__group">
                                                            <label className="form__label" >Comment *</label>
                                                            <textarea name="comment" id="comment" className="form__input form__input--2 form__input--textarea"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row mb--20">
                                                    <div className="col-md-4 mb-sm--20">
                                                        <div className="form__group">
                                                            <label className="form__label">Name *</label>
                                                            <input type="text" id="comment_name" name="comment_name" className="form__input form__input--3"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-sm--20">
                                                        <div className="form__group">
                                                            <label className="form__label" >Email *</label>
                                                            <input type="email" id="comment_email" name="comment_email" className="form__input form__input--3"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form__group">
                                                            <label className="form__label" >Website *</label>
                                                            <input type="url" id="comment_url" name="comment_url" className="form__input form__input--3"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-12">
                                                        <button type="submit" className="form__submit">Post Comment</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 order-lg-1 order-2">
                                <aside className="sidebar">
                                           <div className="category-nav">
                                   
    
                            <ul className="category-nav__menu" id="js-cat-nav">
                                    <h2 className="category-nav__title" id="js-cat-nav-title"><i className="fa fa-bars"></i> <span>Audio Categories</span></h2>
                                        <li className="category-nav__menu__item">
                                            <a href="#"> <i className="fa fa-angle-double-right" aria-hidden="true"></i>Rules Of Islath</a>
                                      
                                        </li>
                                        <li className="category-nav__menu__item">
                                            <a href="#"> <i className="fa fa-angle-double-right" aria-hidden="true"></i>AAN SONGS</a>
                                       
                                        </li>
                                        <li className="category-nav__menu__item">
                                            <a href="#"> <i className="fa fa-angle-double-right" aria-hidden="true"></i>Family</a>
                                        </li>
                                        <li className="category-nav__menu__item">
                                            <a href="#"> <i className="fa fa-angle-double-right" aria-hidden="true"></i>Kids And Adults</a>
                                            <div className="category-nav__submenu">
                                              
                                            </div>
                                        </li>
                                        <li className="category-nav__menu__item">
                                            <a href="#"> <i className="fa fa-angle-double-right" aria-hidden="true"></i>Social</a>
                                            <div className="category-nav__submenu">
                                              
                                            </div>
                                        </li>
                                        
                                       
                                    </ul>
                                </div> 
    
                                   <br/>
    
                                  
                                   
    
                                  
    
    
                                   
                                    <div className="sidebar-widget banner-widget">
                                        <div className="promo-box full-width bg--white">
                                            <a href="#">
                                                <img src="assets/img/books/book1.jpg" alt="promo"/>
                                            </a>
                                        </div>
                                    </div>
                                
                                   
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
          
            </div>
        )
    }
}
export default Audio