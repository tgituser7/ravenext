export const metadata = {
  title: "Contact Us",
};

export default function ContactUsPage() {
  return (
    <div className="contact-edit mt-5">
      <section className="contact-1">
        <img className="lko-img" src="/res/lko.png" style={{ height: 158, paddingRight: 10, marginTop: 73 }} alt="" />
        <p style={{ fontWeight: 700 }}>Lucknow</p>
        <p className="address-lko">Gomti Nagar, Lucknow</p>
        <p>Tel : 522 7964408</p>
      </section>

      <section className="contact-1">
        <img className="img" src="/res/mumbai.png" alt="" />
        <p style={{ fontWeight: 700 }}>Mumbai</p>
        <p className="address">Santacruz West, Mumbai</p>
        <p>Tel : +91 8451897298</p>
      </section>
    </div>
  );
}
