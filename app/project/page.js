import ServiceAccordion from "../components/ServiceAccordion";

export const metadata = {
  title: "Project",
  description:
    "Rave Media is a leading well recognized firm that has been serving the industry, by marking it’s existence for past 20 years. We provide informative, striking and functional tools to promote your business.",
};

const SCROLL_IMAGES = [
  "IMG-20180803-WA0032.jpg",
  "pstudio.jpg",
  "resource-col-analysis-alt@2x (1).jpg",
  "private-photography.jpeg",
  "Recording Studio.jpeg",
];

const SERVICES = [
  {
    title: "Advertisement",
    paragraphs: [
      "The metaphoric line between ATL and BTL can be vague sometimes –– what exactly constitutes Above or Below The Line in an increasingly mixed media world anyway? The crux though lies in the objective. And whether you intend on reaching a large audience to significantly increase brand visibility or target specific user groups with niche services, we’ll make sure you’re heard loud and clear.",
      "Electronic Media | Magazine & Newspaper | Radio | Transit | Hoardings | Stadium | OOH | Mobile Ad",
    ],
  },
  {
    title: "Brand Endorsement",
    paragraphs: [
      "Why won’t this work; why is this working. This is the crux of the Rave philosophy to brand strategy –– understanding who you are and communicating what people want to hear. We step into your shoes to help you discover your voice, your words, and how to say it –– all in an effort to carve a unique identity that stands out from the competition and draw out an achievable roadmap to reach your goals. Because what you’re selling is only as good as the story you’re telling.",
      "Artist Arrangement | Brand Ambassador",
    ],
  },
  {
    title: "Content Writing",
    paragraphs: [
      "Our content writing services aim to do just one thing –– create quality space in your customer’s mind for you and your brand. We understand that easy reading is not always easy writing. It has less to do with speaking impressive words and everything to do with creating thoughtful dialogues around big ideas. Less what you say, more how you say it. This is how you stand out from the stream. This is what we have successfully delivered over the years.",
      "Articles | Adverts | Blogs | Brochures | Coffee Table Books | Flyers | Manual & guidelines | Product Packaging | Radio Scripts",
    ],
  },
  {
    title: "Content Production",
    paragraphs: [
      "We are a 360-degree video production company equipped to conceptualize, produce, and publish all types of video content. Our visual storytelling prowess is built on a bedrock of scripting captivating brand stories across multiple video formats. We firmly believe that there is no idea that cannot be brought to life with the entrancting mix of sound, lights, animation, and action.",
      "Audio Jingles & Spots | TVC | Social Media AD | Product Shoot | Campaign Shoot | Event Coverage",
    ],
  },
  {
    title: "Digital Marketing",
    paragraphs: [
      "In an online landscape that is increasingly summarized by cookie notices, infinite notifications, and persistent pop ups, nuance is the name of the game. It’s no longer about yelling at the top of your voice as much as it’s about finding your people and engaging them in a wholesome manner that is both enriching and thoughtful. We’ll help you hear what your audience has to say, sound out your messages, speak your truth to your people, and help grow your business by directing the right audience to you.",
      "PPC Model | Social Media Marketing | Lead Generation | Content Marketing | Search Engine Marketing | Influencer Marketing | Email Marketing | Search Engine Optimization",
    ],
  },
  {
    title: "Designing",
    paragraphs: [
      "At Rave, great design is not just about the look and feel. It’s about how it adds value and makes things work. It is a means to solve a problem, a bridge to a communication gap. It is empathy. It is the confidence to stand apart, be loud and clear, and proclaim to the world an idea so real, it stands out for its sheer boldness. And we’re here to help you do it.",
      "Artworks | Brand Logo | Storyboards | Visual Architecture | Packaging Design | Collaterals & Merchandise",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <div
        className="service_hd_img"
        style={{ backgroundImage: "url('/res/Objective 2.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1)" }}
      >
        <div className="s_div1" style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
          <p className="service_hd_p so_none"></p>
          <p className="service_hd_p so_none"></p>
          <p className="service_hd_p so_none"></p>
        </div>
        <div className="s_div2" style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
          <p className="service_hd_p so_none"></p>
          <p className="service_hd_p so_none"></p>
        </div>
        <div className="s_div3" style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
          <p className="service_hd_p so_none"></p>
          <p className="service_hd_p so_none"></p>
          <p className="service_hd_p so_none"></p>
        </div>
      </div>

      <section style={{ backgroundColor: "white" }} className="mb-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="pt-5">Titles</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, perspiciatis
                commodi. Enim, vel eveniet sequi magnam in quidem, ullam animi quisquam autem
                recusandae sapiente illo quia natus possimus, dolore fugiat. Error, doloremque.
                Tenetur vitae modi, atque nobis incidunt laborum officiis voluptates ea cum quo
                itaque ipsum delectus eligendi harum. Ducimus, perspiciatis officiis porro officia
                optio accusamus vitae non. Dignissimos, optio!
              </p>
            </div>
            <div className="col-6">
              <div className="sdiv" style={{ display: "flex", height: "30rem", flexWrap: "nowrap", overflow: "hidden", justifyContent: "center", alignItems: "center", scrollBehavior: "smooth" }}>
                <div style={{ width: "50%", height: "25rem", flex: "0 0 auto" }}></div>
                <div style={{ width: "50%", height: "25rem", flex: "0 0 auto" }}></div>
                <div style={{ width: "50%", height: "25rem", flex: "0 0 auto" }}></div>
                <div style={{ width: "50%", height: "25rem", flex: "0 0 auto" }}></div>
                {SCROLL_IMAGES.map((img) => (
                  <div className="scrolldiv" key={img}>
                    <img src={`/res/${img}`} style={{ width: "100%", height: "100%" }} alt="" />
                  </div>
                ))}
                <div style={{ width: "50%", height: "25rem", flex: "0 0 auto" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <ServiceAccordion items={SERVICES} />
        </div>
      </section>
    </>
  );
}
