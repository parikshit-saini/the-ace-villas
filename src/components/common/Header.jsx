import "./common.scss";
import logo from "../../assets/TheAceDark.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
export const Header = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Switch language
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return <>

        <header className="d-none d-lg-block">
            <div class="dropdown language">
                <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-language"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" onClick={() => changeLanguage('en')}>English</a></li>
                    <li><a class="dropdown-item" onClick={() => changeLanguage('th')}>Thailand</a></li>
                    <li><a class="dropdown-item" onClick={() => changeLanguage('jp')}>Japanies</a></li>
                    <li><a class="dropdown-item" onClick={() => changeLanguage('ch')}>Chinese</a></li>
                    <li><a class="dropdown-item" onClick={() => changeLanguage('ko')}>Korean</a></li>
                    <li><a class="dropdown-item" onClick={() => changeLanguage('tg')}>Tagalog</a></li>
                </ul>
            </div>
            <div className="desktop-header">
                <ul className="customMenu">
                    <li><NavLink to="/">{t('header.home')}</NavLink></li>
                    <li><NavLink to="/About">{t('header.about')}</NavLink></li>
                    {/* <li><NavLink to="/#villas">{t('header.villas')}</NavLink></li> */}
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {t('header.villas')}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink to="/The-Ace-Suk-Sabai-Villa" class="dropdown-item">{t('exploreVilla.villa1')}</NavLink></li>
                            <li><NavLink to="/The-Ace-Jomtien-Villa" class="dropdown-item">{t('exploreVilla.villa2')}</NavLink></li>
                            {/* <li><NavLink to="/The-Ace-condo" class="dropdown-item">{t('exploreVilla.villa3')}</NavLink></li> */}
                        </ul>
                    </li>
                    <li><img src={logo} alt="The Ace Villas" /></li>
                    <li><NavLink to="/#location">{t('header.location')}</NavLink></li>
                    <li><NavLink to="/#reviews">{t('header.reviews')}</NavLink></li>
                    <li><NavLink to="/Contact">{t('header.contact')}</NavLink></li>

                </ul>
            </div>
        </header>

        <header className="d-block d-lg-none">
            <div class="dropdown language">
                <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-language"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" onClick={() => changeLanguage('en')}>English</a></li>
                    <li><a class="dropdown-item" onClick={() => changeLanguage('th')}>Thailand</a></li>
                    <li><a class="dropdown-item" onClick={() => changeLanguage('jp')}>Japanies</a></li>
                    <li><a class="dropdown-item" onClick={() => changeLanguage('ch')}>Chinese</a></li>
                    <li><a class="dropdown-item" onClick={() => changeLanguage('ko')}>Korean</a></li>
                    <li><a class="dropdown-item" onClick={() => changeLanguage('tg')}>Tagalog</a></li>
                </ul>
            </div>
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
                            <img src={logo} alt="" className="logo" />
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded={menuOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                            onClick={toggleMenu}
                        >
                            <i className="fa-solid fa-bars text-light"></i>
                        </button>
                        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center align-items-start">
                                <li className="nav-item"><NavLink className="nav-link" to="/" onClick={closeMenu}>{t('header.home')}</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/about" onClick={closeMenu}>{t('header.about')}</NavLink></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {t('header.villas')}
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink to="/The-Ace-Suk-Sabai-Villa" class="dropdown-item">{t('exploreVilla.villa1')}</NavLink></li>
                                        <li><NavLink to="/The-Ace-Jomtien-Villa" class="dropdown-item">{t('exploreVilla.villa2')}</NavLink></li>
                                        {/* <li><NavLink to="/The-Ace-condo" class="dropdown-item">{t('exploreVilla.villa3')}</NavLink></li> */}
                                    </ul>
                                </li>
                                <li className="nav-item"><NavLink className="nav-link" to="/#location" onClick={closeMenu}>{t('header.location')}</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/#reviews" onClick={closeMenu}>{t('header.reviews')}</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/Contact" onClick={closeMenu}>{t('header.contact')}</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    </>
}