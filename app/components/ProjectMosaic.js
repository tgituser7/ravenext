"use client";

import { useState } from "react";

export default function ProjectMosaic() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const videoProps = (src) => ({
    className: "advideo",
    muted: true,
    loop: true,
    style: { width: "100%", height: "100%", objectFit: "cover" },
    src,
    onMouseEnter: (e) => e.currentTarget.play(),
    onMouseLeave: (e) => e.currentTarget.pause(),
    onClick: () => setVideoSrc(src),
  });

  const imgProps = (src, style) => ({
    className: "project_img",
    src,
    style: { width: "100%", height: "100%", ...style },
    alt: "",
    onClick: () => setImageSrc(src),
  });

  return (
    <>
      {videoSrc && (
        <section className="ad_video_full">
          <div style={{ textAlign: "end", color: "white", width: "61rem" }}>
            <span className="video_close_btn" style={{ cursor: "pointer" }} onClick={() => setVideoSrc(null)}>
              X
            </span>
          </div>
          <div className="col-6">
            <video controls autoPlay style={{ height: "100%", width: "100%" }} src={videoSrc}></video>
          </div>
        </section>
      )}
      {imageSrc && (
        <section className="p_img" onClick={() => setImageSrc(null)}>
          <div style={{ textAlign: "end", color: "white", width: "61rem" }}>
            <span className="img_close_btn" style={{ cursor: "pointer" }}>
              X
            </span>
          </div>
          <div className="col-6">
            <img style={{ width: "100%" }} src={imageSrc} alt="" />
          </div>
        </section>
      )}

      <section>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <span className="mt-5 project_vspan">
            <span style={{ backgroundColor: "brown", width: "100%", height: "20%", display: "flex", flexWrap: "wrap" }}>
              <span style={{ backgroundColor: "rgb(215 103 103)", width: "30%", height: "100%", display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                <span className="sectors-images" style={{ backgroundColor: "rgb(212, 114, 114)", width: "100%", height: "44%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <p className="vspan_text1">The Beginning</p>
                </span>
                <span className="sectors-images ad-video-play" style={{ backgroundColor: "rgb(128, 64, 64)", width: "100%", height: "56%" }}>
                  <video {...videoProps("/res/Nerolac (1).mov")}></video>
                </span>
              </span>
              <span className="sectors-images" style={{ backgroundColor: "rgb(212, 114, 114)", width: "26%", height: "100%" }}>
                <img {...imgProps("/res/P2.JPG")} />
              </span>
              <span className="sectors-images" style={{ backgroundColor: "rgb(151 183 96)", width: "44%", height: "100%" }}>
                <video {...videoProps("/res/Saino.mov")}></video>
              </span>
            </span>
            <span style={{ backgroundColor: "rgb(168, 86, 86)", width: "100%", height: "40%", display: "flex", flexWrap: "wrap" }}>
              <span style={{ backgroundColor: "rgb(150 213 41)", width: "70%", height: "100%", display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                <span style={{ backgroundColor: "rgb(151 183 96)", width: "100%", height: "50%", display: "flex", flexWrap: "wrap" }}>
                  <span className="sectors-images" style={{ backgroundColor: "rgb(151 183 96)", width: "59%", height: "100%" }}>
                    <video {...videoProps("/res/Patanjali.mov")}></video>
                  </span>
                  <span className="sectors-images" style={{ backgroundColor: "rgb(151 183 96)", width: "41%", height: "100%" }}>
                    <img {...imgProps("/res/P1.JPG")} />
                  </span>
                </span>
                <span style={{ backgroundColor: "rgb(151 183 96)", width: "100%", height: "50%", display: "flex", flexWrap: "wrap" }}>
                  <span className="sectors-images" style={{ backgroundColor: "rgb(151 183 96)", width: "21%", height: "100%" }}>
                    <img {...imgProps("/res/IMG_8525.JPG")} />
                  </span>
                  <span className="sectors-images" style={{ backgroundColor: "rgb(124, 168, 47)", width: "79%", height: "100%" }}>
                    <video {...videoProps("/res/Laxman Rekha.mov")}></video>
                  </span>
                </span>
              </span>
              <span style={{ backgroundColor: "rgb(151 183 96)", width: "30%", height: "100%", display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                <span className="sectors-images" style={{ backgroundColor: "rgb(212, 114, 114)", width: "100%", height: "28%" }}>
                  <video {...videoProps("/res/Woodland.mov")}></video>
                </span>
                <span className="sectors-images" style={{ backgroundColor: "rgb(212, 114, 114)", width: "100%", height: "36%" }}>
                  <video {...videoProps("/res/Sony Vaio (1).mov")}></video>
                </span>
                <span className="sectors-images" style={{ backgroundColor: "rgb(212, 114, 114)", width: "100%", height: "36%" }}>
                  <img {...imgProps("/res/art work.jpg")} />
                </span>
              </span>
            </span>
            <span style={{ backgroundColor: "rgb(207 206 155)", width: "100%", height: "20%", display: "flex", flexWrap: "wrap" }}>
              <span className="sectors-images" style={{ backgroundColor: "rgb(183, 138, 96)", width: "55%", height: "100%" }}>
                <video {...videoProps("/res/Road Safety.mov")}></video>
              </span>
              <span style={{ backgroundColor: "rgb(151 183 96)", width: "45%", height: "100%", display: "flex", flexWrap: "wrap" }}>
                <span style={{ backgroundColor: "rgb(135, 135, 135)", width: "67%", height: "100%", display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                  <span className="sectors-images" style={{ backgroundColor: "rgb(151 183 96)", width: "100%", height: "64%", display: "flex", flexWrap: "wrap" }}>
                    <video {...videoProps("/res/DOMs Stationary (1).mov")}></video>
                  </span>
                  <span className="sectors-images" style={{ backgroundColor: "rgb(134 134 134)", width: "45%", height: "36%", display: "flex", flexWrap: "wrap" }}>
                    <img {...imgProps("/res/3.JPG")} />
                  </span>
                </span>
                <span className="sectors-images" style={{ backgroundColor: "rgb(212, 114, 114)", width: "33%", height: "100%" }}>
                  <img {...imgProps("/res/1.JPG")} />
                </span>
              </span>
            </span>
            <span style={{ backgroundColor: "rgb(207 206 155)", width: "100%", height: "17%", display: "flex", flexWrap: "wrap" }}>
              <span className="sectors-images" style={{ backgroundColor: "rgb(183, 138, 96)", width: "35%", height: "100%" }}>
                <video {...videoProps("/res/Ajay Toothpaste.mov")}></video>
              </span>
              <span className="sectors-images" style={{ backgroundColor: "rgb(191, 228, 128)", width: "41%", height: "100%" }}>
                <video {...videoProps("/res/Beti Bachao.mov")}></video>
              </span>
              <span style={{ backgroundColor: "rgb(151 183 96)", width: "24%", height: "100%", display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                <span style={{ backgroundColor: "rgb(212, 114, 114)", width: "100%", height: "50%", display: "flex", flexWrap: "wrap" }}>
                  <span className="sectors-images" style={{ backgroundColor: "rgb(212, 114, 114)", width: "100%", height: "100%" }}>
                    <video {...videoProps("/res/Bahubali Elaichi (1).mov")}></video>
                  </span>
                </span>
                <span className="sectors-images" style={{ backgroundColor: "rgb(212, 114, 114)", width: "100%", height: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <p className="vspan_text2">To be continued...</p>
                </span>
              </span>
            </span>
          </span>
        </div>
      </section>
    </>
  );
}
