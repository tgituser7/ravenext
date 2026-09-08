"use client";

import { useRef, useState } from "react";

export default function JobListing({ title, description, leftDetail, rightDetail, marginTop }) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const timer = useRef(null);

  const toggle = () => {
    if (timer.current) clearTimeout(timer.current);
    if (open) {
      setClosing(true);
      timer.current = setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 1000);
    } else {
      setClosing(false);
      setOpen(true);
    }
  };

  return (
    <div className="career_s5" style={{ backgroundColor: "white", marginTop }}>
      <div className="pt-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="col-2" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p className="career_s5_col2 f_heebo">Division</p>
          <p className="career_s5_col2 f_heebo">Location</p>
          <p className="career_s5_col2 f_heebo">Date</p>
        </div>
        <div className="col-8">
          <h3 className="career_s5_job_title">{title}</h3>
          <p className="career_s5_ld f_heebo">{description}</p>
        </div>
      </div>
      <div className="text-center p-2">
        <button className="btn btn-dark details_btn f_heebo" onClick={toggle}>
          Details
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <hr className="col-10" style={{ margin: 0 }} />
      </div>
      {(open || closing) && (
        <div style={{ height: "25rem", overflow: "scroll" }} className={`bg-dark details_div${closing ? " details_div_close" : ""}`}>
          <div className={`container details_div_cont${closing ? " details_div_cont_op0" : ""}`}>
            <div className="row text-light">
              <div className="col-6">
                <p className="career_s5_jd">{leftDetail}</p>
              </div>
              <div className="col-6">
                <p className="career_s5_jd">{rightDetail}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
