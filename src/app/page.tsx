import type { Metadata } from "next";
import Link from "next/link";
import { HomeMobile } from "@/components/home-mobile";
import { SiteHeader } from "@/components/site-header";

const socialTitle = "A global gathering of leading scientists and creatives.";
const socialDescription =
  "Human x Intelligence is an international symposium amongst artists, thinkers, scientists, and technologists, and the public to explore the changing role of the human in an increasingly intelligent world.";

export const metadata: Metadata = {
  title: "Human x Intelligence",
  description: `${socialTitle} ${socialDescription}`,
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    siteName: "Human x Intelligence",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: socialTitle,
    description: socialDescription,
  },
};

const formats = [
  {
    title: "Intimate Dialogues and Q&A Sessions",
    body: "An intimate setting for dialogue, questions and conversations over tea, creating a warm and welcoming atmosphere through candlelight, shared rituals and meaningful exchanges.",
  },
  {
    title: "Circular Discussions",
    body: "Open discussions arranged in circles, where the traditional boundaries between speakers and audiences are dissolved. Members of the public are invited to become active participants in the conversation rather than passive listeners.",
  },
  {
    title: "Round-Table Conversations",
    body: "An intimate setting for dialogue, questions and conversations over tea, creating a warm and welcoming atmosphere through candlelight, shared rituals and meaningful exchanges.",
  },
  {
    title: "Somatic and Body-Oriented Workshops",
    body: "Experiential workshops and collective experiments exploring embodied knowledge, perception, movement and the relationship between body and mind. Before engaging in formal discussions about artificial intelligence, we will come together through shared bodily experiences, creating space for human connection, awareness and collective exploration.",
  },
  {
    title: "Shared Dinners & Culinary Experiences",
    body: "Gathering around a large communal table, we will explore food as both a cultural experience and a fundamental form of human connection. Through the richness of Turkish cuisine, shared meals will become an opportunity to experience hospitality, exchange stories and connect beyond professional and disciplinary boundaries.",
    compact: true,
  },
];

