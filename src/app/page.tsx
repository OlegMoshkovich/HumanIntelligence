import type { Metadata } from "next";
import { EditionPanel } from "@/components/edition-panel";
import { HomeGallery } from "@/components/home-gallery";
import { SocialLinks } from "@/components/social-links";
import { HomeMobile } from "@/components/home-mobile";
import { RegisterInterestButton } from "@/components/register-interest";
import { SiteHeader } from "@/components/site-header";

const socialTitle = "A global gathering of leading scientists and creatives.";
const socialDescription =
  "Human x Intelligence is an international symposium amongst artists, thinkers, scientists, and technologists, and the public to explore the changing role of the human in an increasingly intelligent world.";

const previewImage = {
  url: "/og.png",
  width: 1200,
  height: 1200,
  alt: "Human x Intelligence",
  type: "image/png",
};

export const metadata: Metadata = {
  title: "Human x Intelligence",
  description: `${socialTitle} ${socialDescription}`,
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    siteName: "Human x Intelligence",
    type: "website",
    url: "https://www.human-x-intelligence.com",
    images: [previewImage],
  },
  twitter: {
    card: "summary",
    title: socialTitle,
    description: socialDescription,
    images: [previewImage.url],
  },
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

        <HomeGallery variant="desktop" />

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
              <RegisterInterestButton className="mt-8 inline-flex h-[46px] items-center justify-center rounded-[20px] bg-white px-7 text-[16px] font-medium text-black">
                Register your interest
              </RegisterInterestButton>
            </div>
            <div className="text-[20px] leading-normal">
              <p>
                This four-day symposium taking place from 15–18 December in
                Istanbul, hosted by Pasaj Zivo will explore the future of
                creativity in the age of artificial intelligence.
              </p>
              <p className="mt-8">
                Our intention is to approach creativity from multiple
                perspectives bringing together scientists, artists, thinkers
                and technologists in the heart of Istanbul. The programme will
                feature three days of both private and public-facing lectures,
                discussions and workshops that reflect the specific research
                interests and practices of participating scientists and
                artists.
              </p>
              <p className="mt-8">
                By creating a shared platform for these different fields, we
                hope to foster an open, intimate, and engaging space for
                collective thought, dialogue, and creative experimentation.
                Together, world-leading scientists and researchers in AI and
                mathematics from academia and industry, alongside creative
                practitioners and interdisciplinary researchers working with
                embodied knowledge, digital art, performance and multi-media
                practices will explore how these different disciplines can
                challenge and inform one another.
              </p>
            </div>
          </div>

          <EditionPanel />
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
              <div className="mt-4 space-y-4 text-[20px] leading-normal tracking-[-0.6px]">
                {format.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
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
