// components/SequentialMarquee.js
import { useEffect, useRef, useState } from "react";

/**
 * SequentialMarquee
 * Props:
 *  - texts: array of strings to show
 *  - speed: pixels per second (higher => faster). default 150
 */
export default function SequentialMarquee({ texts = ["abcd","dsffd","sefsdfs","ersdfs"], speed = 150 }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [styleState, setStyleState] = useState({ transform: "translateX(0px)", transition: "none" });

  // When index changes start an animation: place text off-left, then animate to off-right
  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    const containerRect = container.getBoundingClientRect();
    const textRect = textEl.getBoundingClientRect();

    // If width zero (hidden or not laid-out yet) try again later
    if (containerRect.width === 0 || textRect.width === 0) {
      // try again shortly
      const t = setTimeout(() => setIndex((i) => i), 50);
      return () => clearTimeout(t);
    }

    const containerWidth = Math.round(containerRect.width);
    const textWidth = Math.round(textRect.width);

    // distance to travel so the text moves from fully left outside to fully right outside
    const distance = containerWidth + textWidth; // in px

    // duration based on speed (px / sec)
    const duration = distance / speed; // seconds

    // set initial position (just left outside)
    setStyleState({
      transform: `translateX(${-textWidth}px)`,
      transition: "none",
    });

    // push to next frame and then set final transform so transition animates
    // double requestAnimationFrame ensures browser applies initial position first
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setStyleState({
          transform: `translateX(${containerWidth}px)`,
          transition: `transform ${duration}s linear`,
        });
      });
    });

    // cleanup not required for styleState
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, texts, speed]); // re-run when index changes

  // when transition ends, increment index (loop)
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const onEnd = (e) => {
      if (e.propertyName !== "transform") return;
      // small delay before next to avoid tiny visual jump
      setTimeout(() => setIndex((i) => (i + 1) % texts.length), 50);
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [texts.length]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-12 overflow-hidden flex items-center bg-white"
      // ensure the container has a width in parent or via classes
    >
      {/* absolute so we can freely translate */}
      <div
        ref={textRef}
        className="absolute whitespace-nowrap text-lg font-semibold"
        style={{
          transform: styleState.transform,
          transition: styleState.transition,
          willChange: "transform",
          left: 0, // keep coordinate system consistent
        }}
      >
        {texts[index]}
      </div>
    </div>
  );
}
