"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { participants } from "@/components/participants";
import { VenueCarousel } from "@/components/venue-carousel";

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

type Panel = "venue" | "participants" | "schedule";

const panels: { id: Panel; label: string }[] = [
  { id: "venue", label: "MAIN VENUE" },
  { id: "participants", label: "PARTICIPANTS" },
  { id: "schedule", label: "SCHEDULE" },
];

export function EditionPanel() {
  const [panel, setPanel] = useState<Panel>("venue");
  const [index, setIndex] = useState(0);

  function show(next: Panel) {
    setPanel(next);
    setIndex(0);
  }

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:justify-between">
      <nav className="flex flex-col text-[16px] leading-[60px] font-bold tracking-[-0.96px]">
        {panels.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => show(item.id)}
            className={`text-left ${
              panel === item.id ? "text-accent underline" : "text-white"
            }`}
          >
            {item.label}
          </button>
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
          {panel === "venue" ? <VenueCarousel variant="home" /> : null}
          {panel === "participants" ? (
            <ParticipantsSlide start={index} />
          ) : null}
          {panel === "schedule" ? <ScheduleSlide /> : null}
          {panel === "participants" ? (
            <button
              type="button"
              aria-label="Next participants"
              onClick={() =>
                setIndex((value) => (value + 1) % participants.length)
              }
              className="absolute top-1/2 right-2 -translate-y-1/2"
            >
              <Arrow />
            </button>
          ) : null}
        </div>
        {panel === "venue" ? (
          <p className="mt-2 text-[16px] leading-normal italic">
            Photo credit: Zivo
          </p>
        ) : null}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <img
      src="/images/home-arrow.svg"
      alt=""
      width={29}
      height={29}
      className="rotate-45"
    />
  );
}

function ParticipantsSlide({ start }: { start: number }) {
  const visible = [0, 1, 2, 3].map(
    (offset) => participants[(start + offset) % participants.length],
  );

  return (
    <ul className="grid grid-cols-4 items-start gap-4 pr-12">
      {visible.map((person) => (
        <li key={person.name} className="min-w-0">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={person.image}
              alt={person.name}
              className={`absolute inset-0 h-full w-full object-cover ${person.imageClass ?? ""}`}
            />
          </div>
          <p className="mt-3 truncate text-[14px] leading-normal font-bold lg:text-[16px]">
            {person.name}
          </p>
          <p className="line-clamp-2 min-h-[2lh] text-[14px] leading-normal font-light italic">
            {person.role}
          </p>
        </li>
      ))}
    </ul>
  );
}

function ScheduleSlide() {
  const scroller = useRef<HTMLUListElement>(null);

  function showNext() {
    const list = scroller.current;
    if (!list) return;
    const card = list.querySelector("li");
    const distance = card?.getBoundingClientRect().width ?? 280;
    const end = list.scrollWidth - list.clientWidth;
    if (list.scrollLeft >= end - 1) {
      list.scrollTo({ left: 0 });
      return;
    }
    list.scrollTo({ left: list.scrollLeft + distance });
  }

  return (
    <>
      <ul
        ref={scroller}
        className="flex overflow-x-auto pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {events.map((event, index) => (
          <li
            key={`${event.when}-${event.title}`}
            className={`w-[280px] shrink-0 pr-5 ${
              index > 0 ? "border-l border-white pl-5" : ""
            }`}
          >
            <p className="text-[14px] leading-[28px] font-bold">{event.when}</p>
            <p className="text-[20px] leading-normal font-medium">
              {event.title}
            </p>
            <p className="mt-3 text-[16px] leading-normal">{event.body}</p>
            <p className="mt-4 text-[16px] leading-normal italic">{event.note}</p>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label="Next day"
        onClick={showNext}
        className="absolute top-1/2 right-2 -translate-y-1/2"
      >
        <Arrow />
      </button>
    </>
  );
}
