"use client";

import { useState } from "react";

export const participants: {
  name: string;
  role: string;
  link: { label: string; href: string };
  image: string;
  imageClass?: string;
}[] = [
  {
    name: "Yasin Abbasi Yadkori",
    role: "Researcher, The AIR Lab; ex-DeepMind",
    link: {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=-D0EgMIAAAAJ&hl=en",
    },
    image: "/images/participant-yasin.jpg",
  },
  {
    name: "Michal Valko",
    role: "Researcher, Isara Labs",
    link: {
      label: "Github",
      href: "https://misovalko.github.io/",
    },
    image: "/images/participant-michal.jpg",
  },
  {
    name: "Eric Moulines",
    role: "Professor, Dean, Computing and Mathematical Sciences, MBZUAI",
    link: {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=_XE1LvQAAAAJ&hl=fr",
    },
    image: "/images/participant-eric.jpg",
  },
  {
    name: "Anna Aristova",
    role: "Artist and Multidisciplinary Educator",
    link: {
      label: "Website",
      href: "https://www.aristovadesign.com/",
    },
    image: "/images/participant-anna.jpg",
  },
  {
    name: "Selçuk Artut",
    role: "Artist and Researcher",
    link: {
      label: "Website",
      href: "https://selcukartut.com",
    },
    image: "/images/participant-selcuk.jpg",
  },
  {
    name: "Sattar Vakili",
    role: "Professor, University College London",
    link: {
      label: "Github",
      href: "https://sattar-vakili.github.io",
    },
    image: "/images/participant-sattar.jpg",
  },
  {
    name: "Dilan Bozer",
    role: "Artist",
    link: {
      label: "Instagram",
      href: "https://www.instagram.com/dilanbozer/",
    },
    image: "/images/participant-dilan.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "Tolga Birdal",
    role: "Professor, Imperial College London",
    link: {
      label: "Github",
      href: "https://tolgabirdal.github.io/",
    },
    image: "/images/participant-tolga.jpg",
    imageClass: "object-[center_22%]",
  },
  {
    name: "Oleg Moshkovich",
    role: "AI Engineer, The AIR Lab",
    link: {
      label: "Github",
      href: "https://github.com/OlegMoshkovich",
    },
    image: "/images/participant-oleg.jpg",
  },
  {
    name: "Aysegul Akyuz",
    role: "Somatic & Movement Artist",
    link: {
      label: "Instagram",
      href: "https://www.instagram.com/aysegulakyuzz",
    },
    image: "/images/participant-aysegul.jpg",
    imageClass: "object-[center_30%]",
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
                className={`absolute inset-0 h-full w-full object-cover ${person.imageClass ?? ""}`}
              />
            </div>
            <h3 className="mt-4 text-[20px] leading-normal font-bold">
              {person.name}
            </h3>
            {person.role ? (
              <p className="text-[14px] leading-normal font-light italic">
                {person.role}
              </p>
            ) : null}
            <a
              href={person.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] leading-normal font-light text-accent italic underline"
            >
              {person.link.label}
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