const editionLinks = [
  { label: "MAIN VENUE", href: "/istanbul#venue", current: true },
  { label: "PARTICIPANTS", href: "/istanbul#participants" },
  { label: "SCHEDULE", href: "/istanbul#programme" },
  { label: "PHOTOS & VIDEOS", href: "/istanbul#venue" },
];

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-[1440px]">
        <SiteHeader date="December 15–18 | Istanbul, Turkey" />
        <HomeMobile />

        <section className="hidden px-6 pt-12 lg:block lg:px-[60px] lg:pt-14">
          <h1 className="max-w-[926px] text-[40px] leading-[1.15] font-bold tracking-[-1.2px] lg:text-[48px] lg:leading-[66px] lg:tracking-[-1.44px]">
            A global gathering of leading scientists and creatives.
          </h1>
          <div className="mt-10 grid gap-10 lg:mt-8 lg:grid-cols-[minmax(0,568px)_minmax(0,613px)] lg:justify-between lg:gap-x-16">
            <p className="text-[30px] leading-[44px] font-bold tracking-[-0.9px]">
              Human x Intelligence is an international symposium amongst
              artists, thinkers, scientists, and technologists, and the public
              to explore the changing role of the human in an increasingly
              intelligent world.
            </p>
            <p className="text-[24px] leading-[32px]">
              The programme combines public and private sessions shaped around
              the specific research and practice interests of participating
              scientists and artists. Its aim is to create a space for exchange
              between two worlds that rarely intersect directly: exploring
              forms of intelligence embedded within creative practice. Rather
              than advancing a fixed position on AI, the programme functions as
              a platform for dialogue, experimentation, and mutual inquiry.
            </p>
          </div>
        </section>

        <section className="relative mt-16 hidden lg:mt-20 lg:block">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[360px] overflow-hidden sm:h-[480px] lg:h-[677px]">
              <img
                src="/images/home-point-cloud.jpg"
                alt="A point-cloud figure standing in a dark landscape"
                className="absolute top-[-0.04%] left-[-58.59%] h-[100.07%] w-[188.23%] max-w-none"
              />
            </div>
            <div className="relative h-[360px] overflow-hidden sm:h-[480px] lg:mt-[74px] lg:h-[677px]">
              <img
                src="/images/home-gathering.jpg"
                alt="People gathered around a table in conversation"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <img
            src="/images/home-logo-mark.svg"
            alt=""
            width={161}
            height={61}
            className="absolute top-8 left-1/2 -translate-x-1/2 lg:top-[43px] lg:-translate-x-[calc(50%+40px)]"
          />
        </section>

        <section className="hidden gap-10 px-6 py-16 lg:grid lg:grid-cols-[minmax(0,527px)_minmax(0,593px)] lg:justify-between lg:gap-x-16 lg:px-[60px] lg:py-24">
          <div className="space-y-8 text-[30px] leading-[40px] font-bold tracking-[-0.9px]">
            <p>What can the body know that a machine cannot?</p>
            <p>Can scientific breakthroughs happen without imagination?</p>
            <p>Is scientific discovery an act of creativity?</p>
          </div>
          <p className="text-[24px] leading-[32px]">
            Through round-table discussions, lectures, Q&As, workshops, and
            presentations, it explores how scientific and creative modes of
            thinking can challenge, inform, and expand one another.
            Participants include world-leading researchers in AI and
            mathematics from academia and industry alongside artists, creative
            practitioners, and researchers, creating an accessible yet
            intellectually rigorous space in which leading scientific research
            can encounter cultural, ethical, ecological, and human questions
            surrounding artificial intelligence.
          </p>
        </section>
      </div>

      <section className="hidden bg-[#47423c] text-white lg:block">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[60px] lg:py-20">
          <div className="flex items-center">
            <img
              src="/images/home-mark.svg"
              alt=""
              width={55}
              height={20}
              className="mr-3 -ml-4 lg:-ml-[60px]"
            />
            <p className="text-[16px] leading-[44px] font-medium">
              NEXT UPCOMING EVENT – EDITION 1
            </p>
          </div>
          <h2 className="mt-2 max-w-[1221px] text-[36px] leading-[1.15] font-bold tracking-[-1.2px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.44px]">
            Intelligence Beyond Mind — Creativity, Matter & Machine
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(280px,420px)_minmax(0,814px)] lg:justify-between">
            <div className="w-fit justify-self-start">
              <p className="text-[40px] leading-[48px] font-medium tracking-[-0.8px]">
                Istanbul, Turkey
                <br />
                December 15–18,
                <br />
                2026
              </p>
              <p className="mt-8 text-[18px] leading-[28px] italic">
                Organized & curated by Anna
                <br />
                Aristova & Dilan Bozer
              </p>
              <button
                type="button"
                className="mt-8 flex h-[72px] w-full items-center justify-center rounded-full bg-white px-8 text-[24px] font-medium text-black"
              >
                Register your interest
              </button>
            </div>
            <div className="text-[20px] leading-normal">
              <p>
                This three-day symposium taking place from 16–18 December in
                Istanbul, hosted by Pasaj Zivo will explore the future of
                creativity in the age of artificial intelligence.
              </p>
              <p className="mt-8">
                Our intention is to approach creativity from multiple
                perspectives bringing together scientists, artists, thinkers
                and technologists in the heart of Istanbul to engage in
                dialogue, exchange ideas, work and experiment together. The
                programme will feature three days of both private and
                public-facing lectures, discussions and workshops that reflect
                the specific research interests and practices of participating
                scientists and artists.
              </p>
              <p className="mt-8">
                By creating a shared platform for these different fields, we
                hope to foster an open, intimate, and engaging space for
                collective thought, dialogue, and creative experimentation.
                Together, scientists and technologists building intelligent
                systems, and artists examining cultural, emotional and human
                implications will explore how these
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:justify-between">
            <nav className="flex flex-col text-[16px] leading-[60px] font-bold tracking-[-0.96px]">
              {editionLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={
                    item.current ? "text-accent underline" : "text-white"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div>
              <Link
                href="/istanbul"
                className="inline-flex items-center gap-3 text-[20px] italic"
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
              <div className="relative mt-6">
                <div className="grid grid-cols-[minmax(0,843fr)_minmax(80px,233fr)]">
                  <div className="relative h-[240px] overflow-hidden sm:h-[360px] lg:h-[474px]">
                    <img
                      src="/images/home-venue-main.jpg"
                      alt="Interior of Pasaj Zivo"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative h-[240px] overflow-hidden sm:h-[360px] lg:h-[474px]">
                    <img
                      src="/images/home-venue-side.jpg"
                      alt=""
                      className="absolute top-[-0.04%] left-[-22.79%] h-[100.08%] w-[364.64%] max-w-none"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_16%,#47423c)]" />
                  </div>
                </div>
                <Link
                  href="/istanbul#venue"
                  aria-label="See the Istanbul venue"
                  className="absolute top-1/2 right-2 -translate-y-1/2"
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
              <p className="mt-2 text-[16px] leading-normal italic">
                Photo credit: Zivo
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto hidden max-w-[1440px] px-6 pt-16 pb-24 lg:block lg:px-[57px] lg:pt-20 lg:pb-28">
        <div className="flex items-center">
          <img
            src="/images/home-mark.svg"
            alt=""
            width={55}
            height={20}
            className="mr-3 -ml-4 lg:-ml-[57px]"
          />
          <p className="text-[16px] leading-[44px] font-medium">WHAT TO EXPECT</p>
        </div>
        <h2 className="text-[40px] leading-[56px] font-bold tracking-[-1.2px] lg:text-[48px] lg:tracking-[-1.44px]">
          Formats and Experiences
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-16 min-[800px]:grid-cols-2 lg:grid-cols-3">
          {formats.map((format) => (
            <article key={format.title}>
              <h3 className="text-[30px] leading-[44px] font-bold tracking-[-0.9px]">
                {format.title}
              </h3>
              <p
                className={`mt-4 leading-normal tracking-[-0.6px] ${
                  format.compact
                    ? "text-[16px] tracking-[-0.48px]"
                    : "text-[20px]"
                }`}
              >
                {format.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <footer className="hidden bg-footer text-black lg:block">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-[45px] py-12 lg:flex-row lg:items-center lg:justify-between">
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
          <p className="text-[16px] leading-normal font-medium">
            Copyright © 2026. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
