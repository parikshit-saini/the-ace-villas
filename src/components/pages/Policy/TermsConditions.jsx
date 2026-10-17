import { useTranslation } from "react-i18next";
import "../pages.scss";
export const TermsConditions = () => {
    const { t } = useTranslation();
    return <section className="policy">
        <div className="head">
            <div className="content">
                <h1>{t("terms.title")}</h1>
                <h2>{t("terms.subtitle")}</h2>
                <p>{t("terms.description")}</p>
            </div>
        </div>

        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <div className="policyContent">
                        <h3>{t("terms.sections.bookingAndReservations.title")}</h3>
                        <ul>
                            {t("terms.sections.bookingAndReservations.points", { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("terms.sections.guestConduct.title")}</h3>
                        <ul>
                            {t("terms.sections.guestConduct.points", { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("terms.sections.liability.title")}</h3>
                        <ul>
                            {t("terms.sections.liability.points", { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("terms.sections.changesToTerms.title")}</h3>
                        <ul>
                            {t("terms.sections.changesToTerms.points", { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("terms.sections.contactUs.title")}</h3>
                        <ul>
                            {t("terms.sections.contactUs.points", { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}