"use client";

import { useState, type ReactNode } from "react";
import { RegisterInterestButton } from "@/components/register-interest";

const researchPresentations =
  "45 minutes — Research Presentations: Scientists, artists and researchers introduce questions central to their current research and creative practices, encouraging interdisciplinary exchange.";

const workshopTail = [
  "10 minutes — Break",
  "30 minutes — Collective Creative Experimentation: A participatory artistic workshop involving drawing, painting, movement or other forms of embodied exploration.",
  "30 minutes — Open Discussion and Reflection: A collective conversation reflecting on the research, shared experiences and questions emerging from the workshops.",
];

const opening =
  "A collective opening bringing participants together through sensory experiences, exploring connections to place, history and the cultural heritage of Istanbul.";

const researchSessions =
  "Closed working sessions designed to encourage focused exchange, collaborative research and experimentation across scientific and creative disciplines.";

const lunch = "Informal lunch at a local café near the symposium venue.";

const workshopLead = [
  "Participatory sessions bringing together scientists, artists and members of the public to explore questions surrounding creativity, intelligence and the changing role of the human.",
  "Each session will follow a structured yet experimental format:",
];

const muhabbetLead =
  "An intimate and unconventional format for collective dialogue, bringing together scientists, artists and members of the public in an open circle of conversation.";

const dinner =
  "A shared dinner at a carefully selected local restaurant, offering an opportunity to continue conversations and connect in a relaxed, informal setting.";

type Session = {
  time: string;
  title: string;
  note?: string;
  rsvp?: boolean;
  paragraphs?: string[];
  list?: string[];
  after?: string;
  facilitated?: boolean;
};

const days: {
  label: string;
  title: string;
  venue?: string;
  intro?: string;
  sessions: Session[];
}[] = [
  {
    label: "Day 1 | December 15",
    title: "15 December | Symposium and Workshops",
    venue: "Venue: ZIVO, Istanbul",
    sessions: [
      {
        time: "10:00–10:30",
        title: "Opening Session",
        paragraphs: [opening],
      },
      {
        time: "10:30–12:30",
        title: "Private Research and Working Sessions",
        note: "For participating scientists, artists and creative practitioners only.",
        paragraphs: [researchSessions],
      },
      {
        time: "12:30–14:00",
        title: "Lunch",
        paragraphs: [lunch],
      },
      {
        time: "14:00–17:00",
        title: "Interdisciplinary Workshops",
        note: "Public programme — advance reservation required. Limited capacity.",
        rsvp: true,
        paragraphs: workshopLead,
        list: [
          "60 minutes — Somatic Practice with Ayşegül Akyüz: A collective, body-oriented experience designed to establish a shared starting point, encourage embodied awareness and foster connections between participants.",
          researchPresentations,
          ...workshopTail,
        ],
      },
      { time: "17:00–17:30", title: "Break" },
      {
        time: "17:30–19:30",
        title: "Muhabbet: Tea and Open Conversations",
        note: "Public programme — advance reservation required.",
        rsvp: true,
        paragraphs: [
          `${muhabbetLead} The discussion will consider how we understand and speak about data, security and intelligence, and how these questions relate to both individual and collective experience.`,
        ],
        facilitated: true,
      },
      {
        time: "20:00–Late",
        title: "Dinner and Drinks",
        paragraphs: [dinner],
      },
    ],
  },
  {
    label: "Day 2 | December 16",
    title: "16 December | Symposium and Workshops",
    venue: "Venue: ZIVO, Istanbul",
    sessions: [
      {
        time: "10:00–10:30",
        title: "Opening Session",
        paragraphs: [opening],
      },
      {
        time: "10:30–12:30",
        title: "Private Research and Working Sessions",
        note: "For participating scientists, artists and creative practitioners only.",
        paragraphs: [researchSessions],
      },
      {
        time: "12:30–14:00",
        title: "Lunch",
        paragraphs: [lunch],
      },
      {
        time: "14:00–17:00",
        title: "Interdisciplinary Workshops",
        note: "Public programme — advance reservation required. Limited capacity.",
        rsvp: true,
        paragraphs: workshopLead,
        list: [
          "60 minutes — Creative Practice: A collective, creative-oriented experience designed to establish a shared starting point, encourage embodied awareness and foster connections between participants.",
          researchPresentations,
          ...workshopTail,
        ],
      },
      { time: "17:00–17:30", title: "Break" },
      {
        time: "17:30–19:30",
        title: "Muhabbet: Tea and Open Conversations",
        note: "Public programme — advance reservation required.",
        rsvp: true,
        paragraphs: [
          `${muhabbetLead} The session will explore some of the most pressing questions of our time from perspectives that extend beyond conventional scientific and technological discourse.`,
        ],
        facilitated: true,
      },
      {
        time: "20:00–Late",
        title: "Dinner and Drinks",
        paragraphs: [dinner],
      },
    ],
  },
  {
    label: "Day 3 | December 17",
    title: "17 December | Research, Exchange and Gathering",
    intro: "Private programme — participation by invitation only.",
    sessions: [
      {
        time: "10:00–15:00",
        title: "Research Sessions and Collaborative Discussions",
        paragraphs: [
          "Closed working sessions focused on artificial intelligence research, mathematics and engineering. The format will encourage informal, in-depth exchange through whiteboard discussions, presentations of ongoing research, collaborative problem-solving and the exploration of open research questions.",
          "Coffee, tea and refreshments will be available throughout, creating a relaxed and collaborative working environment.",
        ],
      },
      {
        time: "15:00–Late",
        title: "Music, Food and Conversations",
        note: "For participating practitioners and invited guests only.",
        paragraphs: [
          "An informal afternoon and evening bringing together participants and invited guests through live music, food, drinks and conversation. The gathering offers an opportunity to continue discussions beyond the formal symposium programme, fostering personal connections and interdisciplinary exchange.",
          "Venue: A private residence approximately 40 minutes from central Istanbul.",
        ],
      },
    ],
  },
  {
    label: "Day 4 | December 18",
    title: "18 December | Cultural Experiences and Informal Exchange",
    intro: "Private programme — by invitation only.",
    sessions: [
      {
        time: "10:00–12:00",
        title: "Morning Coffee and AI Conversations",
        paragraphs: [
          "Informal discussions over coffee in central Istanbul, offering an opportunity to reflect on the previous days and continue conversations around research, creativity and human intelligence.",
        ],
      },
      {
        time: "12:00–15:00",
        title: "Exploring Istanbul",
        paragraphs: [
          "A shared cultural experience exploring Istanbul's historic centre, architecture, public spaces and cultural heritage.",
        ],
      },
      {
        time: "15:00–17:00",
        title: "Traditional Turkish Hammam Experience",
        paragraphs: [
          "A visit to Kılıç Ali Paşa Hamamı, offering participants an opportunity to experience a traditional Turkish bathing ritual and engage with an important aspect of the city's cultural heritage.",
        ],
      },
      {
        time: "18:00–Late",
        title: "Closing Dinner and Drinks at Cavit",
        paragraphs: [
          "A shared dinner marking the conclusion of the programme.",
          "An opportunity for participants to reflect on their experiences, strengthen new connections and explore possibilities for future dialogue and collaboration.",
        ],
      },
    ],
  },
];

