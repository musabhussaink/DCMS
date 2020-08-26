import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'; 


export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="middle">
                    <div>
                        <link href="/Content/jquery-ui.min.css" rel="stylesheet" type="text/css" />
                        <div className="col-md-6 content">
                            <div style={{ textAlign: 'center' }}>
                                <h2>Welcome!</h2>
                                <h3>Please log in to continue.</h3>
                            </div>
                            <div>
                                <div>
                                    <section id="loginForm">
                                        <div id="tabs" style={{ borderRadius: '10px' }} className="ui-tabs ui-widget ui-widget-content ui-corner-all">

                                            <div id="tabs-1" style={{ marginLeft: '30px' }}>
                                                <br />
                                                <section id="loginForm">
                                                    <form className="form-horizontal" onSubmit = {(e)=>login(e)}>
                                                        <div className="form-group">
                                                            <label className="col-md-2 control-label" htmlFor="Email">Email</label>
                                                            <div className="col-md-10">
                                                                <input className="form-control" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." placeholder="Email" id="Email" name="Email" type="text" />
                                                                <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-md-2 control-label" htmlFor="Password">Password</label>
                                                            <div className="col-md-10">
                                                                <input className="form-control" data-val-regex="Your password must be at least 8 characters long and contain at least 1 letter, 1 number and one special character" data-val-regex-pattern="(?=.*\d)(?=.*[A-Za-z])(?=.*[@#$&~!%^-]).{8,}" data-val-required="The Password field is required." id="Password" name="Password" type="password" />
                                                                <span className="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true" />
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="form-group">
                                                            <div className="col-md-offset-2 col-md-10">
                                                                <input type="submit" defaultValue="Log in" className="btn btn-default" />
                                                            </div>
                                                        </div>
                                                        <div id= 'role' style={{ marginLeft: 100 }}>
                                                            

                                                        </div>
                                                    
                                                        {/* <div style={{ marginLeft: 100 }}>
                                                            <a href="/Home/ForgotPassword">Forgot Password?</a>
                                                        </div> */}
                                                    </form></section>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 slideshow" style={{ float: 'right', paddingRight: '0px' }}>
                            <div id="myCarousel" className="carousel slide">
                                {/* Carousel items */}
                                <div className="carousel-inner">
                                    <div className="active item"><img alt="Image not available" src={require('../../Assets/slide1.jpg')} style={{ height: 450, width: 550 }} /></div>
                                    <div className="item"><img alt="Image not available" src={require('../../Assets/slide2.jpg')} style={{ height: 450, width: 550 }} /></div>
                                    <div className="item"><img alt="Image not available" src={require('../../Assets/slide3.jpg')} style={{ height: 450, width: 550 }} /></div>
                                    <div className="item"><img alt="Image not available" src={require('../../Assets/slide6.jpg')} style={{ height: 450, width: 550 }} /></div>
                                    <div className="item"><img alt="Image not available" src={require('../../Assets/slide5.jpg')} style={{ height: 450, width: 550 }} /></div>
                                </div>
                                {/* Carousel nav */}
                                <a className="carousel-control left" href="#myCarousel" data-slide="prev">‹</a>
                                <a className="carousel-control right" href="#myCarousel" data-slide="next">›</a>
                            </div>
                        </div>
                        <style dangerouslySetInnerHTML={{ __html: "body {padding: 0px;}" }} />
                    </div>
                </div>
            </div>
        )
        function login(e){
            e.preventDefault();
            let request = {
              email: document.getElementById("Email").value,
              password: document.getElementById("Password").value
            }
            axios.post('http://localhost:3000/login', request)
            .then( resp => {
              if(resp.data.message == 'Admin'){   
                  document.getElementById("role").innerHTML +=  
                  "<p>Click me to Continue<br><a className='btn btn-primary' href='/Admin'><strong>Admin</strong></a></p>";
              } else if(resp.data.message == 'HOD'){   
                document.getElementById("role").innerHTML +=  
                "<p>Click me to Continue<br><a className='btn btn-primary' href='/HOD'><strong>HOD</strong></a></p>"
            } else if(resp.data.message == 'HOC'){   
                document.getElementById("role").innerHTML +=  
                "<p>Click me to Continue<br><a className='btn btn-primary' href='/HOC'><strong>HOC</strong></a></p>"
            } else if(resp.data.message == 'Committee Member'){   
                document.getElementById("role").innerHTML +=  
                "<p>Click me to Continue<br><a className='btn btn-primary' href='/MOC'><strong>Committee Member</strong></a></p>"
            } else if(resp.data.message == 'Faculty'){   
                document.getElementById("role").innerHTML +=  
                "<p>Click me to Continue<br><a className='btn btn-primary' href='/Faculty'><strong>Faculty</strong></a></p>"
            } else if(resp.data.message == 'Student'){   
                document.getElementById("role").innerHTML +=  
                "<p>Click me to Continue<br><a className='btn btn-primary' href='/Student'><strong>Student</strong></a></p>"
            } else {
                alert('error')
            }
            })
            .catch( err => {
              console.log(err);
            })
          }
    } 
}
