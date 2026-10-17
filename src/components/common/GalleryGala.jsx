import React, { useRef } from "react";
import galagalleryImages from "./GalleryGalaX";
import { useTranslation } from "react-i18next";
import OwlCarousel from 'react-owl-carousel2';

export const GalleryGala = () => {
    const { t } = useTranslation();

    // Ref to the image container
    const imageContainerRef = useRef(null);

    // Scroll buttons handlers
    const scrollLeft = () => {
        imageContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        imageContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    const options = {
        items: 3,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: false,
        stagePadding: 30,
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

    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="mb-5">{t('Gallery')}</h1>
                    </div>
                    <div className="col-12 d-none d-sm-block">
                        <div className="tab-content mb-4">
                            {galagalleryImages.map((displayimage, index) => (
                                <div
                                    className={`tab-pane container px-1 fade ${index === 0 ? 'show active' : ''}`}
                                    id={`tab${index}`}
                                    key={index}
                                >
                                    <img src={displayimage} alt={`Slide ${index}`} className="displayImage" />
                                </div>
                            ))}
                        </div>
                        <div className="scroll-container">
                            <button className="scroll-btn left" onClick={scrollLeft}>{"<"}</button>
                            <ul
                                className="nav nav-pills"
                                ref={imageContainerRef}
                            >
                                {galagalleryImages.map((image, index) => (
                                    <li className="nav-item" key={index}>
                                        <a
                                            className={`nav-link ${index === 0 ? 'active' : ''}`}
                                            data-bs-toggle="pill"
                                            href={`#tab${index}`}
                                        >
                                            <img src={image} alt={`Slide ${index}`} className="tabImage" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <button className="scroll-btn right" onClick={scrollRight}>{">"}</button>
                        </div>
                    </div>
                    <div className="col-12 d-block d-sm-none">
                        <OwlCarousel options={options}>
                            {galagalleryImages.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Slide ${index}`} className="slideImage" />
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};
