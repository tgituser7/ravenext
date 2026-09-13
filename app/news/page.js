export const metadata = {
  title: "News",
};

export default function ObjectivesPage() {
  return (
    <>
      <div className="obj_h">
        <div className="col-6 offset-5 obj_col">
          <p className="obj_title">To create the extraordinary.</p>
          <p className="obj_text">
            We exist for the extraordinary. In everything we do, we dare to not only be better than
            before, but also bigger and bolder. Because together, we aspire to be extraordinary,
            not as a goal, but as the standard. Because the extra mile is where the magic happens.
          </p>
        </div>
      </div>

      <section>
        <div className="container obj-display">
          <div className="row obj_s1_row">
            <div className="col-4 p-0 text-center obj_s1_img1_col">
              <img className="obj_s1_img1" src="/res/v.png" alt="" />
            </div>
            <div className="col-6">
              <p className="obj_s1_cv">Creating vision</p>
              <p className="obj_s1_ts">
                To serve the industry by showcasing our work whilst being the most trusted brand in
                the race of entertainment industry.To be The leading content company from the
                emerging markets and world class leader in businesses that surrounds our world with
                digital form of refreshments and contribute through value creation chain.
              </p>
            </div>
          </div>
          <div className="row obj_s1_row2">
            <div className="col-6">
              <p className="obj_s1_em">Executing mission</p>
              <p className="obj_s1_td">
                To deliver impeccable results by leading the entertainment industry in various
                aspects by offering support in various fields that helps promote talented
                individuals. As a corporation, we will be driven by content leadership based on
                innovation and creativity. Our focus will be on growth while delivering exceptional
                value to our customers and viewers.
              </p>
            </div>
            <div className="col-4 text-center p-0 obj_s1_img2_col2">
              <img className="obj_s1_img2" src="/res/M.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container obj_s2_cont">
        <div className="row obj-eff obj_s2_row">
          <div className="col-6 bg-light obj-eff-col p-0 obj_s2_col"></div>
          <div className="col-5 obj-eff-col2 obj_s2_col2">
            <p className="obj_s2_p">-Purpose</p>
            <p className="obj_s2_ba">Being acknowledged today. To usher a better tomorrow.</p>
            <p className="obj_s2_fr">
              For us, responsibility means taking the right action and at the right time. It’s
              the only way we know how to do things.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row obj-eff obj-row3 obj_s3_row">
          <div className="col-6 bg-light obj-eff-col col3 p-0 obj_s3_col"></div>
          <div className="col-5 obj-eff-col4 col4 obj_s3_col2">
            <p className="obj_s3_so">Shaping our universe into endless growth</p>
            <p className="obj_s3_ms">
              Many shining stars exist in the firmament of RAVE. Be one of them. One of us. If you
              have a passion for the business of entertainment and can’t wait to make your
              mark in it, look no further.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row obj-eff obj-row2 obj_s4_row">
          <div className="col-6 bg-light obj-eff-col col1 p-0 obj_s4_col"></div>
          <div className="col-5 obj-eff-col2 col2 obj_s4_col2">
            <p className="obj_s4_lt">Leading through the chain of command</p>
            <p className="obj_s4_ol">
              Our leadership team shares a creative drive to bring great ideas, stories, and
              next-generation platforms to life, and to audiences around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="obj_s5_s">
        <div>
          <div className="container">
            <div className="row obj_s5_row">
              <div className="col-5 obj_b p-0 obj_s5_col">
                <div className="background_div"></div>
                <p className="obj_hd pt-3 px-2">Preparing ourselves for contributing shared progress</p>
                <p className="obj_pp px-2">
                  As one of the world’s best entertainers, we operate at the intersection of
                  diverse societies, helping start critical conversations on human development.
                </p>
              </div>
              <div className="col-5 obj_b p-0 obj_s5_col2">
                <div className="background_div2"></div>
                <p className="obj_hd pt-3 px-2">Implementing the must needed environmental cause</p>
                <p className="obj_pp px-2">
                  We are thoughtfully developing and putting into action sustainable practices into
                  all parts of our business, in order to shrink our carbon footprint in order to
                  create and maintain a sustainable environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
