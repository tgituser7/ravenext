import JourneyTimeline from "../components/JourneyTimeline";

export const metadata = {
  title: "Rave | About",
};

export default function AboutPage() {
  return (
    <>
      <div className="row bg-light mx-1 ab_headrow">
      
        <div className="col-3 p-0">
          <img className="ab_headimg" src="/res/bhd.png" alt="" />
        </div>
        <div className="col-9" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p className="ab_ps">Part of us that leaves an underlining impact.</p>
          <p className="ab_pb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maxime magni, accusantium
            illo, soluta velit autem sequi, doloremque totam ratione blanditiis. Vero quasi
            quisquam odio vel nisi quae eaque assumenda!
          </p>
        </div>
      </div>

      <section className="ab_s1">
        <div>
          <h2 className="ab_s1heading">The WH Cluster</h2>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "4rem", justifyContent: "center" }}>
            <div className="col-5">
              <h3 className="ab_s1head">Who are we?</h3>
              <p className="wh-p">
                Entertainment is one of the most powerful forms of inspiration on the planet.
                Stories shape lives. Give people ambition to be all that they can be. Bring ideas
                and opportunities to the table. We’re here to be entertainment world leaders.
                A powerhouse for creativity.
              </p>
            </div>
            <div className="col-5">
              <h3 className="ab_s1head">What do we do?</h3>
              <p className="wh-p">
                We seek to bring the whole world to India and India to the world. Teeming with
                ideas, adventures and challenges. There are endless stories from near and far,
                stories to be told; of lives led and yet to be led, something to make us laugh or
                to cry. Something to lose ourselves in or set ourselves up. We tell the world’s
                tales, from the tallest to the truest.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "1rem", justifyContent: "center" }}>
            <div className="col-5">
              <h3 className="ab_s1head">Where are we needed?</h3>
              <p className="wh-p">
                We want to bring people together. To unite people. To help them build together,
                celebrate together, enjoy life together. We’re greater than the sum of parts.
                A united portfolio of brands bringing together one of the widest ranges of
                entertainment choices on the planet.
              </p>
            </div>
            <div className="col-5">
              <h3 className="ab_s1head">Why us?</h3>
              <p className="wh-p">
                From establishing advertising firm in 1996, to reaching 1.3 billion viewers
                throughout the linear and digital platforms. Rave, today, is the global
                entertainment go-to, with an integrated team creating and serving extraordinary
                content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ab_s2" style={{ marginTop: "4rem", marginBottom: "4rem" }}>
        <div className="ab_s2div" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="me-5" style={{ width: "25%", height: "16rem", borderRight: "1px solid", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontFamily: "Roboto", fontSize: 30 }}>- Values</p>
            <p className="pe-5" style={{ textAlign: "justify", fontFamily: "Heebo", fontSize: 15, fontWeight: 600 }}>
              Committing to something bigger than ourselves. Restoring and strengthening our brand
              equity. Inspiring everyone to be the best they can be. Taking on adventures and
              challenges that will tap into our entrepreneurial spirit and help shape entertainment
              globally.
            </p>
          </div>
          <div className="me-5" style={{ width: "25%", height: "16rem", borderRight: "1px solid", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontFamily: "Roboto", fontSize: 30 }}>- Significance</p>
            <p className="pe-5" style={{ textAlign: "justify", fontFamily: "Heebo", fontSize: 15, fontWeight: 600 }}>
              Rave owes its success and leadership position to its core philosophy of
              &lsquo;Entertainment&rsquo; driven by &lsquo;Growth with Goodness&rsquo; - a guiding
              principle for moments of joy. Rave is committed to increase its footprint by
              realigning its businesses with emphasis on content and increasing outreach through
              its programme based on the principles of shared values.
            </p>
          </div>
          <div style={{ width: "25%", height: "16rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontFamily: "Roboto", fontSize: 30 }}>- Achievements</p>
            <p className="pe-5" style={{ textAlign: "justify", fontFamily: "Heebo", fontSize: 15, fontWeight: 600 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolores
              voluptates veritatis, deserunt temporibus debitis obcaecati dolorem sequi facere ab
              velit cumque ipsa praesentium tempore! Laboriosam rerum consectetur nulla enim!
            </p>
          </div>
        </div>
      </section>

      <section className="h_s4">
        <div className="container">
          <div className="row my-5 h_s4row" style={{ height: "25rem" }}>
            <div className="col-5 p-0">
              <a target="_blank" rel="noreferrer" href="https://ravibhatia.com">
                <img className="ds-img" src="/res/leadership.png" alt="" style={{ width: "40rem" }} />
              </a>
            </div>
            <div className="col-6 ms-5 h_s4col" style={{ paddingLeft: "4rem" }}>
              <h2 className="h_s4dd">Director's Desk</h2>
              <p style={{ textAlign: "justify" }} className="custom_text h_s4im">
                Immense experience in creating and delivering values. Contributing towards creation
                of quality work. Having a firm grip we uphold our position and further look forward
                in achieving our goals. We will continue to maintain a sharp focus on growth as we
                invest our time and energy in maximizing our core, expanding into adjacent spaces
                and exploring new areas of business.
              </p>
              <img className="h_s4sign" src="/res/signature.png" alt="" />
              <p className="f_heebo h_s4sn">Ravi Bhatia</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <JourneyTimeline />
      </section>
    </>
  );
}
