import React from "react";
import { useTranslation } from "react-i18next";
const facilities = [
    { key: "entirePlace", icon: "fa-solid fa-house" },
    { key: "size", icon: "fa-solid fa-ruler-combined" },
    { key: "swimmingPool", icon: "fa-solid fa-water-ladder" },
    { key: "parking", icon: "fa-solid fa-car" },
    { key: "bathroom", icon: "fa-solid fa-bath" },
    { key: "balcony", icon: "fa-solid fa-tree" },
    { key: "airportShuttle", icon: "fa-solid fa-plane" },
    { key: "airConditioning", icon: "fa-solid fa-wind" },
    { key: "bbqFacilities", icon: "fa-solid fa-drumstick-bite" },
    { key: "familyRooms", icon: "fa-solid fa-users" },
    { key: "wifi", icon: "fa-solid fa-wifi" },
    { key: "nonSmokingRooms", icon: "fa-solid fa-ban-smoking" },
    { key: "terrace", icon: "fa-solid fa-sun" },
];

export const Facility = () => {
    const { t } = useTranslation();
    return <section className="Facility">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mb-5">{t("jomtiean.mostPopularFacilities")}</h1>
                    <div className="facilityBox">
                        {facilities.map((facility, index) => (
                            <div className="item" key={index}>
                                <div className="icon">
                                    <i className={facility.icon}></i>
                                </div>
                                <p>
                                    <span>{t(`jomtiean.facilities.${facility.key}`)}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
}