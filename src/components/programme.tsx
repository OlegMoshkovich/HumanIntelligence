"use client";

import { useState, type ReactNode } from "react";

const researchPresentations =
  "45 minutes — Research Presentations: One or two scientists, artists or researchers introduce questions central to their current work using accessible language and visual tools such as whiteboards. Presentations should connect their research to broader questions concerning human experience, creativity and the changing role of the human, regardless of the researcher’s primary field.";

const workshopTail = [
  "10 minutes — Break",
  "30 minutes — Collective Creative Experimentation: A participatory artistic workshop involving activities such as drawing, painting, movement or other forms of embodied exploration.",
  "30 minutes — Open Discussion and Feedback: A facilitated conversation reflecting on the research, shared experiences and questions emerging from the session.",
];

const opening =
  "A collective opening session bringing all participants together through sensory experience, with a focus on connection, place, history and the cultural roots of Istanbul.";

const researchSessions =
  "Closed working sessions designed to encourage focused exchange, collaborative research and experimentation between participating scientists and creative practitioners.";

const lunch =
  "Informal lunch at a local café adjacent to the symposium venue.";

const muhabbet = [
  "A collective conversation exploring some of the questions that feel most urgent to us, approached from less conventional perspectives. The discussion will consider how we understand and speak about data, security and intelligence, and how these questions relate to both individual and collective experience.",
  "An intimate, unconventional Q&A format in which scientists, artists and members of the public gather in a circle for open dialogue.",
  "Rather than following a traditional speaker–audience format, the session invites everyone to participate equally, drawing on personal experiences, professional perspectives and individual questions.",
  "The central theme will be the role of the human in an increasingly intelligent world, explored through both scientific and creative perspectives.",
];

const dinner =
  "A special dinner at a carefully selected local restaurant, followed by an informal evening together with drinks and conversation.";

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
  intro?: string;
  sessions: Session[];
}[] = [
  {
    label: "Day 1 | December 15",
    title: "15 December | Symposium and Workshops | ZIVO",
    sessions: [
      {
        time: "10:00–10:30",
        title: "Opening Session",
        paragraphs: [opening],
      },
      {
        time: "10:30–12:30",
        title: "Private Research and Working Sessions",
        note: "For participating practitioners only.",
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
        paragraphs: [
          "Interactive sessions bringing together scientists, artists and members of the public to explore questions surrounding creativity, intelligence and the role of the human.",
          "Each session will follow a structured yet experimental format:",
        ],
        list: [
          "60 minutes — Somatic practice with Aysegul Akyuz: A collective artistic or body-oriented exercise designed to establish a shared starting point and encourage connection between participants.",
          researchPresentations,
          ...workshopTail,
        ],
        after:
          "The remaining time will allow for introductions, transitions and informal exchange.",
      },
      { time: "17:00–17:30", title: "Break" },
      {
        time: "17:30–19:30",
        title: "Muhabbet: Tea, Dialogue and Open Conversations",
        note: "Public programme — advance reservation required.",
        rsvp: true,
        paragraphs: muhabbet,
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
    title: "16 December | Symposium and Workshops | ZIVO",
    sessions: [
      {
        time: "10:00–10:30",
        title: "Opening Session",
        paragraphs: [opening],
      },
      {
        time: "10:30–12:30",
        title: "Private Research and Working Sessions",
        note: "For participating practitioners only.",
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
        paragraphs: [
          "Interactive sessions bringing together scientists, artists and members of the public to explore questions surrounding creativity, intelligence and the role of the human.",
          "Each session will follow a structured yet experimental format:",
        ],
        list: [
          "60 minutes — Creative workshop: A collective artistic or body-oriented exercise designed to establish a shared starting point and encourage connection between participants.",
          researchPresentations,
          ...workshopTail,
        ],
        after:
          "The remaining time will allow for introductions, transitions and informal exchange.",
      },
      { time: "17:00–17:30", title: "Break" },
      {
        time: "17:30–19:30",
        title: "Muhabbet: Tea, Dialogue and Open Conversations",
        note: "Public programme — advance reservation required.",
        rsvp: true,
        paragraphs: muhabbet,
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
    intro:
      "Private programme — participation by invitation only, unless otherwise indicated.",
    sessions: [
      {
        time: "10:00–15:00",
        title: "Research Sessions and Collaborative Discussions",
        paragraphs: [
          "Closed working sessions focused on AI, mathematics and interdisciplinary research.",
          "The format will encourage informal, in-depth exchange through whiteboard discussions, presentations of ongoing research, collective problem-solving and open questions.",
          "Coffee, tea and refreshments will be available throughout, creating a relaxed working environment.",
        ],
      },
      {
        time: "15:00–Late",
        title: "Music, Food and Conversations",
        note: "For participating practitioners and invited guests only.",
        paragraphs: [
          "An informal afternoon and evening bringing together participants and invited guests through live music, food, drinks and conversation.",
          "The gathering will provide an opportunity to continue discussions beyond the formal symposium programme, encouraging personal connections and exchange across disciplines.",
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
          "Informal discussions over coffee in central Istanbul, providing an opportunity to reflect on the previous days and continue conversations around research, creativity and human intelligence.",
        ],
      },
      {
        time: "12:00–15:00",
        title: "Exploring Istanbul",
        paragraphs: [
          "A shared cultural experience exploring the historic centre of Istanbul, its architecture, public spaces and cultural heritage.",
        ],
      },
      {
        time: "15:00–17:00",
        title: "Traditional Turkish Hammam Experience",
        paragraphs: [
          "A visit to Kılıç Ali Paşa Hamamı, offering participants an opportunity to experience a traditional Turkish bathing ritual.",
        ],
      },
      {
        time: "18:00–Late",
        title: "Closing Dinner and Drinks at Cavit",
        paragraphs: [
          "A shared dinner marking the conclusion of the programme.",
          "An opportunity for participants to reflect on their experiences, strengthen new connections and consider possibilities for future dialogue and collaboration.",
        ],
      },
    ],
  },
];

function RsvpButton() {
  return (
    <button
      type="button"
      className="inline-flex h-[46px] items-center justify-center rounded-[20px] bg-white px-7 text-[16px] font-medium text-black"
    >
      RSVP
    </button>
  );
}

export function Programme() {
  const [selected, setSelected] = useState(0);
  const day = days[selected];
  const next = days[(selected + 1) % days.length];

  return (
    <div>
      <p className="mb-8 max-w-[760px] text-[16px] leading-[26px] lg:text-[20px] lg:leading-[30px]">
        The programme is provisional. The final schedule, session topics and
        speakers will be confirmed once all participants have been finalised.
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
                action={session.rsvp ? <RsvpButton /> : undefined}
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
                        Facilitated by Anna Aristova and Dilan Bozer
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </ScheduleRow>
            ))}
          </div>
          <p className="mt-6 text-[16px] leading-normal italic">
            Exact schedule subject to change.
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
