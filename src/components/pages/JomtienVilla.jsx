import "./pages.scss";
import aboutGala from "../../assets/aboutgala.jpeg";
import { Facility } from "../common/Facility";
import { Testimonial } from "../common/Testimonial";
import images from "../common/location";
import { AmenitiesJomti } from "../common/AmenitiesJomti";
import { GalleryAce } from "../common/GalleryAce";
import { Form } from "../common/Form";
import galaTestimonial from "../../assets/testimonial.webp";
import { useTranslation } from "react-i18next";

export const JomtienVilla = () => {
    const { t } = useTranslation();

    // const places = [
    //     {
    //         category: "Top Attractions",
    //         items: [
    //             { name: "Ripley's Believe It or Not", distance: "3.7 km" },
    //             { name: "Pattaya Viewpoint", distance: "1.8 km" },
    //             { name: "Underwater World Pattaya", distance: "5.9 km" },
    //         ],
    //     },
    //     {
    //         category: "Nearby Beaches",
    //         items: [
    //             { name: "Pattaya Beach", distance: "3.2 km" },
    //             { name: "Dongtan Beach", distance: "1.2 km" },
    //             { name: "Jomtien Beach", distance: "650 m" },
    //         ],
    //     },
    //     {
    //         category: "Dining and Shopping",
    //         subCategory: "Enjoy a wide range of dining options and convenient shopping nearby:",
    //         items: [
    //             { name: "La Bocca Italian Restaurant and Pizzeria", distance: "2.3 km" },
    //             { name: "Natan's", distance: "2.2 km" },
    //             { name: "Akvavit Grill & Bar", distance: "2.1 km" },
    //             { name: "Sandbar By The Sea", distance: "1.7 km" },
    //         ],
    //     },
    //     {
    //         category: "Supermarkets",
    //         items: [
    //             { name: "Big C", distance: "5 km" },
    //             { name: "Friendship Supermarket", distance: "3.4 km" },
    //         ],
    //     },
    //     {
    //         category: "Public transport",
    //         items: [
    //             { name: "Pattaya South", distance: "3.1 km" },
    //             { name: "Pattaya Railway Station", distance: "7.7 km" },
    //             { name: "Pattaya Bus Terminal", distance: "7.6 km" },
    //             { name: "U-Tapao Rayong-Pattaya International Airport", distance: "35.4 km" },
    //         ],
    //     },
    // ];
    // const faqData = [
    //     {
    //         question: "How many bedrooms does The Ace Jomtien Villa have?",
    //         answer: "The Ace Jomtien Villa features 6 bedrooms. For a detailed breakdown of the accommodation, please check this page."
    //     },
    //     {
    //         question: "Is The Ace Jomtien Villa popular with families?",
    //         answer: "Yes, The Ace Jomtien Villa is a popular choice for family stays."
    //     },
    //     {
    //         question: "Does The Ace Jomtien Villa have a pool?",
    //         answer: "Yes, the villa has a pool. You can find more details about the pool and other facilities on this page."
    //     },
    //     {
    //         question: "What activities are available at The Ace Jomtien Villa?",
    //         answer: "The Ace Jomtien Villa offers activities such as a games room and swimming pool (charges may apply)."
    //     },
    //     {
    //         question: "How much does it cost to stay at The Ace Jomtien Villa?",
    //         answer: "The prices vary depending on your stay dates and the villa's policies. Please check the pricing by entering your dates."
    //     },
    //     {
    //         question: "How many guests can sleep at The Ace Jomtien Villa?",
    //         answer: "The villa can accommodate up to 12 guests. For detailed information, check the accommodation breakdown on this page."
    //     },
    //     {
    //         question: "Is there a private pool at The Ace Jomtien Villa?",
    //         answer: "Yes, the villa includes a private pool. More details are available on this page."
    //     },
    //     {
    //         question: "What are the check-in and check-out times at The Ace Jomtien Villa?",
    //         answer: "Check-in is from 14:00, and check-out is until 11:00."
    //     },
    //     {
    //         question: "Does The Ace Jomtien Villa have a terrace?",
    //         answer: "Yes, the villa has options that include a terrace. Find out more about the facilities on this page."
    //     },
    //     {
    //         question: "Does The Ace Jomtien Villa have a balcony?",
    //         answer: "Yes, some options at the villa include a balcony. More details are available on this page."
    //     }
    // ];
    const locationHighlights = t("jomtiean.locationHighlights", { returnObjects: true });
    const faqData = t("jomtiean.faq.questions", { returnObjects: true });
    return <div>
        <section className="main pages" id="Home">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{t('jomtiean.home.title')}</h1>
                        <h2>{t('jomtiean.home.subtitle')}</h2>
                        <p>{t('jomtiean.home.description')}</p>
                        <h3>{t('jomtiean.home.features')}</h3>
                        <button className="btn btn-theme"><a href="https://booking.theacevillas.com/the-ace-jomtien-villa/">{t('jomtiean.home.buttonText')}</a></button>
                    </div>
                    <div className="col-md-6 mt-4 m-auto">
                        <h2 className="mb-3">See Availability</h2>
                        <iframe title="availability" class="rounded" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showTz=0&showCalendars=0&showTabs=0&title=The%20Ace%20Jomtien%20Villa&src=aWs0aWFiMzUxZmk4bG5ybWVuM3RiYnBvZjI2YzM2N3BAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=aDFzanVhNjA5NmNlajFlMHJsZjAwaTRyYTN1bGQ2ODFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2JjYmNiczYwMmxnbzEwZnJmcWhmYzE1OTljbmw1Y2NAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043&color=%230B8043&color=%230B8043" width="100%" height="450" frameborder="0"></iframe>
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

                            <h1>{t('jomtiean.about.title')}</h1>
                            <p>{t('jomtiean.about.description')}</p>
                            <div className="address">
                                <p className="heading">{t('jomtiean.about.addressHeading')}</p>
                                <p>{t('jomtiean.about.address')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Facility />
        <Testimonial imageSrc={galaTestimonial} />
        <AmenitiesJomti />
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
                        <h1>{t("jomtiean.faq.title")}</h1>
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
        <GalleryAce />
        <section className="booking">
            <div className="container bookinBg">
                <div className="row">
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h2>{t("jomtiean.booking.title")}</h2>
                            <p className="data">{t("jomtiean.booking.description")}</p>
                            <p className="heading">{t("jomtiean.booking.rate")}</p>
                            <button
                                className="btn btn-theme"
                            >
                                <a href="https://booking.theacevillas.com/the-ace-jomtien-villa/"> {t("jomtiean.booking.button")}</a>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5 mt-5 mt-md-0">
                        <iframe title="jomtiean" className="w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2856.652911423916!2d100.8563354!3d12.9107059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31029764a514e981%3A0xe6bf050e735683dc!2sROSEWOOD%20BEACH%20VILLA%20PATTAYA!5e1!3m2!1sen!2sin!4v1732034579332!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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