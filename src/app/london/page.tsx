import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = {
  title: "London 2027 — Human x Intelligence",
  description:
    "Edition 2 in London, 2027. The symposium continues an interdisciplinary dialogue on the future of creativity in the age of artificial intelligence.",
};

export default function LondonPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-[1440px]">
        <SiteHeader activeIndex={1} />

        <section className="px-5 pt-10 pb-16 lg:px-[61px] lg:pt-16 lg:pb-28">
          <p className="text-[14px] leading-[32px] font-medium lg:text-[16px] lg:leading-[44px]">
            EDITION 2
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,560px)_minmax(0,644px)] lg:justify-between lg:gap-x-[110px]">
            <p className="text-[20px] leading-[28px] font-bold tracking-[-0.6px] text-accent lg:text-[30px] lg:leading-[44px] lg:tracking-[-0.9px]">
              London
              <br />
              2027
            </p>
            <h1 className="max-w-[644px] text-[18px] leading-[26px] font-medium tracking-[-0.54px] text-accent lg:text-[30px] lg:leading-[40px] lg:tracking-[-0.9px]">
              What are the roles of humans and machines in the creative
              process?
            </h1>
          </div>

          <div className="mt-10 max-w-[981px] space-y-6 text-[16px] leading-[26px] lg:mt-20 lg:ml-[174px] lg:space-y-8 lg:text-[24px] lg:leading-[32px]">
            <p>
              The second edition of the symposium will take place in the heart
              of London, bringing together leading thinkers, artists, creative
              practitioners and scientists to continue an interdisciplinary
              dialogue around one of the most pressing questions of our time:
              What is the future of creativity in the age of artificial
              intelligence?
            </p>
            <p>
              The symposium will bring together distinguished professors,
              researchers and practitioners from leading academic and research
              institutions, including the University of Oxford, the University
              of Cambridge, the Royal College of Art and UCL, alongside experts
              from the AI industry, including DeepMind and other pioneering AI
              research labs.
            </p>
            <p>
              Through discussions, presentations and shared experiences, the
              programme will explore the evolving relationship between human
              and machine intelligence, questioning how creativity is
              understood, practised and transformed in an increasingly
              intelligent world.
            </p>
          </div>
        </section>
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
