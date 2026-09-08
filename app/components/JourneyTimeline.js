"use client";

import { useState } from "react";

const YEARS = ["1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004"];

const IMAGES = [
  "/res/image8.jpg",
  "/res/R (9).JPG",
  "/res/image2.jpg",
  "/res/image3.jpg",
  "/res/image4.jpg",
  "/res/image5.jpg",
  "/res/Journey 2009 (1).JPG",
  "/res/DSC_0635 copy.jpg",
  "/res/5.png",
];

export default function JourneyTimeline() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div id="carouselExampleIndicators_2" className="carousel carousel-fade slide">
        <div className="carousel-inner">
          {IMAGES.map((src, i) => (
            <div key={src} className={`carousel-item j_img${active === i ? " active" : ""}`}>
              <div
                style={{
                  width: "100%",
                  height: "35rem",
                  backgroundImage: `url('${src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "2rem", flexDirection: "column" }}>
          <img src="/res/figure2.png" style={{ width: "100%" }} alt="" />
          <div className="j_div" style={{ display: "flex", justifyContent: "space-around", width: "83%", position: "relative", top: "-1rem" }}>
            {YEARS.map((year, i) => (
              <span
                key={year}
                className={`j_btn${active === i ? " j_btn_bbcw" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => setActive(i)}
              >
                {year}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
