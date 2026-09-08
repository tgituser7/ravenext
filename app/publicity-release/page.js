import VerticalPage from "../components/VerticalPage";

export const metadata = {
  title: "Publicity & Release",
  description:
    "Rave's publicity and release team builds anticipation from first look to opening day.",
};

const ITEMS = [
  {
    title: "Public Relations & Media Outreach",
    paragraphs: [
      "We manage press relationships and media outreach that keep a title in the conversation long before and long after it releases.",
      "Press Outreach | Media Relations | Media Mentions",
    ],
  },
  {
    title: "Release Strategy & Planning",
    paragraphs: [
      "Every release is timed and positioned deliberately, weighing platform, competition and audience appetite to give a title its best shot.",
      "Release Windows | Platform Strategy | Positioning",
    ],
  },
  {
    title: "Premieres, Junkets & Events",
    paragraphs: [
      "From red carpet premieres to press junkets, we produce the events that turn a release into a moment.",
      "Premieres | Press Junkets | Launch Events",
    ],
  },
  {
    title: "Crisis & Reputation Management",
    paragraphs: [
      "When the conversation shifts, we're ready to manage it, protecting the reputation of our titles, talent and brand.",
      "Reputation Management | Crisis Communication",
    ],
  },
];

export default function PublicityReleasePage() {
  return (
    <VerticalPage
      title="Publicity & Release"
      subtitle="Building anticipation, from first look to opening day."
      image="Citizen-hotelier-Companies-embrace-social-responsi.jpeg"
      items={ITEMS}
    />
  );
}
