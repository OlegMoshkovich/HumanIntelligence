import type { Metadata } from "next";
import { Participants } from "@/components/participants";
import { Programme } from "@/components/programme";
import { SiteHeader } from "@/components/site-header";
import { VenueCarousel } from "@/components/venue-carousel";

export const metadata: Metadata = {
  title: "Istanbul 2026 — Human x Intelligence",
  description:
    "Edition 1 in Istanbul, December 15–18, 2026. Intelligence Beyond Mind — Creativity, Matter & Machine, hosted by Pasaj Zivo.",
};

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

const beyond = [
  "Our aim is not to create another conventional conference centred on formal presentations, business interests and professional networking.",
  "Instead, we want to create a space for genuine human connection, where scientific research, artistic practice and lived experience can meet.",
  "While participants will share their work, research and perspectives across different disciplines, the programme places equal importance on the moments between formal discussions: gathering around a table, sharing food, experiencing movement, listening and simply being present with one another.",
  "We believe that conversations about artificial intelligence and the future of creativity should begin with the human experience itself.",
  "What kind of future do we want to build? What do we want to create as humans? What is our role in an increasingly intelligent world?",
  "We invite everyone to participate, question, experiment, connect and imagine together.",
];

export default function IstanbulPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-[1440px]">
        <SiteHeader activeIndex={0} />

        <section className="px-5 pt-10 lg:px-[61px] lg:pt-16">
          <p className="text-[14px] leading-[32px] font-medium lg:text-[16px] lg:leading-[44px]">
            EDITION 1
          </p>
          <h1 className="max-w-[926px] text-[24px] leading-[32px] font-bold tracking-[-0.72px] lg:text-[48px] lg:leading-[66px] lg:tracking-[-1.44px]">
            Intelligence Beyond Mind — Creativity, Matter & Machine
          </h1>

          <div className="mt-6 grid gap-8 lg:mt-6 lg:grid-cols-[minmax(0,560px)_minmax(0,644px)] lg:justify-between lg:gap-x-[110px]">
            <p className="text-[20px] leading-[28px] font-bold tracking-[-0.6px] text-accent lg:text-[30px] lg:leading-[44px] lg:tracking-[-0.9px]">
              Istanbul
              <br />
              December 15–18, 2026
              <br />
              Venue Pasaj Zivo
            </p>
            <div className="max-w-[644px] space-y-6 text-[18px] leading-[26px] font-medium tracking-[-0.54px] text-accent lg:space-y-10 lg:text-[30px] lg:leading-[40px] lg:tracking-[-0.9px]">
              <p>What is the future of creativity in the age of AI?</p>
              <p>
                What are the roles of humans and machines in the creative
                process?
              </p>
              <p>
                This four-day symposium taking place from 15–18 December in
                Istanbul, hosted by Pasaj Zivo will explore the future of
                creativity in the age of artificial intelligence.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-[981px] space-y-6 text-[16px] leading-[26px] lg:mt-20 lg:ml-[174px] lg:space-y-8 lg:text-[24px] lg:leading-[32px]">
            <p>
              Our intention is to approach creativity from multiple perspectives
              bringing together scientists, artists, thinkers and technologists
              in the heart of Istanbul. The programme will feature three days
              of both private and public-facing lectures, discussions and
              workshops that reflect the specific research interests and
              practices of participating scientists and artists.
            </p>
            <p>
              By creating a shared platform for these different fields, we hope
              to foster an open, intimate, and engaging space for collective
              thought, dialogue, and creative experimentation. Together,
              world-leading scientists and researchers in AI and mathematics
              from academia and industry, alongside creative practitioners and
              interdisciplinary researchers working with embodied knowledge,
              digital art, performance and multi-media practices will explore
              how these different disciplines can challenge and inform one
              another.
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

        <section id="venue" className="px-5 pt-12 lg:px-[61px] lg:pt-16">
          <h2 className="text-[28px] leading-[34px] font-bold tracking-[-0.84px] lg:text-[48px] lg:leading-[66px] lg:tracking-[-1.44px]">
            Our main venue
          </h2>
          <VenueCarousel variant="page" />
          <p className="mt-1 text-[14px] leading-normal text-black/80 italic">
            Photos by Tara Karaçizmeli
          </p>
        </section>

        <section id="participants" className="px-5 pt-12 pb-16 lg:px-[61px] lg:pt-16 lg:pb-20">
          <h2 className="mb-8 text-[28px] leading-[34px] font-bold tracking-[-0.84px] lg:text-[48px] lg:leading-[66px] lg:tracking-[-1.44px]">
            Participants
          </h2>
          <Participants />
        </section>
      </div>

      <section id="programme" className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-[61px] lg:py-20">
          <h2 className="mb-6 text-[28px] leading-[34px] font-bold tracking-[-0.84px] lg:mb-4 lg:text-[48px] lg:leading-[66px] lg:tracking-[-1.44px]">
            Programme
          </h2>
          <Programme />
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 pt-12 pb-12 lg:px-[57px] lg:pt-20 lg:pb-16">
        <h2 className="text-[28px] leading-[34px] font-bold tracking-[-0.84px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.44px]">
          Formats and Experiences
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-16 min-[800px]:grid-cols-2 lg:grid-cols-3">
          {formats.map((format) => (
            <article key={format.title}>
              <h3 className="text-[22px] leading-[28px] font-bold tracking-[-0.66px] lg:text-[30px] lg:leading-[44px] lg:tracking-[-0.9px]">
                {format.title}
              </h3>
              <div className="mt-4 space-y-4 text-[16px] leading-normal tracking-[-0.48px] lg:text-[20px] lg:tracking-[-0.6px]">
                {format.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 lg:px-[57px] lg:pb-28">
        <h2 className="max-w-[981px] text-[28px] leading-[34px] font-bold tracking-[-0.84px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.44px]">
          Beyond the Conventional Conference
        </h2>
        <div className="mt-6 max-w-[981px] space-y-6 text-[16px] leading-[26px] lg:mt-10 lg:space-y-8 lg:text-[24px] lg:leading-[32px]">
          {beyond.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

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
