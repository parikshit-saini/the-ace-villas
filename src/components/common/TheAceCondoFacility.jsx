import React from "react";
import { useTranslation } from "react-i18next";
const facilities = [
    { key: "entirePlace", icon: "fa-solid fa-house" },
    { key: "size", icon: "fa-solid fa-ruler-combined" },
    { key: "kitchen", icon: "fa-solid fa-kitchen-set" },
    { key: "View", icon: "fa-solid fa-eye" },
    { key: "Pets", icon: "fa-solid fa-shield-dog" },
    { key: "Washingmachine", icon: "fa-solid fa-shirt" },
    { key: "swimmingPool", icon: "fa-solid fa-water-ladder" },
    { key: "wifi", icon: "fa-solid fa-wifi" },
    { key: "balcony", icon: "fa-solid fa-door-open" },
    { key: "parking", icon: "fa-solid fa-car" },
    { key: "bathroom", icon: "fa-solid fa-bath" },
    { key: "airConditioning", icon: "fa-solid fa-wind" },
];

export const TheAceCondoFacility = () => {
    const { t } = useTranslation();
    return <section className="Facility">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mb-5">{t("aceCondo.mostPopularFacilities")}</h1>
                    <div className="facilityBox">
                        {facilities.map((facility, index) => (
                            <div className="item" key={index}>
                                <div className="icon">
                                    <i className={facility.icon}></i>
                                </div>
                                <p>
                                    <span>{t(`aceCondo.facilities.${facility.key}`)}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
}