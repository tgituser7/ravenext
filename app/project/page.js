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
              <div className="sdiv" style={{ display: "flex", height: "30rem", flexWrap: "nowrap", overflowX: "auto", overflowY: "hidden", WebkitOverflowScrolling: "touch", justifyContent: "flex-start", alignItems: "center", scrollBehavior: "smooth" }}>
                {SCROLL_IMAGES.map((img) => (
                  <div className="scrolldiv" key={img}>
                    <img src={`/res/${img}`} style={{ width: "100%", height: "100%" }} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
