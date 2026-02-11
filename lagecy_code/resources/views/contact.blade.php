@extends('layout.base')
@section('title', 'Contact Us || Life Comrades')

@section('content')
<!--Start breadcrumb area-->     
<section class="breadcrumb-area" style="background-image: url(images/resources/breadcrumb-bg.jpg);">
	<div class="container">
	    <div class="row">
	        <div class="col-md-12">
	            <div class="breadcrumbs">
	                <h1>Contact</h1>
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
                        <li><a href="route('home')">Home</a></li>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                        <li class="active">Contact</li>
                    </ul>
                </div>
                <div class="right pull-right">
                    <a href="#">
                        <span><i class="fa fa-share-alt" aria-hidden="true"></i>Share</span> 
                    </a>   
                </div>    
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb bottom area-->

<!--Start contact form area-->
<section class="contact-form-area">
    <div class="container">
        <div class="sec-title text-center" id="quick-contact">
            <h3>Quick Contact</h3>
            <h1>Get Touch With Us</h1>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="inner-content">
                    <div class="col-lg-8 col-md-7">
                        <div class="contact-form">
                            <form id="consultations-form" name="consultations-form" action="{{route('contact-mail')}}" method="post">
                                @csrf
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" name="form_name" value="" placeholder="Your Name*" required="">
                                    </div>
                                    <div class="col-md-6">
                                        <input type="email" name="form_email" value="" placeholder="Your Mail*" required="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" name="form_phone" value="" placeholder="Phone">
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" name="form_subject" value="" placeholder="Subject">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <textarea name="form_message" placeholder="Your Message.." required=""></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="">
                                        <button class="thm-btn bgclr-1" type="submit" data-loading-text="Please wait...">send message</button>
                                    </div>
                                </div>
                            </form>  
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-5">
                        <div class="contact-carousel">
                            <!--Start single item-->
                            <div class="single-item">
                                <div class="sec-title">
                                    <h3>Chennai</h3>
                                </div>
                                <ul>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-arrows"></span>
                                        </div>
                                        <div class="text-holder">
                                            <p>Pillaiyar Kovil Street, Pallavan Nagar,<br>Nerkundam, Chennai - 600107</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-technology"></span>
                                        </div>
                                        <div class="text-holder">
                                            <p>Phone: +91 90433 36714 &<br>+91 90433 36715</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-note"></span>
                                        </div>
                                        <div class="text-holder">
                                            <p>Email: info@lifecomrades.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!--Start single item-->
                            <!--Start single item-->
                            <div class="single-item">
                                <div class="sec-title">
                                    <h3>Chennai</h3>
                                </div>
                                <ul>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-arrows"></span>
                                        </div>
                                        <div class="text-holder">
                                            <p>Pillaiyar Kovil Street, Pallavan Nagar,<br>Nerkundam, Chennai - 600107</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-technology"></span>
                                        </div>
                                        <div class="text-holder">
                                            <p>Phone: +91 90433 36714 &<br>+91 90433 36715</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-note"></span>
                                        </div>
                                        <div class="text-holder">
                                            <p>Email: info@lifecomrades.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!--Start single item-->
                            <!--Start single item-->
                            <div class="single-item">
                                <div class="sec-title">
                                    <h3>Chennai</h3>
                                </div>
                                <ul>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-arrows"></span>
                                        </div>
                                        <div class="text-holder">
                                            <p>Pillaiyar Kovil Street, Pallavan Nagar,<br>Nerkundam, Chennai - 600107</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-technology"></span>
                                        </div>
                                        <div class="text-holder">
                                            <p>Phone: +91 90433 36714 &<br>+91 90433 36715</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon-holder">
                                            <span class="flaticon-note"></span>
                                        </div>
                                        <div class="text-holder">
                                            <p>Email: info@lifecomrades.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!--Start single item-->
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
<!--End contact form area-->

<!--Start contact map area-->
<section class="contact-map-area">
    <div class="container-fluid">
        <!-- <div class="google-map-inner">
            <div 
                class="google-map" 
                id="contact-google-map" 
                data-map-lat="12.955282861438699" 
                data-map-lng="80.18166454194896" 
                data-icon-path="images/resources/map-marker.png" 
                data-map-title="Chennai, India" 
                data-map-zoom="24" 
                data-markers='{
                    "marker-1": [12.955282861438699, 80.18166454194896, "<h4>Head Office</h4><p>Pillaiyar Kovil Street, Pallavan Nagar, Nerkundam, Chennai - 600107</p>"]
                }'>
            </div> -->
        </div>  
    </div>
</section>
<!--End contact map area-->
@endsection