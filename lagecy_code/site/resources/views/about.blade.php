@extends('layout.base')
@section('title', 'About Us || Life Comrades')

@section('content')
<!--Start breadcrumb area-->     
<section class="breadcrumb-area" style="background-image: url(images/resources/breadcrumb-bg.jpg);">
	<div class="container">
	    <div class="row">
	        <div class="col-md-12">
	            <div class="breadcrumbs">
	                <h1>About Us</h1>
	            </div>
	        </div>
	    </div>
	</div>
</section>
<!--End breadcrumb area-->

<!--Start breadcrumb bottom area-->     
<section class="breadcrumb-bottom-area">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="left pull-left">
                    <ul>
                        <li><a href="{{route('home')}}">Home</a></li>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                        <li class="active">About Us</li>
                    </ul>
                </div>
                <div class="right pull-right">
                </div>    
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb bottom area-->

<!--Start call to action area-->
<section class="callto-action-area sec-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="text-holder">
                    <div class="sec-title text-right">
                        <h3>Who are we?</h3>
                        <h1>We are experts in health care services</h1>
                        <p>We work with the best nurses and health experts across the state and enable our team to provide the most personalized health care you deserve from doctor’s visits & nursing care services.</p>
                     </div> 
                    <div class="row text-box">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-text-box pdr-30 text-right">
                                <h3>What’s our mission?</h3>
                                <p>Betterment of the health of those we care and commit ourselves to serve is our sole focus. We aim to provide care and service beyond patient's expectations and the set community standards. We strive to extend the same in a caring, convenient, financially friendly and accessible manner.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-text-box pdl-30 text-left">
                                <h3>What’s our vision?</h3>
                                <p>To aid people attain a good prospect of health and well-being round their life time. We prove worthy to be trusted by patients as an appreciated companion and makers of healthy and positive change. We tend with care and love wishing to witness the smile of our customers.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="signature-readmore">
                                <div class="button pull-right">
                                    <a class="thm-btn bgclr-1" href="#">Read More</a>    
                                </div> 
                                <div class="signature pull-right">
                                    <img src="{{asset('images/resources/signature.png')}}" alt="signature">    
                                </div>   
                            </div>
                        </div>
                    </div>   
                </div>
            </div> 
            <div class="col-md-5">
                <div class="img-holder wow slideInRight text-center">
                    <img src="{{asset('images/resources/callto-action.png')}}" alt="Awesome Image">
                </div>
            </div>   
        </div>
    </div>
</section>
<!--End call to action area-->

<!--Start fact counter area-->
<section class="fact-counter-area" style="background-image:url(images/resources/fact-counter-bg.jpg);">
    <div class="container">
        <div class="sec-title">
            <h3>Interesting Facts</h3>
            <h1>sucessfull Experince</h1>
        </div>
        <div class="row">
            <!--Start single item-->
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="single-item text-center">
                    <div class="count">
                        <h1>01</h1>
                    </div>
                    <div class="icon-holder">
                        <span class="flaticon-fruits"></span> 
                    </div>
                    <h1><span class="timer" data-from="1" data-to="3" data-speed="5000" data-refresh-interval="50">25</span></h1>
                    <h3>Years of Experience</h3>
                </div>
            </div>
            <!--End single item-->
            <!--Start single item-->
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="single-item text-center">
                    <div class="count">
                        <h1>02</h1>
                    </div>
                    <div class="icon-holder">
                        <span class="flaticon-smile"></span> 
                    </div>
                    <h1><span class="timer" data-from="1" data-to="284" data-speed="5000" data-refresh-interval="50">284</span></h1>
                    <h3>Happy Customers</h3>
                </div>
            </div>
            <!--End single item-->
            <!--Start single item-->
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="single-item text-center">
                    <div class="count">
                        <h1>03</h1>
                    </div>
                    <div class="icon-holder">
                        <span class="flaticon-medical-1"></span> 
                    </div>
                    <h1><span class="timer" data-from="1" data-to="176" data-speed="5000" data-refresh-interval="50">176</span></h1>
                    <h3>Health Care Services</h3>
                </div>
            </div>
            <!--End single item-->
            <!--Start single item-->
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="single-item text-center">
                    <div class="count">
                        <h1>04</h1>
                    </div>
                    <div class="icon-holder">
                        <span class="flaticon-exercise"></span> 
                    </div>
                    <h1><span class="timer" data-from="1" data-to="15" data-speed="5000" data-refresh-interval="50">142</span></h1>
                    <h3>Awareness Program</h3>
                </div>
            </div>
            <!--End single item-->
        </div>
    </div>
