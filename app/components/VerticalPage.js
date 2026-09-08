import ServiceAccordion from "./ServiceAccordion";

export default function VerticalPage({ title, subtitle, image, items }) {
  return (
    <>
      <div
        className="service_hd_img"
        style={{
          height: "55vh",
          backgroundImage: `url('/res/${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", backgroundColor: "rgba(255,255,255,0.75)", padding: "2rem 3rem" }}>
          <p className="service_hd_p" style={{ margin: 0 }}>{title}</p>
          <p className="custom_text" style={{ maxWidth: "40rem" }}>{subtitle}</p>
        </div>
      </div>

      <section>
        <div className="container mt-5 mb-5">
          <ServiceAccordion items={items} />
        </div>
      </section>
    </>
  );
}
