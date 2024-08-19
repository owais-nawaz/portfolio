"use client";

import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

import { TbBrandLeetcode } from "react-icons/tb";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/syed-owais-nawaz-a46022233/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/owais-nawaz",
    name: <RiGithubFill />,
  },
  {
    path: "https://leetcode.com/u/owais-nawaz",
    name: <TbBrandLeetcode />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
