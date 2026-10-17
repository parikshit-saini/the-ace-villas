import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 600) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="btn btn-jump"
            >
                <i class="fa-solid fa-angles-up"></i>
            </button>
        ));
};

export default ScrollToTopButton;
