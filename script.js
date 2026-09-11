const projects = [
  {
    title: "Converge Digital",
    group: "career",
    tag: "Marketing Technology",
    description: "Designing measurement, data and activation infrastructure for experiential and live-event brands.",
    status: "2024–Current",
    size: "wide",
    tone: "ink",
    visual: "network"
  },
  {
    title: "Meridic",
    group: "products",
    tag: "Product / R&D",
    description: "Building a cleaner, more resilient way to understand how marketing actually drives outcomes.",
    status: "In development",
    size: "medium",
    tone: "blue",
    visual: "signal"
  },
  {
    title: "Quarterback",
    group: "products",
    tag: "Product / App",
    description: "A low-code platform for capturing, filtering, transforming and routing webhook data to destinations like Snowflake and Klaviyo.",
    status: "Visit ↗",
    size: "half",
    tone: "blue",
    visual: "quarterback",
    href: "https://quarterback-app.com/"
  },
  {
    title: "DataQA",
    group: "products",
    tag: "Product / Data",
    description: "A unified dashboard for monitoring data quality across clients, including dataset scores, event coverage, deduplication and freshness.",
    status: "Visit ↗",
    size: "half",
    tone: "paper",
    visual: "qa",
    href: "https://dataqa.co/"
  },
  {
    title: "Life is Beautiful",
    group: "career",
    tag: "Festival Marketing / 5 Years",
    description: "Five years helping shape the festival’s growth—progressing from Digital Marketing Specialist to Festival Marketing Manager and leading paid media, email, SMS, fan acquisition, audience strategy and data-driven campaigns.",
    status: "2018–2024",
    size: "wide",
    tone: "red",
    visual: "festival"
  },
  {
    title: "Wynn Resorts",
    group: "career",
    tag: "Digital Strategy / Hospitality",
    description: "Digital strategy at the intersection of luxury hospitality, brand experience and measurable performance.",
    status: "2020–2021",
    size: "medium",
    tone: "ink",
    visual: "resort"
  },
  {
    title: "Uprise Creative Group",
    group: "career",
    tag: "Founder / Lead Designer",
    description: "Founded and led a Las Vegas creative studio for nearly 12 years, creating brand identities, websites, photography, merchandise, artwork and campaign collateral for festivals, artists and entertainment brands.",
    status: "2008–2019",
    size: "wide",
    tone: "baby",
    visual: "uprise"
  },
  {
    title: "This Romantic Tragedy",
    group: "creative",
    tag: "Music / Co-founder",
    description: "Co-founded the Las Vegas post-hardcore band, toured, released music and learned how to build an audience the hard way.",
    status: "2004–2011",
    size: "medium",
    tone: "ink",
    visual: "band"
  },
  {
    title: "Kyle Huender Music",
    group: "creative",
    tag: "Artist / Songwriter",
    description: "Independent music released under my own name across Spotify, Apple Music and other streaming platforms.",
    status: "Listen",
    size: "small",
    tone: "baby",
    visual: "music",
    links: [
      { label: "Spotify ↗", href: "https://open.spotify.com/artist/6zgsiZIpPI5WBcVALLpVkA" },
      { label: "Apple Music ↗", href: "https://music.apple.com/us/search?term=Kyle%20Huender" }
    ]
  },
  {
    title: "Wndrful",
    group: "creative",
    tag: "Brand / Experiment",
    description: "An ongoing exploration of travel, discovery, collecting and the things that make places worth remembering.",
    status: "In development",
    size: "small",
    tone: "baby",
    visual: "topo"
  },
  {
    title: "Motorsports Data",
    group: "creative",
    tag: "Data / Experiment",
    description: "Turning racing data into new statistics, visualizations and narratives about what actually happened on track.",
    status: "Lab",
    size: "small",
    tone: "ink",
    visual: "race"
  },
  {
    title: "Data Infrastructure",
    group: "products",
    tag: "Warehousing / Activation",
    description: "Real-time ingestion, Snowflake modeling, identity resolution and secure activation pipelines built for measurable marketing.",
    status: "Systems",
    size: "small",
    tone: "blue",
    visual: "network"
  }
];

