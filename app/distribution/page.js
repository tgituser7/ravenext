import VerticalPage from "../components/VerticalPage";

export const metadata = {
  title: "Distribution",
  description:
    "Rave Distribution carries content across theatres, OTT, broadcast and international markets.",
};

const ITEMS = [
  {
    title: "Theatrical Distribution",
    paragraphs: [
      "We plan releases that make the most of the big screen, working with exhibitors and cinema chains to give every title the launch it deserves.",
      "Wide Releases | Regional Releases | Screen Planning",
    ],
  },
  {
    title: "OTT & Digital Distribution",
    paragraphs: [
      "Our network of streaming and digital platform partnerships gets content in front of audiences wherever they choose to watch.",
      "Streaming Platforms | VOD | Digital Rights",
    ],
  },
  {
    title: "Broadcast & Syndication",
    paragraphs: [
      "We distribute content across genres, platforms and territories through our broadcast network, reaching audiences through a million screens.",
      "Channel Syndication | Broadcast Networks | Content Licensing to Channels",
    ],
  },
  {
    title: "International Distribution",
    paragraphs: [
      "Taking stories beyond home markets, we manage territory-wise rights and partnerships to bring Indian content to a global audience and the world to India.",
      "Territory Rights | International Sales | Cross-Border Partnerships",
    ],
  },
];

export default function DistributionPage() {
  return (
    <VerticalPage
      title="Distribution"
      subtitle="Getting every story to every screen, everywhere."
      image="Christies-FI-Hero.jpeg"
      items={ITEMS}
    />
  );
}
