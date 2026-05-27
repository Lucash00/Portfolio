import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatedSpan } from "./AnimatedSpan.styled";

const SPECIALTIES = ["Fullstack", "Backend", "Frontend"];
const EXIT_MS = 1400;

function buildSequence() {
  return [
    ...SPECIALTIES.map((specialty) => ({
      roleId: "desarrollador",
      role: "Desarrollador ",
      specialty,
    })),
    { roleId: "devops", role: "DevOps", specialty: null },
  ];
}

function AnimatedWord({ text, phase, animate, className, animationKey }) {
  if (!animate) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {text.split("").map((letter, letterIndex) => (
        <AnimatedSpan
          key={`${animationKey}-${letterIndex}`}
          $index={letterIndex}
          $letter={letter}
          className={phase}
        >
          {letter}
        </AnimatedSpan>
      ))}
    </span>
  );
}

const HeroTitleRotator = ({ interval = 4000 }) => {
  const sequence = useMemo(() => buildSequence(), []);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("in");
  const hasTransitionedRef = useRef(false);

  const step = sequence[index];
  const { role, roleId, specialty } = step;
  const hasSpecialty = specialty != null;
  const prevIndex = (index - 1 + sequence.length) % sequence.length;
  const nextIndex = (index + 1) % sequence.length;
  const prevStep = sequence[prevIndex];
  const nextStep = sequence[nextIndex];

  const roleChangesOnExit = roleId !== nextStep.roleId;
  const roleChangesOnEnter = roleId !== prevStep.roleId;

  const roleAnimatesOnExit = roleChangesOnExit;
  const roleAnimatesOnEnter =
    hasTransitionedRef.current && roleChangesOnEnter;

  const roleAnimates =
    phase === "out" ? roleAnimatesOnExit : roleAnimatesOnEnter;

  const specialtyAnimates =
    hasSpecialty &&
    (phase === "out" || specialty !== prevStep.specialty);

  useEffect(() => {
    let timeout;

    if (phase === "in") {
      timeout = setTimeout(() => setPhase("out"), interval);
    } else {
      timeout = setTimeout(() => {
        hasTransitionedRef.current = true;
        setIndex((current) => (current + 1) % sequence.length);
        setPhase("in");
      }, EXIT_MS);
    }

    return () => clearTimeout(timeout);
  }, [phase, index, interval, sequence.length]);

  return (
    <>
      <AnimatedWord
        text={role}
        phase={phase}
        animate={roleAnimates}
        className="text-amber-400"
        animationKey={`role-${roleId}-${index}`}
      />
      {hasSpecialty && (
        <span className="md:inline-block">
          {" "}
          <AnimatedWord
            text={specialty}
            phase={phase}
            animate={specialtyAnimates}
            animationKey={`specialty-${specialty}-${index}`}
          />
        </span>
      )}
    </>
  );
};

export default HeroTitleRotator;
