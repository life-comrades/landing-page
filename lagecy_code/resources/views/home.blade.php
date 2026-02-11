@extends('layout.base')
@section('title', 'Home || Life Comrades')

@section('content')
<!--Start rev slider wrapper-->     
<section class="rev_slider_wrapper">
    <div id="slider1" class="rev_slider"  data-version="5.0">
        <ul>
 
            <li data-transition="fade">
                <img src="{{asset('images/slides/1.jpg')}}" alt="" width="1920" height="700" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" >
                
                <div class="tp-caption tp-resizeme"
                    data-x="center" data-hoffset="0" 
                    data-y="center" data-voffset="-135" 
                    data-transform_idle="o:1;"         
                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                    data-splitin="none" 
                    data-splitout="none"  
                    data-start="500">
                    <div class="slide-content-box middle-slide">
                        <h2>The best health service you can find</h2>
                    </div>
                </div>
                <div class="tp-caption  tp-resizeme" 
                    data-x="center" data-hoffset="0" 
                    data-y="center" data-voffset="-35" 
                    data-transform_idle="o:1;"         
                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                    data-splitin="none" 
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-start="1500">
                    <div class="slide-content-box middle-slide">
                        <h1>Provides Professional Health Care</h1>
                        <p>Our health care includes nursing care, elders’ care, baby care with experienced staff</p>
                    </div>
                </div>
                <div class="tp-caption tp-resizeme" 
                    data-x="center" data-hoffset="0" 
                    data-y="center" data-voffset="90" 
                    data-transform_idle="o:1;"                         
                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"                     
                    data-splitin="none" 
                    data-splitout="none" 
                    data-responsive_offset="on"
                    data-start="2300">
                    <div class="slide-content-box middle-slide">
                        <div class="button">
                            <a class="" href="{{route('about')}}">Know More</a>     
                            <a class="btn-style-two" href="{{route('contact')}}#quick-contact">Contact Us</a>             
                        </div>    
                    </div>
                </div>
            </li>

            <li data-transition="fade">
                <img src="{{asset('images/slides/2.jpg')}}" alt="" width="1920" height="700" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" >
                
                <div class="tp-caption tp-resizeme"
                    data-x="center" data-hoffset="0" 
                    data-y="center" data-voffset="-135" 
                    data-transform_idle="o:1;"         
                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                    data-splitin="none" 
                    data-splitout="none"  
                    data-start="500">
                    <div class="slide-content-box middle-slide">
                        <h2>Expertise of the field work with us</h2>
                    </div>
                </div>
                <div class="tp-caption  tp-resizeme" 
                    data-x="center" data-hoffset="0" 
                    data-y="center" data-voffset="-35" 
                    data-transform_idle="o:1;"         
                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                    data-splitin="none" 
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-start="1500">
                    <div class="slide-content-box middle-slide">
                        <h1>Provides Professional Healthcare Staff</h1>
                        <p>Health care provide nursing care, Elders care, baby care with experienced staff.</p>
                    </div>
                </div>
                <div class="tp-caption tp-resizeme" 
                    data-x="center" data-hoffset="0" 
                    data-y="center" data-voffset="90" 
                    data-transform_idle="o:1;"                         
                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"                     
                    data-splitin="none" 
                    data-splitout="none" 
                    data-responsive_offset="on"
                    data-start="2300">
                    <div class="slide-content-box middle-slide">
                        <div class="button">
                            <a class="#" href="{{route('about')}}">Our Company</a>
                            <a class="btn-style-two" href="{{route('contact')}}#quick-contact">Contact Us</a>           
                        </div>    
                    </div>
                </div>
            </li>
            <li data-transition="fade">
                <img src="{{asset('images/slides/3.jpg')}}" alt="" width="1920" height="700" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" >
                
                <div class="tp-caption tp-resizeme"
                    data-x="center" data-hoffset="0" 
                    data-y="center" data-voffset="-135" 
                    data-transform_idle="o:1;"         
                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                    data-splitin="none" 
                    data-splitout="none"  
                    data-start="500">
                    <div class="slide-content-box middle-slide">
                        <h2>A healthy and happy body</h2>
                    </div>
                </div>
                <div class="tp-caption  tp-resizeme" 
                    data-x="center" data-hoffset="0" 
                    data-y="center" data-voffset="-35" 
                    data-transform_idle="o:1;"         
                    data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
                    data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
                    data-splitin="none" 
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-start="1500">
                    <div class="slide-content-box middle-slide">
                        <h1>We Care to Provide you a Healthy Life</h1>
                        <p>We provide nursing care, Elders care, baby care with experienced staff.</p>
                    </div>
                </div>
                <div class="tp-caption tp-resizeme" 
                    data-x="center" data-hoffset="0" 
                    data-y="center" data-voffset="90" 
                    data-transform_idle="o:1;"                         
                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
                    data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"                     
                    data-splitin="none" 
                    data-splitout="none" 
                    data-responsive_offset="on"
                    data-start="2300">
                    <div class="slide-content-box middle-slide">
                        <div class="button">
                            <a class="" href="{{route('about')}}">Our Company</a>     
                            <a class="btn-style-two" href="{{route('contact')}}#quick-contact">Contact Us</a>             
                        </div>    
                    </div>
                </div>
            </li>

        </ul>
    </div>
