import JobListing from "../components/JobListing";

export const metadata = {
  title: "Rave | Careers",
};

const JOB_DESC =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus quaerat incidunt, nemo magnam quia tenetur nulla optio. Sed nihil fugit modi, qui excepturi corrupti? Soluta expedita aspernatur necessitatibus impedit.";

const LEFT_DETAIL =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio unde beatae, repellat ipsum laudantium nihil quod eveniet maiores architecto, id nam itaque dolorem voluptatem voluptas veniam aperiam ducimus deserunt fugiat. Ipsam, iusto totam blanditiis libero vel reprehenderit vitae animi consectetur deleniti ratione possimus? Expedita voluptatum dignissimos incidunt est fugiat sequi ipsam quasi, officiis velit sint provident, perspiciatis, rem ab at. Nostrum, veniam blanditiis harum quam recusandae consequuntur accusamus repellat! Facere omnis iste quos. Reprehenderit, temporibus accusantium voluptas eius sequi aperiam? Dignissimos vitae eveniet dolorem ullam quidem, corrupti odio ut eius. Labore maxime beatae harum quia exercitationem at totam consequuntur, velit optio voluptate fugit. Magnam nulla tenetur consectetur voluptatem esse ipsum asperiores, qui quibusdam error deserunt dolorum incidunt, minus, beatae distinctio. Commodi voluptate exercitationem explicabo quaerat doloremque in corporis sapiente velit omnis perferendis consequatur mollitia repudiandae, laborum assumenda dolore? Similique molestias voluptatem, optio esse sequi mollitia facilis architecto nesciunt nisi iste!";

const RIGHT_DETAIL =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse reiciendis eaque sit explicabo aut dolores aperiam dolorem, itaque alias repudiandae accusantium cupiditate ea repellat velit maxime sed amet doloremque? Rerum, quae debitis a possimus iusto animi aliquid nostrum consequuntur. Enim vitae fuga repellat, ea reiciendis cum. Officiis aliquam odit asperiores, expedita eligendi rem, beatae a atque similique, facilis laudantium. Nisi magni voluptatum impedit? Quis dolore nisi doloribus id dicta porro animi aspernatur iure sit officiis maxime, consequatur fuga, eius amet adipisci, minus suscipit atque quas nemo nulla ex reprehenderit! Magnam repellendus adipisci vero perspiciatis nihil soluta ut. Dicta, illo sed asperiores atque quo dolor iure enim reprehenderit repellat beatae doloremque fugiat, quis dolores alias ut facilis sapiente aut at. Ipsa, asperiores. Reprehenderit repudiandae quaerat explicabo culpa ullam suscipit accusamus aperiam eligendi eveniet ratione tenetur perferendis necessitatibus delectus perspiciatis optio totam eius debitis illo, natus libero corrupti! Nihil, porro consequuntur?";

const JOBS = ["Graphic Designer", "Video Editor", "Animator"];

