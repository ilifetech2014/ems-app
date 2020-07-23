import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import data from '../data';
import SocialFollow from './SocialFollow';
import{useSelector,useDispatch} from 'react-redux';
import{detailsProduct} from '../actions/productActions';


function Popup(props){
   const [qty,setQty]=useState(1);
    const productDetails = useSelector((state)=>state.productDetails);
    const dispatch  = useDispatch();
    const product=data.products.find(x=>x._id ===props.match.params.id)
    useEffect(()=>
    {
   dispatch(detailsProduct(props.match.params.id));
        return()=>{
 
        };
    },[]);
    const handleAddToCart = () => {
        props.history.push('/cart' + props.match.params.id + '?qty=' + qty);
      };
   
        return(
            
            <div>
            <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="current"><a>{product.name}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            <div class="main-content-wrapper">
                <div class="single-products-area section-padding section-sm-padding">
                    <div class="container">
                       
                        <section class="single-product bg--white pt--80 pb--80 pt-sm--60 pb-sm--60">
                            <div class="row">
                                <div class="col-lg-6 d-flex flex-row-reverse align-items-center align-items-md-start">
                                 
                                <div id="custCarousel" class="carousel slide" data-ride="carousel" align="center">
                                
                                <div class="carousel-inner">
                                    <div class="carousel-item active"> <img src={`${product.image}`} alt="Books"/> </div>
                                    <div class="carousel-item "> <img src={`${product.image}`} alt="Books"/> </div>
                                    <div class="carousel-item "> <img src={`${product.image}`} alt="Books"/> </div>
                                    <div class="carousel-item"> <img src={`${product.image}`} alt="Books"/> </div>
                                </div>  <a class="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span class="carousel-control-prev-icon"></span> </a> <a class="carousel-control-next" href="#custCarousel" data-slide="next"> <span class="carousel-control-next-icon"></span> </a> 
                                <ol class="carousel-indicators list-inline">
                                    <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel"> <img src={`${product.image}`} class="img-fluid"/> </a> </li>
                                    <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src={`${product.image}`} class="img-fluid"/> </a> </li>
                                    <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src={`${product.image}`} class="img-fluid"/> </a> </li>
                                    <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src={`${product.image}`} class="img-fluid"/> </a> </li>
                                </ol>
                            </div>
                                    
                                 
                                   
                                </div>
                                <div class="col-lg-6">
                                  
                                    <div class="single-product__content"> 
                                        <div class="single-product__top">
                                            <h2 class="single-product__name">{product.name} </h2>
                                            <div class="ratings-wrap">
                                                <div class="ratings">
                                                    <i class="fa fa-star rated"></i>
                                                    <i class="fa fa-star rated"></i>
                                                    <i class="fa fa-star rated"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                                
                                            </div>
                                            <div class="single-product__price">
                                              
                                                <span class="sale-price">Rs.{product.price}.00</span>
                                          <SocialFollow/>  
                                            </div>   
                                                                               
                                        </div>  
                                       
    
                                        <div class="single-product__middle">
                                            <p class="single-product__short-desc">{product.short_description}</p>
                                            <p class="product-availability"><i class="fa fa-check-circle"></i>{product.countInStock} in Stock</p> 
    
                                            <div class="product-action-wrapper">
                                                <div class="quantity">
                                                   <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                                                   {[...Array(product.countInStock).keys()].map(x=>
                                                    
                                                        <option value={x+1}>{x+1}</option>
                                                    )
                                                   }
                                                   </select>
                                                </div>
                                                {
                                                product.countInStock > 0 && 
                                                (
                                                    <button onClick={handleAddToCart} className="button primary"> Add to Cart</button>
                                                )
                                                }
                                               
                                               
                                            </div>  
                                           
                                        </div> 
    
                                       
                                       
                                    </div>
                                   
                                </div>
                            </div>
                        </section>
               
                        <section class="single-product-tab pt--60 pb--40 pt-sm--40 pb-sm--30">
                            <div class="row">
                                <div class="col-12">
                                    <ul class="single-product-tab__head nav nav-tab" id="singleProductTab" role="tablist">
                                        <li class="nav-item single-product-tab__item">
                                            <a class="nav-link single-product-tab__link active" id="nav-desc-tab" data-toggle="tab" href="#nav-desc" role="tab" aria-controls="nav-desc" aria-selected="true">Description</a>
                                        </li>
                                      

                                    </ul>
                                    <div class="single-product-tab__content tab-content bg--white">
                                        <div class="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="nav-desc-tab">
                                         
                                           
                                            <p class="product-description">{product.description1}</p>
                                            <p class="product-description">{product.description2}</p>
                                         
                                       
                                        
                                   
                                   
                                   
                                   </div>
                                        
                             
                                    </div>
                                </div>
                            </div>
                        </section>
                        
    
    
    
                    </div>
                </div>
            </div>
           
            
            </div>
        )
    
}
export default Popup