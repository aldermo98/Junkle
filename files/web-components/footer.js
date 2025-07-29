class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="main-header-three">
            <nav class="main-menu main-menu-three">
                <div class="main-menu-three__wrapper">
                    <div class="main-menu-wrapper__logo">
                        <a href="index.html"><img src="assets/images/resources/logo-2.png" alt="Junkle" width="100" width="100"></a>
                    </div>
                    <div class="main-menu-three__main-menu">
                        <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                        <ul class="main-menu__list">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li class="dropdown megamenu">
                                <a href="services.html">Our Services</a>
                                <ul>
                                    <li>
                                        <div class="service-tabs">
                                            <div class="container">
                                                <div class="service-tabs__inner tabs-box">
                                                    <div class="row">
                                                        <div class="col-md-6 col-lg-4">
                                                            <ul class="tab-buttons service-tabs__links">
                                                                <li data-tab="#service-1" class="tab-btn active-btn">
                                                                    <span>Junk Removal</span>
                                                                </li>
                                                                <li data-tab="#service-2" class="tab-btn">
                                                                    <span>Demolition</span>
                                                                </li>
                                                                <li data-tab="#service-3" class="tab-btn">
                                                                    <span>Recycling</span>
                                                                </li>
                                                                <li data-tab="#service-4" class="tab-btn">
                                                                    <span>Donation Pickup</span>
                                                                </li>
                                                                <li data-tab="#service-5" class="tab-btn">
                                                                    <span>Estate Cleanouts</span>
                                                                </li>
                                                                <li data-tab="#service-6" class="tab-btn">
                                                                    <span>Community Pickups</span>
                                                                </li>
                                                            </ul>
                                                        </div><!-- /.col-md-6 -->
                                                        <div class="col-md-6 col-lg-8">
                                                            <div class="tabs-content">
                                                                <div class="tab active-tab animated fadeInUp"
                                                                    id="service-1">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="zero-waste.html">Zero
                                                                                    Waste
                                                                                    & Recycling
                                                                                    Pickup</a></h3>
                                                                            <a class="service-tabs__btn"
                                                                                href="zero-waste.html">
                                                                                <i class="fa fa-arrow-right"></i>
                                                                                View
                                                                                More
                                                                            </a>
                                                                            <!-- /.service-tabs__title -->
                                                                        </div><!-- /.service-tabs__text -->
                                                                        <div class="service-tabs__image">
                                                                            <img src="assets/images/services/service-m-1-1.png"
                                                                                alt="">
                                                                        </div><!-- /.service-tabs__image -->
                                                                    </div><!-- /.service-tabs__content -->
                                                                </div>

                                                                <div class="tab" id="service-2">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="dumpster-rental.html">Dumpster
                                                                                    Rental
                                                                                    & Recycling
                                                                                    Pickup</a></h3>
                                                                            <a class="service-tabs__btn"
                                                                                href="dumpster-rental.html">
                                                                                <i class="fa fa-arrow-right"></i>
                                                                                View
                                                                                More
                                                                            </a>
                                                                            <!-- /.service-tabs__title -->
                                                                        </div><!-- /.service-tabs__text -->
                                                                        <div class="service-tabs__image">
                                                                            <img src="assets/images/services/service-m-1-2.png"
                                                                                alt="">
                                                                        </div><!-- /.service-tabs__image -->
                                                                    </div><!-- /.service-tabs__content -->
                                                                </div>

                                                                <div class="tab" id="service-3">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="portable-toilet.html">Portable
                                                                                    Toilet
                                                                                    & Recycling
                                                                                    Pickup</a></h3>
                                                                            <a class="service-tabs__btn"
                                                                                href="portable-toilet.html">
                                                                                <i class="fa fa-arrow-right"></i>
                                                                                View
                                                                                More
                                                                            </a>
                                                                            <!-- /.service-tabs__title -->
                                                                        </div><!-- /.service-tabs__text -->
                                                                        <div class="service-tabs__image">
                                                                            <img src="assets/images/services/service-m-1-3.png"
                                                                                alt="">
                                                                        </div><!-- /.service-tabs__image -->
                                                                    </div><!-- /.service-tabs__content -->
                                                                </div>

                                                                <div class="tab" id="service-4">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="recylcing-services.html">Recylcing
                                                                                    Services
                                                                                    & Recycling
                                                                                    Pickup</a></h3>
                                                                            <a class="service-tabs__btn"
                                                                                href="recylcing-services.html">
                                                                                <i class="fa fa-arrow-right"></i>
                                                                                View
                                                                                More
                                                                            </a>
                                                                            <!-- /.service-tabs__title -->
                                                                        </div><!-- /.service-tabs__text -->
                                                                        <div class="service-tabs__image">
                                                                            <img src="assets/images/services/service-m-1-4.png"
                                                                                alt="">
                                                                        </div><!-- /.service-tabs__image -->
                                                                    </div><!-- /.service-tabs__content -->
                                                                </div>

                                                                <div class="tab" id="service-5">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="residential-pickup.html">Residential
                                                                                    Pickup
                                                                                    & Recycling
                                                                                    Pickup</a></h3>
                                                                            <a class="service-tabs__btn"
                                                                                href="residential-pickup.html">
                                                                                <i class="fa fa-arrow-right"></i>
                                                                                View
                                                                                More
                                                                            </a>
                                                                            <!-- /.service-tabs__title -->
                                                                        </div><!-- /.service-tabs__text -->
                                                                        <div class="service-tabs__image">
                                                                            <img src="assets/images/services/service-m-1-5.png"
                                                                                alt="">
                                                                        </div><!-- /.service-tabs__image -->
                                                                    </div><!-- /.service-tabs__content -->
                                                                </div>

                                                                <div class="tab" id="service-6">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="business-pickup.html">Business
                                                                                    Waste
                                                                                    & Recycling
                                                                                    Pickup</a></h3>
                                                                            <a class="service-tabs__btn"
                                                                                href="business-pickup.html">
                                                                                <i class="fa fa-arrow-right"></i>
                                                                                View
                                                                                More
                                                                            </a>
                                                                            <!-- /.service-tabs__title -->
                                                                        </div><!-- /.service-tabs__text -->
                                                                        <div class="service-tabs__image">
                                                                            <img src="assets/images/services/service-m-1-6.png"
                                                                                alt="">
                                                                        </div><!-- /.service-tabs__image -->
                                                                    </div><!-- /.service-tabs__content -->
                                                                </div>
                                                            </div><!-- /.tabs-content -->
                                                        </div><!-- /.col-md-6 -->
                                                    </div><!-- /.row -->
                                                </div><!-- /.service-tabs__inner -->
                                            </div><!-- /.container -->
                                        </div><!-- /.service-tabs -->
                                    </li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="main-menu-three__right">
                        <div class="main-menu-three__call">
                            <a href="https://api.leadconnectorhq.com/widget/booking/bkxdfwlLtaDhDrvFUeJE" class="thm-btn thm-btn--bg-black">Book now</a>
                        </div>
                    </div>
                </div>
            </nav>
            </header>
            <div class="stricky-header stricked-menu main-menu main-menu-three">
                <div class="sticky-header__content"></div>
            </div>
        
        `;
    }
}

customElements.define('custom-footer', CustomFooter);