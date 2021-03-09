import React from 'react'

function Footer() {
    return (
        <div className="container-fluid mt-5">
            <div className="row ">
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-8">
                            <img className="img-fluid" src="./img/home/logo.jpg" width="200"/>
                        </div>

                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-9">
                           <ul style={{listStyle:"none",position:"relative",right:"20px"}}>
                               <li >No 24 New York City 184/2</li>
                               <li>+ (174) 1800-664-6766</li>
                               <li>petoria@example.com</li>
                               <li>petoria-store.com </li>
                               
                           </ul>
                        </div>

                    </div>

                    <div className="row mt-2" style={{marginLeft:"2px"}}>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-2">
                                    <i className="fab fa-twitter footer-icon"></i>
                                </div>
                                <div className="col-lg-2">
                                    <i className="fab fa-dribbble  footer-icon"></i>
                                </div>
                                <div className="col-lg-2">
                                    <i className="fab fa-behance  footer-icon"></i>
                                </div>
                                <div className="col-lg-2">
                                    <i className="fab fa-instagram  footer-icon"></i>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-8">
                            <h5>Help & Infomation</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <hr  style={{width:"40px",color:"black"}}></hr>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <p className="footer-p">Pagination</p>
                            <p className="footer-p">Terms & Conditions</p>
                            <p className="footer-p">Contact </p>
                            <p className="footer-p">Accessories</p>
                            <p className="footer-p">Term Of Use</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    
                <div className="row">
                        <div className="col-lg-8">
                            <h5>About us</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <hr  style={{width:"40px",color:"black"}}></hr>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <p className="footer-p">Help Center </p>
                            <p className="footer-p">Address Store </p>
                            <p className="footer-p">Privacy Policy  </p>
                            <p className="footer-p">Receivers & Amplifiers </p>
                            <p className="footer-p">Petoria</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3">
                    
                <div className="row">
                        <div className="col-lg-8">
                            <h5>Profile</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <hr  style={{width:"40px",color:"black"}}></hr>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <p className="footer-p">My Account </p>
                            <p className="footer-p">Checkout </p>
                            <p className="footer-p">Order Tracking  </p>
                            <p className="footer-p">Help & Suppport</p>
                           
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
