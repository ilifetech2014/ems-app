import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import data from '../data';
import {register} from '../actions/userActions';
import{useDispatch, useSelector} from 'react-redux';


function Register(props){
  

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const userRegister = useSelector(state=>state.userRegister);
    const{userInfo} = userRegister;
    const dispatch  = useDispatch();
    
    useEffect(()=>
    {
   if(userInfo)
   {
       props.history.push("/home");
      
   }
        return()=>{
            
        };
    },[userInfo]);

    const submitHandler = (e) =>
    {
        e.preventDefault();
        dispatch(register(name, email, password));
        
    }
  
   
    return (
        <div>

     
        <main id="content" className="main-content-wrapper">
        <div className="login-register-area">
            <div className="container">
            <h2 className="heading-secondary mb--30 text-center">REGISTER</h2>
                <div className="row login-reg-box bg--white">
                
                    <div className="col-lg-6 mb-md--40">
                        
                        <div className="login-reg-box bg--white">
                            <img src="assets/img/books/register.jpg" className="reg-img"/>
                       </div>
                    </div>
                    <div className="col-lg-6">
                        
                        <div className="login-reg-box bg--white">
                            <form className="form" onSubmit={submitHandler}>

                            <div class="form__group mb--20">
                             <label class="form__label" for="name">
                                    Name <span>*</span>
                                </label>
                                <input type="name" name="name" id="name" onChange={(e)=>setName(e.target.value)} className="form__input"/>
                               
                            </div>
                            <div className="form__group mb--20">
                                
                                 
                            <label className="form__label" htmlFor="email">
                                Email  <span>*</span>
                            </label> 
                            <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} className="form__input"/>
                        </div>
                   
                                <div className="form__group mb--20">
                                
                                 
                                    <label className="form__label" htmlFor="password">
                                       Password  <span>*</span>
                                    </label> 
                                    <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} className="form__input"/>
                                </div>
                           
                            
                                                           
                            </form>
                            <br/>
                               
                            <h5>Already have an account?<Link to ="/login">  LOGIN</Link></h5>
                            <div class="form__group">
                            <button type="submit" className="btn btn-5 btn-style-2"><i className="fa fa-angle-double-right"></i>Register Now</button>
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
export default Register