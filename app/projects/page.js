import ProjectMosaic from "../components/ProjectMosaic";
import ResourceSections from "../components/ResourceSections";

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

const SCROLL_IMAGES = [
  "IMG-20180803-WA0032.jpg",
  "pstudio.jpg",
  "resource-col-analysis-alt@2x (1).jpg",
  "private-photography.jpeg",
  "Recording Studio.jpeg",
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

      <section className="container">
        <p className="project_ndep">We are never deprived of displaying our work.</p>
        <p className="project_hl">Have a look.</p>
      </section>

      <ProjectMosaic />

      <section>
        <div className="divisions">
          {DIVISION_IMAGES.map((img) => (
            <span
              key={img}
              style={{ backgroundImage: `url('/res/${img}')`, backgroundPosition: "center", backgroundSize: "cover", filter: "grayscale(1)" }}
            ></span>
          ))}
        </div>
      </section>

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

      <ResourceSections />

      <section className="container">
        <p className="project_km">To Know More</p>
        <p className="project_akm f_heebo">about our work or any other business related query kindly reach us at media@rave.net.co</p>
        <p className="project_lkm f_heebo">We give the best quotation and solution.</p>
      </section>
    </>
  );
}
