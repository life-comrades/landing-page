    <!--Start mainmenu area-->
    <section class="mainmenu-area stricky">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 clearfix">
                    <!--Start logo-->
                    <div class="logo pull-left">
                        <a href="{{route('home')}}">
                            <img class="main" src="images/resources/logo.png" alt="Awesome Logo">
                        </a>
                        <!-- <div class="smile">
                            <img src="images/resources/smile.png" alt="">
                        </div> -->
                    </div>
                    <!--End logo-->

                    <!--Start mainmenu right box-->
                    <div class="mainmenu-right-box pull-right">
                        <div class="appointment-button">
                            <a class="thm-btn bgclr-1" href="{{route('contact')}}#quick-contact">Appointment</a>
                        </div>
                    </div> 
                    <!--End mainmenu right box-->

                    <!--Start mainmenu-->
                    <nav class="main-menu pull-right" style="margin-right:40px;">
                        <div class="navbar-header">   	
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="navbar-collapse collapse clearfix">
                            <ul class="navigation clearfix">
                                <li class="{{ Request::is('/') ? 'current' : '' }}"><a href="{{route('home')}}">Home</a></li>
                                <li class="{{ Request::is('about-us') ? 'current' : '' }}"><a href="{{route('about')}}">ABOUT US</a></li>
                                <li class="{{ Request::is('services') ? 'current' : '' }}"><a href="{{route('services')}}">Services</a></li>
                                <li class="{{ Request::is('contact-us') ? 'current' : '' }}"><a href="{{route('contact')}}">Contact Us</a></li>
                            </ul>
                        </div>
                    </nav>
                    <!--End mainmenu-->

                </div>   
            </div>
        </div>
    </section>
    <!--End mainmenu area-->