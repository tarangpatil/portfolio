const nameH1 = document.querySelector("h1");
const designation = document.querySelector("#designation");
const profile = document.querySelector("#profile");

async function sleep(ms) {
  if (ms < 0) throw new Error("sleep time must be positive integer");
  await new Promise((res) => setTimeout(res, ms));
}

async function writeName() {
  if (!nameH1) return;
  const str = "<Tarang Patil/>";
  for (let i = 0; i <= str.length; i++) {
    nameH1.textContent = `${str.substring(0, i)}`;
    await sleep(50);
  }
}

async function writeDesignation() {
  if (!designation) return;
  const str = "Software Engineer";
  for (let i = 0; i <= str.length; i++) {
    designation.textContent = `${str.substring(0, i)}`;
    await sleep(50);
  }
}

async function writeProfile() {
  if (!profile) return;
  const str =
    "A curious and passionate Engineer who is adaptable to any circumstances. Life long learner and always on the lookout for knowledge. Quick learner, diligent and punctual to deadlines. Been learning frontend and backend development since 2020 and have up-to-date knowledge about most major technologies.";
  for (let i = 0; i <= str.length; i++) {
    profile.textContent = `${str.substring(0, i)}`;
    await sleep(10);
  }
}

async function writeTimeLine() {
  const timelineRod = document.querySelector("#timeline-rod");
  timelineRod.classList.replace("h-0", "h-80");
}

async function showPccoe() {
  const btechCircle = document.querySelector("#pccoe-circle");
  btechCircle.classList.replace("w-0", "w-8");
  btechCircle.classList.replace("h-0", "h-8");
  await sleep(300);
  const pccoe = document.querySelector("#pccoe");
  pccoe.classList.replace("p-0", "p-4");
  await sleep(300);
  pccoe.classList.replace("-translate-x-1/2", "-translate-x-[calc(100%+4rem)]");
  await sleep(300);
  pccoe.classList.replace("rounded-full", "rounded-md");
  pccoe.classList.replace("max-h-0", "max-h-40");
  pccoe.classList.replace("max-w-0", "max-w-[30vw]");
  pccoe.classList.add("text-black");
}

async function showPHN() {
  const phnCircle = document.querySelector("#phn-circle");
  phnCircle.classList.replace("w-0", "w-8");
  phnCircle.classList.replace("h-0", "h-8");
  await sleep(300);
  const phn = document.querySelector("#phn");
  phn.classList.replace("p-0", "p-4");
  await sleep(300);
  phn.classList.replace("-translate-x-1/2", "translate-x-[4rem]");
  await sleep(300);
  phn.classList.replace("rounded-full", "rounded-md");
  phn.classList.replace("max-h-0", "max-h-40");
  phn.classList.replace("max-w-0", "max-w-[30vw]");
  phn.classList.add("text-black");
}

async function showSemiHyphen() {
  const semiHyphenCircle = document.querySelector("#semi-hyphen-circle");
  semiHyphenCircle.classList.replace("w-0", "w-8");
  semiHyphenCircle.classList.replace("h-0", "h-8");
  await sleep(300);
  const semiHyphen = document.querySelector("#semi-hyphen");
  semiHyphen.classList.replace("p-0", "p-4");
  await sleep(300);
  semiHyphen.classList.replace(
    "-translate-x-1/2",
    "-translate-x-[calc(100%+4rem)]",
  );
  await sleep(300);
  semiHyphen.classList.replace("rounded-full", "rounded-md");
  semiHyphen.classList.replace("max-h-0", "max-h-40");
  semiHyphen.classList.replace("max-w-0", "max-w-[30vw]");
  semiHyphen.classList.add("text-black");
}

const technologiesSect = document.querySelector("#technologies");
const experienceSect = document.querySelector("#experience");
const terminalSect = document.querySelector("#terminal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.replace("opacity-0", "opacity-100");
      } else {
        entry.target.classList.replace("opacity-100", "opacity-0");
      }
    });
  },
  { threshold: window.innerWidth > 768 ? 0.2 : 0.05 },
);

observer.observe(technologiesSect);
observer.observe(experienceSect);
observer.observe(terminalSect);

(async () => {
  await writeName();
  await writeDesignation();
  await writeProfile();
  const education = document.querySelector("#education");
  if (window.innerWidth > 1023) {
    await writeTimeLine();
    await showPccoe();
    await showPHN();
    await showSemiHyphen();
    education.classList.add("hidden");
  } else {
    observer.observe(education);
  }
  await sleep(300);
})();
