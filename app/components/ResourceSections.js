import { RESOURCES } from "../data/resources";

export default function ResourceSections() {
  return (
    <>
      {RESOURCES.map((r) => (
        <section key={r.title}>
          <div>
            <div className="col-12 res_col12" style={{ backgroundImage: `url('/res/${r.bg}')` }}>
              <div className="container">
                <div className="row">
                  <div className="col-4" style={{ paddingLeft: "3rem" }}>
                    <p className="res_title">{r.title}</p>
                  </div>
                  <div className="col-6 col-sm-5 offset-sm-3 col-md-4 offset-md-4 res_p_col">
                    <p className="res_p">{r.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
