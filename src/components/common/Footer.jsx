import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/TheAceDark.svg";
import { useTranslation } from 'react-i18next';



export const Footer = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        email: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setIsSubmitted(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObjNl = new FormData();
        formDataObjNl.append('email', formData.email);

        try {
            const response = await fetch('https://theacevillas.com/newsletter.php', {
                method: 'POST',
                body: formDataObjNl,
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ email: '' });
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error occurred while sending email');
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // This will add a smooth scroll animation
        });
    };
    return <footer>
        <div className="container">
            <div className="row">
                <div className="col-xl-3 text-center text-xl-start">
                    <NavLink to="/" onClick={scrollToTop}>
                        <img src={Logo} alt="Ace Villas Logo" className="img-fluid mb-3" />
                    </NavLink>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 text-center text-sm-start my-4 my-xl-0">
                    <h4 className="mb-3">{t('footer.pages')}</h4>
                    <ul>
                        <li><NavLink to="/">{t('footer.home')}</NavLink></li>
                        <li><NavLink to="/about" onClick={scrollToTop}>{t('footer.about')}</NavLink></li>
                        <li><NavLink to="/#villas">{t('footer.villas')}</NavLink></li>
                        <li><NavLink to="/#gallery">{t('footer.gallery')}</NavLink></li>
                        <li><NavLink to="/#location">{t('footer.location')}</NavLink></li>
                        <li><NavLink to="/#reviews">{t('footer.reviews')}</NavLink></li>
                        <li><NavLink to="/#contact">{t('footer.contact')}</NavLink></li>
                    </ul>
                </div>
                <div className="col-xl-4 col-md-5 col-sm-6 text-center text-sm-start my-4 my-xl-0">
                    <h4 className="mb-3">{t('footer.contactInfo')}</h4>
                    <ul>
                        <li>
                            <div className="contact">
                                <i className="fa-solid fa-mobile-screen-button"></i>
                                <span> +66937293415</span>
                            </div>
                        </li>
                        <li>
                            <div className="contact">
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:business@theacevillas.com">contact@theacevillas.com</a>
                            </div>
                        </li>
                        <li>
                            <div className="contact address mt-4">
                                <p className="mb-0"><i className="fa-solid fa-location-dot me-2"></i>{t('footer.sukSabaiAddress.title')}</p>
                                <span>{t('footer.sukSabaiAddress.details')}</span>
                            </div>
                            <div className="contact address mt-4">
                                <p className="mb-0"><i className="fa-solid fa-location-dot me-2"></i>{t('footer.jomtienAddress.title')}</p>
                                <span>{t('footer.jomtienAddress.details')}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-xl-3 col-md-4 my-4 my-xl-0">
                    <div className="content">
                        <h4>{t('footer.subscribeTitle')}</h4>
                        <p>{t('footer.subscribeDesc')}</p>
                        <form method="POST" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="form-control"
                                placeholder={t('footer.emailPlaceholder')}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <button name="submit" className="btn btn-light" type="submit">
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                            {isSubmitted && (
                                <p className="text-theme mt-2">{t('footer.successMessage')}</p>
                            )}
                        </form>
                        <div className="social">
                            <a href="https://www.facebook.com/acegroupthailand" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/the_ace_group_thailand/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container px-0 text-center">
                <span className="my-0">{t('footer.copyright')}</span>
                <div>
                    <NavLink to="Terms-and-conditions" onClick={scrollToTop}>{t('footer.terms')}</NavLink> |
                    <NavLink to="Privacy-Policy" onClick={scrollToTop}>{t('footer.privacy')}</NavLink> |
                    <NavLink to="Disclaimer" onClick={scrollToTop}>{t('footer.disclaimer')}</NavLink>
                </div>
            </div>
        </div>
    </footer>
}