import VerticalPage from "../components/VerticalPage";

export const metadata = {
  title: "Production",
  description:
    "Rave Production takes every story from concept to camera across film, television, digital and music.",
};

const ITEMS = [
  {
    title: "Film Production",
    paragraphs: [
      "From the first draft to the final cut, we produce feature films that travel across languages, genres and formats. Our production teams handle every stage of the pipeline, so the only thing the story has to worry about is being told well.",
      "Feature Films | Web Series | Documentaries",
    ],
  },
  {
    title: "Television & Broadcast Production",
    paragraphs: [
      "We produce for the biggest screen in the house. Our broadcast slate spans fiction, non-fiction and live formats, built to hold an audience's attention night after night.",
      "Fiction | Reality | Live Events | Non-Fiction",
    ],
  },
  {
    title: "Digital & Branded Content Production",
    paragraphs: [
      "Built for feeds, not just screens. We conceptualize, shoot and edit short-form and branded content designed to perform where audiences actually spend their time.",
      "Web Originals | Branded Content | Social-first Formats",
    ],
  },
  {
    title: "Music & Audio Production",
    paragraphs: [
      "An ever-growing library of soul-stirring originals and reimagined classics, produced to reshape the soundscape one release at a time.",
      "Original Scores | Soundtracks | Audio Originals",
    ],
  },
];

export default function ProductionPage() {
  return (
    <VerticalPage
      title="Production"
      subtitle="From concept to camera, we build every story we produce."
      image="Film Workshop.jpeg"
      items={ITEMS}
    />
  );
}
