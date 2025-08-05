class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!--Site Footer Start-->
        <footer class="site-footer">
            <div class="site-footer-bg" style="background-image: url(/assets/images/backgrounds/site-footer-bg.jpg);">
            </div>
            <div class="site-footer__top">
                <div class="container">
                    <div class="site-footer__top-inner">
                        <div class="site-footer__top-logo">
                            <a href="index.html"><img src="/assets/images/resources/logo-2.png" alt="Junkle" width="100px"></a>
                        </div>
                        <div class="site-footer__top-right">
                            <p class="site-footer__top-right-text">Call Junkle - Junk Removal with a purpose</p>
                            <div class="site-footer__social">
                                <a href="https://www.youtube.com/calljunkle" target="_blank"><i class="fab fa-youtube"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=61578440687864" target="_blank"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/calljunkle" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.tiktok.com/calljunkle" target="_blank"><i class="fab fa-tiktok"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-footer__middle">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div class="footer-widget__column footer-widget__links clearfix">
                                <h3 class="footer-widget__title">Links</h3>
                                <ul class="footer-widget__links-list list-unstyled clearfix">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="https://api.leadconnectorhq.com/widget/booking/bkxdfwlLtaDhDrvFUeJE">Book a Pickup</a></li>
                                    <li><a href="https://link.apisystem.tech/widget/form/ZGWJO5uJ9AsQqKcjqOVz">Free Quote</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div class="footer-widget__column footer-widget__services clearfix">
                                <h3 class="footer-widget__title">Services</h3>
                                <ul class="footer-widget__services-list list-unstyled clearfix">
                                    <li><a href="services.html">Junk Removal</a></li>
                                    <li><a href="/services/demolition.html">Demolition</a></li>
                                    <li><a href="/services/recycling.html">Recycling</a></li>
                                    <li><a href="donation-pickup.html">Donation Pickup</a></li>
                                    <li><a href="/services/estate-cleanouts.html">Estate Cleanouts</a></li>
                                    <li><a href="community-days.html">Community Specials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div class="footer-widget__column footer-widget__contact clearfix">
                                <h3 class="footer-widget__title">Contact</h3>
                                <p class="footer-widget__contact-text">❤️ Proudly serving Atlanta communities</p>
                                <div class="footer-widget__contact-info">
                                    <div class="footer-widget__contact-icon">
                                        <span class="icon-contact"></span>
                                    </div>
                                    <div class="footer-widget__contact-content">
                                        <p class="footer-widget__contact-mail-phone">
                                            <a href="mailto:info@support.calljunkle.com"
                                                class="footer-widget__contact-mail">info@support.calljunkle.com</a>
                                            <a href="tel:(678) 367-2975" class="footer-widget__contact-phone">(678) 367-2975</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-footer__bottom">
                <div class="site-footer-bottom-shape"
                    style="background-image: url(/assets/images/shapes/site-footer-bottom-shape.png);"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="site-footer__bottom-inner">
                                <p class="site-footer__bottom-text">© Copyright 2025 <a href="#">Junkle</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!--Site Footer End-->
        
        `;
    }
}

customElements.define('custom-footer', CustomFooter);