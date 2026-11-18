"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const editions = [
  { label: "1 | Istanbul, 2026", href: "/istanbul" },
  { label: "2 | London, 2027" },
  { label: "3 | Osaka, TBD" },
];

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
      <div className="flex items-start gap-8 lg:gap-12">
        <div className="relative">
          <button
            type="button"
            className="flex w-7 flex-col gap-[6px] lg:hidden"
            aria-label="Editions"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <img src="/images/mobile-menu-line.svg" alt="" width={28} height={2} />
            <img src="/images/mobile-menu-line.svg" alt="" width={28} height={2} />
            <img src="/images/mobile-menu-line.svg" alt="" width={28} height={2} />
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
            <div className="absolute top-8 right-0 z-20 w-max rounded-[11px] bg-white px-5 py-4 text-[16px] font-medium leading-[1.96] lg:top-[30px] lg:w-[190px] lg:px-7 lg:py-[18px]">
              {editions.map((edition, index) => {
                const className = `block w-full text-left ${
                  index === selected ? "underline" : ""
                }`;
                if (edition.href) {
                  return (
                    <Link
                      key={edition.label}
                      href={edition.href}
                      className={className}
                      onClick={() => setSelected(index)}
                    >
                      {edition.label}
                    </Link>
                  );
                }
                return (
                  <button
                    key={edition.label}
                    type="button"
                    onClick={() => setSelected(index)}
                    className={className}
                  >
                    {edition.label}
                  </button>
                );
              })}
              <button
                type="button"
                className="mt-3 flex h-[46px] w-full items-center justify-center rounded-full bg-black px-6 text-[16px] leading-none font-medium whitespace-nowrap text-white lg:hidden"
              >
                Register your interest
              </button>
            </div>
          ) : null}
        </div>
        <button
          type="button"
          className="hidden h-[46px] shrink-0 items-center justify-center rounded-[20px] bg-black px-7 text-[16px] font-medium text-white lg:inline-flex"
        >
          Register your interest
        </button>
      </div>
    </header>
  );
}
