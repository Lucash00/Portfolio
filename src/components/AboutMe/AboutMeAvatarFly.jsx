import { useEffect } from "react";

const AVATAR_SRC = "https://avatars.githubusercontent.com/u/168908236?v=4";
const FLY_MS = 750;
const MIN_RECT_SIZE = 8;
const LAYOUT_MAX_FRAMES = 40;
const ELEMENT_WAIT_MS = 2500;

let flyGeneration = 0;
let activeCleanup = null;

function isAboutPage() {
  return /\/sobreMi\/?$/i.test(window.location.pathname);
}

function isDesktop() {
  return window.matchMedia("(min-width: 768px)").matches;
}

function waitFrames(count) {
  return new Promise((resolve) => {
    let left = count;
    const step = () => {
      left -= 1;
      if (left <= 0) resolve();
      else requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function waitForElement(selector, timeoutMs = ELEMENT_WAIT_MS) {
  return new Promise((resolve) => {
    const existing = document.querySelector(selector);
    if (existing) {
      resolve(existing);
      return;
    }

    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        observer.disconnect();
        resolve(el);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.setTimeout(() => {
      observer.disconnect();
      resolve(document.querySelector(selector));
    }, timeoutMs);
  });
}

function waitForValidRect(getRect, maxFrames = LAYOUT_MAX_FRAMES) {
  return new Promise((resolve) => {
    let frames = 0;

    const tick = () => {
      const rect = getRect();
      if (rect && rect.width >= MIN_RECT_SIZE && rect.height >= MIN_RECT_SIZE) {
        resolve(rect);
        return;
      }

      frames += 1;
      if (frames >= maxFrames) {
        resolve(rect ?? null);
        return;
      }

      requestAnimationFrame(tick);
    };

    tick();
  });
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

function hideHeaderAvatarSlot(avatarLink, headerWrap, fromWidth) {
  avatarLink.style.setProperty("--avatar-slot-width", `${Math.round(fromWidth)}px`);
  avatarLink.classList.add("is-flying");
  headerWrap.classList.add("is-flying");
  avatarLink.classList.add("is-about-hidden");
  headerWrap.classList.add("is-about-hidden");
  avatarLink.classList.remove("is-flying");
  headerWrap.classList.remove("is-flying");
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

async function runFlyAnimation(generation) {
  if (!isAboutPage() || !isDesktop()) return null;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const avatarLink = getAvatarLink();
    const headerWrap = document.getElementById("header-avatar-wrap");
    if (avatarLink && headerWrap) {
      hideHeaderAvatarSlot(avatarLink, headerWrap, 44);
    }
    revealProfileImageImmediate();
    return null;
  }

  const profileImg = await waitForElement("#about-profile-img");
  const avatarLink = getAvatarLink();
  const headerWrap = document.getElementById("header-avatar-wrap");
  const headerImg = document.getElementById("header-avatar-img");

  if (generation !== flyGeneration) return null;

  if (!profileImg || !avatarLink || !headerWrap || !headerImg) {
    revealProfileImageImmediate();
    return null;
  }

  if (document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {
      /* ignore */
    }
  }

  await waitFrames(2);
  if (generation !== flyGeneration) return null;

  prepareProfileLanding();

  const from = await waitForValidRect(() => avatarLink.getBoundingClientRect());
  const to = await waitForValidRect(() =>
    profileImg instanceof HTMLElement
      ? profileImg.getBoundingClientRect()
      : null,
  );

  if (generation !== flyGeneration) return null;

  if (!from || from.width < MIN_RECT_SIZE || !to || to.width < MIN_RECT_SIZE) {
    hideHeaderAvatarSlot(avatarLink, headerWrap, from?.width ?? 44);
    revealProfileImageImmediate();
    return null;
  }

  const flySrc = resolveFlyAvatarSrc(headerImg, profileImg, headerWrap);
  let cancelled = false;

  avatarLink.style.setProperty(
    "--avatar-slot-width",
    `${Math.round(from.width)}px`,
  );
  avatarLink.classList.add("is-flying");
  headerWrap.classList.add("is-flying");

  const cleanupHeader = () => {
    hideHeaderAvatarSlot(avatarLink, headerWrap, from.width);
  };

  try {
    const resolvedSrc = await preloadImage(flySrc).catch(() =>
      preloadImage(AVATAR_SRC),
    );

    if (generation !== flyGeneration || cancelled) return null;

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

    if (flyer.decode) {
      try {
        await flyer.decode();
      } catch {
        /* ignore */
      }
    }

    if (generation !== flyGeneration || cancelled) {
      flyer.remove();
      return null;
    }

    return await new Promise((resolve) => {
      let finished = false;

      const finish = () => {
        if (finished || cancelled || generation !== flyGeneration) return;
        finished = true;
        window.clearTimeout(fallback);
        handoffFlyerToProfile(flyer);
        cleanupHeader();
        resolve(null);
      };

      const startMove = () => {
        const target = profileImg.getBoundingClientRect();
        requestAnimationFrame(() => {
          flyer.style.left = `${target.left}px`;
          flyer.style.top = `${target.top}px`;
          flyer.style.width = `${target.width}px`;
          flyer.style.height = `${target.height}px`;
        });
      };

      flyer.addEventListener("transitionend", (e) => {
        if (e.target !== flyer || e.propertyName !== "left") return;
        finish();
      });

      const fallback = window.setTimeout(finish, FLY_MS + 120);
      startMove();

      resolve(() => {
        cancelled = true;
        finished = true;
        window.clearTimeout(fallback);
        flyer.remove();
        avatarLink.classList.remove("is-flying");
        headerWrap.classList.remove("is-flying");
      });
    });
  } catch {
    if (generation !== flyGeneration || cancelled) return null;
    avatarLink.classList.remove("is-flying");
    headerWrap.classList.remove("is-flying");
    hideHeaderAvatarSlot(avatarLink, headerWrap, from.width);
    revealProfileImageImmediate();
    return null;
  }
}

function scheduleAboutFly() {
  flyGeneration += 1;
  const generation = flyGeneration;

  activeCleanup?.();
  activeCleanup = null;

  void (async () => {
    if (!isAboutPage()) {
      resetHeaderAvatar();
      return;
    }

    await waitFrames(2);
    if (generation !== flyGeneration) return;

    activeCleanup = await runFlyAnimation(generation);
  })();
}

export default function AboutMeAvatarFly() {
  useEffect(() => {
    scheduleAboutFly();

    const onPageLoad = () => {
      if (isAboutPage()) {
        scheduleAboutFly();
      } else {
        flyGeneration += 1;
        activeCleanup?.();
        activeCleanup = null;
        resetHeaderAvatar();
      }
    };

    document.addEventListener("astro:page-load", onPageLoad);

    return () => {
      flyGeneration += 1;
      activeCleanup?.();
      activeCleanup = null;
      document.removeEventListener("astro:page-load", onPageLoad);
    };
  }, []);

  return null;
}
