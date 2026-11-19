"use client";

import { useLayoutEffect, useRef, useState, type PointerEvent } from "react";

const slides = [
  {
    left: {
      src: "/images/home-slide-0-left.jpg",
      alt: "A point-cloud figure standing in a dark landscape",
      className:
        "absolute top-[-0.04%] left-[-58.59%] h-[100.07%] w-[188.23%] max-w-none",
    },
    right: {
      src: "/images/home-slide-0-right.jpg",
      alt: "Figures walking across a pale printed landscape",
      className: "absolute inset-0 h-full w-full object-cover",
    },
  },
  {
    left: {
      src: "/images/home-slide-1-left.jpg",
      alt: "A person with raised arms in warm light",
      className:
        "absolute top-[-0.04%] left-[-58.59%] h-[100.07%] w-[188.23%] max-w-none",
    },
    right: {
      src: "/images/home-slide-1-right.jpg",
      alt: "A field of glowing particles",
      className:
        "absolute top-0 left-[-58.59%] h-[100.04%] w-[188.16%] max-w-none",
    },
  },
  {
    left: {
      src: "/images/home-slide-2-left.jpg",
      alt: "A close view of translucent fabric",
      className:
        "absolute top-[-45.06%] left-[-103.17%] h-[145.06%] w-[203.19%] max-w-none",
    },
    right: {
      src: "/images/home-slide-2-right.jpg",
      alt: "Hands shaping clay",
      className:
        "absolute top-[-2.05%] left-[-11.35%] h-[102.05%] w-[142.94%] max-w-none",
    },
  },
];

function NextButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Next images"
      onClick={onClick}
      className="pointer-events-auto absolute top-1/2 right-8 z-10 -translate-y-1/2"
    >
      <img
        src="/images/arrow.svg"
        alt=""
        width={29}
        height={29}
        className="rotate-45"
      />
    </button>
  );
}

function SlidePair({
  slide,
  variant,
}: {
  slide: (typeof slides)[number];
  variant: "desktop" | "mobile";
}) {
  if (variant === "mobile") {
    return (
      <div className="relative h-[581px] w-full shrink-0">
        <div className="absolute top-0 left-0 h-[292px] w-[80%] overflow-hidden">
          <img
            src={slide.left.src}
            alt={slide.left.alt}
            draggable={false}
            className={slide.left.className}
          />
        </div>
        <div className="absolute top-[291px] right-0 h-[290px] w-[80%] overflow-hidden">
          <img
            src={slide.right.src}
            alt={slide.right.alt}
            draggable={false}
            className={slide.right.className}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="grid w-full shrink-0 grid-cols-2">
      <div className="relative h-[677px] overflow-hidden">
        <img
          src={slide.left.src}
          alt={slide.left.alt}
          draggable={false}
          className={slide.left.className}
        />
      </div>
      <div className="relative mt-[74px] h-[677px] overflow-hidden">
        <img
          src={slide.right.src}
          alt={slide.right.alt}
          draggable={false}
          className={slide.right.className}
        />
      </div>
    </div>
  );
}

const loop = [slides[slides.length - 1], ...slides, slides[0]];

function restingIndex(position: number) {
  if (position <= 0) return slides.length;
  if (position > slides.length) return 1;
  return position;
}

export function HomeGallery({ variant }: { variant: "desktop" | "mobile" }) {
  const [index, setIndex] = useState(1);
  const [drag, setDrag] = useState(0);
  const [width, setWidth] = useState(0);
  const startX = useRef(0);
  const dragOrigin = useRef(0);
  const pointer = useRef<number | null>(null);
  const frame = useRef<HTMLElement>(null);
  const indexRef = useRef(1);
  const positionRef = useRef(1);
  const dragRef = useRef(0);
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
      const progress = Math.min(1, (now - start) / 450);
      const eased = 1 - (1 - progress) ** 3;
      const visual = from + (to - from) * eased;
      setDrag(visual + rendered * frameWidth);
      if (progress < 1) frameId.current = requestAnimationFrame(tick);
      else rest();
    };
    frameId.current = requestAnimationFrame(tick);
  };

  const next = () => settle(1);

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    const frameWidth = event.currentTarget.clientWidth;
    if (frameWidth) setWidth(frameWidth);
    gesture.current += 1;
    pointer.current = event.pointerId;
    startX.current = event.clientX;
    dragOrigin.current = dragRef.current;
    cancelAnimationFrame(frameId.current);
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture needs a real active pointer. Drag still tracks the move.
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (pointer.current !== event.pointerId) return;
    setDrag(dragOrigin.current + event.clientX - startX.current);
  };

  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (pointer.current !== event.pointerId) return;
    pointer.current = null;
    const frameWidth = frame.current?.clientWidth ?? 1;
    const delta = event.clientX - startX.current;
    const threshold = Math.min(90, frameWidth * 0.12);
    if (delta <= -threshold) settle(1);
    else if (delta >= threshold) settle(-1);
    else settle(0);
  };

  return (
    <section
      ref={frame}
      className={
        variant === "mobile"
          ? "relative mt-12 cursor-grab select-none overflow-hidden active:cursor-grabbing lg:hidden"
          : "relative mt-16 hidden cursor-grab select-none overflow-hidden active:cursor-grabbing lg:mt-20 lg:block"
      }
      aria-label="Symposium images"
      aria-roledescription="carousel"
      style={{ touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className="flex"
        style={{
          transform: width
            ? `translate3d(${-index * width + drag}px, 0, 0)`
            : `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {loop.map((slide, position) => (
          <SlidePair
            key={`${slide.left.src}-${position}`}
            slide={slide}
            variant={variant}
          />
        ))}
      </div>
      <div
        className={
          variant === "mobile"
            ? "pointer-events-none absolute top-[291px] right-0 h-[290px] w-[80%]"
            : "pointer-events-none absolute top-[74px] right-0 h-[677px] w-1/2"
        }
      >
        <NextButton onClick={next} />
      </div>
      <img
        src={
          variant === "mobile"
            ? "/images/mobile-logo-mark.svg"
            : "/images/home-logo-mark.svg"
        }
        alt=""
        width={variant === "mobile" ? 102 : 161}
        height={variant === "mobile" ? 39 : 61}
        draggable={false}
        className={
          variant === "mobile"
            ? "pointer-events-none absolute top-[272px] right-8"
            : "pointer-events-none absolute top-[43px] left-1/2 -translate-x-1/2"
        }
      />
    </section>
  );
}
