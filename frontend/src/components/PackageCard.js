import React, { useState } from "react";
import "../styles/PackageCard.css";

const PackageCard = ({ image, price, title, location, duration, reviews, Subtitle }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        guests: "",
        days: ""
    });

    const [isSending, setIsSending] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBooking = async (e) => {
        e.preventDefault();

        const { name, phone, email, guests, days } = formData;

        if (!name || !phone || !email || !guests || !days) {
            alert("Please fill out all fields.");
            return;
        }

        setIsSending(true);

        try {
            const res = await fetch("https://swarna-backend-xze9.onrender.com/api/book", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    guests,
                    days,
                    title
                })
            });

            const data = await res.json();

            if (data.success) {
                alert("✅ Booking sent successfully via WhatsApp!");
                setShowModal(false);
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    guests: "",
                    days: ""
                });
            } else {
                alert("❌ Failed to send booking.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while sending your booking.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <div className="tour-block-two">
                <div className="inner-box">
                    <div className="image">
                        <a href="/"><img src={image} alt={title} /></a>
                    </div>
                    <div className="lower-content">
                        <div className="price">₹{price} <br /> Per Couple</div>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            {reviews}+ Reviews
                        </div>
                        <div className="title">
                            <h4><a href="/">{title}</a></h4>
                            <p>{Subtitle}</p>
                        </div>
                        <div className="location">
                            <i className="card-icon fas fa-map-marker-alt"></i> {location}
                        </div>
                        <div className="hotel-info">{duration}</div>

                        <ul className="food-list">
                            <li><i className="card-icon fas fa-plane"></i> Travel</li>
                            <li><i className="card-icon fas fa-utensils"></i> Meals</li>
                            <li><i className="card-icon fas fa-snowflake"></i> AC</li>
                        </ul>

                        {price && Subtitle.toLowerCase() !== "coming soon" ? (
                            <button className="btn-style-one" onClick={() => setShowModal(true)}>
                                <span className="txt">Book Now</span>
                            </button>
                        ) : (
                            <button className="btn-style-one disabled" disabled>
                                <span className="txt">Coming Soon</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Booking for {title}</h3>
                        <form onSubmit={handleBooking}>
                            <input type="text" name="name" placeholder="Name" required onChange={handleInputChange} />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                pattern="[0-9]{10}"
                                title="Enter a 10-digit phone number"
                                onChange={handleInputChange}
                            />
                            <input type="email" name="email" placeholder="Email" required onChange={handleInputChange} />
                            <input type="number" name="guests" placeholder="No. of Guests" required onChange={handleInputChange} />
                            <input type="number" name="days" placeholder="No. of Days" required onChange={handleInputChange} />
                            <div className="modal-buttons">
                                <button type="submit" className="btn-style" disabled={isSending}>
                                    {isSending ? "Sending..." : "Send a Quote"}
                                </button>
                                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default PackageCard;