const brands = [
  { name: "Converge Digital", href: "https://www.convergemarketing.com/", domain: "convergemarketing.com" },
  { name: "Life is Beautiful", href: "https://lifeisbeautiful.com/", domain: "lifeisbeautiful.com" },
  { name: "Wynn Resorts", href: "https://www.wynnresorts.com/", domain: "wynnresorts.com" },
  { name: "Live Nation", href: "https://www.livenation.com/", domain: "livenation.com" },
  { name: "Cirque du Soleil", href: "https://www.cirquedusoleil.com/", domain: "cirquedusoleil.com" },
  { name: "Museum of Illusions", href: "https://museumofillusions.com/", domain: "museumofillusions.com" },
  { name: "Insomniac", href: "https://www.insomniac.com/", domain: "insomniac.com" },
  { name: "Danny Wimmer Presents", href: "https://dannywimmerpresents.com/", domain: "dannywimmerpresents.com" },
  { name: "TEG Sport", href: "https://www.tegsport.com.au/", domain: "tegsport.com.au" },
  { name: "Sandbox VR", href: "https://sandboxvr.com/", domain: "sandboxvr.com" },
  { name: "World Rugby", href: "https://www.world.rugby/", domain: "world.rugby" },
  { name: "Sixthman", href: "https://www.sixthman.net/", domain: "sixthman.net" },
  { name: "Rolling Stone", href: "https://www.rollingstone.com/", domain: "rollingstone.com" },
  { name: "PMC", href: "https://www.pmc.com/", domain: "pmc.com" },
  { name: "Medium Rare", href: "https://www.medium-rare.com/", domain: "medium-rare.com" },
  { name: "100X Hospitality", href: "https://100x-hospitality.com/", domain: "100x-hospitality.com" },
  { name: "Bacardi", href: "https://www.bacardi.com/", domain: "bacardi.com" },
  { name: "SEMA Show", href: "https://www.semashow.com/", domain: "semashow.com" },
  { name: "Hightouch", href: "https://hightouch.com/", domain: "hightouch.com" },
  { name: "TIXR", href: "https://www.tixr.com/", domain: "tixr.com" },
  { name: "Green Bay Packers", href: "https://www.packers.com/", domain: "packers.com" },
  { name: "Liverpool FC", href: "https://www.liverpoolfc.com/", domain: "liverpoolfc.com" },
  { name: "RISE Festival", href: "https://risefestival.com/", domain: "risefestival.com" },
  { name: "Chipotle", href: "https://www.chipotle.com/", domain: "chipotle.com" },
  { name: "Warner Bros. Music", href: "https://www.warnerrecords.com/", domain: "warnerrecords.com" },
  { name: "Tradable Bits", href: "https://tradablebits.com/", domain: "tradablebits.com" },
  { name: "Las Vegas Motor Speedway", href: "https://www.lvms.com/", domain: "lvms.com" }
];

const projectGroups = [
  { id: "career", title: "Career & Leadership" },
  { id: "products", title: "Products & Systems" },
  { id: "creative", title: "Creative & Independent" }
];

const projectGrid = document.getElementById("projectGrid");
const brandWall = document.getElementById("brandWall");

function visualMarkup(type) {
  if (type === "race") {
    return `<div class="project-visual visual-race" aria-hidden="true">
      <svg viewBox="0 0 700 400" preserveAspectRatio="none">
        <path d="M-30 290 C80 220, 170 350, 260 230 S410 135, 475 215 S585 350, 760 130" />
        <path d="M-30 315 C80 245, 170 375, 260 255 S410 160, 475 240 S585 375, 760 155" opacity=".45" />
      </svg>
    </div>`;
  }
  return `<div class="project-visual visual-${type}" aria-hidden="true"></div>`;
}

function projectLinksMarkup(links = []) {
  if (!links.length) return "";
  return `<div class="project-links">${links.map(link => `
    <a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
  `).join("")}</div>`;
}

function projectMarkup(project, index) {
  const body = `
    ${visualMarkup(project.visual)}
    <div class="project-top">
      <span class="project-tag">${project.tag}</span>
      <span class="project-status">${project.status}</span>
    </div>
    <div class="project-bottom">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      ${projectLinksMarkup(project.links)}
    </div>`;

  const attrs = `class="project-card reveal" data-size="${project.size}" data-tone="${project.tone}" data-project="${index}"`;
  if (project.href) {
    return `<a ${attrs} href="${project.href}" target="_blank" rel="noreferrer" aria-label="${project.title} — opens in a new tab">${body}</a>`;
  }
  return `<article ${attrs}>${body}</article>`;
}

projectGrid.innerHTML = projectGroups.map(group => {
  const groupProjects = projects.filter(project => project.group === group.id);
  return `<section class="project-group" aria-labelledby="project-group-${group.id}">
    <div class="project-group-heading reveal">
      <h3 id="project-group-${group.id}">${group.title}</h3>
    </div>
    <div class="project-group-grid">
      ${groupProjects.map(projectMarkup).join("")}
    </div>
  </section>`;
}).join("");

function brandSetMarkup(isDuplicate = false) {
  return `<div class="brand-set"${isDuplicate ? ' aria-hidden="true"' : ""}>
    ${brands.map(brand => isDuplicate ? `
      <div class="brand-link">
        <span class="brand-name">${brand.name}</span>
        <span class="brand-url">${brand.domain}<i aria-hidden="true">↗</i></span>
      </div>
    ` : `
      <a class="brand-link" href="${brand.href}" target="_blank" rel="noreferrer">
        <span class="brand-name">${brand.name}</span>
        <span class="brand-url">${brand.domain}<i aria-hidden="true">↗</i></span>
      </a>
    `).join("")}
  </div>`;
}

