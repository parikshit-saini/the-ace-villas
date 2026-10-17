import { Testimonial } from "../common/Testimonial";

import galaExpress from "../../assets/galaexpress.png";
import ace from "../../assets/theacevilla.png";
import "./pages.scss"
import { Form } from "../common/Form";
import galaTestimonial from "../../assets/testimonial.webp";
import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation();

    return <div>
        <section className="main pages" id="Home">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{t('aboutpage.title')}</h2>
                        <h1>{t('aboutpage.heading')}</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {t('aboutpage.description', { returnObjects: true }).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>))}
                    </div>
                </div>
            </div>
        </section>
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
                            <p>{t('bookStay.villa1.desc')}</p>
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
                                    <button className="btn btn-black"><a href="https://booking.theacevillas.com/the-ace-jomtien-villa/"> {t('bookStay.villa1.button')}</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mx-auto my-md-0 my-3">
                        <div className="cardBox">
                            <img src={galaExpress} alt="" />
                            <p> {t('bookStay.villa2.desc')}</p>
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
                                    <button className="btn btn-black"><a href="https://booking.theacevillas.com/the-ace-suk-sabai-villa/"> {t('bookStay.villa2.button')}</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Testimonial imageSrc={galaTestimonial} />
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