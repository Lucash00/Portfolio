import { useEffect } from "react";

const AVATAR_SRC = "https://avatars.githubusercontent.com/u/168908236?v=4";
const FLY_MS = 750;

function isAboutPage() {
  return /\/sobreMi\/?$/i.test(window.location.pathname);
}

/** Layout final (padding del anillo) sin mostrar la foto aún */
function prepareProfileLanding() {
  const profileImg = document.getElementById("about-profile-img");
  const flip = document.getElementById("about-profile-flip");
  const frame = document.querySelector(".about-profile-frame");

  frame?.classList.remove(
    "is-visible",
    "is-landing",
    "is-ring-drawing",
    "is-ring-complete",
  );
  frame?.classList.add("is-landing");
  flip?.classList.remove("is-visible");
  flip?.classList.add("is-landing");

  if (profileImg instanceof HTMLImageElement) {
    profileImg.style.transition = "none";
    profileImg.style.opacity = "0";
    void profileImg.offsetHeight;
    profileImg.style.removeProperty("transition");
  }
}

function getProfileImageRect() {
  const profileImg = document.getElementById("about-profile-img");
  if (!(profileImg instanceof HTMLImageElement)) return null;
  return profileImg.getBoundingClientRect();
}

function startProfileRingAnimation() {
  const frame = document.querySelector(".about-profile-frame");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.setTimeout(() => {
    if (!frame) return;
    if (reducedMotion) {
      frame.classList.add("is-ring-drawing", "is-ring-complete");
      return;
    }
    frame.classList.add("is-ring-drawing");
  }, reducedMotion ? 0 : 120);
}

function handoffFlyerToProfile(flyer) {
  const profileImg = document.getElementById("about-profile-img");
  if (!(profileImg instanceof HTMLImageElement)) {
    flyer.remove();
    return;
  }

  const finalRect = profileImg.getBoundingClientRect();

  flyer.style.transition = "none";
  Object.assign(flyer.style, {
    left: `${finalRect.left}px`,
    top: `${finalRect.top}px`,
    width: `${finalRect.width}px`,
    height: `${finalRect.height}px`,
  });

  const frame = document.querySelector(".about-profile-frame");
  const flip = document.getElementById("about-profile-flip");

  frame?.classList.remove("is-landing");
  frame?.classList.add("is-visible");
  flip?.classList.remove("is-landing");
  flip?.classList.add("is-visible");

  profileImg.style.transition = "none";
  profileImg.style.opacity = "1";
  void profileImg.offsetHeight;

  flyer.remove();

  profileImg.style.removeProperty("transition");
  document.dispatchEvent(new CustomEvent("about-profile-revealed"));
  startProfileRingAnimation();
}

function revealProfileImageImmediate() {
  const profileImg = document.getElementById("about-profile-img");
  const frame = document.querySelector(".about-profile-frame");
  const flip = document.getElementById("about-profile-flip");

  frame?.classList.remove("is-landing", "is-ring-drawing", "is-ring-complete");
  frame?.classList.add("is-visible");
  flip?.classList.remove("is-landing");
  flip?.classList.add("is-visible");

  if (profileImg instanceof HTMLImageElement) {
    profileImg.style.opacity = "1";
  }
  document.dispatchEvent(new CustomEvent("about-profile-revealed"));
  startProfileRingAnimation();
}

function getAvatarLink() {
  return document.getElementById("header-avatar-link");
}

function resetHeaderAvatar() {
  const link = getAvatarLink();
  const wrap = document.getElementById("header-avatar-wrap");
  if (link) {
    link.classList.remove("is-flying", "is-about-hidden");
    link.style.removeProperty("--avatar-slot-width");
  }
  if (wrap) {
    wrap.classList.remove("is-flying", "is-about-hidden");
  }
}

function resolveFlyAvatarSrc(headerImg, profileImg, headerWrap) {
  if (profileImg instanceof HTMLImageElement) {
    const profileSrc = profileImg.currentSrc || profileImg.src;
    if (profileSrc) return profileSrc;
  }

  if (headerWrap instanceof HTMLElement) {
    const flyHost = headerWrap.querySelector("[data-avatar-fly-src]");
    const hostFlySrc = flyHost?.getAttribute("data-avatar-fly-src");
    if (hostFlySrc) return hostFlySrc;
  }

  if (headerImg instanceof HTMLImageElement) {
    const headerSrc = headerImg.currentSrc || headerImg.src;
    if (headerSrc) return headerSrc;
  }

  return AVATAR_SRC;
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error(`No se pudo precargar: ${src}`));
    img.src = src;
  });
}

