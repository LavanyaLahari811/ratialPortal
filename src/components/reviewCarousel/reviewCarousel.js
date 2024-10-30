import React, { useState, useEffect, useRef } from "react";
import "./reviewCarousal.css";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(1); 
  const containerRef = useRef(null);

  const reviews = [
    {
      name: "John Mitai",
      review:
        "Excellent home service! Punctual, professional, and friendly staff. Impressive quality and attention to detail. Highly recommended!",
      profilePic: require("../../assets/profilePic1.png"),
      backgroundColor: "#F7EBFF",
      stars: 5,
    },
    {
      name: "John Mitai",
      review:
        "Excellent home service! Punctual, professional, and friendly staff. Impressive quality and attention to detail. Highly recommended!",
      profilePic: require("../../assets/profilePic2.png"),
      backgroundColor: "#E5F9FF",
      stars: 5,
    },
    {
      name: "John Mitai",
      review:
        "Excellent home service! Punctual, professional, and friendly staff. Impressive quality and attention to detail. Highly recommended!",
      profilePic: require("../../assets/profilePic3.png"),
      backgroundColor: "#F7EBFF",
      stars: 5,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const cardWidth = container.offsetWidth / 3;

      const scrollLeft = container.scrollLeft;
      const index = Math.round((scrollLeft + cardWidth / 2) / cardWidth);

      setActiveIndex(index);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="review-carousel">
      <div className="review-cards-container" ref={containerRef}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`review-card ${
              activeIndex === index ? "is-active" : ""
            }`}
            style={{ backgroundColor: review.backgroundColor }}
          >
            <div className="userInfo">
              <img
                src={review.profilePic}
                alt={`${review.name} profile`}
                className="profile-pic"
              />
              <h3>{review.name}</h3>
            </div>

            <div className="stars">
              {Array.from({ length: review.stars }, (_, i) => (
                <img
                  key={i}
                  src={require("../../assets/Star 10.png")}
                  alt="Star"
                  className="star"
                />
              ))}
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
