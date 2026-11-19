import Link from "next/link";
import { VenueCarousel } from "@/components/venue-carousel";
import { HomeGallery } from "@/components/home-gallery";
import { SocialLinks } from "@/components/social-links";

const people: {
  name: string;
  role: string;
  image: string;
  imageClass?: string;
}[] = [
  {
    name: "Yasin Abbasi Yadkori",
    role: "Researcher, The AIR Lab; ex-DeepMind",
    image: "/images/participant-yasin.jpg",
  },
  {
    name: "Michal Valko",
    role: "Researcher, Isara Labs",
    image: "/images/participant-michal.jpg",
  },
  {
    name: "Eric Moulines",
    role: "Professor, Dean, Computing and Mathematical Sciences, MBZUAI",
    image: "/images/participant-eric.jpg",
  },
  {
    name: "Anna Aristova",
    role: "Artist and Multidisciplinary Educator",
    image: "/images/participant-anna.jpg",
  },
  {
    name: "Selçuk Artut",
    role: "Artist and Researcher",
    image: "/images/participant-selcuk.jpg",
  },
  {
    name: "Sattar Vakili",
    role: "Professor, University College London",
    image: "/images/participant-sattar.jpg",
  },
  {
    name: "Dilan Bozer",
    role: "Artist",
    image: "/images/participant-dilan.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "Tolga Birdal",
    role: "Professor, Imperial College London",
    image: "/images/participant-tolga.jpg",
    imageClass: "object-[center_22%]",
  },
  {
    name: "Oleg Moshkovich",
    role: "AI Engineer, The AIR Lab",
    image: "/images/participant-oleg.jpg",
  },
  {
    name: "Aysegul Akyuz",
    role: "Somatic & Movement Artist",
    image: "/images/participant-aysegul.jpg",
    imageClass: "object-[center_30%]",
  },
];

const events = [
  {
    when: "15 December",
    title: "Symposium and Workshops",
    body: "A collective opening through sensory experiences, exploring place, history and the cultural heritage of Istanbul. The afternoon is a public programme of interdisciplinary workshops, followed by Muhabbet and dinner.",
    note: "ZIVO",
  },
  {
    when: "16 December",
    title: "Symposium and Workshops",
    body: "Private research sessions and a public creative workshop, with research presentations, collective experimentation, Muhabbet, and dinner.",
    note: "ZIVO",
  },
  {
    when: "17 December",
    title: "Research, Exchange and Gathering",
    body: "Closed working sessions on artificial intelligence research, mathematics and engineering, followed by music, food and conversation for participants and invited guests.",
    note: "Private programme — by invitation",
  },
  {
    when: "18 December",
    title: "Cultural Experiences and Informal Exchange",
    body: "Morning coffee and conversation, a shared exploration of historic Istanbul, a traditional hammam at Kılıç Ali Paşa, and a closing dinner at Cavit.",
    note: "Private programme — by invitation",
  },
];

const formats = [
  {
    title: "Intimate Dialogues and Q&A Sessions",
    paragraphs: [
      "Conversations over tea in a warm, intimate atmosphere shaped by candlelight and shared rituals. An open setting where the public becomes an active part of the dialogue, exchanging perspectives and exploring questions across disciplines.",
    ],
  },
  {
    title: "Somatic and Body-Oriented Workshops",
    paragraphs: [
      "Experiential workshops exploring embodied knowledge, perception, movement and the relationship between body and mind.",
    ],
  },
  {
    title: "Shared Dinners and Culinary Experiences by Çilingir Sofrası (Locksmith's Table)",
    paragraphs: [
      "Gathering around a communal table, we will explore food as a cultural archive, a form of generational knowledge and a fundamental expression of human connection.",
    ],
  },
];