function runFlyAnimation() {
  if (!isAboutPage()) return;
  if (!window.matchMedia("(min-width: 768px)").matches) return;

  const avatarLink = getAvatarLink();
  const headerWrap = document.getElementById("header-avatar-wrap");
  const headerImg = document.getElementById("header-avatar-img");
  const profileImg = document.getElementById("about-profile-img");

  if (!avatarLink || !headerWrap || !headerImg || !profileImg) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    avatarLink.classList.add("is-about-hidden");
    headerWrap.classList.add("is-about-hidden");
    revealProfileImageImmediate();
    return undefined;
  }

  prepareProfileLanding();

  const from = avatarLink.getBoundingClientRect();
  const to = getProfileImageRect();

  if (!to || from.width < 1 || to.width < 1) return;

  const flySrc = resolveFlyAvatarSrc(headerImg, profileImg, headerWrap);
  let cancelled = false;

  avatarLink.style.setProperty(
    "--avatar-slot-width",
    `${Math.round(from.width)}px`,
  );
  avatarLink.classList.add("is-flying");
  headerWrap.classList.add("is-flying");

  const cleanupHeader = () => {
    avatarLink.classList.add("is-about-hidden");
    headerWrap.classList.add("is-about-hidden");
    avatarLink.classList.remove("is-flying");
    headerWrap.classList.remove("is-flying");
  };

  preloadImage(flySrc)
    .catch(() => preloadImage(AVATAR_SRC))
    .then((resolvedSrc) => {
      if (cancelled) return;

      const flyer = document.createElement("img");
      flyer.src = resolvedSrc;
      flyer.alt = "";
      flyer.decoding = "sync";
      flyer.className = "about-avatar-flyer";
      Object.assign(flyer.style, {
        position: "fixed",
        zIndex: "100",
        borderRadius: "9999px",
        objectFit: "cover",
        left: `${from.left}px`,
        top: `${from.top}px`,
        width: `${from.width}px`,
        height: `${from.height}px`,
        margin: "0",
        padding: "0",
        border: "none",
        pointerEvents: "none",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35)",
        transition: `left ${FLY_MS}ms cubic-bezier(0.33, 1, 0.68, 1), top ${FLY_MS}ms cubic-bezier(0.33, 1, 0.68, 1), width ${FLY_MS}ms cubic-bezier(0.33, 1, 0.68, 1), height ${FLY_MS}ms cubic-bezier(0.33, 1, 0.68, 1)`,
      });

      document.body.appendChild(flyer);

      let finished = false;

      const finish = () => {
        if (finished || cancelled) return;
        finished = true;
        window.clearTimeout(fallback);

        handoffFlyerToProfile(flyer);
        cleanupHeader();
      };

      const startMove = () => {
        requestAnimationFrame(() => {
          flyer.style.left = `${to.left}px`;
          flyer.style.top = `${to.top}px`;
          flyer.style.width = `${to.width}px`;
          flyer.style.height = `${to.height}px`;
        });
      };

      flyer.addEventListener("transitionend", (e) => {
        if (e.target !== flyer || e.propertyName !== "left") return;
        finish();
      });

      const fallback = window.setTimeout(finish, FLY_MS + 80);
      startMove();

      return () => {
        cancelled = true;
        finished = true;
        window.clearTimeout(fallback);
        flyer.remove();
      };
    })
    .catch(() => {
      if (cancelled) return;
      avatarLink.classList.remove("is-flying");
      headerWrap.classList.remove("is-flying");
      revealProfileImageImmediate();
    });

  return () => {
    cancelled = true;
  };
}

export default function AboutMeAvatarFly() {
  useEffect(() => {
    if (!isAboutPage()) {
      resetHeaderAvatar();
      return;
    }

    let cleanupFly;
    const start = () => {
      cleanupFly = runFlyAnimation();
    };

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(start);
    });

    const onPageLoad = () => {
      if (isAboutPage()) {
        resetHeaderAvatar();
        cleanupFly?.();
        requestAnimationFrame(() => {
          requestAnimationFrame(start);
        });
      } else {
        resetHeaderAvatar();
      }
    };

    document.addEventListener("astro:page-load", onPageLoad);

    return () => {
      cancelAnimationFrame(raf);
      cleanupFly?.();
      document.removeEventListener("astro:page-load", onPageLoad);
    };
  }, []);

  return null;
}
