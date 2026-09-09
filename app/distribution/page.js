import Link from "next/link";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import styles from "./page.module.css";

export const metadata = {
  title: "Distribution",
  description:
    "Rave Distribution carries content across theatres, OTT, broadcast and international markets.",
};

const CHANNELS = [
  {
    index: "01",
    title: "Theatrical Distribution",
    text: "We plan releases that make the most of the big screen, working with exhibitors and cinema chains to give every title the launch it deserves.",
    tags: ["Wide Releases", "Regional Releases", "Screen Planning"],
    image: "960x0.jpeg",
  },
  {
    index: "02",
    title: "OTT & Digital Distribution",
    text: "Our network of streaming and digital platform partnerships gets content in front of audiences wherever they choose to watch.",
    tags: ["Streaming Platforms", "VOD", "Digital Rights"],
    image: "webimage-E7C9CE70-02BD-4B9E-8EA1A0A5B5C9B2AD.jpeg",
  },
  {
    index: "03",
    title: "Broadcast & Syndication",
    text: "We distribute content across genres, platforms and territories through our broadcast network, reaching audiences through a million screens.",
    tags: ["Channel Syndication", "Broadcast Networks", "Content Licensing"],
    image: "istockphoto-496729620-170667a.jpeg",
  },
  {
    index: "04",
    title: "International Distribution",
    text: "Taking stories beyond home markets, we manage territory-wise rights and partnerships to bring content to a global audience.",
    tags: ["Territory Rights", "International Sales", "Cross-Border Deals"],
    image: "istockphoto-953764358-612x612.jpeg",
  },
];

const STATS = [
  { end: 4, suffix: "", label: "Distribution Channels" },
  { end: 30, suffix: "+", label: "Territories Covered" },
  { end: 1, suffix: "B+", label: "Reach" },
  { end: 24, suffix: "/7", label: "Release Operations" },
];

const STEPS = [
  { num: "01", title: "Acquire & Plan", text: "We map the right channels and windows for a title before it ever reaches an audience." },
  { num: "02", title: "Localize & Prepare", text: "Content is prepared, censored, subtitled and formatted for every platform and territory." },
  { num: "03", title: "Release & Promote", text: "Coordinated launches across theatres, screens and platforms, timed for maximum impact." },
  { num: "04", title: "Track & Optimize", text: "We monitor performance across every channel and adjust the strategy in real time." },
];

const TICKER_WORDS = ["THEATRICAL", "OTT & DIGITAL", "BROADCAST", "SYNDICATION", "INTERNATIONAL"];

export default function DistributionPage() {
  return (
    <div className={styles.page}>
      <section
        className={styles.hero}
        style={{ backgroundImage: "url('/res/Christies-FI-Hero.jpeg')" }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Rave / Distribution</span>
          <h1 className={styles.heroTitle}>Distribution</h1>
          <p className={styles.heroSub}>
            One story. Every screen. Every territory. We move content across theatres, streaming
            platforms, broadcast networks and borders, so nothing we make stays in one place.
          </p>
        </div>
        <div className={styles.scrollCue}>
          <span className={styles.scrollCueBar} />
          Scroll
        </div>
      </section>

      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...TICKER_WORDS, ...TICKER_WORDS, ...TICKER_WORDS].map((word, i) => (
            <div className={styles.tickerItem} key={`${word}-${i}`}>
              {word}
              <span>&bull;</span>
            </div>
          ))}
        </div>
      </div>

      <Reveal>
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div className={styles.statCard} key={s.label}>
              <span className={styles.statNum}>
                <CountUp end={s.end} suffix={s.suffix} />
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={styles.channels}>
        {CHANNELS.map((c, i) => (
          <Reveal key={c.title} delay={0.05}>
            <div className={`${styles.channelRow} ${i % 2 === 1 ? styles.channelRowReverse : ""}`}>
              <div
                className={styles.channelMedia}
                style={{ backgroundImage: `url('/res/${c.image}')` }}
              />
              <div>
                <span className={styles.channelIndex}>{c.index}</span>
                <h2 className={styles.channelTitle}>{c.title}</h2>
                <p className={styles.channelText}>{c.text}</p>
                <div className={styles.channelTags}>
                  {c.tags.map((tag) => (
                    <span className={styles.channelTag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className={styles.timeline}>
          <h2 className={styles.timelineHead}>How a release moves</h2>
          {STEPS.map((s) => (
            <div className={styles.step} key={s.num}>
              <span className={styles.stepNum}>{s.num}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className={styles.cta}>
          <h2 className={styles.ctaHeading}>Let&apos;s take your story everywhere.</h2>
          <Link href="/contactus" className={styles.ctaButton}>
            Get In Touch
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
