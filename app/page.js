import MediaTabs from "./components/MediaTabs";
import StudioSwiper from "./components/StudioSwiper";

export const metadata = {
  title: "Rave",
};

export default function Home() {
  return (
    <>
      <div className="text-center h_topdiv">
        <img src="/res/logo.png" style={{ width: "40%", marginTop: "15vh" }} alt="Rave" />
        <div>
          <p className="h_topp">Redifined Audio Visual Entertainment</p>
        </div>
      </div>

      <div className="div-i">
        <ul>
          <li className="li1"></li>
          <li className="li2"></li>
          <li className="li3"></li>
          <li className="li4"></li>
        </ul>
      </div>

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

      <section className="container my-5">
        <div className="row scale-image">
          <div
            className="col-12 bg-light scale_col"
            style={{
              backgroundImage: "url('/res/Christies-FI-Hero.jpeg')",
              height: "20rem",
              backgroundSize: "72rem",
              backgroundPosition: "center",
              backgroundBlendMode: "luminosity",
              transition: "all 1s ease",
              backgroundAttachment: "fixed",
              filter: "drop-shadow(2px 4px 10px gray)",
            }}
          >
            <div className="row">
              <div className="col-4 col-we" style={{ paddingLeft: "3rem" }}>
                <p className="we_create">We Create</p>
                <p className="wc_text p-1">environment that forges us with our fate</p>
              </div>
              <div className="col-4 offset-4 wi_row">
                <p className="we_inspire">We Inspire</p>
                <p className="wi_text p-1">through synchronizing our idea with your desires</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h_s2div"></div>

        <section className="h_s3">
          <div className="container mt-5">
            <div className="row">
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ width: "50%" }}>
                      <p className="h_rh">Rave's Hierarchy</p>
                      <p style={{ textAlign: "left" }} className="custom_text h_rht">
                        Rave Media is a leading well recognized firm that has been serving the
                        industry, by marking it’s existence for past 20 years whilst being and
                        involved in enormous fields and activities.We aim to expand with the latest
                        supplies that any media company could have, besides being the most company
                        that has a superior influence on customers. Our goal is to make RAVE become
                        one of the most significant remarkable company globally.
                      </p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <img src="/res/logo.png" className="logo_top" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MediaTabs />

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

        <div>
          <p className="h_pm">Passion meets possibility.</p>
          <p style={{ textAlign: "center", fontFamily: "Heebo", fontSize: 25 }}>
            Rave enables and creates desiring content.
          </p>
          <p
            className="h_contentp"
            style={{ textAlign: "center", padding: "20rem", paddingTop: 0, paddingBottom: 0, fontFamily: "Heebo", fontWeight: 600 }}
          >
            Rave enables every step in the entertainment value chain from development and
            production to marketing and distribution. With the reach of a studio and the
            flexibility of an indie, we share bold stories with audiences around the world.
          </p>
        </div>
      </section>

      <section className="mt-5"></section>

      <StudioSwiper />

      <section className="clients_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="clientsserved">Corporate Collaboration</p>
              <p className="clients_text">The appriciation we receive for our work from the counterpart is priceless.</p>
            </div>
            <div className="col-12 col-md-5 mt-3 mt-md-0" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
              <img src="/res/c1.png" className="client-logo_home" alt="" />
              <img src="/res/c2.png" className="client-logo_home" alt="" />
              <img src="/res/c3.jpg" className="client-logo_home" alt="" />
              <a className="plus" style={{ color: "black" }} href="/clients">+</a>
              <span className="logo-span-edit" style={{ display: "none" }}>
                <img src="/res/c5.png" className="client-logo_home" alt="" />
                <img src="/res/c6.png" className="client-logo_home" alt="" />
                <img src="/res/c7.png" className="client-logo_home" alt="" />
                <img src="/res/c8.png" className="client-logo_home" alt="" />
                <img src="/res/c9.png" className="client-logo_home" alt="" />
              </span>
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
