import React, { Component } from 'react'  
import {copy } from "copy-to-clipboard";  
export class CopyBoard extends Component {  

constructor() {  
super();  
this.state = {  
textToCopy: "Copy to Clipboard Demo!",  
};  
this.handleInputChange = this.handleInputChange.bind(this);  
     this.Copytext = this.Copytext.bind(this);  
}  
handleInputChange(e) {  
     this.setState({  
        textToCopy: e.target.value,  

             });  
}  

 Copytext() {  
        copy(this.state.textToCopy);  

            }  
            
        render() {  
            const { textToCopy, btnText } = this.state;  
                return (  
                        
                           
                            <div className="container">
                                <div className="row align-items-center">
                                
                                    <div className="col-md-4">
                                        <form className="newsletter-form">
                                            <input className="newsletter-form__input" placeholder="" onChange={this.handleInputChange} />  
                                                <button className="newsletter-form__submit" onClick={this.Copytext}>  
                                                     Copy
                                                 </button>  
                                                 
                                        </form>
                                    </div>
                                </div>
                                <br/> 
                                
                            </div>
                      
                          

                                 ); 
                                
                                    }  
                                }  




export default CopyBoard  

