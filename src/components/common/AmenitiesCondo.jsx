
import Amenities_1 from "../../assets/condo_outside.png";
import Amenities_2 from "../../assets/condo_inside.png";
import Amenities_3 from "../../assets/condo_bathroom.png";
import { useTranslation } from "react-i18next";
const images = [Amenities_1, Amenities_2, Amenities_3]
export const AmenitiesCondo = () => {
    const { t } = useTranslation();
    const amenitiesData = t("aceCondo.amenities", { returnObjects: true });
    return <section className="Amenities">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mb-5">
                    <h1>{amenitiesData.sectionTitle}</h1>
                </div>
            </div>
            <div className="row">
                {amenitiesData.categories.map((category, index) => (
                    <div className="col-md-4 mt-4" key={index}>
                        <div className="dataBox">
                            <img src={images[index]} alt={category.title} className="w-100" />
                            <p className="heading">{category.title}</p>
                            <ul>
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}