export function HomeMobile() {
  return (
    <div className="lg:hidden">
      <section className="px-5 pt-10">
        <h1 className="text-[24px] leading-[32px] font-bold tracking-[-0.72px]">
          A global gathering of leading scientists and creatives.
        </h1>
        <p className="mt-8 text-[20px] leading-[30px] font-bold tracking-[-0.6px]">
          Human x Intelligence is an international symposium amongst artists,
          thinkers, scientists, and technologists, and the public to explore
          the changing role of the human in an increasingly intelligent world.
        </p>
        <p className="mt-8 text-[16px] leading-[26px]">
          The programme combines public and private sessions shaped around the
          specific research and practice interests of participating scientists
          and artists. Its aim is to create a space for exchange between two
          worlds that rarely intersect directly: exploring forms of intelligence
          embedded within creative practice. Rather than advancing a fixed
          position on AI, the programme functions as a platform for dialogue,
          experimentation, and mutual inquiry.
        </p>
      </section>

      <HomeGallery variant="mobile" />

      <section className="px-5 pt-12 pb-16">
        <div className="space-y-6 text-[20px] leading-[30px] font-bold tracking-[-0.6px]">
          <p>What can the body know that a machine cannot?</p>
          <p>Can scientific breakthroughs happen without imagination?</p>
          <p>Is scientific discovery an act of creativity?</p>
        </div>
        <p className="mt-6 text-[16px] leading-[26px]">
          Through round-table discussions, lectures, Q&As, workshops, and
          presentations, it explores how scientific and creative modes of
          thinking can challenge, inform, and expand one another. Participants
          include world-leading researchers in AI and mathematics from academia
          and industry alongside artists, creative practitioners, and
          researchers, creating an accessible yet intellectually rigorous space
          in which leading scientific research can encounter cultural, ethical,
          ecological, and human questions surrounding artificial intelligence.
        </p>
      </section>

      <section className="bg-[#47423c] px-5 py-10 text-white">
        <p className="text-[12px] leading-[44px] font-medium">
          NEXT UPCOMING EVENT
        </p>
        <h2 className="text-[24px] leading-[32px] font-bold tracking-[-0.72px]">
          Intelligence Beyond Mind — Creativity, Matter & Machine
        </h2>
        <p className="mt-4 text-[20px] leading-[30px] font-medium">
          Istanbul, Turkey
          <br />
          December 15–18, 2026
        </p>
        <p className="mt-3 text-[12px] leading-normal italic">
          Organized & curated by Anna Aristova & Dilan Bozer
        </p>
        <div className="mt-6 space-y-6 text-[16px] leading-[26px]">
          <p>
            This four-day symposium taking place from 15–18 December in
            Istanbul, hosted by Pasaj Zivo will explore the future of creativity
            in the age of artificial intelligence.
          </p>
          <p>
            Our intention is to approach creativity from multiple perspectives
            bringing together scientists, artists, thinkers and technologists in
            the heart of Istanbul. The programme will feature three days of both
            private and public-facing lectures, discussions and workshops that
            reflect the specific research interests and practices of
            participating scientists and artists.
          </p>
          <p>
            By creating a shared platform for these different fields, we hope to
            foster an open, intimate, and engaging space for collective
            thought, dialogue, and creative experimentation. Together,
            world-leading scientists and researchers in AI and mathematics from
            academia and industry, alongside creative practitioners and
            interdisciplinary researchers working with embodied knowledge,
            digital art, performance and multi-media practices will explore how
            these different disciplines can challenge and inform one another.
          </p>
        </div>
        <Link
          href="/istanbul"
          className="mt-6 inline-flex items-center gap-2 text-[16px] italic"
        >
          Read more
          <img
            src="/images/home-arrow-read.svg"
            alt=""
            width={11}
            height={11}
            className="rotate-[135deg]"
          />
        </Link>

        <VenueCarousel variant="mobile" />
        <p className="mt-3 text-[12px] leading-normal italic">
          Photos by Tara Karaçizmeli
        </p>
        <p className="mt-6 text-[20px] leading-[30px] font-medium">
          Venue: Pasaj Zivo
        </p>

        <h3 className="mt-8 text-[20px] leading-[30px] font-medium">
          Participants
        </h3>
        <ul className="-mx-5 mt-4 flex gap-4 overflow-x-auto px-5 pb-2">
          {people.map((person) => (
            <li key={person.name} className="w-[163px] shrink-0">
              <div className="relative size-[163px] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className={`absolute inset-0 h-full w-full object-cover ${person.imageClass ?? ""}`}
                />
              </div>
              <p className="mt-2 text-[12px] leading-normal font-bold">
                {person.name}
              </p>
              <p className="text-[10px] leading-normal font-light italic">
                {person.role}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-[20px] leading-[30px] font-medium">
          Programme
        </h3>
        <ul className="-mx-5 mt-4 flex overflow-x-auto px-5 pb-4">
          {events.map((event, index) => (
            <li
              key={`${event.title}-${index}`}
              className={`w-[280px] shrink-0 pr-5 ${
                index > 0 ? "border-l border-white pl-5" : ""
              }`}
            >
              <p className="text-[14px] leading-[28px] font-bold">{event.when}</p>
              <p className="text-[20px] leading-normal font-medium">
                {event.title}
              </p>
              <p className="mt-3 text-[16px] leading-normal">{event.body}</p>
              <p className="mt-4 text-[16px] leading-normal italic">
                {event.note}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 pt-8 pb-16">
        <p className="text-[14px] leading-[44px] font-medium">WHAT TO EXPECT</p>
        <h2 className="text-[28px] leading-[34px] font-bold tracking-[-0.84px]">
          Formats and Experiences
        </h2>
        <div className="mt-8 grid gap-10">
          {formats.map((format) => (
            <article key={format.title}>
              <h3 className="text-[22px] leading-[28px] font-bold tracking-[-0.66px]">
                {format.title}
              </h3>
              <div className="mt-3 space-y-4 text-[16px] leading-[26px]">
                {format.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-footer text-black">
        <div className="flex flex-col gap-8 px-[45px] py-12">
          <img
            src="/images/home-logo-footer.svg"
            alt="Human x Intelligence"
            width={138}
            height={47}
          />
          <p className="max-w-[422px] text-[16px] leading-[20px] font-medium">
            A workshop amongst artists, thinkers, scientists, and technologists,
            and the public to explore the changing role of the human in an
            increasingly intelligent world.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <SocialLinks />
            <p className="text-[16px] leading-normal font-medium">
              Copyright © 2026. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
