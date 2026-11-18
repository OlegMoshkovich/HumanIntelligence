"use client";

import { useState } from "react";

const participants = [
  {
    name: "Yasin Abbasi Yadkori",
    role: "The AIR Lab, formerly DeepMind",
    link: "Google Scholar",
    image: "/images/participant-yasin.jpg",
    imageClass: "absolute inset-0 h-full w-full object-cover",
  },
  {
    name: "Michal Valko",
    role: "The AIR Lab",
    link: "Website",
    image: "/images/participant-michal.jpg",
    imageClass: "absolute inset-0 h-full w-full object-cover",
  },
  {
    name: "Eric Moulines",
    role: "Dean, Computing and Mathematical Sciences | Professor, Machine Learning at MBZUAI",
    link: "Google Scholar",
    image: "/images/participant-eric.jpg",
    imageClass:
      "absolute top-0 left-[-17.04%] h-full w-[134.07%] max-w-none",
  },
  {
    name: "Anna Aristova",
    role: "Artist, Royal College of Art",
    link: "Website",
    image: "/images/participant-anna.jpg",
    imageClass:
      "absolute top-[-0.64%] left-[-52.06%] h-[101.27%] w-[152%] max-w-none",
  },
  {
    name: "Sattar Vakili",
    role: "Associate Professor, University College London",
    link: "Github",
    image: "/images/participant-sattar.jpg",
    imageClass: "absolute inset-0 h-full w-full object-contain",
  },
  {
    name: "Tolga Birdal",
    role: "Assistant Professor at Imperial College London",
    link: "Github",
    image: "/images/participant-tolga.jpg",
    imageClass: "absolute inset-0 h-full w-full object-cover",
  },
  {
    name: "Oleg Moshkovich",
    role: "The AIR Lab",
    link: "Website",
    image: "/images/participant-oleg.jpg",
    imageClass: "absolute inset-0 h-full w-full object-cover",
  },
];

export function Participants() {
  const [start, setStart] = useState(0);
  const visible = [0, 1, 2, 3].map(
    (offset) => participants[(start + offset) % participants.length],
  );

  return (
    <div className="relative">
      <ul className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
        {visible.map((person) => (
          <li key={person.name}>
            <div className="relative aspect-square overflow-hidden">
              <img
                src={person.image}
                alt={person.name}
                className={person.imageClass}
              />
            </div>
            <h3 className="mt-4 text-[20px] leading-normal font-bold">
              {person.name}
            </h3>
            <p className="text-[14px] leading-normal font-light italic">
              {person.role}
            </p>
            <a
              href="#participants"
              className="text-[14px] leading-normal font-light text-accent italic underline"
            >
              {person.link}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label="Next participants"
        onClick={() => setStart((value) => (value + 1) % participants.length)}
        className="absolute top-[38%] -right-2"
      >
        <img
          src="/images/arrow.svg"
          alt=""
          width={29}
          height={29}
          className="rotate-45"
        />
      </button>
    </div>
  );
}
