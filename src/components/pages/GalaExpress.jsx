import "./pages.scss";
import aboutGala from "../../assets/aboutgala.jpeg";
import { Facility } from "../common/Facility";
import { Testimonial } from "../common/Testimonial";
import images from "../common/location";
import { Amenities } from "../common/Amenities";
import { GalleryGala } from "../common/GalleryGala";
import { Form } from "../common/Form";
import galaTestimonial from "../../assets/contact.jpg";
import { useTranslation } from "react-i18next";


export const GalaExpress = () => {
    const { t } = useTranslation();

    // const places = [
    //     {
    //         category: "Top Attractions",
    //         items: [
    //             { name: "Ripley's Believe It or Not", distance: "2.8 km" },
    //             { name: "Pattaya Viewpoint", distance: "3.3 km" },
    //             { name: "Underwater World Pattaya", distance: "3 km" },
    //         ],
    //     },
    //     {
    //         category: "Nearby Beaches",
    //         items: [
    //             { name: "Pattaya Beach", distance: "2.2 km" },
    //             { name: "Dongtan Beach", distance: "3 km" },
    //             { name: "Jomtien Beach", distance: "3.2 km" },
    //         ],
    //     },
    //     {
    //         category: "Dining and Shopping",
    //         subCategory: "Enjoy a wide range of dining options and convenient shopping nearby:",
    //         items: [
    //             { name: "Camel Toe", distance: "200 m" },
    //             { name: "The Lion Pub", distance: "250 m" },
    //             { name: "Thai German house", distance: "350 m" },
    //         ],
    //     },
    //     {
    //         category: "Supermarkets",
    //         items: [
    //             { name: "Big C", distance: "2.1 km" },
    //             { name: "Friendship Supermarket", distance: "2.1 km" },
    //         ],
    //     },
    //     {
    //         category: "Public transport",
    //         items: [
    //             { name: "Pattaya South", distance: "2.6 km" },
    //             { name: "Pattaya Railway Station", distance: "5 km" },
    //             { name: "Pattaya Bus Terminal", distance: "6 km" },
    //             { name: "U-Tapao Rayong-Pattaya International Airport", distance: "46 km" },
    //         ],
    //     },
    // ];
    // const faqData = [
    //     {
    //         question: "How many bedrooms does The Ace Suk Sabai Villa have?",
    //         answer: "The Ace Suk Sabai Villa features 4 bedrooms. For a detailed breakdown of the accommodation, please check this page."
    //     },
    //     {
    //         question: "Is The Ace Suk Sabai Villa popular with families?",
    //         answer: "Yes, The Ace Suk Sabai Villa is a popular choice for family stays."
    //     },
    //     {
    //         question: "Does The Ace Suk Sabai Villa have a pool?",
    //         answer: "Yes, the villa has a pool. You can find more details about the pool and other facilities on this page."
    //     },
    //     {
    //         question: "What activities are available at The Ace Suk Sabai Villa?",
    //         answer: "The Ace Suk Sabai Villa offers activities such as a games room and swimming pool (charges may apply)."
    //     },
    //     {
    //         question: "How much does it cost to stay at The Ace Suk Sabai Villa?",
    //         answer: "The prices vary depending on your stay dates and the villa's policies. Please check the pricing by entering your dates."
    //     },
    //     {
    //         question: "How many guests can sleep at The Ace Suk Sabai Villa?",
    //         answer: "The villa can accommodate up to 10 guests. For detailed information, check the accommodation breakdown on this page."
    //     },
    //     {
    //         question: "Is there a private pool at The Ace Suk Sabai Villa?",
    //         answer: "Yes, the villa includes a private pool. More details are available on this page."
    //     },
    //     {
    //         question: "What are the check-in and check-out times at The Ace Suk Sabai Villa?",
    //         answer: "Check-in is from 14:00, and check-out is until 11:00."
    //     },
    //     {
    //         question: "Does The Ace Suk Sabai Villa have a terrace?",
    //         answer: "Yes, the villa has options that include a terrace. Find out more about the facilities on this page."
    //     },
    //     {
    //         question: "Does The Ace Suk Sabai Villa have a balcony?",
    //         answer: "Yes, some options at the villa include a balcony. More details are available on this page."
    //     },
    //     {
    //         question: "How far is The Ace Suk Sabai Villa from the centre of Pattaya South?",
    //         answer: "The Ace Suk Sabai Villa is located 800 meters from the center of Pattaya South. Travel distances may vary."
    //     }
    // ];
    const locationHighlights = t("SukSabai.locationHighlights", { returnObjects: true });
    const faqData = t("SukSabai.faq.questions", { returnObjects: true });
    return <div>
        <section className="main pages" id="Home">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{t('SukSabai.home.title')}</h1>
                        <h2>{t('SukSabai.home.subtitle')}</h2>
                        <p>{t('SukSabai.home.description')}</p>
                        <h3>{t('SukSabai.home.features')}</h3>
                        <button className="btn btn-theme"><a href="https://booking.theacevillas.com/the-ace-suk-sabai-villa/">{t('SukSabai.home.buttonText')}</a></button>
                    </div>
                    <div className="col-md-6 mt-4 m-auto">
                        <h2 className="mb-3">See Availability</h2>
                        <iframe title="availability" class="rounded" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showTz=0&showCalendars=0&showTabs=0&title=The%20Ace%20Suk%20Sabai%20Villa&src=cDJnMXBhNjluaGFkY2htZHJ1NXFkamJlNXFmbmdrdWdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=cGswa2NlNm9kNXFvM2RuazYyOWFnamZtOWFiYmhicDBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=dHJnZmgzMzJucmhnbW8zOWpsbTg1bzNzZXFyc2o2M2VAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F4511E&color=%23F4511E&color=%23F4511E" width="100%" height="450" frameborder="0"></iframe>

                    </div>
                </div>
            </div>
        </section>
        <section className="villaAbout">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={aboutGala} alt="" className="w-100" />
                    </div>
                    <div className="col-md-6 centerMid mt-4 mt-md-0">
                        <div>

                            <h1>{t('SukSabai.about.title')}</h1>
                            <p>{t('SukSabai.about.description')}</p>
                            <div className="address">
                                <p className="heading">{t('SukSabai.about.addressHeading')}</p>
                                <p>{t('SukSabai.about.address')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Facility />
        <Testimonial imageSrc={galaTestimonial} />
        <Amenities />
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
                        <h1>{t("SukSabai.faq.title")}</h1>
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
        <GalleryGala />
        <section className="booking">
            <div className="container bookinBg">
                <div className="row">
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h2>{t("SukSabai.booking.title")}</h2>
                            <p className="data">{t("SukSabai.booking.description")}</p>
                            <p className="heading">{t("SukSabai.booking.rate")}</p>
                            <button
                                className="btn btn-theme"
                            >
                                <a href="https://booking.theacevillas.com/the-ace-suk-sabai-villa/"> {t("SukSabai.booking.button")}</a>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5 mt-5 mt-md-0">
                        <iframe title="suksabai" className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29651.02762486303!2d100.83623993719807!3d12.913364163786563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31029719f4fd93d3%3A0xfdde2bd0638126b8!2sGala%20Express!5e1!3m2!1sen!2sin!4v1731947080144!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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