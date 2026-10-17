import "./pages.scss";
import theacecondo from "../../assets/theacecondo.png";
import { Testimonial } from "../common/Testimonial";
import images from "../common/location";
import { Form } from "../common/Form";
import condoReview from "../../assets/condoReview.png";
import { useTranslation } from "react-i18next";
import { TheAceCondoFacility } from "../common/TheAceCondoFacility";
import { AmenitiesCondo } from "../common/AmenitiesCondo";
import { CondoGallery } from "../common/GalleryCVCondo/CondoGallery";

export const TheAceCondo = () => {
    const { t } = useTranslation();
    const locationHighlights = t("aceCondo.locationHighlights", { returnObjects: true });
    const faqData = t("aceCondo.faq.questions", { returnObjects: true });
    return <div>
        <section className="main pages" id="Home">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{t('aceCondo.home.title')}</h1>
                        <h2>{t('aceCondo.home.subtitle')}</h2>
                        <p>{t('aceCondo.home.description')}</p>
                        <h3>{t('aceCondo.home.features')}</h3>
                        <button className="btn btn-theme"><a href="https://booking.theacevillas.com/the-ace-sea-view-condo/">{t('aceCondo.home.buttonText')}</a></button>
                    </div>
                    <div className="col-md-6 mt-4 m-auto">
                        <h2 className="mb-3">See Availability</h2>
                        <iframe title="availability" class="rounded" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showPrint=0&showTz=0&showCalendars=0&title=The%20Ace%20CV%20Condo&src=cnAwM2NzZnBvZmliOWo2cTlsaWFvcjliNDJuaHZiaGJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%238E24AA" width="100%" height="450" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
        <section className="villaAbout">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={theacecondo} alt="" className="w-100" />
                    </div>
                    <div className="col-md-6 centerMid mt-4 mt-md-0">
                        <div>

                            <h1>{t('aceCondo.about.title')}</h1>
                            <p>{t('aceCondo.about.description')}</p>
                            <div className="address">
                                <p className="heading">{t('aceCondo.about.addressHeading')}</p>
                                <p>{t('aceCondo.about.address')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <TheAceCondoFacility />
        <Testimonial imageSrc={condoReview} />
        <AmenitiesCondo />
        <section className="nearbyLocation">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1>{locationHighlights.title}</h1>
                        <p className="data">{locationHighlights.description}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="places-container">
                            {locationHighlights.sections.map((section, index) => (
                                <div key={index} className="section">
                                    <h3 className="section-title">{section.category}</h3>
                                    {section.subCategory && <h4 className="sub-title">{section.subCategory}</h4>}
                                    <ul>
                                        {section.items.map((item, idx) => (
                                            <li key={idx} className="place-item">
                                                <span>{item.name}</span>
                                                <span className="distance">{item.distance}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="imageGallery">
                            {images.map((displayimage, index) => (
                                <img src={displayimage} alt="" key={index} className="w-100" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="faq">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1>{t("aceCondo.faq.title")}</h1>
                    </div>
                    <div className="col-12">
                        <div className="accordion" id="faqAccordion">
                            {faqData.map((faq, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse${index}`}
                                        >
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${index}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">{faq.answer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <CondoGallery />
        <section className="booking">
            <div className="container bookinBg">
                <div className="row">
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h2>{t("aceCondo.booking.title")}</h2>
                            <p className="data">{t("aceCondo.booking.description")}</p>
                            <p className="heading">{t("aceCondo.booking.rate")}</p>
                            <button
                                className="btn btn-theme"
                            >
                                <a href="https://booking.theacevillas.com/the-ace-sea-view-condo/">{t("aceCondo.booking.button")}</a>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5 mt-5 mt-md-0">
                        <iframe title="aceCondo" className="w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2856.652911423916!2d100.8563354!3d12.9107059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31029764a514e981%3A0xe6bf050e735683dc!2sROSEWOOD%20BEACH%20VILLA%20PATTAYA!5e1!3m2!1sen!2sin!4v1732034579332!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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