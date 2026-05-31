import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "../../i18n/client";
import { takeHeroRotatorSpaReset } from "./ScrollReveal/pageEnter.js";
import "./heroLetter.css";

const EXIT_MS = 1500;

function isHomePath() {
  const path = window.location.pathname
    .replace(/\/index\.html$/i, "")
    .replace(/\/$/, "");
  return path === "";
}

function isPageEnterSettled() {
  return (
    !document.documentElement.classList.contains("page-enter-boot") &&
    !document.documentElement.classList.contains("page-enter-revealing")
  );
}

function buildSequence(t) {
  const specialties = [
    t("hero.rotator.specialties.fullstack"),
    t("hero.rotator.specialties.backend"),
    t("hero.rotator.specialties.frontend"),
  ];

  return [
    ...specialties.map((specialty) => ({
      roleId: "desarrollador",
      role: t("hero.rotator.developer"),
      specialty,
    })),
    { roleId: "devops", role: t("hero.rotator.devops"), specialty: null },
  ];
}

function HeroLetter({ letter, index, phase, animToken }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.style.animation = "none";
    void node.offsetHeight;
    node.style.animation = "";
  }, [animToken]);

  return (
    <span
      ref={ref}
      className={`hero-letter hero-letter--${phase}${letter === " " ? " hero-letter--space" : ""}`}
      style={{ "--letter-i": index }}
    >
      {letter}
    </span>
  );
}

function AnimatedWord({ text, phase, animate, className, wordKey, animToken }) {
  if (!animate) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {text.split("").map((letter, letterIndex) => (
        <HeroLetter
          key={`${wordKey}-${letterIndex}`}
          letter={letter}
          index={letterIndex}
          phase={phase}
          animToken={animToken}
        />
      ))}
    </span>
  );
}

const HeroTitleRotator = ({ interval = 4000 }) => {
  const { t, locale } = useTranslation();
  const sequence = useMemo(() => buildSequence(t), [t, locale]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("in");
  const [cycleKey, setCycleKey] = useState(0);
  const [cycleReady, setCycleReady] = useState(isPageEnterSettled);
  const hasTransitionedRef = useRef(false);
  const localeInitRef = useRef(true);

  const resetRotator = () => {
    hasTransitionedRef.current = false;
    setIndex(0);
    setPhase("in");
    setCycleKey((current) => current + 1);
  };

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

  /* Tras el fade de carga: Fullstack estático; la rotación empieza saliendo hacia Backend. */
  const isInitialFullstackHold =
    index === 0 && phase === "in" && !hasTransitionedRef.current;

  const specialtyAnimates = hasSpecialty && !isInitialFullstackHold;

  const animToken = `${cycleKey}-${index}-${phase}`;

  useLayoutEffect(() => {
    if (isHomePath() && takeHeroRotatorSpaReset()) {
      resetRotator();
    }
  }, []);

  useEffect(() => {
    if (localeInitRef.current) {
      localeInitRef.current = false;
      return;
    }
    resetRotator();
  }, [locale]);

  useEffect(() => {
    if (cycleReady) return;

    const activate = () => {
      setCycleReady(true);
    };

    if (isPageEnterSettled()) {
      activate();
      return;
    }

    window.addEventListener("portfolio:page-enter-complete", activate, {
      once: true,
    });

    return () => {
      window.removeEventListener("portfolio:page-enter-complete", activate);
    };
  }, [cycleReady]);

  useEffect(() => {
    if (!cycleReady) return;

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
  }, [cycleReady, phase, index, interval, sequence.length]);

  const roleWordKey = `${cycleKey}-role-${roleId}-${index}`;
  const specialtyWordKey = `${cycleKey}-specialty-${specialty}-${index}`;

  if (!cycleReady) {
    return (
      <>
        <span className="text-amber-400">{role}</span>
        {hasSpecialty && (
          <span className="md:inline-block">
            {" "}
            <span>{specialty}</span>
          </span>
        )}
      </>
    );
  }

  return (
    <>
      <AnimatedWord
        text={role}
        phase={phase}
        animate={roleAnimates}
        className="text-amber-400"
        wordKey={roleWordKey}
        animToken={animToken}
      />
      {hasSpecialty && (
        <span className="md:inline-block">
          {" "}
          <AnimatedWord
            text={specialty}
            phase={phase}
            animate={specialtyAnimates}
            wordKey={specialtyWordKey}
            animToken={animToken}
          />
        </span>
      )}
    </>
  );
};

export default HeroTitleRotator;