function RsvpButton({ session }: { session: string }) {
  return (
    <RegisterInterestButton
      session={session}
      className="inline-flex h-[46px] items-center justify-center rounded-[20px] bg-black px-7 text-[16px] font-medium text-white"
    >
      RSVP
    </RegisterInterestButton>
  );
}

export function Programme() {
  const [selected, setSelected] = useState(0);
  const day = days[selected];
  const next = days[(selected + 1) % days.length];

  return (
    <div>
      <p className="mb-8 max-w-[760px] text-[16px] leading-[26px] lg:text-[20px] lg:leading-[30px]">
        This programme is provisional. The final schedule, session topics and
        speakers will be confirmed once all participants have been finalised.
        All timings are subject to change.
      </p>
      <div className="grid gap-10 lg:grid-cols-[222px_minmax(0,1fr)] lg:gap-14">
        <div className="flex flex-col">
          {days.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setSelected(index)}
              className={`text-left text-[20px] leading-[44px] tracking-[-0.6px] ${
                index === selected ? "font-bold underline" : "font-medium"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h3 className="text-[22px] leading-[30px] font-bold tracking-[-0.66px] lg:text-[30px] lg:leading-[40px] lg:tracking-[-0.9px]">
            {day.title}
          </h3>
          {day.venue ? (
            <p className="mt-3 text-[16px] leading-normal">{day.venue}</p>
          ) : null}
          {day.intro ? (
            <p className="mt-3 text-[16px] leading-normal italic">{day.intro}</p>
          ) : null}
          <div className="mt-2">
            {day.sessions.map((session) => (
              <ScheduleRow
                key={`${session.time}-${session.title}`}
                time={session.time}
                title={session.title}
                note={session.note}
                action={
                  session.rsvp ? (
                    <RsvpButton
                      session={`${day.label.split("|").pop()?.trim()}, ${session.time} — ${session.title}`}
                    />
                  ) : undefined
                }
              >
                {session.paragraphs || session.list || session.facilitated ? (
                  <div className="space-y-4">
                    {session.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {session.list ? (
                      <ul className="list-disc space-y-3 pl-6">
                        {session.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    {session.after ? <p>{session.after}</p> : null}
                    {session.facilitated ? (
                      <p className="italic">
                        Facilitated by Anna Aristova and Dilan Bozer.
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </ScheduleRow>
            ))}
          </div>
          <p className="mt-6 text-[16px] leading-normal italic">
            The programme, session formats, venues and timings are subject to
            change. Final details will be confirmed closer to the event.
          </p>
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() => setSelected((value) => (value + 1) % days.length)}
              className="inline-flex items-center gap-3 text-[20px] font-medium tracking-[-0.6px]"
            >
              Next: {next.label}
              <img
                src="/images/arrow-next.svg"
                alt=""
                width={13}
                height={13}
                className="rotate-45"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScheduleRow({
  time,
  title,
  note,
  action,
  children,
}: {
  time: string;
  title?: string;
  note?: string;
  action?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="grid items-start gap-4 border-b border-black py-5 lg:grid-cols-[auto_191px_minmax(220px,417px)_200px] lg:justify-start lg:gap-x-5">
      <p className="text-[16px] leading-normal font-bold tracking-[-0.48px] whitespace-nowrap">
        {time}
      </p>
      {title ? (
        <p className="text-[16px] leading-normal font-bold tracking-[-0.48px]">
          {title}
        </p>
      ) : (
        <span />
      )}
      <div className="text-[16px] leading-normal tracking-[-0.48px]">
        {children}
      </div>
      <div className="flex flex-col items-start gap-4">
        {note ? (
          <p className="text-[16px] leading-normal tracking-[-0.48px] italic">
            {note}
          </p>
        ) : null}
        {action}
      </div>
    </div>
  );
}
