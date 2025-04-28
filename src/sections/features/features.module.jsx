import { Card } from "../../components/card";

const FEATURES = [
  {
    title: "Fresh new layout",
    description:
      "With Bootstrap 5, we've created a fresh new layout for this template!",
    iconName: "collection",
  },
  {
    title: "Free to download",
    description:
      "As always, Start Bootstrap has a powerful collection of free templates.",
    iconName: "cloud-download",
  },
  {
    title: "Jumbotron hero header",
    description:
      "The heroic part of this template is the jumbotron hero header!",
    iconName: "toggles2",
  },
  {
    title: "Feature boxes",
    description:
      "We've created some custom feature boxes using Bootstrap icons!",
    iconName: "boxes",
  },
  {
    title: "Simple clean code",
    description:
      "We keep our dependencies up to date and squash bugs as they come!",
    iconName: "code",
  },
  {
    title: "A name you trust",
    description:
      "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    iconName: "patch-check",
  },
];

export function Features() {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gy-5 justify-content-center">
          {FEATURES.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              iconName={feature.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
