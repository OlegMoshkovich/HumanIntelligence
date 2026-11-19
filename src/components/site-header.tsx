"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RegisterInterestButton } from "@/components/register-interest";

const editions = [
  { number: "1", place: "Istanbul, 2026", href: "/istanbul" },
  { number: "2", place: "London, 2027", href: "/london" },
  { number: "3", place: "Osaka, TBD" },
];

function EditionLabel({ number, place }: { number: string; place: string }) {
  return (
    <span className="inline-grid grid-cols-[1ch_auto_auto] items-baseline justify-items-start gap-x-[0.35em]">
      <span className="text-right tabular-nums">{number}</span>
      <span>|</span>
      <span>{place}</span>
    </span>
  );
}

export function SiteHeader({
  date,
  activeIndex = null,
}: {
  date?: string;
  activeIndex?: number | null;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(activeIndex);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="flex items-start justify-between gap-6 px-5 pt-6 lg:px-[42px] lg:pt-10">
      <div>
        <Link href="/" aria-label="Human x Intelligence">
          <img
            src="/images/mobile-logo.svg"
            alt=""
            width={100}
            height={34}
            className="lg:hidden"
          />
          <img
            src="/images/logo.svg"
            alt=""
            width={156}
            height={53}
            className="hidden lg:block"
          />
        </Link>
        {date ? (
          <Link
            href="/istanbul"
            className="mt-8 block text-[14px] leading-normal font-medium lg:mt-5 lg:text-[16px]"
          >
            {date}
          </Link>
        ) : null}
      </div>
      <div className="flex items-center gap-8 lg:gap-12">
        <div className="relative">
          <button
            type="button"
            className="flex h-[18px] w-7 items-center justify-center lg:hidden"
            aria-label={open ? "Close" : "Editions"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <line x1="2" y1="2" x2="16" y2="16" stroke="black" strokeWidth="2" />
                <line x1="16" y1="2" x2="2" y2="16" stroke="black" strokeWidth="2" />
              </svg>
            ) : (
              <span className="flex w-full flex-col gap-[6px]">
                <img src="/images/mobile-menu-line.svg" alt="" width={28} height={2} />
                <img src="/images/mobile-menu-line.svg" alt="" width={28} height={2} />
                <img src="/images/mobile-menu-line.svg" alt="" width={28} height={2} />
              </span>
            )}
          </button>
          <button
            type="button"
            className="hidden text-[16px] font-medium lg:block"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            Editions
          </button>
          {open ? (
            <div className="absolute top-full right-0 z-20 mt-2 w-max rounded-[11px] bg-white px-5 py-4 text-[16px] font-medium leading-[1.96] whitespace-nowrap lg:mt-3 lg:px-7 lg:py-[18px]">
              {editions.map((edition, index) => {
                const className = `block w-full text-left whitespace-nowrap ${
                  index === selected ? "underline" : ""
                }`;
                const label = (
                  <EditionLabel number={edition.number} place={edition.place} />
                );
                if (edition.href) {
                  return (
                    <Link
                      key={edition.place}
                      href={edition.href}
                      className={className}
                      onClick={() => setSelected(index)}
                    >
                      {label}
                    </Link>
                  );
                }
                return (
                  <button
                    key={edition.place}
                    type="button"
                    onClick={() => setSelected(index)}
                    className={className}
                  >
                    {label}
                  </button>
                );
              })}
              <RegisterInterestButton className="mt-3 flex h-[46px] w-full items-center justify-center rounded-full bg-black px-6 text-[16px] leading-none font-medium whitespace-nowrap text-white lg:hidden">
                Register your interest
              </RegisterInterestButton>
            </div>
          ) : null}
        </div>
        <RegisterInterestButton className="hidden h-[46px] shrink-0 items-center justify-center rounded-[20px] bg-black px-7 text-[16px] font-medium text-white lg:inline-flex">
          Register your interest
        </RegisterInterestButton>
      </div>
    </header>
  );
}
