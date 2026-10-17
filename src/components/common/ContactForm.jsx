import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const ContactForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('name', formData.name);
        formDataObj.append('email', formData.email);
        formDataObj.append('phone', formData.phone);
        formDataObj.append('message', formData.message);

        try {
            const response = await fetch('https://theacevillas.com/contactForm.php', {
                method: 'POST',
                body: formDataObj,
            });

            if (response.ok) {
                navigate('/Thankyou');
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error occurred while sending email');
        }
    };


    return <section className="form" id="contact">
        <h1 className="text-center">{t('form.heading')}</h1>
        <form method="POST" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="inputField">
                        <label htmlFor="name">{t('form.fields.name.label')}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={t('form.fields.name.placeholder')}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="inputField">
                        <label htmlFor="email">{t('form.fields.email.label')}</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder={t('form.fields.email.placeholder')}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="inputField">
                        <label htmlFor="phone">{t('form.fields.phone.label')}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={t('form.fields.phone.placeholder')}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="inputField">
                        <label htmlFor="message">{t('form.fields.message.label')}</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            rows="4"
                            placeholder={t('form.fields.message.placeholder')}
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className="col-12 mt-4 text-center">
                    <button name="submit" className="btn btn-theme" type="submit">
                        {t('form.button.text')} <i className="fa-solid fa-paper-plane ms-1"></i>
                    </button>
                </div>
            </div>
        </form>
    </section>
}