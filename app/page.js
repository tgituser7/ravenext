import MediaTabs from "./components/MediaTabs";
import StudioSwiper from "./components/StudioSwiper";

export const metadata = {
  title: "Rave",
};

export default function Home() {
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

      <div className="div-i">
        <ul>
          <li className="li1"></li>
          <li className="li2"></li>
          <li className="li3"></li>
          <li className="li4"></li>
        </ul>
      </div>

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
    </>
  );
}
