import ProjectMosaic from "../components/ProjectMosaic";
import ResourceSections from "../components/ResourceSections";
import { CLIENT_LOGOS } from "../data/clientLogos";

export const metadata = {
  title: "Studio",
  description:
    "Rave Media is a leading well recognized firm that has been serving the industry, by marking it’s existence for past 20 years. We provide informative, striking and functional tools to promote your business.",
};

const DIVISION_IMAGES = [
  "1_FpkWaPDZPTKW5n-yJMpuaA.jpeg",
  "home-recording-studio-setup-guitar-based-2.jpeg",
  "Film Workshop.jpeg",
  "ey-man-working-on-digital-platform.jpg.rendition.450.300.jpg",
  "div_imag.jpg",
];

export default function ProjectsPage() {
  return (
    <>
      <div className="project_hd">
        <p style={{ fontFamily: "Roboto", fontSize: 36, color: "white", textAlign: "center" }}>
          <span className="project_wk">Work</span> that seprates us from the mainstream and makes
          you <span className="project_ex">Extraordinary</span>.
        </p>
      </div>

      <ProjectMosaic />

      <section style={{ marginBottom: "6rem" }}>
        <div className="divisions">
          {DIVISION_IMAGES.map((img) => (
            <span
              key={img}
              style={{ backgroundImage: `url('/res/${img}')`, backgroundPosition: "center", backgroundSize: "cover", filter: "grayscale(1)" }}
            ></span>
          ))}
        </div>
      </section>

      <ResourceSections />

      <section style={{ backgroundColor: "white", paddingBottom: "5rem", paddingTop: "5rem" }}>
        <div className="container">
          <div className="row client_t1_row">
            <div className="col-12">
              <p className="client_t1">With whom we&apos;ve shared our memorable experiences</p>
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-1 text-center">
              {CLIENT_LOGOS.map((logo) => (
                <img
                  key={logo.src}
                  style={logo.mr ? { marginRight: "5%" } : undefined}
                  src={`/res/${logo.src}`}
                  className="client-logo"
                  alt=""
                />
              ))}
            </div>
          </div>
          <p className="client_t2">Are the ones who inspire us to reveal and explore our better selves.</p>
        </div>
      </section>

      <section className="container" style={{ marginBottom: "3rem", padding: "3.5rem 2.5rem" }}>
        <p className="project_km">To Know More</p>
        <p className="project_akm f_heebo">about our work or any other business related query kindly reach us at work@rave.net.in</p>
        <p className="project_lkm f_heebo" style={{ marginBottom: 0 }}>We give the best quotation and solution.</p>
      </section>
    </>
  );
}
