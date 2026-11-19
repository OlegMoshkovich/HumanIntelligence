"use client";

import { useRef, useState, type PointerEvent } from "react";

const photos = [
  {
    src: "/images/venue-TARA4706.jpg",
    alt: "Sunlit salon at Pasaj Zivo, with sofas, a glass table and frescoed walls",
  },
  {
    src: "/images/venue-TARA4660.jpg",
    alt: "Armchairs and a patterned rug in the salon at Pasaj Zivo",
  },
  {
    src: "/images/venue-TARA4662.jpg",
    alt: "The salon at Pasaj Zivo, looking toward the windows",
  },
  {
    src: "/images/venue-TARA4665.jpg",
    alt: "Afternoon light across the sofas and frescoed wall at Pasaj Zivo",
  },
  {
    src: "/images/venue-TARA4658.jpg",
    alt: "Dining room at Pasaj Zivo, with two framed works beside a green wall",
  },
];

function NextPhoto({
  onClick,
  className,
  light = false,
}: {
  onClick: () => void;
  className: string;
  light?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label="Next venue photo"
      onClick={onClick}
      className={className}
    >
      <img
        src="/images/home-arrow.svg"
        alt=""
        width={29}
        height={29}
        className={`rotate-45 ${light ? "brightness-0" : ""}`}
      />
    </button>
  );
}

export function VenueCarousel({
  variant,
}: {
  variant: "home" | "mobile" | "page";
}) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const current = photos[index];
  const upcoming = photos[(index + 1) % photos.length];

  function go(step: number) {
    setIndex((value) => (value + step + photos.length) % photos.length);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    startX.current = event.clientX;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (startX.current == null) return;
    const delta = event.clientX - startX.current;
    startX.current = null;
    if (delta <= -40) go(1);
    else if (delta >= 40) go(-1);
  }

  const swipe = {
    onPointerDown,
    onPointerUp,
    onPointerCancel: () => {
      startX.current = null;
    },
  };

  if (variant === "mobile") {
    return (
      <div className="relative mt-6 -mx-5 h-[221px] touch-pan-y" {...swipe}>
        <img
          src={current.src}
          alt={current.alt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <NextPhoto onClick={() => go(1)} className="absolute top-2 right-4" />
      </div>
    );
  }

  if (variant === "home") {
    return (
      <div className="relative touch-pan-y" {...swipe}>
        <div className="grid grid-cols-[minmax(0,843fr)_minmax(80px,233fr)]">
          <div className="relative h-[240px] overflow-hidden sm:h-[360px] lg:h-[474px]">
            <img
              src={current.src}
              alt={current.alt}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative h-[240px] overflow-hidden sm:h-[360px] lg:h-[474px]">
            <img
              src={upcoming.src}
              alt=""
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_16%,#47423c)]" />
          </div>
        </div>
        <NextPhoto
          onClick={() => go(1)}
          className="absolute top-1/2 right-2 -translate-y-1/2"
        />
      </div>
    );
  }

  return (
    <div className="relative mt-8 touch-pan-y" {...swipe}>
      <div className="grid gap-2 lg:grid-cols-[937fr_433fr]">
        <div className="relative h-[280px] overflow-hidden lg:h-[527px]">
          <img
            src={current.src}
            alt={current.alt}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative h-[280px] overflow-hidden lg:h-[527px]">
          <img
            src={upcoming.src}
            alt={upcoming.alt}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <NextPhoto
        light
        onClick={() => go(1)}
        className="absolute top-[140px] right-4 -translate-y-1/2 lg:top-1/2"
      />
    </div>
  );
}