</section>
<!--End fact counter area-->

<!--Start Healty Process area-->
<section class="healty-process-area">
    <div class="container">
        <div class="sec-title text-center">
            <h3>How it Works?</h3>
            <h1>Process for Healthy Life</h1>
        </div> 
        <div class="row">
            <!--Start single working item-->
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="single-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                   <div class="icon-box">
                        <div class="icon">
                            <span class="fa fa-hand-peace-o"></span>
                        </div>
                        <div class="count">
                            <h3>1</h3>
                        </div>    
                   </div>
                   <div class="text-box text-center">
                       <h3>Connect With Us</h3>
                       <p>We wait just a call away to render the best care ever.</p>
                   </div>     
                </div>
            </div>
            <!--End single working item-->
            <!--Start single working item-->
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="single-item wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                   <div class="icon-box">
                        <div class="icon">
                            <span class="fa fa-stethoscope"></span>
                        </div>
                        <div class="count">
                            <h3>2</h3>
                        </div>    
                   </div>
                   <div class="text-box text-center">
                       <h3>Diagnose</h3>
                       <p>Figure out the root cause to knock out illness. </p>
                   </div>     
                </div>
            </div>
            <!--End single working item-->
            <!--Start single working item-->
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="single-item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                   <div class="icon-box">
                        <div class="icon">
                            <span class="fa ri-hospital-line"></span>
                        </div>
                        <div class="count">
                            <h3>3</h3>
                        </div>    
                   </div>
                   <div class="text-box text-center">
                       <h3>Quality Care</h3>
                       <p>Excellent care provided by expertise.</p>
                   </div>     
                </div>
            </div>
            <!--End single working item-->
            <!--Start single working item-->
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="single-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                   <div class="icon-box">
                        <div class="icon">
                            <span class="fa fa-heartbeat"></span>
                        </div>
                        <div class="count">
                            <h3>4</h3>
                        </div>    
                   </div>
                   <div class="text-box text-center">
                       <h3>Be Healthy</h3>
                       <p>We preserve your wealth.</p>
                   </div>     
                </div>
            </div>
            <!--End single working item-->
        </div>
    </div>
</section>
<!--End Healty Process area-->
 
<!--Start consultations area-->
<section class="consultations-area" style="background-image:url(images/resources/consultation-bg.jpg);">
    <div class="container wow zoomIn" data-wow-delay="100ms" data-wow-duration="900ms">
        <div class="sec-title text-center">
            <h3>Lets Talk</h3>
            <h1>Request For Consultation</h1>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="inner-content">
                    <div class="row">
                        <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                            <div class="consultations-form-box">
                                <form id="consultations-form" name="consultations-form" action="{{route('contact-mail')}}" method="post">
                                    @csrf
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="text" name="form_name" value="" placeholder="Name *" required="">
                                            <input type="email" name="form_email" value="" placeholder="Email *" required="">
                                            <select class="selectmenu">
                                                <option selected="selected">Select Service</option>
                                                <option>Doctor Consultation</option>
                                                <option>Nursing care</option>
                                                <option>Elders care</option>
                                                <option>Mother & Baby care</option>
                                                <option>Physiotherapy Visit</option>
                                                <option>Lab Test</option>
                                                <option>Medicine & Surgical items</option>
                                                <option>Critical care</option>
                                            </select>   
                                        </div>
                                        <div class="col-md-6">
                                            <textarea name="form_message" placeholder="Your Message.." required=""></textarea>    
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <button class="thm-btn bgclr-1" type="submit">Submit Now</button>   
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12">   
                            <div class="contact-info">
                                <h2>Contact Details</h2>
                                <ul>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-arrows"></span>
                                        </div>
                                        <div class="text-holder">
                                            <h5>Pillaiyar Kovil Street, Pallavan Nagar,<br>Nerkundam, Chennai - 600107</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-technology"></span>
                                        </div>
                                        <div class="text-holder">
                                            <h5>Phone: +91 90433 36714 &amp;<br>+91 90433 36715</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-note"></span>
                                        </div>
                                        <div class="text-holder">
                                            <h5>Email: info@lifecomrades.com</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End consultations area-->  
@endsection

@section('styles')
<link rel="stylesheet" href="{{asset('css/icons.min.css')}}">
@endsection