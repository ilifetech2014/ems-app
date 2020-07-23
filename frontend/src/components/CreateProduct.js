import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import data from '../data';

import{useDispatch, useSelector} from 'react-redux';
import { saveProduct } from '../actions/productActions';




function CreateProduct(props){
  

    const[name,setName]=useState('');
    const[image,setImage]=useState('');
    const[price,setPrice]=useState('');
    const[description1,setDescription1]=useState('');
    const[description2,setDescription2]=useState('');
    const[short_description,setShort_Description]=useState('');
    const[countInStock,setCountInStock]=useState('');
    const productSave =useSelector(state=>state.productSave);
    const{success:successSave} = productSave;
    const dispatch  = useDispatch();
    
    useEffect(()=>
    {
        if(successSave)
        {
            props.history.push("/home");
           
        }
             return()=>{
                 
             };
         },[successSave]);

    const submitHandler = (e) =>
    {
        e.preventDefault();
        dispatch(saveProduct({name,image,price,description1,description2,short_description,countInStock}));
        
    }
  
   
    return (
        <div>

     
        <main id="content" className="main-content-wrapper">
        <div className="login-register-area">
            <div className="container">
            <h2 className="heading-secondary mb--30 text-center">CREATE PRODUCT</h2>
                <div className="row login-reg-box bg--white">
                
                    <div className="col-lg-3 mb-md--40">
                        
                    
                    </div>
                    <div className="col-lg-6">
                        
                        <div className="login-reg-box bg--white">
                            <form className="form" onSubmit={submitHandler}>
                            <div className="form__group mb--20">
                                
                                 
                            <label className="form__label" htmlFor="name">
                               Name <span>*</span>
                            </label> 
                            <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} className="form__input"/>
                        </div>

                        <div className="form__group mb--20">
                                
                                 
                            <label className="form__label" htmlFor="image">
                              Image<span>*</span>
                            </label> 
                            <input type="text" name="image" id="image" onChange={(e)=>setImage(e.target.value)} className="form__input"/>
                        </div>
                        <div className="form__group mb--20">
                                
                                 
                        <label className="form__label" htmlFor="price">
                          Price<span>*</span>
                        </label> 
                        <input type="text" name="price" id="price" onChange={(e)=>setPrice(e.target.value)} className="form__input"/>
                    </div>
                    <div className="form__group mb--20">
                                
                                 
                        <label className="form__label" htmlFor="description1">
                          Description1<span>*</span>
                        </label> 
                        <br/>
                        <textarea name="description1" id="description1" onChange={(e) => setDescription1(e.target.value)} ></textarea>             </div>
                    <div className="form__group mb--20">
                                
                                 
                        <label className="form__label" htmlFor="description1">
                          Description2<span>*</span>
                        </label> 
                        <br/>
                        <textarea name="description2"  id="description2" onChange={(e) => setDescription2(e.target.value)} ></textarea>             </div>
                    <div className="form__group mb--20">
                                
                                 
                        <label className="form__label" htmlFor=" short_description">
                        Short description<span>*</span>
                        </label> 
                        <br/>
                        <textarea name="short_description" value={short_description} id="short_description" onChange={(e) => setShort_Description(e.target.value)} ></textarea>             </div>
                   
                        <div className="form__group mb--20">
                        <label className="form__label"  htmlFor="countInStock">CountInStock<span>*</span></label>
                        <input type="text" name="countInStock" id="countInStock" onChange={(e)=>setCountInStock(e.target.value)} className="form__input"/>
                        </div>
                        
                                <div className="form__group">
                                    <button type="submit" className="btn btn-5 btn-style-2 center">Create Product</button>
                                    
                                </div>
                                                           
                            </form>
                            <br/>
                               
                               
    
                        </div>
                        
                    </div>
                    <div className="col-lg-3 mb-md--40">
                        
                    
                    </div>
                </div>
            </div>
        </div>
    </main>
        </div>
    )
    
}
export default CreateProduct