import Link from "next/link";

const people = [
  {
    name: "Yasin Abbasi Yadkori",
    role: "Research Scientist, The AIR Lab, formerly DeepMind",
    image: "/images/mobile-yasin.jpg",
    imageClass: "absolute inset-0 h-full w-full object-cover",
  },
  {
    name: "Anna Aristova",
    role: "Artist, Designer, Royal College of Art",
    image: "/images/mobile-anna.jpg",
    imageClass:
      "absolute top-[-0.64%] left-[-52.06%] h-[101.27%] w-[152%] max-w-none",
  },
  {
    name: "Sattar Aristova",
    role: "Professor",
    image: "/images/mobile-sattar.jpg",
    imageClass: "absolute inset-0 h-full w-full object-contain",
  },
];

const events = [
  {
    when: "December 15, 11:00",
    title: "Event Title",
    body: "One-sentence blurb about what will be going on and what kinds of participants it’ll include, but in general terms.",
    note: "By invitation only",
  },
  {
    when: "December 15, 11:00",
    title: "Event Title",
    body: "One-sentence blurb about what will be going on and what kinds of participants it’ll include, but in general terms.",
    note: "By invitation only",
  },
];

const formats = [
  "Intimate Dialogues and Q&A Sessions",
  "Circular Discussions",
  "Round-Table Dialogs",
  "Somatic and Body-Oriented Workshops",
  "Shared Culinary Experiences",
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

      <section className="relative mt-12 h-[581px]">
        <div className="absolute top-0 left-0 h-[292px] w-[80%] overflow-hidden">
          <img
            src="/images/home-point-cloud.jpg"
            alt="A point-cloud figure standing in a dark landscape"
            className="absolute top-[-0.04%] left-[-58.59%] h-[100.07%] w-[188.23%] max-w-none"
          />
        </div>
        <div className="absolute top-[291px] right-0 h-[290px] w-[80%] overflow-hidden">
          <img
            src="/images/home-gathering.jpg"
            alt="People gathered around a table in conversation"
            className="h-full w-full object-cover"
          />
        </div>
        <img
          src="/images/mobile-logo-mark.svg"
          alt=""
          width={102}
          height={39}
          className="absolute top-[272px] right-8"
        />
      </section>

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
            This three-day symposium taking place from 16–18 December in
            Istanbul, hosted by Pasaj Zivo will explore the future of creativity
            in the age of artificial intelligence.
          </p>
          <p>
            Our intention is to approach creativity from multiple perspectives
            bringing together scientists, artists, thinkers and technologists in
            the heart of Istanbul to engage in dialogue, exchange ideas, work
            and experiment together. The programme will feature three days of
            both private and public-facing lectures, discussions and workshops
            that reflect the specific research interests and practices of
            participating scientists and artists.
          </p>
          <p>
            By creating a shared platform for these different fields, we hope to
            foster an open, intimate, and engaging space for collective
            thought, dialogue, and creative experimentation. Together,
            scientists and technologists building intelligent systems, and
            artists examining cultural, emotional and human implications will
            explore how these different disciplines can challenge and inform one
            another.
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

        <div className="relative mt-6 -mx-5 h-[221px]">
          <img
            src="/images/home-venue-main.jpg"
            alt="Interior of Pasaj Zivo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <Link
            href="/istanbul#venue"
            aria-label="See the Istanbul venue"
            className="absolute top-2 right-4"
          >
            <img
              src="/images/home-arrow.svg"
              alt=""
              width={29}
              height={29}
              className="rotate-45"
            />
          </Link>
        </div>
        <p className="mt-3 text-[12px] leading-normal italic">
          Photo credit: Zivo
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
                  className={person.imageClass}
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
              className={`w-[280px] shrink-0 ${
                index > 0 ? "border-l border-white pl-5" : "pr-5"
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
        <p className="text-[12px] leading-[44px] font-medium">WHAT TO EXPECT</p>
        <ul className="text-[20px] leading-[45px] font-light">
          {formats.map((format, index) => (
            <li key={format} className={index === 0 ? "text-accent" : undefined}>
              {format}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
