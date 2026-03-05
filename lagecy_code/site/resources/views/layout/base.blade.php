<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>@yield('title')</title>

	<!-- responsive meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- For IE -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- master stylesheet -->
	<link rel="stylesheet" href="{{asset('css/style.css')}}">
	<!-- Responsive stylesheet -->
	<link rel="stylesheet" href="{{asset('css/responsive.css')}}">
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('images/favicon/apple-touch-icon.ico')}}">
    <link rel="icon" type="image/png" href="{{asset('images/favicon/favicon-32x32.ico')}}" sizes="32x32">
    <link rel="icon" type="image/png" href="{{asset('images/favicon/favicon-16x16.ico')}}" sizes="16x16">
    @yield('styles')
    <!-- Fixing Internet Explorer-->
    <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <script src="js/html5shiv.js"></script>
    <![endif]-->
</head>
<body>
<div class="boxed_wrapper">

    <!--Start Preloader -->
    <div class="preloader"></div>
    <!--End Preloader -->

    <a href="https://api.whatsapp.com/send?phone=919043336714" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
    </a>

    <!--Start header area-->
    <!--Start top bar area-->
    <section class="top-bar-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12 hidden-xs">
                    <div class="top-left">
                        <ul class="top-contact-info">
                            <li><span class="flaticon-technology"></span>Phone: +91 90433 36714</li>    
                            <li><span class="flaticon-note"></span>info@lifecomrades.com</li>     
                        </ul>   
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                    <div class="top-right clearfix">
                        <ul class="social-links">
                            <li><a target="_blank" href="https://www.facebook.com/people/Life-Comrades/100087777826184/"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/life.comrades/"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--End top bar area-->  

    @include('include.nav')
    
    @yield('content')

    @include('include.footer')

    <!-- main jQuery -->
    <script src="{{asset('js/jquery-1.11.1.min.js')}}"></script>
    <!-- Wow Script -->
    <script src="{{asset('js/wow.js')}}"></script>
    <!-- bootstrap -->
    <script src="{{asset('js/bootstrap.min.js')}}"></script>
    <!-- bx slider -->
    <script src="{{asset('js/jquery.bxslider.min.js')}}"></script>
    <!-- count to -->
    <script src="{{asset('js/jquery.countTo.js')}}"></script>
    <!-- owl carousel -->
    <script src="{{asset('js/owl.carousel.min.js')}}"></script>
    <!-- validate -->
    <script src="{{asset('js/validation.js')}}"></script>
    <!-- mixit up -->
    <script src="{{asset('js/jquery.mixitup.min.js')}}"></script>
    <!-- easing -->
    <script src="{{asset('js/jquery.easing.min.js')}}"></script>
    <!-- gmap helper -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHzPSV2jshbjI8fqnC_C4L08ffnj5EN3A"></script>
    <!--gmap script-->
    <script src="{{asset('js/gmaps.js')}}"></script>
    <script src="{{asset('js/map-helper.js')}}"></script>
    <!-- fancy box -->
    <script src="{{asset('js/jquery.fancybox.pack.js')}}"></script>
    <script src="{{asset('js/jquery.appear.js')}}"></script>
    <!-- isotope script-->
    <script src="{{asset('js/isotope.js')}}"></script>
    <script src="{{asset('js/jquery.prettyPhoto.js')}}"></script> 
    <script src="{{asset('js/jquery.bootstrap-touchspin.js')}}"></script>
    <!-- jQuery timepicker js -->
    <script src="{{asset('assets/timepicker/timePicker.js')}}"></script>
    <!-- Bootstrap select picker js -->
    <script src="{{asset('assets/bootstrap-sl-1.12.1/bootstrap-select.js')}}"></script>                               
    <!-- Bootstrap bootstrap touchspin js -->
    <!-- jQuery ui js -->
    <script src="{{asset('assets/jquery-ui-1.11.4/jquery-ui.js')}}"></script>
    <!-- Language Switche  -->
    <script src="{{asset('assets/language-switcher/jquery.polyglot.language.switcher.js')}}"></script>
    <!-- Html 5 light box script-->
    <script src="{{asset('assets/html5lightbox/html5lightbox.js')}}"></script>


    <!-- revolution slider js -->
    <script src="{{asset('assets/revolution/js/jquery.themepunch.tools.min.js')}}"></script>
    <script src="{{asset('assets/revolution/js/jquery.themepunch.revolution.min.js')}}"></script>
    <script src="{{asset('assets/revolution/js/extensions/revolution.extension.actions.min.js')}}"></script>
    <script src="{{asset('assets/revolution/js/extensions/revolution.extension.carousel.min.js')}}"></script>
    <script src="{{asset('assets/revolution/js/extensions/revolution.extension.kenburn.min.js')}}"></script>
    <script src="{{asset('assets/revolution/js/extensions/revolution.extension.layeranimation.min.js')}}"></script>
    <script src="{{asset('assets/revolution/js/extensions/revolution.extension.migration.min.js')}}"></script>
    <script src="{{asset('assets/revolution/js/extensions/revolution.extension.navigation.min.js')}}"></script>
    <script src="{{asset('assets/revolution/js/extensions/revolution.extension.parallax.min.js')}}"></script>
    <script src="{{asset('assets/revolution/js/extensions/revolution.extension.slideanims.min.js')}}"></script>
    <script src="{{asset('assets/revolution/js/extensions/revolution.extension.video.min.js')}}"></script>



    <!-- thm custom script -->
    <script src="{{asset('js/custom.js')}}"></script>
    </body>
</html>