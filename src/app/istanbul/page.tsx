import type { Metadata } from "next";
import { Participants } from "@/components/participants";
import { Programme } from "@/components/programme";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Istanbul 2026 — Human x Intelligence",
  description:
    "Edition 1 in Istanbul, December 15–18, 2026. Intelligence Beyond Mind — Creativity, Matter & Machine, hosted by Pasaj Zivo.",
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

export default function IstanbulPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-[1440px]">
        <SiteHeader activeIndex={0} />

        <section className="px-[61px] pt-16">
          <p className="text-[16px] leading-[44px] font-medium">EDITION 1</p>
          <h1 className="max-w-[926px] text-[40px] leading-[1.15] font-bold tracking-[-1.2px] lg:text-[48px] lg:leading-[66px] lg:tracking-[-1.44px]">
            Intelligence Beyond Mind – Creativity, Matter & Machine.
          </h1>

          <div className="mt-8 grid gap-10 lg:mt-6 lg:grid-cols-[minmax(0,560px)_minmax(0,644px)] lg:justify-between lg:gap-x-[110px]">
            <p className="text-[30px] leading-[44px] font-bold tracking-[-0.9px] text-accent">
              December 15–18, 2026
              <br />
              Istanbul, Turkey
              <br />
              Hosted by Pasaj Zivo
            </p>
            <div className="max-w-[644px] text-[30px] leading-[40px] font-medium tracking-[-0.9px] text-accent">
              <p>
                What is the future of creativity in the age of AI? What are the
                roles of humans and machines in the creative process?
              </p>
              <p className="mt-10">
                This three-day symposium will explore the future of creativity
                in the age of artificial intelligence.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-[981px] space-y-8 text-[24px] leading-[32px] lg:mt-20 lg:ml-[174px]">
            <p>
              Our intention is to approach creativity from multiple perspectives
              bringing together scientists, artists, thinkers and technologists
              in the heart of Istanbul to engage in dialogue, exchange ideas,
              work and experiment together. The programme will feature three
              days of both private and public-facing lectures, discussions and
              workshops that reflect the specific research interests and
              practices of participating scientists and artists.
            </p>
            <p>
              By creating a shared platform for these different fields, we hope
              to foster an open, intimate, and engaging space for collective
              thought, dialogue, and creative experimentation. Together,
              scientists and technologists building intelligent systems, and
              artists examining cultural, emotional and human implications will
              explore how these different disciplines can challenge and inform
              one another.
            </p>
            <p>
              Coming from different worlds, participants include world-leading
              scientists and researchers in AI and mathematics from academia
              and industry, alongside artists, creative practitioners,
              interdisciplinary researchers working with embodied knowledge,
              digital art, performance and multi-media practices.
            </p>
            <p>
              Together, they will create an accessible yet intellectually
              rigorous space in which leading scientific research meets
              artistic and critical inquiry, exploring the role of humans in
              the creative process and the cognitive, embodied, cultural and
              ecological dimensions of intelligence.
            </p>
          </div>
        </section>

        <section id="venue" className="px-[61px] pt-16">
          <h2 className="text-[40px] leading-[1.15] font-bold tracking-[-1.2px] lg:text-[48px] lg:leading-[66px] lg:tracking-[-1.44px]">
            Our main venue
          </h2>
          <div className="mt-8 grid gap-2 lg:grid-cols-[937fr_433fr]">
            <div className="relative h-[280px] overflow-hidden lg:h-[527px]">
              <img
                src="/images/venue-main.jpg"
                alt="Interior of Pasaj Zivo, with a long wooden table and chairs"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative h-[280px] overflow-hidden lg:h-[527px]">
              <img
                src="/images/venue-side.jpg"
                alt="Side room at Pasaj Zivo"
                className="absolute top-[-0.04%] left-[-13.63%] h-[100.08%] w-[218.08%] max-w-none"
              />
            </div>
          </div>
          <p className="mt-1 text-[14px] leading-normal text-black/80 italic">
            Photos by Tara Karaçizmeli
          </p>
        </section>

        <section id="participants" className="px-[61px] pt-16 pb-20">
          <h2 className="mb-8 text-[40px] leading-[1.15] font-bold tracking-[-1.2px] lg:text-[48px] lg:leading-[66px] lg:tracking-[-1.44px]">
            Participants
          </h2>
          <Participants />
        </section>
      </div>

      <section id="programme" className="bg-white">
        <div className="mx-auto max-w-[1440px] px-[61px] py-16 lg:py-20">
          <h2 className="mb-8 text-[40px] leading-[1.15] font-bold tracking-[-1.2px] lg:mb-4 lg:text-[48px] lg:leading-[66px] lg:tracking-[-1.44px]">
            Programme
          </h2>
          <Programme />
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-[57px] pt-20 pb-28">
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
                  format.compact ? "text-[16px] tracking-[-0.48px]" : "text-[20px]"
                }`}
              >
                {format.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <footer className="bg-footer text-black">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-[45px] py-12 lg:flex-row lg:items-center lg:justify-between">
          <img
            src="/images/logo-footer.svg"
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
