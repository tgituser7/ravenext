export const metadata = {
  title: "Network",
};

const SECTORS = [
  {
    title: "Films",
    text: "Fond of producing films that transcends different languages, genre and formats we also showcase nation’s diverse culture through strategic partnerships that delivers a positive impact throughout the environment.",
  },
  {
    title: "Music",
    text: "Drawing inspiration from our audiences. our library holds enormous ranges of tunes and is ever-growing. We curate soul-stirring delighted songs and fresh originals that have the potential to reshape the Indian soundscape.",
  },
  {
    title: "Broadcast",
    text: "Rave produces tribulations and triumphs, the beliefs of its audience and cultural nuances. By distributing content across genres, platforms and territories through our network, we deliver wonders through a million screens.",
    border: true,
  },
  {
    title: "Digital",
    text: "We are equipped with technology that ushers next-gen entertainment. Empowering our consumers with more choice, freedom and access. Unlocking extraordinary experiences across platforms, regions and languages.",
    noBorder: true,
  },
];

const SERVICES = [
  { title: "Channel Audit", text: "We analyze the channel according to YouTube Analytics metrics, find and eliminate weak spots" },
  { title: "Optimization", text: "We compile metadata for videos so that they are included in the search results and recommendations more often" },
  { title: "Localization", text: "We create high-quality content translation to attract viewers from all over the world to the channel" },
  { title: "Distribution", text: "We help you increase your revenue by promoting content on the largest video platforms" },
  { title: "Resources", text: "We create high-quality content translation to attract viewers from all over the world to the channel" },
  { title: "Channel Design", text: "We help attract viewers with a stylish design and layout" },
  { title: "Merch", text: "We will help you create and sell your own merch. We will take care of everything from design to promotion" },
];

const PERKS = [
  { title: "Content ID", text: "We protect copyright: block copies or monetize them in favor of the creator" },
  { title: "Channel Recovery", text: "We help you get back hacked Google account with illegal streams and blocking" },
  { title: "Brand Collaboration", text: "We help you get back hacked Google account with illegal streams and blocking" },
  { title: "Express Payments", text: "We help you get back hacked Google account with illegal streams and blocking" },
];

