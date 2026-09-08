import VerticalPage from "../components/VerticalPage";

export const metadata = {
  title: "Brand Partner",
  description:
    "Rave partners with brands to weave them into stories audiences actually want to watch.",
};

const ITEMS = [
  {
    title: "Brand Integration & Product Placement",
    paragraphs: [
      "We work brands into our stories in ways that feel native to the plot, not bolted onto it, so audiences stay engaged and brands stay memorable.",
      "In-Content Integration | Product Placement",
    ],
  },
  {
    title: "Sponsorships & Co-Branded Campaigns",
    paragraphs: [
      "From title sponsorships to fully co-branded campaigns, we build partnerships that align a brand's voice with the reach of our content.",
      "Title Sponsorships | Co-Branded Campaigns",
    ],
  },
  {
    title: "Influencer & Talent Partnerships",
    paragraphs: [
      "We connect brands with the talent and creators in our network, arranging endorsements that feel authentic to both the brand and the audience.",
      "Brand Ambassadors | Creator Partnerships",
    ],
  },
  {
    title: "Experiential Marketing",
    paragraphs: [
      "We design real-world activations and events that let audiences experience a brand alongside the stories they already love.",
      "Activations | Live Events | On-Ground Campaigns",
    ],
  },
];

export default function BrandPartnerPage() {
  return (
    <VerticalPage
      title="Brand Partner"
      subtitle="Weaving brands into stories audiences actually want."
      image="istockphoto-1257176924-612x612.jpeg"
      items={ITEMS}
    />
  );
}