</section>
<!--End rev slider wrapper-->

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

<!--Start service area-->
<section class="service-area">
    <div class="container">
        <div class="sec-title">
            <h3>What do we provide?</h3>
            <h1>Our Services</h1>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="servicecarousel">
                    <!--Start single item-->
                    <div class="single-service-item">
                        <div class="img-holder">
                            <img src="images/services/1.jpg" alt="Awesome Image">
                            <div class="content">
                                <div class="text-holder text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Doctor Consultation</h3>
                                            <p>Accurate diagnosis with care at your door step.</p>
                                            <a class="thm-btn bgclr-1" href="#">Read More</a>
                                        </div>
                                    </div>    
                                </div>
                                <div class="text-holder-1 text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Doctor Consultation</h3>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End single item-->
                    <!--Start single item-->
                    <div class="single-service-item">
                        <div class="img-holder">
                            <img src="images/services/2.jpg" alt="Awesome Image">
                            <div class="content">
                                <div class="text-holder text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Nursing care</h3>
                                            <p>Wishing and helping you to run towards better health.</p>
                                            <a class="thm-btn bgclr-1" href="#">Read More</a>
                                        </div>
                                    </div>    
                                </div>
                                <div class="text-holder-1 text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Nursing care</h3>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End single item-->
                    <!--Start single item-->
                    <div class="single-service-item">
                        <div class="img-holder">
                            <img src="images/services/3.jpg" alt="Awesome Image">
                            <div class="content">
                                <div class="text-holder text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Elders care</h3>
                                            <p>A well wisher to give you company.</p>
                                            <a class="thm-btn bgclr-1" href="#">Read More</a>
                                        </div>
                                    </div>    
                                </div>
                                <div class="text-holder-1 text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Elders care</h3>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End single item-->
                    <!--Start single item-->
                    <div class="single-service-item">
                        <div class="img-holder">
                            <img src="images/services/4.jpg" alt="Awesome Image">
                            <div class="content">
                                <div class="text-holder text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Mother & Baby care</h3>
                                            <p>Helping you out to bring up the future of our country.</p>
                                            <a class="thm-btn bgclr-1" href="#">Read More</a>
                                        </div>
                                    </div>    
                                </div>
                                <div class="text-holder-1 text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Mother & Baby care</h3>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End single item-->



                    <!--Start single item-->
                    <div class="single-service-item">
                        <div class="img-holder">
                            <img src="images/services/5.jpg" alt="Awesome Image">
                            <div class="content">
                                <div class="text-holder text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Physiotherapy visit</h3>
                                            <p>Brings health to your home to bring you out.</p>
                                            <a class="thm-btn bgclr-1" href="#">Read More</a>
                                        </div>
                                    </div>    
                                </div>
                                <div class="text-holder-1 text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Physiotherapy visit</h3>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End single item-->
                    
                    <!--Start single item-->
                    <div class="single-service-item">
                        <div class="img-holder">
                            <img src="images/services/6.jpg" alt="Awesome Image">
                            <div class="content">
                                <div class="text-holder text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Lab test</h3>
                                            <p>We bring answer to your worries.</p>
                                            <a class="thm-btn bgclr-1" href="#">Read More</a>
                                        </div>
                                    </div>    
                                </div>
                                <div class="text-holder-1 text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Lab test</h3>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End single item-->
                    
                    <!--Start single item-->
                    <div class="single-service-item">
                        <div class="img-holder">
                            <img src="images/services/8.jpg" alt="Awesome Image">
                            <div class="content">
                                <div class="text-holder text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Critical care</h3>
                                            <p>we stay by your at your worst till you get the best of your health.</p>
                                            <a class="thm-btn bgclr-1" href="#">Read More</a>
                                        </div>
                                    </div>    
                                </div>
                                <div class="text-holder-1 text-center">
                                    <div class="inner">
                                        <div class="inner-content">
                                            <div class="icon-box">
                                                <span class="flaticon-medical"></span>
                                            </div>
                                            <h3>Critical care</h3>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End single item-->



                </div>
            </div>    
        </div>
    </div>
