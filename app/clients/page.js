import { CLIENT_LOGOS } from "../data/clientLogos";

export const metadata = {
  title: "Clients",
  description:
    "Rave Media is a leading well recognized firm that has been serving the industry, by marking it’s existence for past 20 years. We provide informative, striking and functional tools to promote your business.",
};

export default function ClientsPage() {
  return (
    <>
      <div
        className="clients_bg"
        style={{ backgroundImage: "url('/res/Mar20_12_115049941.jpg')", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "30rem", filter: "grayscale(1)" }}
      >
        <div>
          <p className="clients_hd_p">We serve our clients by acknowledging their needs and prioritising their work.</p>
        </div>
      </div>

      <section style={{ backgroundColor: "white", paddingBottom: "3rem", paddingTop: "3rem" }}>
        <div className="container">
          <div className="row client_t1_row">
            <div className="col-12">
              <p className="client_t1">With whom we've shared our memorable experiences</p>
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
    </>
  );
}