brandWall.innerHTML = `<div class="brand-track">
  ${brandSetMarkup(true)}
  ${brandSetMarkup()}
  ${brandSetMarkup(true)}
</div>`;

const brandTrack = brandWall.querySelector(".brand-track");
const brandSets = [...brandTrack.querySelectorAll(".brand-set")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let brandLoopWidth = 0;
let brandLoopStart = 0;
let brandAutoPaused = false;
let brandResumeTimer;
let previousBrandFrame = performance.now();

function measureBrandLoop() {
  const previousLoopWidth = brandLoopWidth;
  const previousLoopStart = brandLoopStart;
  const relativePosition = previousLoopWidth
    ? (brandWall.scrollLeft - previousLoopStart) / previousLoopWidth
    : 0;

  brandLoopStart = brandSets[1].offsetLeft;
  brandLoopWidth = brandSets[2].offsetLeft - brandSets[1].offsetLeft;

  if (brandLoopWidth && !brandWall.dataset.positioned) {
    brandWall.scrollLeft = brandLoopStart;
    brandWall.dataset.positioned = "true";
  } else if (brandLoopWidth && previousLoopWidth) {
    brandWall.scrollLeft = brandLoopStart + (relativePosition * brandLoopWidth);
  }
}

function normalizeBrandScroll() {
  if (!brandLoopWidth) return;

  if (brandWall.scrollLeft < brandLoopStart - (brandLoopWidth * 0.5)) {
    brandWall.scrollLeft += brandLoopWidth;
  } else if (brandWall.scrollLeft > brandLoopStart + (brandLoopWidth * 0.5)) {
    brandWall.scrollLeft -= brandLoopWidth;
  }
}

function pauseBrandAuto(resumeAfter = 1400) {
  brandAutoPaused = true;
  window.clearTimeout(brandResumeTimer);
  if (resumeAfter === null) return;
  brandResumeTimer = window.setTimeout(() => {
    brandAutoPaused = false;
    previousBrandFrame = performance.now();
  }, resumeAfter);
}

function animateBrands(now) {
  if (!brandAutoPaused && !document.hidden) {
    const elapsed = Math.min(now - previousBrandFrame, 50);
    brandWall.scrollLeft -= elapsed * 0.032;
    normalizeBrandScroll();
  }

  previousBrandFrame = now;
  window.requestAnimationFrame(animateBrands);
}

measureBrandLoop();
if ("ResizeObserver" in window) {
  new ResizeObserver(measureBrandLoop).observe(brandTrack);
} else {
  window.addEventListener("resize", measureBrandLoop);
}

brandWall.addEventListener("pointerdown", () => pauseBrandAuto(null));
brandWall.addEventListener("pointerup", () => pauseBrandAuto());
brandWall.addEventListener("pointercancel", () => pauseBrandAuto());
brandWall.addEventListener("wheel", () => pauseBrandAuto(1800), { passive: true });
brandWall.addEventListener("keydown", (event) => {
  if (["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(event.key)) {
    pauseBrandAuto(1800);
  }
});
brandWall.addEventListener("focusin", () => pauseBrandAuto(2200));

if (!reducedMotion.matches) {
  window.requestAnimationFrame(animateBrands);
}

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      window.setTimeout(() => {
        entry.target.style.transitionDelay = "0ms";
        entry.target.classList.add("motion-ready");
      }, 950);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });

revealElements.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
  observer.observe(el);
});

const header = document.querySelector("[data-header]");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const careerGrid = document.querySelector(".career-grid");
const careerCards = [...document.querySelectorAll(".career-card")];
let careerFramePending = false;

function updateCareerPath() {
  if (reducedMotion.matches) {
    careerGrid.style.setProperty("--timeline-progress", 1);
    careerCards.forEach(card => card.classList.add("is-active"));
    careerFramePending = false;
    return;
  }

  const gridRect = careerGrid.getBoundingClientRect();
  const viewportTrigger = window.innerHeight * 0.72;
  const pathLength = Math.max(gridRect.height - window.innerHeight * 0.2, 1);
  const progress = Math.min(Math.max((viewportTrigger - gridRect.top) / pathLength, 0), 1);

  careerGrid.style.setProperty("--timeline-progress", progress.toFixed(3));
  careerCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    card.classList.toggle("is-active", cardTop < window.innerHeight * 0.78);
  });
  careerFramePending = false;
}

function queueCareerUpdate() {
  if (careerFramePending) return;
  careerFramePending = true;
  window.requestAnimationFrame(updateCareerPath);
}

