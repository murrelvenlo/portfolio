import { HeadingAnimatedSvg } from "@/components/heading/heading-animated-svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShadeImg from "@/public/assets/images/background/shade-img.jpg";

export default function MenuCard() {
  return (
    <div
      className="w-full h-auto min-h-[427px] gap-[70px]
   bg-[#1e36ea] rounded-[10px] flex-col
    justify-between items-start flex
    relative overflow-hidden pt-10 px-[25px]
    pb-5 shadow-md"
    >
      {/* Header */}
      <div className="w-full flex relative justify-between items-center">
        <div className="uppercase font-bold text-2xl text-white">
          Who is Murrel ?
        </div>
        <HeadingAnimatedSvg animated text="LEARN MORE ABOUT MURREL VENLO" />
      </div>
      {/* Menu */}
      <div className="z-40 w-full flex flex-col gap-y-[5px] justify-center items-start relative">
        {myLinks.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            className="text-[#fdf825] uppercase text-[25px] font-bold leading-[85%] transition-colors duration-75 hover:text-white"
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* Image shade */}
      <Image
        src={ShadeImg}
        alt="Shade img"
        className="block w-full h-full mix-blend-overlay absolute top-0 right-0 left-0 bottom-0"
      />
    </div>
  );
}

const myLinks = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Background",
    link: "#about",
  },
  {
    title: "Courses",
    link: "#about",
  },
  {
    title: "EXPERIENC",
    link: "#about",
  },
  {
    title: "EDUCATION",
    link: "#about",
  },
  {
    title: "CERTIFICATIONS",
    link: "#about",
  },
  {
    title: "TECK STACK",
    link: "#about",
  },
  {
    title: "Gallery",
    link: "#about",
  },
];