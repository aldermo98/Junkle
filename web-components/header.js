class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="main-header-three">
            <nav class="main-menu main-menu-three">
                <div class="main-menu-three__wrapper">
                    <div class="main-menu-wrapper__logo">
                        <a href="index.html"><img src="/assets/images/resources/logo-2.png" alt="Junkle" width="100" width="100"></a>
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
                                <a href="/services.html">Services</a>
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
                                                                                    href="/services/junk-removal.html">Junk Removal</a></h3>
                                                                            <p>We provide fast and reliable junk removal services for homes and businesses.</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="/services/junk-removal.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                            <!-- /.service-tabs__title -->
                                                                        </div><!-- /.service-tabs__text -->
                                                                        <div class="service-tabs__image">
                                                                            <img src="/assets/images/services/service-m-1-1.png"
                                                                                alt="">
                                                                        </div><!-- /.service-tabs__image -->
                                                                    </div><!-- /.service-tabs__content -->
                                                                </div>

                                                                <div class="tab" id="service-2">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="/services/demolition.html">Demolition</a></h3>
                                                                            <p>We handle all types of demolition projects with precision.</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="/services/demolition.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                            <!-- /.service-tabs__title -->
                                                                        </div><!-- /.service-tabs__text -->
                                                                        <div class="service-tabs__image">
                                                                            <img src="/assets/images/services/service-m-1-2.png"
                                                                                alt="">
                                                                        </div><!-- /.service-tabs__image -->
                                                                    </div><!-- /.service-tabs__content -->
                                                                </div>

                                                                <div class="tab" id="service-3">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="/services/recycling.html">Recycling</a></h3>
                                                                            <p>We recycle responsibly to reduce waste and protect the environment.</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="/services/recycling.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                        <div class="service-tabs__image">
                                                                            <img src="/assets/images/services/service-m-1-3.png"
                                                                                alt="">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="service-4">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="/services/donations.html">Donation
                                                                                    Pickup</a></h3>
                                                                            <p>We offer fast, friendly donation pickups for your convenience.</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="/services/donations.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                        <div class="service-tabs__image">
                                                                            <img src="/assets/images/services/service-m-1-4.png"
                                                                                alt="">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="service-5">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="/services/estate-cleanouts.html">Estate Cleanouts</a></h3>
                                                                            <p>We provide thorough estate cleanouts with care and efficiency.</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="/services/estate-cleanouts.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                        <div class="service-tabs__image">
                                                                            <img src="/assets/images/services/service-m-1-5.png"
                                                                                alt="">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="service-6">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a
                                                                                    href="/services/community-specials.html">Community Pickup</a></h3>
                                                                            <p>Waste management for organizations and neighborhoods</p>
                                                                            <a class="service-tabs__btn"
                                                                                href="/services/community-specials.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                        <div class="service-tabs__image">
                                                                            <img src="/assets/images/services/service-m-1-6.png"
                                                                                alt="">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown megamenu">
                                <a href="service-areas.html">Areas We Serve</a>
                                <ul>
                                    <li>
                                        <div class="service-tabs">
                                            <div class="container">
                                                <div class="service-tabs__inner tabs-box">
                                                    <div class="row">
                                                        <div class="col-md-6 col-lg-4">
                                                            <ul class="tab-buttons service-tabs__links">
                                                                <li data-tab="#atlanta" class="tab-btn active-btn">
                                                                    <span>Atlanta</span>
                                                                </li>
                                                                <li data-tab="#marietta" class="tab-btn">
                                                                    <span>Marietta</span>
                                                                </li>
                                                                <li data-tab="#sandy-springs" class="tab-btn">
                                                                    <span>Sandy Springs</span>
                                                                </li>
                                                                <li data-tab="#roswell" class="tab-btn">
                                                                    <span>Roswell</span>
                                                                </li>
                                                                <li data-tab="#alpharetta" class="tab-btn">
                                                                    <span>Alpharetta</span>
                                                                </li>
                                                                <li data-tab="#decatur" class="tab-btn">
                                                                    <span>Decatur</span>
                                                                </li>
                                                                <li data-tab="#smryna" class="tab-btn">
                                                                    <span>Smyrna</span>
                                                                </li>
                                                                <li data-tab="#duluth" class="tab-btn">
                                                                    <span>Duluth</span>
                                                                </li>
                                                                <li data-tab="#norcross" class="tab-btn">
                                                                    <span>Norcross</span>
                                                                </li>
                                                                <li data-tab="#johns-creek" class="tab-btn">
                                                                    <span>Johns Creek</span>
                                                                </li>
                                                                <li data-tab="#lawrenceville" class="tab-btn">
                                                                    <span>Lawrenceville</span>
                                                                </li>
                                                                <li data-tab="#peachtree-city" class="tab-btn">
                                                                    <span>Peachtree City</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-6 col-lg-8">
                                                            <div class="tabs-content">
                                                                <div class="tab active-tab animated fadeInUp" id="atlanta">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="atlanta.html">Atlanta</a></h3>
                                                                            <p>Junk removal and related services in Atlanta, GA and surrounding neighborhoods.</p>
                                                                            <a class="service-tabs__btn" href="atlanta.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="marietta">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="marietta.html">Marietta</a></h3>
                                                                            <p>Full-service junk removal in Marietta, GA.</p>
                                                                            <a class="service-tabs__btn" href="marietta.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="sandy-springs">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="sandy-springs.html">Sandy Springs</a></h3>
                                                                            <p>Residential and commercial junk removal in Sandy Springs, GA.</p>
                                                                            <a class="service-tabs__btn" href="sandy-springs.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="roswell">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="roswell.html">Roswell</a></h3>
                                                                            <p>Junk hauling and cleanouts in Roswell, GA.</p>
                                                                            <a class="service-tabs__btn" href="roswell.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="alpharetta">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="alpharetta.html">Alpharetta</a></h3>
                                                                            <p>Junk removal and recycling in Alpharetta, GA.</p>
                                                                            <a class="service-tabs__btn" href="alpharetta.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="decatur">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="decatur.html">Decatur</a></h3>
                                                                            <p>Professional junk removal in Decatur, GA.</p>
                                                                            <a class="service-tabs__btn" href="decatur.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="smryna">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="smyrna.html">Smyrna</a></h3>
                                                                            <p>Junk pickup and cleanouts in Smyrna, GA.</p>
                                                                            <a class="service-tabs__btn" href="smyrna.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="duluth">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="duluth.html">Duluth</a></h3>
                                                                            <p>Junk removal services in Duluth, GA.</p>
                                                                            <a class="service-tabs__btn" href="duluth.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="norcross">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="norcross.html">Norcross</a></h3>
                                                                            <p>Junk hauling and disposal in Norcross, GA.</p>
                                                                            <a class="service-tabs__btn" href="norcross.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="johns-creek">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="johns-creek.html">Johns Creek</a></h3>
                                                                            <p>Junk removal and cleanouts in Johns Creek, GA.</p>
                                                                            <a class="service-tabs__btn" href="johns-creek.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="lawrenceville">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="lawrenceville.html">Lawrenceville</a></h3>
                                                                            <p>Junk removal and hauling in Lawrenceville, GA.</p>
                                                                            <a class="service-tabs__btn" href="lawrenceville.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab" id="peachtree-city">
                                                                    <div class="service-tabs__content">
                                                                        <div class="service-tabs__text">
                                                                            <h3 class="service-tabs__title"><a href="peachtree-city.html">Peachtree City</a></h3>
                                                                            <p>Junk removal and recycling in Peachtree City, GA.</p>
                                                                            <a class="service-tabs__btn" href="peachtree-city.html">
                                                                                View More
                                                                                <i class="fa fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="promotions.html">Promotions</a></li>
                        </ul>
                    </div>
                    <div class="main-menu-three__right">
                        <div class="main-menu-three__call">
                            <a href="/free-quote" class="thm-btn thm-btn--bg-black">Free Quote</a>
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
                        <a href="index.html" aria-label="logo image"><img src="/assets/images/resources/logo-2.png"
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
                            <a href="tel:(678) 367-2975">(678) 367-2975</a>
                        </li>
                    </ul><!-- /.mobile-nav__contact -->
                    <div class="mobile-nav__top">
                        <div class="mobile-nav__social">
                            <a href="https://www.youtube.com/calljunkle" target="_blank"><i class="fab fa-youtube"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=61578440687864" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/calljunkle" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.tiktok.com/calljunkle" target="_blank"><i class="fab fa-tiktok"></i></a>
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