updateCareerPath();
window.addEventListener("scroll", queueCareerUpdate, { passive: true });
window.addEventListener("resize", queueCareerUpdate);

const scrollMotionElements = [...document.querySelectorAll([
  ".reveal",
  ".ticker-wrap",
  ".skill-marquee",
  ".footer"
].join(","))];
const directionalMotionElements = [...document.querySelectorAll([
  ".hero .reveal",
  ".manifesto-title",
  ".manifesto-copy",
  ".word",
  ".section-heading",
  ".project-group-heading",
  ".project-card",
  ".skill-group",
  ".contact-title",
  ".contact-copy",
  ".contact-actions"
].join(","))];
const manifestoWords = [...document.querySelectorAll(".word")];
let scrollMotionFramePending = false;

scrollMotionElements.forEach(element => element.classList.add("scroll-focus"));
directionalMotionElements.forEach((element, index) => {
  let direction = index % 2 === 0 ? -1 : 1;
  if (element.matches(".word")) {
    direction = manifestoWords.indexOf(element) % 2 === 0 ? -1 : 1;
  }
  let distance = 36;

  if (element.matches(".word")) distance = 110;
  if (element.matches(".project-card")) distance = 16;
  if (element.matches(".skill-group")) distance = 32;
  if (element.matches(".hero-title, .contact-title")) distance = 60;

  element.dataset.scrollDirection = direction;
  element.dataset.scrollDistance = distance;
  if (element.matches(".manifesto-title, .manifesto-copy, .project-card, .skill-group")) {
    element.dataset.scrollOutward = "true";
  }
});

function updateScrollMotion() {
  if (reducedMotion.matches) {
    scrollMotionElements.forEach(element => {
      element.style.removeProperty("--focus-opacity");
      element.style.removeProperty("--focus-blur");
      element.style.removeProperty("--focus-x");
    });
    scrollMotionFramePending = false;
    return;
  }

  const viewportHeight = window.innerHeight;
  const focalTop = viewportHeight * 0.12;
  const focalBottom = viewportHeight * 0.88;
  const edgeMotionRange = viewportHeight * 0.34;
  const mobileMotionScale = window.innerWidth <= 780 ? 0.55 : 1;
  const atDocumentEnd = window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 8;

  scrollMotionElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + (rect.height * 0.5);
    const lockFinalSection = atDocumentEnd && element.closest("#contact");
    let travel = 0;

    if (!lockFinalSection && elementCenter < focalTop) {
      travel = -Math.min((focalTop - elementCenter) / edgeMotionRange, 1);
    } else if (!lockFinalSection && elementCenter > focalBottom) {
      travel = Math.min((elementCenter - focalBottom) / edgeMotionRange, 1);
    }

    const distanceFromFocus = Math.abs(travel);
    const visibility = 1 - (distanceFromFocus * 0.92);
    let direction = Number(element.dataset.scrollDirection || 0);
    const distance = Number(element.dataset.scrollDistance || 0);
    const elementCenterX = rect.left + (rect.width * 0.5);

    if (element.dataset.scrollOutward === "true") {
      if (elementCenterX < window.innerWidth * 0.45) direction = -1;
      if (elementCenterX > window.innerWidth * 0.55) direction = 1;
    }

    const travelDirection = element.dataset.scrollOutward === "true"
      ? Math.abs(travel)
      : travel;
    const horizontalShift = travelDirection * direction * distance * mobileMotionScale;

    element.style.setProperty("--focus-opacity", visibility.toFixed(3));
    element.style.setProperty("--focus-blur", `${((1 - visibility) * 2.4).toFixed(2)}px`);
    element.style.setProperty("--focus-x", `${horizontalShift.toFixed(2)}px`);
  });

  scrollMotionFramePending = false;
}

function queueScrollMotionUpdate() {
  if (scrollMotionFramePending) return;
  scrollMotionFramePending = true;
  window.requestAnimationFrame(updateScrollMotion);
}

updateScrollMotion();
window.addEventListener("scroll", queueScrollMotionUpdate, { passive: true });
window.addEventListener("resize", queueScrollMotionUpdate);

const glow = document.querySelector(".cursor-glow");
const portrait = document.querySelector("[data-parallax]");
const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (supportsHover) {
  document.body.classList.add("has-pointer");
  window.addEventListener("pointermove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

    const px = (x / window.innerWidth - 0.5) * 16;
    const py = (y / window.innerHeight - 0.5) * 10;
    portrait.style.setProperty("--portrait-x", `${px}px`);
    portrait.style.setProperty("--portrait-y", `${py}px`);
  }, { passive: true });

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--cx", `${x}%`);
      card.style.setProperty("--cy", `${y}%`);
    });
  });
}
