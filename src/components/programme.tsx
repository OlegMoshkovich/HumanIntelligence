"use client";

import { useState, type ReactNode } from "react";

const days = [
  {
    label: "Day 1 | December 15",
    title: "Day 1 | Symposium and Workshops at Pasaj Zivo",
  },
  {
    label: "Day 2 | December 16",
    title: "Day 2 | December 16",
  },
  {
    label: "Day 3 | December 17",
    title: "Day 3 | December 17",
  },
  {
    label: "Day 4 | December 18",
    title: "Day 4 | December 18",
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
  const next = days[(selected + 1) % days.length];

  return (
    <div className="grid gap-10 lg:grid-cols-[222px_minmax(0,1fr)] lg:gap-14">
      <div className="flex flex-col">
        {days.map((day, index) => (
          <button
            key={day.label}
            type="button"
            onClick={() => setSelected(index)}
            className={`text-left text-[20px] leading-[44px] tracking-[-0.6px] ${
              index === selected ? "font-bold underline" : "font-medium"
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      <div>
        <h3 className="text-[22px] leading-[30px] font-bold tracking-[-0.66px] lg:text-[30px] lg:leading-[66px] lg:tracking-[-0.9px]">
          {days[selected].title}
        </h3>

        {selected === 0 ? (
          <div className="mt-2">
            <ScheduleRow
              time="10:00–10:30"
              title="Opening Session"
              note="Open to public"
              action={<RsvpButton />}
            >
              <p>
                A collective opening session bringing all participants together
                through sensory experience, with a focus on connection, place,
                history and the cultural roots of Istanbul.
              </p>
            </ScheduleRow>
            <ScheduleRow
              time="10:30–12:30"
              title="Research and Working Session"
              note="By invitation only"
            >
              <p>
                Closed working sessions designed to encourage focused exchange,
                collaborative research and experimentation between participating
                scientists and creative practitioners.
              </p>
            </ScheduleRow>
            <ScheduleRow time="12:30–14:00" title="Lunch Break" />
            <ScheduleRow
              time="14:00–17:00"
              title="Interdisciplinary Workshops"
              note="Public programme — advance reservation required."
              action={<RsvpButton />}
            >
              <div className="space-y-4">
                <p>
                  Interactive sessions bringing together scientists, artists and
                  members of the public to explore questions surrounding
                  creativity, intelligence and the role of the human.
                </p>
                <p>
                  Each session will follow a structured yet experimental
                  format:
                </p>
                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    50 minutes — Somatic Experience with Aysegul Akyuz (15
                    December): A collective artistic or body-oriented exercise
                    designed to establish a shared starting point and encourage
                    connection between participants.
                  </li>
                  <li>
                    45 minutes — Research Presentations: One or two scientists,
                    artists or researchers introduce questions central to their
                    current work using accessible language and visual tools
                    such as whiteboards. Presentations should connect their
                    research to broader questions concerning human experience,
                    creativity and the changing role of the human, regardless
                    of the researcher’s primary field.
                  </li>
                  <li>10 minutes — Break</li>
                  <li>
                    30 minutes — Collective Creative Experimentation: A
                    participatory artistic workshop involving activities such
                    as drawing, painting, movement or other forms of embodied
                    exploration.
                  </li>
                  <li>
                    30 minutes — Open Discussion and Feedback: A facilitated
                    conversation reflecting on the research, shared experiences
                    and questions emerging from the session.
                  </li>
                </ul>
                <p>
                  The remaining time will allow for introductions, transitions
                  and informal exchange.
                </p>
              </div>
            </ScheduleRow>
            <ScheduleRow time="17:00–17:30" title="Break" />
            <ScheduleRow
              time="17:30–19:30"
              title="Muhabbet: Tea, Dialogue and Open Conversations"
              note="Public programme — advance reservation required."
              action={<RsvpButton />}
            >
              <div className="space-y-4">
                <p>
                  A collective conversation exploring some of the questions
                  that feel most urgent to us, approached from less
                  conventional perspectives. The discussion will consider how
                  we understand and speak about data, security and
                  intelligence, and how these questions relate to both
                  individual and collective experience.
                </p>
                <p>
                  An intimate, unconventional Q&A format in which scientists,
                  artists and members of the public gather in a circle for open
                  dialogue.
                </p>
                <p>
                  Rather than following a traditional speaker–audience format,
                  the session invites everyone to participate equally, drawing
                  on personal experiences, professional perspectives and
                  individual questions.
                </p>
                <p>
                  The central theme will be the role of the human in an
                  increasingly intelligent world, explored through both
                  scientific and creative perspectives.
                  <br />
                  <span className="italic">
                    Facilitated by Anna Aristova & Dilan Bozer
                  </span>
                </p>
              </div>
            </ScheduleRow>
            <ScheduleRow
              time="20:00–Late"
              title="Dinner & Drinks"
              note="By invitation only"
            >
              <p>
                A special dinner at a carefully selected local restaurant,
                followed by an informal evening together with drinks and
                conversation.
              </p>
            </ScheduleRow>
          </div>
        ) : null}

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
