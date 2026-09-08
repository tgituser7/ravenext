import ResourceSections from "../components/ResourceSections";

export const metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <>
      <div className="res_himg_div">
        <p className="himg_p1">We provide</p>
        <p className="himg_p2">facilities that bring your concepts</p>
        <p className="himg_p3">to life</p>
      </div>

      <ResourceSections />

      <section className="container">
        <p className="b_text">For studios and equipments rental services kindly contact studios@rave.net.co</p>
      </section>
    </>
  );
}
