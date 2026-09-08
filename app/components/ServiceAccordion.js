"use client";

import { useState, useRef } from "react";

export default function ServiceAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [closingIndex, setClosingIndex] = useState(null);
  const timer = useRef(null);

  const toggle = (i) => {
    if (timer.current) clearTimeout(timer.current);
    if (openIndex === i) {
      setClosingIndex(i);
      timer.current = setTimeout(() => {
        setOpenIndex(null);
        setClosingIndex(null);
      }, 1000);
    } else {
      setClosingIndex(null);
      setOpenIndex(i);
    }
  };

  return (
    <>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const isClosing = closingIndex === i;
        const visible = isOpen || isClosing;
        return (
          <div key={item.title}>
            <div className="row">
              <div
                className="col-8 offset-2 service-col"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem",
                  paddingBottom: 0,
                  justifyContent: "center",
                  borderBottom: "1px solid #aba8a8",
                  marginTop: i === 0 ? undefined : "2rem",
                  cursor: "pointer",
                }}
                onClick={() => toggle(i)}
              >
                <p className="text-center service_hd">{item.title}</p>
              </div>
            </div>
            {visible && (
              <div
                className={`row service-info${isClosing ? " service-info-exit" : ""}`}
                style={{ justifyContent: "center" }}
              >
                <div className="col-8">
                  <div className={`service_info_p${isClosing ? " service_info_p_exit" : ""}`}>
                    {item.paragraphs.map((p, pi) => (
                      <p key={pi}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
