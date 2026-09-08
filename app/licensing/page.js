import VerticalPage from "../components/VerticalPage";

export const metadata = {
  title: "Licensing",
  description:
    "Rave Licensing protects and monetizes the content, music and formats we create.",
};

const ITEMS = [
  {
    title: "Content Licensing",
    paragraphs: [
      "We license our film, television and digital catalogue to platforms and partners looking to bring proven stories to their audiences.",
      "Catalogue Licensing | Format Rights | Remake Rights",
    ],
  },
  {
    title: "Music & Sync Licensing",
    paragraphs: [
      "Our library of originals and soundtracks is available for sync in film, television, advertising and digital campaigns.",
      "Sync Licensing | Soundtrack Rights | Commercial Use",
    ],
  },
  {
    title: "Format Licensing",
    paragraphs: [
      "Successful formats deserve a second life. We license proven show formats to broadcasters and producers across markets.",
      "Show Formats | Adaptation Rights",
    ],
  },
  {
    title: "Rights & Royalty Management",
    paragraphs: [
      "We protect copyright end to end, blocking unauthorized copies or converting them into a revenue stream, and manage royalties across every deal we license.",
      "Content ID | Copyright Protection | Royalty Tracking",
    ],
  },
];

export default function LicensingPage() {
  return (
    <VerticalPage
      title="Licensing"
      subtitle="Protecting and monetizing every piece of IP we create."
      image="corporate_hierarchy_more_likeable.jpeg"
      items={ITEMS}
    />
  );
}
