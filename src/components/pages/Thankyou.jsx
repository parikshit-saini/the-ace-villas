import { NavLink } from "react-router-dom";
// import thankyou from "../../assets/thankyou.svg";

export const Thankyou = () => {
    return <div className="website">
        <section class="thankYou">
            <div class="container">
                <div class="row">
                    <div class="col-12 centerMid">
                        <div class="text-center ">
                            <h2><span>Thanks for Connecting with Us!</span></h2>
                            <p class="compressed">Your message has been successfully sent, and we truly appreciate you reaching out to us.</p>
                            <p class="compressed">Our team is reviewing your inquiry, and you can expect a response very soon.</p>

                            <NavLink to="/" class="mt-5 d-block"><button class="btn btn-theme">Home Page <i class="fa-solid fa-house"></i></button></NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}