import "./pages.scss"
import OwlCarousel from 'react-owl-carousel2';
import images from "../common/slider";
import galaExpress from "../../assets/galaexpress.png";
import theaceCondo from "../../assets/theacecondo_image.png";
import ace from "../../assets/theacevilla.png";
import attraction1 from "../../assets/attraction1.png";
import attraction2 from "../../assets/attraction2.png";
import attraction3 from "../../assets/attraction3.png";
import attraction4 from "../../assets/attraction4.png";
import contact from "../../assets/contact.jpg";
import { Gallery } from "../common/Gallery";
import { Testimonial } from "../common/Testimonial";
import { Form } from "../common/Form";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import galaTestimonial from "../../assets/testimonial.webp";
import { useTranslation } from 'react-i18next';

export const Main = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // This will add a smooth scroll animation
        });
    };
    useEffect(() => {
        // Extract hash from the URL
        const hash = location.hash.replace("#", "");
        if (hash) {
            // Scroll to the section with the matching ID
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);
    const options = {
        items: 3,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    };
    return <div>
        <section className="main" id="Home">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{t('part.main')}</h1>
                        <h2>{t('part.sub')}</h2>
                        <p>{t('part.desc')}</p>
                        <NavLink to="/#villas"><button className="btn btn-theme">{t('part.button_1')}</button></NavLink>
                        <button className="btn btn-theme ms-3"><a href="https://booking.theacevillas.com/">{t('part.button_2')}</a></button>

                        <div className="mt-5">
                            <OwlCarousel options={options}>
                                {images.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index}`} className="slideImage" />
                                    </div>
                                ))}
                            </OwlCarousel>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{t('about.heading')}</h1>
                        <p>{t('about.desc')}</p>
                        <NavLink to="/About"> <button className="btn btn-theme">
                            {t('about.button')}
                        </button></NavLink>
                    </div>
                </div>
            </div>
        </section>
        <section className="exploreVillas" id="villas">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1>{t('exploreVilla.heading')}</h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="villasContainer">
                            <p className="heading">{t('exploreVilla.villa1')}</p>
                            <div className="imgContainer">
                                <img src={galaExpress} alt="" />
                                <NavLink to="The-Ace-Suk-Sabai-Villa" onClick={scrollToTop}><p className="simple">{t('exploreVilla.explore1')} <i className="fa-solid fa-circle-chevron-right"></i></p></NavLink>
                            </div>
                            <p className="desc mt-3">{t('exploreVilla.villa1description')}</p>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="villasContainer">
                            <p className="heading">{t('exploreVilla.villa2')}</p>
                            <div className="imgContainer">
                                <img src={ace} alt="" />
                                <NavLink to="The-Ace-Jomtien-Villa" onClick={scrollToTop}>  <p className="simple">{t('exploreVilla.explore2')} <i className="fa-solid fa-circle-chevron-right"></i></p></NavLink>
                            </div>
                            <p className="desc mt-3">{t('exploreVilla.villa2description')}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        {/* <section className="exploreVillas" id="villas">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1>{t('exploreVilla.heading2')}</h1>
                    </div>
                    <div className="col-lg-6 m-auto">
                        <div className="villasContainer">
                            <p className="heading">{t('exploreVilla.villa3')}</p>
                            <div className="imgContainer">
                                <img src={theaceCondo} alt="" />
                                <NavLink to="The-Ace-condo" onClick={scrollToTop}><p className="simple">{t('exploreVilla.explore1')} <i className="fa-solid fa-circle-chevron-right"></i></p></NavLink>
                            </div>
                            <p className="desc mt-3">{t('exploreVilla.villa3description')}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section> */}
        <section className="whychooseus">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{t('whychooseus.heading')}</h1>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-5">
                        <div className="content">
                            <div className="icon">
                                <i className="fa-solid fa-water-ladder"></i>
                            </div>
                            <p className="heading">{t('whychooseus.block1.heading')}</p>
                            <p>{t('whychooseus.block1.desc')}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-5">
                        <div className="content">
                            <div className="icon">
                                <i className="fa-solid fa-magnifying-glass-location"></i>
                            </div>
                            <p className="heading">{t('whychooseus.block2.heading')}</p>
                            <p>{t('whychooseus.block2.desc')}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-5">
                        <div className="content">
                            <div className="icon">
                                <i className="fa-solid fa-water-ladder"></i>
                            </div>
                            <p className="heading">{t('whychooseus.block3.heading')}</p>
                            <p>{t('whychooseus.block3.desc')}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-5">
                        <div className="content">
                            <div className="icon">
                                <i className="fa-solid fa-mug-hot"></i>
                            </div>
                            <p className="heading">{t('whychooseus.block4.heading')}</p>
                            <p>{t('whychooseus.block4.desc')}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="nearbyAttraction" id="location">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1>{t('nearbyAttraction.heading')}</h1>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="attractionCards centerMid">
                            <div className="cardContainer">
                                <img src={attraction1} alt="" />
                                <p>{t('nearbyAttraction.attractions.name1')}</p>
                            </div>
                            <div className="cardContainer">
                                <img src={attraction2} alt="" />
                                <p>{t('nearbyAttraction.attractions.name2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 centerMid mt-4">
                        <p className="heading text-center t-grey">{t('nearbyAttraction.description1')}</p>
                    </div>
                    <div className="col-md-6 centerMid mt-4">
                        <p className="heading text-center t-grey">{t('nearbyAttraction.description2')}</p>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="attractionCards centerMid">
                            <div className="cardContainer">
                                <img src={attraction3} alt="" />
                                <p>{t('nearbyAttraction.attractions.name3')}</p>
                            </div>
                            <div className="cardContainer">
                                <img src={attraction4} alt="" />
                                <p>{t('nearbyAttraction.attractions.name4')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Gallery />
        <section className="bookStay">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1>{t('bookStay.heading')}</h1>
                        <p className="heading t-grey">{t('bookStay.subheading')}</p>
                    </div>
                    <div className="col-md-5 mx-auto my-md-0 my-3">
                        <div className="cardBox">
                            <img src={ace} alt="" />
                            <div className="content">
                                <div>
                                    <h5>{t('bookStay.villa1.name')}</h5>
                                    <ul>
                                        <li>{t('bookStay.villa1.features.bedrooms')}</li>
                                        <li>{t('bookStay.villa1.features.privatePool')}</li>
                                        <li>{t('bookStay.villa1.features.wifi')}</li>
                                        <li>{t('bookStay.villa1.features.kitchen')}</li>
                                        <li>{t('bookStay.villa1.features.parking')}</li>
                                    </ul>
                                    <p>{t('bookStay.villa1.description')}</p>
                                </div>
                                <div className="price">
                                    <h4>{t('bookStay.villa1.price.amount', { price: 13500 })}</h4>
                                    <p>{t('bookStay.villa1.price.currency')} / {t('bookStay.villa1.price.per')}</p>
                                    <button className="btn btn-black"><a href="https://booking.theacevillas.com/the-ace-jomtien-villa/">{t('bookStay.villa1.button')}</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mx-auto my-md-0 my-3">
                        <div className="cardBox">
                            <img src={galaExpress} alt="" />
                            <div className="content">
                                <div>
                                    <h5>{t('bookStay.villa2.name')}</h5>
                                    <ul>
                                        <li>{t('bookStay.villa2.features.bedrooms')}</li>
                                        <li>{t('bookStay.villa2.features.privatePool')}</li>
                                        <li>{t('bookStay.villa2.features.streaming')}</li>
                                        <li>{t('bookStay.villa2.features.bbq')}</li>
                                        <li>{t('bookStay.villa2.features.parking')}</li>
                                    </ul>
                                    <p>{t('bookStay.villa2.description')}</p>
                                </div>
                                <div className="price">
                                    <h4>{t('bookStay.villa2.price.amount', { price: 12000 })}</h4>
                                    <p>{t('bookStay.villa2.price.currency')} / {t('bookStay.villa2.price.per')}</p>
                                    <button className="btn btn-black"><a href="https://booking.theacevillas.com/the-ace-suk-sabai-villa/">{t('bookStay.villa2.button')}</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Testimonial imageSrc={galaTestimonial} />
        <section className="contact" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={contact} alt="" className="w-100 h-100" />
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0 " id="contact">
                        <Form />

                    </div>
                </div>
            </div>
        </section>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content formModal">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    <div className="modal-body">
                        <Form />
                    </div>

                </div>
            </div>
        </div>
    </div>
}