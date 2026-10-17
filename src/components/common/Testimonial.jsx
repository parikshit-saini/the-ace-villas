import { useRef } from "react";
import { useTranslation } from "react-i18next";
import OwlCarousel from 'react-owl-carousel2';


export const Testimonial = ({ imageSrc }) => {
    const { t } = useTranslation();

    const testimonials = [
        {
            name: "Khyla",
            feedback: "Good and quiet area. Host was very good in communication and welcoming. They were always quick to respond in any questions I have. Host made my stay very easy.",
            location: "United State"
        },
        {
            name: "Bob Smith",
            feedback: "It's the closest place to the center, but it takes 15 minutes by taxi. The management is very professional",
            location: "Turkey"
        },
        {
            name: "Jingu",
            feedback: "It's almost a perfect place to stay. I highly recommend it. It was a trip with old friends, and the manager was very kind, and the facilities were clean and nice, just like the pictures.",
            location: "South Korea"

        }
    ];
    const options = {
        items: 1,
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
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };

    // Use a ref to access OwlCarousel methods
    const carouselRef = useRef(null);

    // Handlers for left and right navigation
    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    return <section className="testimonial" id="reviews">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mb-5">
                    <h1>{t('testimonial')}</h1>
                </div>
                <div className="col-lg-6">
                    <img src={imageSrc} alt="" className="w-100" />
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                    <div className="action">
                        <i class="fa-solid fa-quote-left"></i>
                        <div className="navs">
                            <div className="nav-btn left" onClick={handlePrev}><i class="fa-solid fa-angle-left"></i></div>
                            <div className="nav-btn right" onClick={handleNext}><i class="fa-solid fa-angle-right"></i></div>
                        </div>
                    </div>
                    <OwlCarousel options={options} ref={carouselRef} {...options}>

                        {testimonials.map((testimonial, index) => (
                            <div key={index}>
                                <div className="message mt-4">
                                    {testimonial.feedback}
                                </div>
                                <p className="heading mt-4">{testimonial.name}, {testimonial.location}</p>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
}