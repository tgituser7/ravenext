import VerticalPage from "../components/VerticalPage";

export const metadata = {
  title: "Merchandising",
  description:
    "Rave Merchandising turns stories into products audiences want to own.",
};

const ITEMS = [
  {
    title: "Product & Character Licensing",
    paragraphs: [
      "We license characters, titles and brands for use across product categories, working with manufacturers to bring our stories into everyday life.",
      "Character Licensing | Brand Licensing",
    ],
  },
  {
    title: "Retail Partnerships",
    paragraphs: [
      "From design to shelf, we partner with retailers to get official merchandise in front of fans wherever they shop.",
      "Retail Distribution | Category Partners",
    ],
  },
  {
    title: "E-commerce & D2C",
    paragraphs: [
      "We help creators and titles sell their own merch directly to fans, handling everything from design to promotion.",
      "Direct-to-Consumer | Online Storefronts | Fulfillment",
    ],
  },
  {
    title: "Collectibles & Limited Editions",
    paragraphs: [
      "For the fans who want more than a t-shirt, we produce limited-run collectibles that mark a title's biggest moments.",
      "Limited Editions | Collectibles | Fan Merchandise",
    ],
  },
];

export default function MerchandisingPage() {
  return (
    <VerticalPage
      title="Merchandising"
      subtitle="Turning stories into things people want to own."
      image="istockphoto-1133619921-170667a.jpeg"
      items={ITEMS}
    />
  );
}
