import React, { Component, useEffect } from 'react'
import { addToCart,removeFromCart } from '../actions/cartActions';
import{useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
function Cart(props){

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;
  
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
      dispatch(removeFromCart(productId));
    }
    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
    }, []);
  const checkoutHandler= () =>
  {
      props.history.push("register?redirect=shipping");
  }
        return (
            <div>
    
               
       
        <main id="content" classNameName="main-content-wrapper">
           

        
        <div className="main-content-wrapper">
        <div className="cart-area pt--40 pb--80 pt-sm--30 pb-sm--60">
            <div className="container">
                <div className="cart-wrapper bg--white mb--80 mb-sm--60">
                    <div className="row">
                        <div className="col-12">
                         
                            <form action="#" className="form form--cart">
                                <div className="cart-table table-content table-responsive">
                                    <table className="table mb--30">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {
                                                cartItems.length===0 ?
                                                <tr><div className="center"><h3>Cart is Empty</h3></div></tr>
                                                :
                                                cartItems.map(item=>
                                                    
                                                    <tr>
                                                   
                                               
                                                    <td>
                                                    <a href="#">
                                                        <img src={item.image} alt="product"/>
                                                    </a>
                                                </td>
                                                <td className="wide-column">
                                                    <h3><Link to = {'/product'+ item.product}>{item.name}</Link></h3>
                                                </td>
                                                <td className="cart-product-price"><strong>Rs.{item.price}.00</strong></td>
                                                <td>

                                                <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                                {[...Array(item.countInStock).keys()].map(x =>
                                                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                              </select>

                                                   
                                                </td>
                                                <td className="cart-product-price"><strong>Rs.{cartItems.reduce((a,c)=>a+c.price*c.qty,0)}.00</strong></td>
                                                <td> <button type="button" className="btn btn-5 btn-style-1 color-1" onClick={() => removeFromCartHandler(item.product)}>Remove</button></td>
                                             
                                                </tr>
                                                   
                                                )
                                            
                                                
                                            }
                                            
                                            </tbody>
                                    </table>
                                    
                                </div>
                                <div className="row pb--30">
                                  
                                <div className="col-12 text-md-right">
                                    <div className="cart-btn-group">
                                        <button onClick={checkoutHandler} className="black" disabled={cartItems.length===0}><i className="fa fa-angle-double-right"></i>Proceed to Checkout</button>
                                    </div>
                                </div>
                            </div>
                               
                            </form>
                            
                        </div>
                    </div>
                </div>
           
            </div>      
        </div>
    </div>
               
            </main>
                </div>

        )
    }



export default Cart