export default function BusinessPage() {
  return (
    <>
      <div className="bg-light">
        <div className="bs_top"></div>
      </div>

      <section className="container" style={{ marginTop: "5%" }}>
        <h2 className="bs_heading" style={{ marginLeft: 0, textAlign: "center" }}>Sectors</h2>
        <div className="my-5 bs_s1div">
          {SECTORS.map((s) => (
            <div className="sector-block" key={s.title} style={s.noBorder ? { border: 0 } : undefined}>
              <p style={{ fontSize: 25, textAlign: "center" }}>{s.title}</p>
              <p className="f_heebo" style={{ textAlign: "justify" }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "white" }}>
        <div className="container"></div>
        <div className="container">
          <div className="row bs_s2div">
            <div className="col-12 col-md-7 bs_col1">
              <h2 className="yt_heading" style={{ marginLeft: 0, paddingTop: "2rem", paddingBottom: "2rem", fontSize: 60 }}>
                Youtube CMS
              </h2>
              <p className="custom_text">
                The Rave YouTube Network is an official partner with a collection of over 30,000+
                videos that have served over 18 Billion minutes of video under our various CMS
                categorized according to content type. Rave allows YouTube channel owners as well
                as new video creators to expand their views and revenues by joining the Rave
                YouTube MCN. We help creators develop their channels and make money off of them. We
                combine YouTube expertise and technology to achieve results.
              </p>
              <div className="row my-5 bs_s2row">
                <div className="col-12 col-md-6 my-auto bs_col1yt">
                  <img src="/res/youtube_logo.gif" style={{ width: "100%", padding: "2rem" }} alt="" />
                </div>
                <div className="col-4 col-md-2 bs_colyt" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                  <p style={{ fontSize: 40 }}>-1</p>
                  <p style={{ fontSize: 15 }}>Subscribers</p>
                </div>
                <div className="col-4 col-md-2 pt-3 pt-md-0 bs_colyt" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                  <p style={{ fontSize: 40 }}>-1</p>
                  <p style={{ fontSize: 15 }}>Watch Time (Hrs)</p>
                </div>
                <div className="col-4 col-md-2 pt-3 pt-md-0 bs_colyt" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                  <p style={{ fontSize: 40 }}>-1</p>
                  <p style={{ fontSize: 15 }}>Videos in Network</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 bs_col2">
              <h2 className="yt_heading" style={{ marginLeft: 0, paddingTop: "2rem", paddingBottom: "2rem", fontSize: 50 }}>
                Offers
              </h2>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p className="ys_title">Monetization</p>
                <p className="ys_title">Support</p>
                <p className="ys_title">Brand Account</p>
              </div>
            </div>
          </div>

          <div className="bs_divservices" style={{ display: "flex" }}>
            <div className="bs_svdiv1" style={{ width: "50%" }}>
              <h2 className="yt_heading" style={{ marginLeft: 0, paddingTop: "2rem", paddingBottom: "2rem", fontSize: 50 }}>
                Services
              </h2>
              <div>
                <p className="custom_text">
                  We provide immediate monetization of video views on your YouTube Channel by
                  directing traffic from its existing network of over millions of views a month to
                  these new videos/channels to get them additional exposure and views We allow
                  advertiser brands to associate with channels and videos leading to higher
                  monetization and help Instagram influencers set up monetization, live streams and
                  merchandising on YouTube If you are a content producer/owner and are looking to
                  start earning revenue immediately from your video or music content, contact us to
                  begin earning revenue in as little as 1 business day from today!
                </p>
              </div>
              <div>
                {Array.from({ length: Math.ceil(SERVICES.length / 2) }).map((_, rowIdx) => {
                  const a = SERVICES[rowIdx * 2];
                  const b = SERVICES[rowIdx * 2 + 1];
                  return (
                    <div style={{ display: "flex" }} key={rowIdx}>
                      <div style={{ width: "50%" }} className="p-3">
                        <p className="ys_title">{a.title}</p>
                        <p className="custom_text ys_des">{a.text}</p>
                      </div>
                      <div style={{ width: "50%" }} className="p-3">
                        {b && (
                          <>
                            <p className="ys_title">{b.title}</p>
                            <p className="custom_text ys_des">{b.text}</p>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bs_svdiv2" style={{ width: "50%", paddingLeft: "3rem" }}>
              <div>
                <h2 className="yt_heading" style={{ marginLeft: 0, paddingTop: "2rem", paddingBottom: "2rem", fontSize: 50 }}>
                  Perks &amp; Benefits
                </h2>
                {PERKS.map((p) => (
                  <div key={p.title}>
                    <p className="ys_title">{p.title}</p>
                    <p className="custom_text ys_des">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "darkslategray", color: "white" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <p className="mb-0 bs_jn">Join Our Network</p>
            <p className="bs_jn">Be part of our Network</p>
          </div>
          <div style={{ width: "50%" }}>
            <p className="custom_text bs_wh" style={{ fontSize: 20 }}>
              We have an open contract for 30 days. During this time, you can test the efficiency
              of the services and make sure that we will help you earn more.
            </p>
            <button>Join Us</button>
          </div>
        </div>
      </section>

      <section className="container my-5" style={{ marginBottom: 0 }}>
        <div className="row obj-eff" style={{ height: "50vh", justifyContent: "center" }}>
          <div className="col-6 col-md-5 bg-light obj-eff-col p-0 objcol"></div>
          <div className="col-6 col-md-5 obj-eff-col2" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <p style={{ width: "20rem", fontSize: 25 }}>Our Philosophy, little but contained</p>
            <p style={{ width: "20rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates
              similique a nesciunt odio est, iste deleniti ipsum autem, nostrum eum quibusdam
              reprehenderit laboriosam magni vero. Dignissimos dicta magnam nostrum.
            </p>
          </div>
        </div>
      </section>
      <section className="container my-5" style={{ marginTop: 0 }}>
        <div className="row obj-eff_2" style={{ height: "50vh", justifyContent: "center" }}>
          <div className="col-6 col-md-5 obj-eff-col2_2 objcol2" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <p style={{ width: "20rem", fontSize: 25 }}>Raising the bar for better analytics</p>
            <p style={{ width: "20rem" }}>
              Providing a definitive window into the way we think, decide or act. Building on our
              collective expertise, experience and wisdom, to evolve into a company that sets
              benchmarks.
            </p>
          </div>
          <div className="col-6 col-md-5 bg-light obj-eff-col_2 p-0"></div>
        </div>
      </section>

      <section className="bs_divrs" style={{ marginTop: "-24rem" }}>
        <div style={{ position: "relative", top: "23rem" }}>
          <p style={{ fontFamily: "Roboto", fontSize: 55, padding: "4rem", paddingTop: "2rem", paddingBottom: 0, marginBottom: 0 }}>
            Driving through the uncharted
          </p>
          <p style={{ fontFamily: "Roboto", fontSize: 55, paddingLeft: "4rem" }}>road of success</p>
          <p style={{ paddingLeft: "4rem", fontSize: 15, width: "37rem" }}>
            We offer trust, satisfaction and loyalty to all our clients and customers by ensuring
            their needs are met. Our ideas are thought of creatively, intelligently and serve
            unique communicative ideas. By constructing all services within itself, we would be
            able to save time, assure high quality and value for money. We aspire to provide the
            best in terms of quality and creativity, without compromising on the strictest industry
            standards and code of ethics.
          </p>
        </div>
        <img src="/res/Economic-Development-Hero.gif" style={{ width: "100%" }} alt="" />
      </section>
    </>
  );
}
