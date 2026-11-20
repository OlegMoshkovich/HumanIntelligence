"use client";

import { useLayoutEffect, useRef, useState, type PointerEvent } from "react";

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

const loop = [photos[photos.length - 1], ...photos, photos[0]];

function restingIndex(position: number) {
  if (position <= 0) return photos.length;
  if (position > photos.length) return 1;
  return position;
}

function MobileVenueCarousel() {
  const frame = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(1);
  const [drag, setDrag] = useState(0);
  const [width, setWidth] = useState(0);
  const indexRef = useRef(1);
  const positionRef = useRef(1);
  const dragRef = useRef(0);
  const startX = useRef(0);
  const startTime = useRef(0);
  const dragOrigin = useRef(0);
  const pointer = useRef<number | null>(null);
  const frameId = useRef(0);
  const gesture = useRef(0);
  indexRef.current = index;
  dragRef.current = drag;

  useLayoutEffect(() => {
    const element = frame.current;
    if (!element) return;
    const measure = () => setWidth(element.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const settle = (direction: -1 | 0 | 1) => {
    const frameWidth = frame.current?.clientWidth ?? width;
    const rendered = indexRef.current;
    const from = -rendered * frameWidth + dragRef.current;
    const destination = positionRef.current + direction;
    positionRef.current = destination;
    const to = -destination * frameWidth;
    cancelAnimationFrame(frameId.current);
    gesture.current += 1;
    const generation = gesture.current;
    const rest = () => {
      if (gesture.current !== generation) return;
      const resting = restingIndex(destination);
      positionRef.current = resting;
      setIndex(resting);
      setDrag(0);
    };
    if (!frameWidth || from === to) {
      rest();
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      if (gesture.current !== generation) return;
      const progress = Math.min(1, (now - start) / 520);
      const eased = 1 - (1 - progress) ** 3;
      setDrag(from + (to - from) * eased + rendered * frameWidth);
      if (progress < 1) frameId.current = requestAnimationFrame(tick);
      else rest();
    };
    frameId.current = requestAnimationFrame(tick);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    gesture.current += 1;
    pointer.current = event.pointerId;
    startX.current = event.clientX;
    startTime.current = performance.now();
    dragOrigin.current = dragRef.current;
    cancelAnimationFrame(frameId.current);
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture needs a real active pointer. Drag still tracks the move.
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (pointer.current !== event.pointerId) return;
    const frameWidth = (frame.current?.clientWidth ?? width) || 1;
    const next = dragOrigin.current + event.clientX - startX.current;
    const limit = frameWidth * 1.15;
    setDrag(Math.max(-limit, Math.min(limit, next)));
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointer.current !== event.pointerId) return;
    pointer.current = null;
    const frameWidth = (frame.current?.clientWidth ?? width) || 1;
    const delta = event.clientX - startX.current;
    const velocity = delta / Math.max(performance.now() - startTime.current, 1);
    const threshold = Math.min(72, frameWidth * 0.16);
    if (delta <= -threshold || velocity <= -0.45) settle(1);
    else if (delta >= threshold || velocity >= 0.45) settle(-1);
    else settle(0);
  };

  return (
    <div
      ref={frame}
      className="relative mt-6 -mx-5 h-[221px] overflow-hidden"
      style={{ touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className="flex h-full"
        style={{
          transform: width
            ? `translate3d(${-index * width + drag}px, 0, 0)`
            : `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {loop.map((photo, position) => (
          <div key={`${photo.src}-${position}`} className="h-full w-full shrink-0">
            <img
              src={photo.src}
              alt={photo.alt}
              draggable={false}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <NextPhoto
        onClick={() => settle(1)}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2"
      />
    </div>
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

  if (variant === "mobile") return <MobileVenueCarousel />;

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
        <div className="relative hidden h-[280px] overflow-hidden lg:block lg:h-[527px]">
          <img
            src={upcoming.src}
            alt=""
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
