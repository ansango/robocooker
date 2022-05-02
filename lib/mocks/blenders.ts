import { Blender } from "@/models/blender";

const blenders: Blender[] = [
  {
    _id: "1",
    name: "mambo",
    company: "cecotec",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_4_z8zvjh.avif",
  },
  {
    _id: "2",
    name: "thermomix",
    company: "vorkwerk",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_5_uugqbq.avif",
  },
  {
    _id: "3",
    name: "kcook",
    company: "kenwood",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_6_g2n6cw.avif",
  },
  {
    _id: "4",
    name: "maxichef",
    company: "moulinex",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_7_ostaxn.avif",
  },
  {
    _id: "5",
    name: "mycook",
    company: "taurus",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_8_peuhov.avif",
  },
  {
    _id: "6",
    name: "monsieur cuisinie",
    company: "lidl",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650064979/Blenders/Frame_9_cleeau.avif",
  },
];

const blendersSelectMapper = blenders.map(({ name }) => {
  return {
    label: name,
    value: name,
  };
});

export { blenders, blendersSelectMapper };
