import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Form = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        startDate: '',
        endDate: '',
        villa: '',
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
        formDataObj.append('startDate', formData.startDate);
        formDataObj.append('endDate', formData.endDate);
        formDataObj.append('villa', formData.villa);
        formDataObj.append('message', formData.message);

        try {
            const response = await fetch('https://theacevillas.com/form.php', {
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
        <h1 className="text-center">{t('form2.title')}</h1>
        <form method="POST" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6 mt-4">
                    <div className="inputField">
                        <label htmlFor="name">{t('form2.fields.name.label')}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={t('form2.fields.name.placeholder')}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="inputField">
                        <label htmlFor="email">{t('form2.fields.email.label')}</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder={t('form2.fields.email.placeholder')}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="inputField">
                        <label htmlFor="phone">{t('form2.fields.phone.label')}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={t('form2.fields.phone.placeholder')}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="inputField">
                        <label htmlFor="villa">{t('form2.fields.villa.label')}</label>
                        <select
                            name="villa"
                            id="villa"
                            className="form-control"
                            value={formData.villa}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled selected>
                                {t('form2.fields.villa.placeholder')}
                            </option>
                            {t('form2.fields.villa.options', { returnObjects: true }).map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="inputField">
                        <label htmlFor="startDate">{t('form2.fields.startDate.label')}</label>
                        <input
                            type="date"
                            name="startDate"
                            id="startDate"
                            className="form-control"
                            value={formData.startDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="inputField">
                        <label htmlFor="endDate">{t('form2.fields.endDate.label')}</label>
                        <input
                            type="date"
                            name="endDate"
                            id="endDate"
                            className="form-control"
                            value={formData.endDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="inputField">
                        <label htmlFor="message">{t('form2.fields.message.label')}</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            rows="4"
                            placeholder={t('form2.fields.message.placeholder')}
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className="col-12 mt-4 text-center">
                    <button
                        name="submit"
                        className="btn btn-theme"
                        type="submit"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    >
                        {t('form.button.text')} <i className={`fa-solid fa-paper-plane  ms-1`}></i>
                    </button>
                </div>
            </div>
        </form>
    </section>
}