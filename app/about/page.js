import JourneyTimeline from "../components/JourneyTimeline";

export const metadata = {
  title: "Rave | About",
};

export default function AboutPage() {
  return (
    <>
      <div className="text-center h_topdiv">
        <img src="/res/logo.png" style={{ width: "40%", marginTop: "15vh" }} alt="Rave" />
        <div>
          <p className="h_topp">Redifined Audio Visual Entertainment</p>
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
          <div className="row my-5 h_s4row">
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

      <section style={{ backgroundColor: "white", paddingBottom: "3rem" }}>
        <div className="container">
          <div className="row h_s1row">
            <div className="col-6 h_s1col">
              <img src="/res/istockphoto-1257176924-612x612.jpeg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="col-6 h_s1col2 px-5">
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "clamp(22px, 5vw, 33px)",
                  borderLeft: "5px solid #3b9d8b",
                  backgroundColor: "darkslategray",
                  padding: "0.6rem 1rem",
                  color: "white",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                At a glance
              </p>
              <p style={{ fontSize: 15, fontFamily: "Heebo", fontWeight: 600 }}>
                RAVE is a leading Indian content power house with a global reach. The most iconic
                brand came into existence during the mid 90s. Since the formation, it has been
                entitled to accomplish and enhance the content creation space and has been playing
                a pioneering role in the arena of content, thus ensuring presence in the
                entertainment industry.
              </p>
              <p style={{ fontSize: 15, fontFamily: "Heebo", fontWeight: 600 }}>
                Today, Rave has evolved to be a significant player in the digital ecosystem. With
                the brand in existence for over 3 decades, Rave continues to redefine itself to
                respond to the disrupting consumer environment. We deliver premium content
                experiences in more than 30 countries, across age groups and several genres.
              </p>
            </div>
          </div>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner" style={{ paddingTop: 0, paddingBottom: "3rem", marginLeft: "20%", width: "60%" }}>
            <div className="carousel-item active">
              <p className="carousel_title">400+ Ad Films</p>
            </div>
            <div className="carousel-item">
              <p className="carousel_title">2M+ Daily Audience</p>
            </div>
            <div className="carousel-item">
              <p className="carousel_title">20+ Channels</p>
            </div>
            <div className="carousel-item">
              <p className="carousel_title">7+ Languages</p>
            </div>
            <div className="carousel-item">
              <p className="carousel_title">100+ Titles Registered</p>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row home_s2_row">
            <div className="col-6 home_s2_col1" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img className="home_s2_img" src="/res/1_N7gHRyH6FgEZBQbZTVMvLA.png" alt="" />
            </div>
            <div className="col-6 px-5 home_s2_col2" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <p className="home_s2_be pt-1">Being extraordinary is an everyday task</p>
              <p className="home_s2_wp">
                We provide informative, striking and functional tools to promote your business.We
                deliver valuable advertising solutions to our clients with our original strategic
                methods and creative thinking. Our impressive portfolio of all types of media is a
                testimony of our dedication and passion.
              </p>
              <p className="home_s2_ws">
                We strive to become part of your team, to create or enhance your corporate image,
                with maximum impact - on any media platform. All our work is developed in-house,
                constantly focusing on your target audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5">
          <div className="row scroll_row">
            <div className="col-4 col-scroll">
              <p className="f_heebo">
                If you have a passion to join the cinema industry or a new comer wants to learn
                filmmaking as a fresher and work as an intern in the production house then you can
                join us as well as will get the chance to participate in our upcoming projects.
              </p>
              <p className="f_heebo">
                We are constantly looking for media professionals, technical workers and people who
                have experience in entertainment industry to join with us and get to work in our
                new projects.
              </p>
              <p className="f_heebo">
                If you are an Artist, Creator, influencer or have any talent then we welcome you to
                join us and work with us by showing your talent.
              </p>
            </div>
            <div
              className="col-4 col-scroll-right"
              style={{ backgroundColor: "darkslategray", color: "white", filter: "drop-shadow(2px 4px 10px gray)" }}
            >
              <p style={{ marginTop: "1.5rem", fontFamily: "Roboto", color: "white", paddingLeft: "1rem" }}>Careers</p>
              <div style={{ borderLeft: "3px solid #3b9d8b", paddingLeft: "1rem", color: "white", marginLeft: "2rem" }}>
                <p className="j_title f_heebo">Video Editor</p>
                <p className="j_title f_heebo">Makeup Artist</p>
                <p className="j_title f_heebo">Graphic Artist</p>
                <p className="j_title f_heebo">Animator(2D/3D)</p>
              </div>
              <p style={{ color: "white", fontFamily: "Heebo", float: "right", paddingRight: "1rem" }}>
                <a style={{ textDecoration: "none", color: "white" }} href="/career">Apply Now</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
