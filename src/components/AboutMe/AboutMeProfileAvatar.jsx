import { useEffect, useState } from "react";
import animeProfile from "../../assets/animeprofile.png";
import "./AboutMeProfileAvatar.css";

const GITHUB_AVATAR =
  "https://avatars.githubusercontent.com/u/168908236?v=4";

const REVEAL_EVENT = "about-profile-revealed";

export default function AboutMeProfileAvatar({
  githubSrc = GITHUB_AVATAR,
}) {
  const [showAnime, setShowAnime] = useState(false);
  const [revealed, setRevealed] = useState(
    () =>
      typeof window !== "undefined" &&
      !window.matchMedia("(min-width: 768px)").matches,
  );

  useEffect(() => {
    const onReveal = () => setRevealed(true);
    document.addEventListener(REVEAL_EVENT, onReveal);
    return () => document.removeEventListener(REVEAL_EVENT, onReveal);
  }, []);

  useEffect(() => {
    const resetFlip = () => {
      setShowAnime(false);
      if (!window.matchMedia("(min-width: 768px)").matches) {
        setRevealed(true);
      } else {
        setRevealed(false);
      }
    };
    document.addEventListener("astro:page-load", resetFlip);
    return () => document.removeEventListener("astro:page-load", resetFlip);
  }, []);

  const toggleFlip = () => setShowAnime((prev) => !prev);

  return (
    <div
      id="about-profile-slot"
      className="relative h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 2xl:h-100 2xl:w-100"
    >
      <div className="about-profile-frame h-full w-full rounded-full">
        <div className="about-profile-frame__inner relative h-full w-full rounded-full">
          <button
            type="button"
            id="about-profile-flip"
            className={[
              "about-profile-flip",
              revealed ? "is-visible" : "",
              showAnime ? "is-flipped" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={toggleFlip}
            aria-pressed={showAnime}
            aria-label={
              showAnime
                ? "Ver foto de perfil"
                : "Ver avatar anime (clic para girar)"
            }
          >
            <div className="about-profile-flip__scene">
              <div
                className="about-profile-flip__inner"
                style={{
                  transform: showAnime ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
              <div className="about-profile-face about-profile-face--front">
                <img
                  id="about-profile-img"
                  src={githubSrc}
                  alt="Lucas Moreno Corral"
                  width={384}
                  height={384}
                  className="about-profile-img h-full w-full rounded-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="about-profile-face about-profile-face--back">
                <img
                  src={animeProfile.src}
                  alt="Lucas Moreno Corral - Avatar anime"
                  width={384}
                  height={384}
                  className="about-profile-img h-full w-full rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
