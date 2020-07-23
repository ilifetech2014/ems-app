import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
            <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="current"><a>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
               
       
        <main id="content" className="main-content-wrapper">
           

        
        <div className="contact-area bg--white pt--80 pb--80 pt-sm--60 pb-sm--60">
            <div className="container px-5">
                <div className="row">
                    <div className="col-lg-6 mb-md--40">
                        <h2 className="heading-secondary mb--30">GET IN TOUCH</h2>
                        <form className="form form--contact" id="contact-form" action="#">
                            <div className="form-row mb--20">
                                <div className="col-md-6 mb-sm--20">
                                    <input type="text" name="contact_fname" id="contact_fname" className="form__input" placeholder="First Name *"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="contact_lname" id="contact_lname" className="form__input" placeholder="Last Name *"/>
                                </div>
                            </div>
                            <div className="form-row mb--20">
                                <div className="col-md-6 mb-sm--20">
                                    <input type="email" name="contact_email" id="contact_email" className="form__input" placeholder="Email *"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="contact_subject" id="contact_subject" className="form__input" placeholder="Subject *"/>
                                </div>
                            </div>
                            <div className="form-row mb--20">
                                <div className="col-12">
                                    <textarea name="contact_message" id="contact_message" placeholder="Message *" className="form__input form__input--2 form__input--textarea"></textarea>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12">
                                <button type="submit" class="btn btn-5 btn-style-2">Send Email</button>
                                </div>
                            </div>
                            <div className="form__output"></div>
                        </form>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <h2 className="heading-secondary mb--30">Contact Us</h2>
                        <div className="address-block mb--30">
                           
                            <ul>
                                <li><i className="fa fa-address-card-o"></i> Address : 6507 Elmwood Avenue Rocky Mountt </li>
                                <li><i className="fa fa-phone"></i> 00+123-456-789</li>
                                <li><i className="fa fa-envelope-o"></i> contact@onlinbookshops.com</li>
                            </ul>
                        </div>
                        <div className="working-hours">
                            <h3>Working hours</h3>
                            <p><strong>Monday – Saturday:</strong>  08AM – 22PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="google-map-wrapper pt--40 pt-sm--30">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.10799860039!2d78.61898693428947!3d10.81583675914984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1567858368833!5m2!1sen!2sin" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
            </div>
            </main>
                </div>

        )
    }
}

export default Contact
