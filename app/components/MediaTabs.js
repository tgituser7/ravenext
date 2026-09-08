"use client";

import { useState } from "react";

const TABS = [
  {
    letter: "R",
    title: "Mesmerizing Experiences",
    text: "To anticipate, understand and meet needs of internal/external customers, ensuring high level of service delivery keeping in mind the service first principle.",
  },
  {
    letter: "A",
    title: "Evolving Ideas",
    text: "To continue to deliver on responsibilities while anticipating and responding to the evolving environment.",
  },
  {
    letter: "V",
    title: "Delivering a Message",
    text: "To set for ourselves clear, compelling and audacious goals. Transcending the fear of failure, criticism and ambiguity in an effort to set and achieve bigger targets.",
  },
  {
    letter: "E",
    title: "Instigating Thoughts",
    text: "Identify and resolve problems which have a high impact on business by providing innovative solutions and ensuring implementation with excellent execution.",
  },
];

export default function MediaTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="container">
      <div className="home_s3_div">
        {TABS.map((tab, i) => (
          <div
            key={tab.letter}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer" }}
            onClick={() => setActive(i)}
          >
            <span className={`span-media${active === i ? " media-span-edit" : ""}`}>{tab.letter}</span>
            <span className={`m_bar${active === i ? "" : " bar_invisible"}`}></span>
          </div>
        ))}
      </div>
      <hr />
      <div id="carouselExampleIndicators4" className="carousel slide">
        <div className="carousel-inner ci_1">
          {TABS.map((tab, i) => (
            <div key={tab.letter} className={`carousel-item media-i${active === i ? " active" : ""}`}>
              <p className="m_title">{tab.title}</p>
              <p className="m_des">{tab.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