</section>
<!--End service area--> 
  
<!--Start slogan area-->
<section class="slogan-area" style="background-image:url(images/resources/slogan-bg.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="inner-content text-center">
                    <h1>A Personal Medical Expect to Guide You in Each Step Towards Betterment of Health</h1>
                    <p>Personal Care Tends Your Wellness Emotionally, Mentally and Physically</p>
                    <p></p>
                    <a class="thm-btn bgclr-1" href="{{route('contact')}}#quick-contact">Make an Appointment</a>
                </div>
            </div>
        </div>
    </div>
</section>  
<!--End slogan area-->
  
<!--Start choosing area-->
<section class="choosing-area">
    <div class="container">
        <div class="sec-title text-center">
            <h3>Our Qualification</h3>
            <h1>Here is WHY PEOPLE CHOOSe US</h1>
        </div>
        <div class="row">
            <!--Start single item-->
            <div class="col-md-4">
                <div class="single-item">
                    <div class="title">
                        <h3>Quality care</h3>
                    </div> 
                    <div class="text-holder">
                        <div class="iocn">
                            <span class="ri-hand-heart-line"></span>
                        </div>
                        <div class="text">
                            <p>We care with love and prayer guiding you towards betterment.</p>
                        </div>
                    </div>   
                </div>
            </div>
            <!--End single item-->
            <!--Start single item-->
            <div class="col-md-4">
                <div class="single-item">
                    <div class="title">
                        <h3>Time management</h3>
                    </div> 
                    <div class="text-holder">
                        <div class="iocn">
                            <span class="ri-timer-flash-line"></span>
                        </div>
                        <div class="text">
                            <p>We run along with clock, making you not to wait.</p>
                        </div>
                    </div>   
                </div>
            </div>
            <!--End single item-->
            <!--Start single item-->
            <div class="col-md-4">
                <div class="single-item">
                    <div class="title">
                        <h3>Skills & Knowledge</h3>
                    </div> 
                    <div class="text-holder">
                        <div class="iocn">
                            <span class="flaticon-line font-extra-bold"></span>
                        </div>
                        <div class="text">
                            <p>Expertise is our strength and back bone to stand straight.</p>
                        </div>
                    </div>   
                </div>
            </div>
            <!--End single item-->
            <!--Start single item-->
            <div class="col-md-4">
                <div class="single-item">
                    <div class="title">
                        <h3>Experienced staff</h3>
                    </div> 
                    <div class="text-holder">
                        <div class="iocn">
                            <span class="fa fa-user-md"></span>
                        </div>
                        <div class="text">
                            <p>Experience is our mantra.</p>
                        </div>
                    </div>   
                </div>
            </div>
            <!--End single item-->
            <!--Start single item-->
            <div class="col-md-4">
                <div class="single-item">
                    <div class="title">
                        <h3>Support & motivation</h3>
                    </div> 
                    <div class="text-holder">
                        <div class="iocn">
                            <span class="fa fa-medkit"></span>
                        </div>
                        <div class="text">
                            <p>We stand shoulder to shoulder to make you feel at ease in your difficult times.</p>
                        </div>
                    </div>   
                </div>
            </div>
            <!--End single item-->
            <!--Start single item-->
            <div class="col-md-4">
                <div class="single-item">
                    <div class="title">
                        <h3>Certified Company</h3>
                    </div> 
                    <div class="text-holder">
                        <div class="iocn">
                            <span class="ri-profile-line"></span>
                        </div>
                        <div class="text">
                            <p>We stand by all our words.</p>
                        </div>
                    </div>   
                </div>
            </div>
            <!--End single item-->
        </div>
    </div>
</section>  
<!--End choosing area-->

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
                                            <h5>Address: Pillaiyar Kovil Street,<br>Pallavan Nagar, Nerkundam,<br>Chennai - 600107</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-technology"></span>
                                        </div>
                                        <div class="text-holder">
                                            <h5>Phone: +91 90433 36714 &<br>+91 90433 36715</h5>
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
<style>
    .choosing-area .single-item .text-holder .iocn span.font-extra-bold:before {
        font-weight: bold;
    }
</style>
@endsection