export default function CareerPage() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('/res/Facebook-Awards-Charity-Illustration-Owen-Davey-People-Characters-World-Social-Media-Skeleton-Basketball-Ice-Bucket-Challenge_1000.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          filter: "saturate(0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="career_top_p f_heebo">
          We are a hub of talented artists, technicians and in the form of team members.
          Encouraging and supporting every individual to realise their potential. Our people are a
          reflection of the rich diversity of our country. We aim to bring the best out of our
          people compromising varied cultural perspectives of their field that enriches the content
          we create. In an environment that brings out the best version of the self in perfect
          sync.
        </p>
      </div>

      <section className="career_s1 mt-5">
        <div className="career_div">
          <div style={{ width: "25%", backgroundImage: "url('/res/Christies-FI-Hero.jpeg')", backgroundSize: "cover", filter: "grayscale(1)" }}></div>
          <div className="career_d_div px-2">
            <p className="career_bo">Be original. Make your mark in entertainment with Rave.</p>
            <p className="career_wa">
              We’re adventurers. Combining the footprint of our work with the spirit and
              agility of an independent, Rave’s flexible structure spurs innovation,
              risk-taking, and creativity. Whether in feature films or virtual reality, Ravers are
              encouraged to chart their own course.
            </p>
          </div>
          <div style={{ width: "25%", backgroundImage: "url('/res/Christies-FI-Hero.jpeg')", backgroundSize: "cover", filter: "grayscale(1)" }}></div>
        </div>
      </section>

      <section>
        <div className="career_s2_div">
          <div style={{ width: "65%" }}>
            <img
              src="/res/Facebook-Fundraisers-Illustration-Owen-Davey-Globe-Global-Change-Environment-World-Puzzle_1000.jpeg"
              style={{ width: "100%", height: "100%", padding: "1rem", paddingTop: 0 }}
              alt=""
            />
          </div>
          <div style={{ width: "30%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} className="career_s2_d_div px-2">
            <p className="career_s2_en">Embrace new ideas and engage in the art of fun.</p>
            <p className="career_s2_rc">Rave’s culture is energetic, dynamic and rarely the same day twice.</p>
            <p className="career_rv">
              Raver's are genuinely passionate about what we do. No matter what entertainment
              you love, Rave brings together binge watchers, film critics and gaming gurus to
              deliver compelling content across just about every platform. Rave is the place to
              collaborate, be curious and embrace creativity.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-center mt-5">Job Openings</h4>
        {JOBS.map((title, i) => (
          <JobListing
            key={title}
            title={title}
            description={JOB_DESC}
            leftDetail={LEFT_DETAIL}
            rightDetail={RIGHT_DETAIL}
            marginTop={i === 0 ? "3rem" : undefined}
          />
        ))}
      </section>

      <section>
        <div className="career_s3_div">
          <div style={{ width: "30%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} className="px-2 pt-2 career_s3_d_div">
            <p className="career_s3_rcomm">- Rave Community</p>
            <p className="career_s3_rp">Rave puts a priority on contributing to our communities</p>
            <p className="career_s3_ba">
              Build a better world. Rave’s philosophy of &ldquo;locally-deep,
              globally-connected&rdquo; transcends entertainment to our Corporate Social
              Responsibility activities. Plan a social event. Promote healthy lifestyles. Go green.
              Give back. Join our community – led by dedicated employees and executive sponsors who
              truly believe in making an impact.
            </p>
          </div>
          <div style={{ width: "65%" }}>
            <img className="career_s3_img" src="/res/Dac9edIX4AEJ9LA.jpeg" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column" }}>
                <p className="career_s4_yr">Your Rave experience starts here.</p>
                <div>
                  <p className="career_s4_ar">
                    At RAVE, we take our passion, dedication, and overall zest for life, and
                    transmute it into compelling and creative communication. We share a tendency
                    toward creative thinking, a strong desire to do good work, and some rocking
                    work playlists.
                  </p>
                  <p className="career_s4_ed">
                    Every day is a new adventure — except weekends of course! Whether we’re
                    working furiously to meet deadlines or caught up in discussing the merits of
                    our favorite TV shows, we can promise you that there is never a dull moment at
                    Rave.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 career_s4_col" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <div>
                <p className="career_s4_p">
                  <span className="career_s4_span">We’re passionate</span> and we care about
                  each others success.
                </p>
                <p className="career_s4_p">
                  <span className="career_s4_span">We’re dynamic</span> and we find a way to
                  make things happen.
                </p>
                <p className="career_s4_p">
                  <span className="career_s4_span">We expect</span> excellence from each other and
                  our partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career_s6 container mb-5 mt-4">
        <p style={{ fontFamily: "Roboto", fontSize: 50 }}>Join Us</p>
        <p className="f_heebo">
          Rave is a place which will help you climb the ladder of success, no matter what you are,
          we are here to consider your vision. Mail us your profile at{" "}
          <span>careers@rave.net.co</span>
        </p>
      </section>
    </>
  );
}
