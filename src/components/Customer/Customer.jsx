import "./Customer.css";
import gallery_1 from "../../assets/gallery1.jpg";
import gallery_2 from "../../assets/gallery2.jpg";
import gallery_3 from "../../assets/gallery3.jpg";
import gallery_4 from "../../assets/gallery4.jpg";
import next from "../../assets/next.png";
import previous from "../../assets/back.png";
import { useRef, useState } from "react";
const Customer = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}$)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="Customer">
      <img src={next} alt="" className="next-btn" onClick={slideForward} />
      <img src={previous} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={gallery_1} alt="" />
                <div>
                  <h3>Donna steyn</h3>
                  <span>staten Island,New York</span>
                </div>
              </div>
              <p>
                I recently used SplashWheels for our family camping trip, and it
                was fantastic! The online booking process was straightforward,
                and the water camper was delivered right on time. The water
                quality was excellent, and we had plenty for our entire trip.
                Highly recommend SplashWheels for anyone in need of reliable
                water delivery
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={gallery_2} alt="" />
                <div>
                  <h3>Elizabeth Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Booking a water camper through SplashWheels was one of the best
                decisions for our outdoor event. The website was easy to
                navigate, and the customer service was top-notch. The camper
                arrived clean and well-stocked. Will definitely use their
                service again for future events
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={gallery_3} alt="" />
                <div>
                  <h3>Emily williamson</h3>
                  <span>USA</span>
                </div>
              </div>
              <p>
                Fantastic service from start to finish! SplashWheels made sure
                we never ran out of water during our beach vacation. The booking
                process was simple, and the delivery was prompt. The water
                camper was in excellent condition. Can't recommend them enough
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={gallery_4} alt="" />
                <div>
                  <h3>Teddy Oskarsson</h3>
                  <span>London</span>
                </div>
              </div>
              <p>
                ISuper impressed with SplashWheels! We needed a large supply of
                water for our music festival, and they delivered perfectly. The
                campers were clean, and the water quality was great. The whole
                process was hassle-free, thanks to their efficient website. Will
                definitely be using SplashWheels again.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Customer;
