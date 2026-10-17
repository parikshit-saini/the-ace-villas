import { useTranslation } from "react-i18next";
import "../pages.scss";
export const Disclaimer = () => {
    const { t } = useTranslation();
    return <section className="policy">
        <div className="head">
            <div className="content">
                <h1>{t("disclaimer.title")}</h1>
                <h2>{t("disclaimer.welcome")}</h2>
                <p>{t("disclaimer.generalInfo")}</p>
            </div>
        </div>

        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <div className="policyContent">
                        <h3>{t("disclaimer.sections.noWarranties.title")}</h3>
                        <ul>
                            <li>{t("disclaimer.sections.noWarranties.content")}</li>
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("disclaimer.sections.limitedLiability.title")}</h3>
                        <ul>
                            <li>{t("disclaimer.sections.limitedLiability.content")}</li>
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("disclaimer.sections.bookingDisclaimer.title")}</h3>
                        <ul>
                            <li>{t("disclaimer.sections.bookingDisclaimer.content")}</li>
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("disclaimer.sections.thirdPartyLinks.title")}</h3>
                        <ul>
                            <li>{t("disclaimer.sections.thirdPartyLinks.content")}</li>
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("disclaimer.sections.contactUs.title")}</h3>
                        <ul>
                            <li>
                                {t("disclaimer.sections.contactUs.content")}{" "}
                                <a href={`mailto:${t("disclaimer.email")}`}>{t("disclaimer.email")}</a>.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}