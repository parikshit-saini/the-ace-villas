import { useTranslation } from "react-i18next";
import "../pages.scss";
export const PrivacyPolicy = () => {
    const { t } = useTranslation();
    return <section className="policy">
        <div className="head">
            <div className="content">
                <h1>{t("privacy.title")}</h1>
                <h2>{t("privacy.subtitle")}</h2>
                <p>{t("privacy.description")}</p>
            </div>
        </div>

        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <div className="policyContent">
                        <h3>{t("privacy.sections.informationWeCollect.title")}</h3>
                        <ul>
                            {t("privacy.sections.informationWeCollect.points", { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("privacy.sections.howWeUse.title")}</h3>
                        <ul>
                            {t("privacy.sections.howWeUse.points", { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("privacy.sections.thirdPartySharing.title")}</h3>
                        <ul>
                            {t("privacy.sections.thirdPartySharing.points", { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("privacy.sections.cookies.title")}</h3>
                        <ul>
                            {t("privacy.sections.cookies.points", { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="policyContent">
                        <h3>{t("privacy.sections.yourRights.title")}</h3>
                        <ul>
                            {t("privacy.sections.yourRights.points", { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}