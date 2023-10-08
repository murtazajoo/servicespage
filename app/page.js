import Card from "./components/Card";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-3 gap-10 m-10">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  );
}

const data = [
  {
    title: "User Experience",
    subtitle: "We are all users",
    description:
      "With over 200 digital projects and counting, we get what users want and need pretty easily. UX is the core to everything we build. In Codigo, we take user research, competitive analysis, wireframes, user flows, content maps very seriously.",
    image: "ux.png",
    text_color: "#000000",
    bg_color: "#FFFF65",
  },
  {
    title: "Interface Design",
    subtitle: "We live to design",
    description:
      "We have pixel OCD. We keep ourselves constantly inspired with the hype and trends in the design industry to craft gorgeous interactions for your brand.",
    image: "ui.png",
    text_color: "#000000",
    bg_color: "#EED9DC",
  },
  {
    title: "Consultancy",
    subtitle: "We can help validate your ideas.",
    description:
      "Ready to take the first step? Let us help with a minimum viable product. Tap on our brains and experience to create a semi-product to test the waters. Consult us on user experience, how the product could look like and turn it into a rapid prototype.",
    image: "co.png",
    text_color: "#FFFFFF",
    bg_color: "#B3262E",
  },
  {
    title: "Mobile Development",
    subtitle: "We are Apple & Android friendly.",
    description:
      "Native, ReactNative, payment gateway integration, bespoke CMS, consuming APIs from existing sources and all things mobile app relevant. We’ve mostly done it all.",
    image: "mob.png",
    text_color: "#FFFFFF",
    bg_color: "#1988E8",
  },
  {
    title: "Web Development",
    subtitle: "We weave front-end magic.",
    description:
      "Web portals, microsites (yes, they still exist), web apps - responsive, powered by WordPress or supported by a bespoke CMS. No screen sizes scare us, only IE does.",
    image: "web.png",
    text_color: "#000000",
    bg_color: "#FF8D6E",
  },
  {
    title: "CMS",
    subtitle: "We give u data.",
    description:
      "All bespoke CMS we build comes with a dashboard so you can monitor the activities on your product. Edit or add content at your convenience - we’ll customize everything to your wants and needs.",
    image: "cms.png",
    text_color: "#FFFFFF",
    bg_color: "#18A152",
  },
  {
    title: "Emerging Tech",
    subtitle: "We have all the fancy gadgets.",
    description:
      "Bluetooth, beacon, NFC, Augmented reality, IoT and more - we know and we have all these buzzwords in our office. We put Superman in AR before Pokemon Go did.",
    image: "et.png",
    text_color: "#FFFFFF",
    bg_color: "#483245",
  },
  {
    title: "Coaching",
    subtitle: "We’d love to share.",
    description:
      "Attend our Masterclasses with the Codigo syllabus or talk to us to customize sessions just for your business teams. Learn more here.",
    image: "coach.png",
    text_color: "#FFFFFF",
    bg_color: "#883955",
  },
];
