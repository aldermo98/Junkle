class CustomHeader extends HTMLElement {
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
                                                                                    href="junk-removal.html">Junk Removal</a></h3>
                                                                            <p>We provide fast and reliable junk removal services for homes and businesses.</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="junk-removal.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
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
                                                                                    href="demolition.html">Demolition</a></h3>
                                                                            <p>We handle all types of demolition projects with precision.</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="demolition.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
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
                                                                                    href="recycling.html">Recycling</a></h3>
                                                                            <p>We recycle responsibly to reduce waste and protect the environment.</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="recycling.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
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
                                                                                    href="donations.html">Donation
                                                                                    Pickup</a></h3>
                                                                            <p>We offer fast, friendly donation pickups for your convenience.</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="donations.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
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
                                                                                    href="estate-cleanouts.html">Estate Cleanouts</a></h3>
                                                                            <p>We provide thorough estate cleanouts with care and efficiency.</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="estate-cleanouts.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
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
                                                                                    href="community-pickup.html">Community Pickup</a></h3>
                                                                            <p>Waste management for organizations and neighborhoods</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="community-pickup.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
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
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="main-menu-three__right">
                        <div class="main-menu-three__call">
                            <a href="/free-quote.html" class="thm-btn thm-btn--bg-black">Free Quote</a>
                        </div>
                    </div>
                </div>
            </nav>
            </header>
            <div class="stricky-header stricked-menu main-menu main-menu-three">
                <div class="sticky-header__content"></div>
            </div>
            <div class="mobile-nav__wrapper">
                <div class="mobile-nav__overlay mobile-nav__toggler"></div>
                <!-- /.mobile-nav__overlay -->
                <div class="mobile-nav__content">
                    <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

                    <div class="logo-box">
                        <a href="index.html" aria-label="logo image"><img src="assets/images/resources/logo-2.png"
                                width="100" alt="Junkle" /></a>
                    </div>
                    <!-- /.logo-box -->
                    <div class="mobile-nav__container"></div>
                    <!-- /.mobile-nav__container -->

                    <ul class="mobile-nav__contact list-unstyled">
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:info@support.calljunkle.com">info@support.calljunkle.com</a>
                        </li>
                        <li>
                            <i class="fa fa-phone-alt"></i>
                            <a href="tel:666-888-0000">666 888 0000</a>
                        </li>
                    </ul><!-- /.mobile-nav__contact -->
                    <div class="mobile-nav__top">
                        <div class="mobile-nav__social">
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-facebook-square"></a>
                            <a href="#" class="fab fa-pinterest-p"></a>
                            <a href="#" class="fab fa-instagram"></a>
                        </div><!-- /.mobile-nav__social -->
                    </div><!-- /.mobile-nav__top -->



                </div>
                <!-- /.mobile-nav__content -->
            </div>
            <!-- /.mobile-nav__wrapper -->
        
        `;
    }
}

customElements.define('custom-header', CustomHeader);