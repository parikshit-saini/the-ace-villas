import { useTranslation } from "react-i18next";
import { ContactForm } from "../common/ContactForm"

export const Contact = () => {
    const { t } = useTranslation();

    return <div>
        <section className="main pages" id="Home">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{t('contactPage.heading')}</h2>
                        <h1>{t('contactPage.desc')}</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="ContactDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <ContactForm />
                    </div>
                </div>

            </div>
        </section>
    </div>
}