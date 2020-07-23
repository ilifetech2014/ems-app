import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Sidebar extends Component{
render(){
    return(
        
       
                  
<div className="col-lg-3 order-lg-1">
<aside className="sidebar">
    
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
   
<br/>




    
    
   
    <div className="sidebar-widget banner-widget">
        <div className="promo-box full-width bg--white">
            <a href="#">
                <img src="assets/img/books/book2.jpg" alt="promo"/>
            </a>
        </div>
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
  <a class="nav-link" href="/moulith_noolkal" id="navbardrop1">
  <i class="fa fa-angle-double-right"></i>
மௌலித் நூற்கள்
  </a>
</li>
<li class="nav-item">
<a class="nav-link" href="/yaseen_noolkal" id="navbardrop1" >
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
<a class="nav-link" href="/vahapiya_ethirpu_noolkal" id="navbardrop1">
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

</aside>
</div>


    )
}
}
export default Sidebar