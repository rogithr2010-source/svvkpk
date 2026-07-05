const navItems = [
  { file: "index.html", label: "Home" },
  { file: "about.html", label: "About Us" },
  { file: "facilities.html", label: "Facilities" },
  { file: "gallery.html", label: "Gallery" },
  { file: "achievements.html", label: "Achievements" },
  { file: "faculty.html", label: "Chairman's Corner" },
  { file: "admissions.html", label: "Admissions" },
  { file: "contact.html", label: "Contact" }
];

const defaultQuickFacts = [
  { value: "Govt.", label: "Recognized" },
  { value: "1991", label: "Established" },
  { value: "632508", label: "Kaveripakkam" }
];

const quickFacts = defaultQuickFacts.map((fact) => ({ ...fact }));
const admissionPhone = "+919443124350";
const displayPhone = "9443124350";
const schoolEmail = "svvschool.kpk@gmail.com";
const instagramUrl = "https://www.instagram.com/svvs.kpk";
const youtubeUrl = "https://youtube.com/@srivivekanandhavidhyalayakpk";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Sri%20Vivekanandha%20Vidhyalaya%20Group%20of%20Schools%20Kaveripakkam%20632508%20Ranipet%20Tamil%20Nadu";
const whatsappLink =
  "https://wa.me/919443124350?text=Admission%20enquiry%20for%20Sri%20Vivekanandha%20Vidhyalaya";
const latestNewsItems = Array.isArray(window.svvNewsItems) ? window.svvNewsItems : [];
const announcementsVersion = 1;
const defaultAnnouncements = [
  {
    title: "Reading Day",
    date: "04 July 2026",
    category: "School Activity",
    description:
      "Sri Vivekanandha Vidhyalaya celebrated Reading Day to encourage students to develop the habit of reading, improve vocabulary, concentration, knowledge and communication skills.",
    image: "/images/announcements/reading-day-2026.png",
    published: true
  },
  {
    title: "Sports Activity Day",
    date: "04 July 2026",
    category: "Sports",
    description:
      "Sports Activity Day was conducted for Grade 6 students to encourage fitness, team spirit, confidence and active participation in sports.",
    image: "/images/announcements/sports-activity-day-2026.png",
    published: true
  }
];

const defaultHomeFeatures = [
  {
    title: "SSLC Achievements",
    copy: "Class 10 SSLC toppers and verified result highlights are maintained on the achievements page.",
    href: "achievements.html",
    label: "View Toppers"
  },
  {
    title: "School Events",
    copy: "Annual day, recognition moments, school programs, and approved event photographs are grouped in the gallery.",
    href: "gallery.html",
    label: "Open Gallery"
  },
  {
    title: "Sports Activities",
    copy: "Sports day, march-past, team activities, and field practice are part of the school activity calendar.",
    href: "gallery.html",
    label: "See Events"
  },
  {
    title: "Co-Curricular Activities",
    copy: "Stage programs, cultural performances, student projects, and assemblies support learning beyond academics.",
    href: "about.html",
    label: "Learn More"
  }
];
const homeFeatures = defaultHomeFeatures.map((item) => ({ ...item }));

const defaultAboutTabs = {
  vision: {
    title: "Vision",
    copy: "Empowering every child to excel, lead, and contribute to a better society."
  },
  mission: {
    title: "Mission",
    copy: "To provide quality education that nurtures knowledge, character, and lifelong learning."
  },
  history: {
    title: "History",
    copy:
      "The School Founder Mr. S. Pichandi was born in 1961 in Kaveripakkam. He took a Bachelor's degree in Maths from Muthurangam Arts College, Vellore and started his career as a school tutor and education revolutionist in his own town. His education beliefs, fired by his interest in Maths, led him to conceive of an educational programme in which practical learning would complement the development of the mind and intellect through critical understanding. His convictions, along with those of other pioneers, led to the beginning of a new era in Kaveripakkam education. Kaveripakkam people would henceforth be confident and independent minded, and no longer the unquestioning followers of old models and methods.\n\nSri Vivekanandha Vidhyalaya School was founded by him on 1st June 1991 in a small building in Gandhi Road, later moved to Uppu Mettu Street, Kaveripakkam. By the 1990s and 2000s it had already established itself as one of the foremost schools in the village. The school's motto, We Learn to Serve, reflects his deep conviction that a true education is one that promotes service to society. That aim requires the development of character, curiosity, competence, and self-awareness - the main objectives of an enlightened school. About S.V.V School Core Purpose: To develop an educational programme and environment which nurtures boys and girls who will endeavour to be good citizens and distinguish themselves in all walks of life."
  },
  motto: {
    title: "Motto",
    copy: "We Learn to Serve."
  },
  academics: {
    title: "Academics",
    copy: "Classes, curriculum, State Board preparation, and student support."
  },
  activities: {
    title: "Activities",
    copy: "Sports, cultural programs, clubs, assemblies, and student projects."
  }
};

const aboutTabs = JSON.parse(JSON.stringify(defaultAboutTabs));

const academics = [
  { title: "Classes", copy: "KG, primary, middle, high school, and higher-secondary class information." },
  { title: "Curriculum", copy: "Subject lists, assessment pattern, homework rhythm, and term planning." },
  { title: "State Board", copy: "Tamil Nadu State Board sections, exam preparation, and eligibility notes." },
  { title: "Student Support", copy: "Revision routines, parent-facing academic updates, and subject guidance." }
];

const defaultFacilities = [
  {
    title: "Matric Campus",
    copy: "The Matric Campus at Pattamalchavadi Road supports daily classes, assemblies, and parent visits."
  },
  {
    title: "Main Campus",
    copy:
      "The main school campus at Uppu Mettu Street provides an additional learning space for students, supporting classroom routines, campus activities, and the continued growth of Sri Vivekanandha Vidhyalaya in Kaveripakkam."
  }
];

const facilities = defaultFacilities.map((item) => ({ ...item }));

const toppers = [
  {
    rank: "1",
    image: "assets/toppers/topper-1.png",
    filename: "topper-1.png",
    name: "Ilakkiya Sri Parasuraman",
    marks: "491/500",
    note: "Centum in Science"
  },
  {
    rank: "2",
    image: "assets/toppers/topper-2.png",
    filename: "topper-2.png",
    name: "Sri Lakshmi Jayaprakash",
    marks: "485/500",
    note: "Centum in Science"
  },
  {
    rank: "3",
    image: "assets/toppers/topper-3.png",
    filename: "topper-3.png",
    name: "Kishore Venkatesan",
    marks: "483/500",
    note: ""
  },
  {
    rank: "4",
    image: "assets/toppers/topper-4.png",
    filename: "topper-4.png",
    name: "Kishore Saravanan",
    marks: "482/500",
    note: ""
  },
  {
    rank: "5",
    image: "assets/toppers/topper-5.png",
    filename: "topper-5.png",
    name: "R.S. Priyadarshini",
    marks: "478/500",
    note: ""
  }
];

const resultsGlance = [
  { range: "Above 450", count: "8 students" },
  { range: "400-450", count: "15" },
  { range: "350-400", count: "15" },
  { range: "300-350", count: "9" }
];

const teachers = [
  { name: "Kindergarten Team", role: "Early learning, routines, and parent communication.", department: "KG" },
  { name: "Primary Team", role: "Core subjects, reading, writing, numeracy, and activities.", department: "Primary" },
  { name: "Middle School Team", role: "Subject foundations and class teacher support.", department: "Middle" },
  { name: "High School Team", role: "Board readiness, revision, and subject mentoring.", department: "High" },
  { name: "Activities Team", role: "Sports, arts, clubs, and stage programs.", department: "Activities" },
  { name: "Administration", role: "Admissions, records, parent coordination, and office support.", department: "Office" }
];

const admissionSteps = [
  { title: "1. Enquiry", copy: "Parents share student details, class preference, and visit timing." },
  { title: "2. Eligibility", copy: "Age, previous school records, and class readiness are reviewed." },
  { title: "3. Campus Visit", copy: "Families meet the admission desk and understand routines, fees, and facilities." },
  { title: "4. Confirmation", copy: "Documents, fee formalities, and joining instructions are completed." }
];

const activities = [
  { title: "Sports", copy: "Practice sessions, competitions, and annual events." },
  { title: "Cultural", copy: "Celebrations, stage programs, and school functions." },
  { title: "Clubs", copy: "Student groups for interests beyond daily lessons." },
  { title: "Assemblies", copy: "Morning routines, announcements, and recognition." },
  { title: "Projects", copy: "Learning activities, exhibitions, and field work." }
];

const defaultGalleryImages = [
  { src: "assets/school-building.jpg", title: "Matric Campus Building In Kaveripakkam", category: "Campus" },
  { src: "assets/gallery/second-campus-purple.jpeg", title: "Main Campus Building In Kaveripakkam", category: "Campus" },
  { src: "assets/events/WhatsApp Image 2026-06-06 at 14.51.28.jpeg", title: "Students Participating In A Sports Team Photo", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-06 at 14.51.30.jpeg", title: "Annual Day Stage Performance By Students", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.26.56 (1).jpeg", title: "Students Marching During Sports Activities", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.26.56 (2).jpeg", title: "Students Receiving Sports Certificates", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.26.57 (1).jpeg", title: "Students Performing Pom-Pom Drill On Sports Day", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-06 at 14.51.28 (2).jpeg", title: "Traditional Dance Performance On Stage", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-06 at 14.51.29 (2).jpeg", title: "Students In Costume For Annual Day Program", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-06 at 14.51.29.jpeg", title: "Student Dance Performance At Annual Day", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-06 at 14.51.29 (1).jpeg", title: "Student Group Receiving School Recognition", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.26.57.jpeg", title: "Sports Day Student Formation Activity", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.26.58.jpeg", title: "Students Lined Up For Sports Day", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.26.59 (2).jpeg", title: "Fancy Dress Performance By Young Students", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.27.00 (1).jpeg", title: "Cultural Dance Performance By Students", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.27.00 (2).jpeg", title: "Group Dance Performance On School Stage", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.27.00 (3).jpeg", title: "Mythology Stage Play By Students", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.27.00.jpeg", title: "Healthy Food Fancy Dress Activity", category: "Events" },
  { src: "assets/events/WhatsApp Image 2026-06-07 at 09.27.01.jpeg", title: "Confetti Dance Performance At Annual Day", category: "Events" }
];

const galleryImages = defaultGalleryImages.map((item) => ({ ...item }));
const defaultHeroSlides = [
  {
    src: "assets/school-building.jpg",
    title: "Matric Campus",
    copy: "Matric campus for daily learning, assemblies, and school life."
  },
  {
    src: "assets/gallery/main-campus-evening.jpeg",
    title: "Evening Campus View",
    copy: "A clear view of the main campus building and garden."
  },
  {
    src: "assets/gallery/second-campus-purple.jpeg",
    title: "Main Campus",
    copy: "Main campus at Uppu Mettu Street, Kaveripakkam."
  }
];
const heroSlides = defaultHeroSlides.map((item) => ({ ...item }));

const galleryCategories = ["Campus", "Events"];
const adminStorageKey = "svv-school-admin-content-v1";
const adminDashboardKey = "svv-admin-dashboard-v1";
const adminImageOptions = [
  { src: "assets/logo.png", label: "School Logo" },
  { src: "assets/founder-original.png", label: "Founder Portrait" },
  { src: "assets/school-building.jpg", label: "Matric Campus Building" },
  { src: "assets/second-campus.jpg", label: "Main Campus Building" },
  { src: "assets/gallery/second-campus-purple.jpeg", label: "Main Campus Gallery Building" },
  ...defaultGalleryImages.map((item) => ({ src: item.src, label: item.title }))
].filter((item, index, source) => source.findIndex((entry) => entry.src === item.src) === index);

const schoolAddress =
  "Sri Vivekanandha Vidhyalaya Group of Schools. Admissions Enquiry: School Mobile - 94431 24350, School Landline - 04177 290795. N&P Mail - svvschool.kpk@gmail.com. Matriculation Mail - svvmschool.kpk@gmail.com. N&P Campus - Main Campus: Uppu Mettu Street, Kaveripakkam. Matric Campus: Pattamalchavadi Road, Kaveripakkam.";

const oldAboutIntro =
  "Sri Vivekanandha Vidhyalaya Group of Schools has served Kaveripakkam since 1991 with a disciplined State Board learning culture, structured academics, and visible communication for parents.";

const isLegacyFounderCopy = (value = "") => {
  const copy = String(value);
  return (
    copy.includes(["supplied", "founder", "portrait", "only"].join(" ")) ||
    copy ===
      "Founder Mr. S. Pichandi's legacy continues through the school's journey since 1991, with a focus on discipline, service, and confident learning."
  );
};

const aboutIntro =
  "Sri Vivekanandha Vidhyalaya Matriculation School, Kaveripakkam, was established on 1st June 1991 by Mr. S. Pichandi, a visionary educator who believed that quality education has the power to transform lives and uplift society. What began as a humble institution with a commitment to educational excellence has grown into a trusted center of learning serving generations of students.\n\nFor over three decades, the school has been dedicated to providing a nurturing environment that promotes academic achievement, character development, and lifelong learning. We strive to empower students with knowledge, values, and skills that enable them to become confident individuals, responsible citizens, and future leaders.\n\nAt Sri Vivekanandha Vidhyalaya, education extends beyond the classroom. We encourage curiosity, critical thinking, discipline, creativity, and social responsibility, ensuring the holistic development of every child. Guided by our motto, We Learn to Serve, we instill in our students the importance of service, integrity, and compassion.\n\nToday, the school continues to uphold its founding vision by offering quality education that prepares students to excel in an ever-changing world while contributing meaningfully to society.";

let heroSlideIndex = 0;
let heroTimer = null;
let currentGalleryCategory = "Campus";
let currentLightboxItems = [];
let currentLightboxIndex = 0;

const defaultAdminData = () => ({
  site: {
    brandTitle: "Sri Vivekanandha Vidhyalaya",
    brandSubtitle: "Group Of Schools, Kaveripakkam",
    footerText: "Sri Vivekanandha Vidhyalaya Group Of Schools, Kaveripakkam"
  },
  home: {
    eyebrow: "Recognized By The Government Of Tamil Nadu",
    title: "Sri Vivekanandha Vidhyalaya Group Of Schools",
    lead: "State Board school in Kaveripakkam, established in 1991."
  },
  about: {
    eyebrow: "About Us",
    title: "Vision, Mission, History, Academics, Activities, And Motto.",
    intro: aboutIntro,
    founderEyebrow: "Founder’s Message",
    founderTitle: "Arise. Awake. Achieve.",
    founderCopy:
      "Sri Vivekanandha Vidhyalaya was founded with a vision to provide quality education rooted in discipline, values and character. Since 1991, the school has continued its journey of nurturing young minds and helping students grow with confidence, knowledge and responsibility.\n\nOur founder’s vision continues to guide every step of the institution. The school remains committed to academic excellence, moral values, co-curricular development and the overall growth of every child."
  },
  images: {
    logo: "assets/logo.png",
    homeCampus: "assets/school-building.jpg",
    founder: "assets/founder-original.png",
    mainCampus: "assets/school-building.jpg",
    secondCampus: "assets/second-campus.jpg"
  },
  quickFacts: defaultQuickFacts.map((fact) => ({ ...fact })),
  aboutTabs: JSON.parse(JSON.stringify(defaultAboutTabs)),
  facilities: defaultFacilities.map((item) => ({ ...item })),
  homeFeatures: defaultHomeFeatures.map((item) => ({ ...item })),
  newsItems: latestNewsItems.map((item) => ({ ...item })),
  gallery: defaultGalleryImages.map((item) => ({ ...item, visible: true }))
});

const mergeAdminData = (saved = {}) => {
  const defaults = defaultAdminData();
  const savedGallery = Array.isArray(saved.gallery) ? saved.gallery : defaults.gallery;
  const savedNonEventGallery = savedGallery.filter((item) => item.category !== "Events");
  const defaultEventGallery = defaults.gallery.filter((item) => item.category === "Events");
  const mergedHome = { ...defaults.home, ...(saved.home || {}) };
  const oldHomeLeadPrefix = "State Board school in Kaveripakkam, established in 1991, with admissions";
  if (String(mergedHome.lead || "").startsWith(oldHomeLeadPrefix)) {
    mergedHome.lead = defaults.home.lead;
  }
  if (mergedHome.eyebrow === "Recognized by the Government of Tamil Nadu") {
    mergedHome.eyebrow = defaults.home.eyebrow;
  }
  if (mergedHome.title === "Sri Vivekanandha Vidhyalaya Group of Schools") {
    mergedHome.title = defaults.home.title;
  }
  const mergedAbout = { ...defaults.about, ...(saved.about || {}) };
  const oldAboutTitle = ["Vision, mission, history, and principal", "s message."].join("'");
  if (mergedAbout.title === oldAboutTitle || mergedAbout.title === "Vision, mission, history, academics, activities, and motto.") {
    mergedAbout.title = defaults.about.title;
  }
  if (mergedAbout.founderEyebrow === "Founder's Message") {
    mergedAbout.founderEyebrow = defaults.about.founderEyebrow;
  }
  if (!mergedAbout.intro || mergedAbout.intro === oldAboutIntro) {
    mergedAbout.intro = defaults.about.intro;
  }
  if (!mergedAbout.founderCopy || isLegacyFounderCopy(mergedAbout.founderCopy)) {
    mergedAbout.founderCopy = defaults.about.founderCopy;
  }
  const savedAboutTabs = saved.aboutTabs || {};
  const allowedAboutTabs = Object.fromEntries(
    Object.keys(defaults.aboutTabs).map((key) => [key, { ...defaults.aboutTabs[key] }])
  );
  return {
    site: { ...defaults.site, ...(saved.site || {}) },
    home: mergedHome,
    about: mergedAbout,
    images: { ...defaults.images, ...(saved.images || {}) },
    quickFacts: Array.isArray(saved.quickFacts) ? saved.quickFacts : defaults.quickFacts,
    aboutTabs: allowedAboutTabs,
    facilities: defaults.facilities,
    homeFeatures: Array.isArray(saved.homeFeatures) ? saved.homeFeatures : defaults.homeFeatures,
    newsItems: Array.isArray(saved.newsItems)
      ? saved.newsItems.map((item) => ({
          ...item,
          title:
            item.title === "Admissions open for new enquiries"
              ? "Admissions Open For New Enquiries"
              : item.title === "Class 10 SSLC toppers published"
              ? "Class 10 SSLC Toppers Published"
              : item.title === "School events and activities"
              ? "School Events And Activities"
              : item.title
        }))
      : defaults.newsItems,
    gallery: [...savedNonEventGallery, ...defaultEventGallery]
  };
};

const loadAdminData = () => {
  try {
    return mergeAdminData(JSON.parse(localStorage.getItem(adminStorageKey)) || {});
  } catch {
    return defaultAdminData();
  }
};

const saveAdminData = (data) => {
  localStorage.setItem(adminStorageKey, JSON.stringify(mergeAdminData(data)));
};

const deleteAdminData = () => {
  localStorage.removeItem(adminStorageKey);
};

const replaceArray = (target, next) => {
  target.splice(0, target.length, ...next);
};

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const getByPath = (object, path) =>
  path.split(".").reduce((current, key) => (current && Object.prototype.hasOwnProperty.call(current, key) ? current[key] : ""), object);

const setByPath = (object, path, value) => {
  const parts = path.split(".");
  const last = parts.pop();
  const target = parts.reduce((current, key) => {
    current[key] = current[key] || {};
    return current[key];
  }, object);
  target[last] = value;
};

const normalizePublicSrc = (src = "") => (String(src).startsWith("../") ? String(src).slice(3) : String(src));

const loadDashboardData = () => {
  try {
    return JSON.parse(localStorage.getItem(adminDashboardKey) || "{}");
  } catch {
    return {};
  }
};

const normalizeAnnouncement = (item = {}) => ({
  title: item.title || "School Notice",
  date: item.date || "",
  category: item.category || "Notice",
  description: item.description || item.text || "",
  image: item.image || "",
  published: item.published !== false
});

const seedAnnouncementDefaults = () => {
  let dashboard = loadDashboardData();
  if (dashboard.announcementsVersion === announcementsVersion) return dashboard;
  dashboard = {
    ...dashboard,
    announcementsVersion,
    announcements: [
      ...defaultAnnouncements.map((item) => ({ ...item })),
      ...(Array.isArray(dashboard.announcements) ? dashboard.announcements.map(normalizeAnnouncement) : [])
    ]
  };
  try {
    localStorage.setItem(adminDashboardKey, JSON.stringify(dashboard));
  } catch {
    return dashboard;
  }
  return dashboard;
};

const publicImageSrc = (src = "") => {
  const value = String(src).trim();
  if (!value) return "";
  if (/^(https?:|data:|blob:)/.test(value)) return value;
  if (value.startsWith("/")) return "." + value;
  return value;
};

const uniqueBySrc = (items) =>
  items.filter((item, index, source) => item.src && source.findIndex((entry) => entry.src === item.src) === index);

const dashboardGalleryItems = () => {
  const dashboard = loadDashboardData();
  if (!Array.isArray(dashboard.gallery) || !dashboard.gallery.length) return [];
  return dashboard.gallery
    .filter((item) => item.visible !== false)
    .map((item) => ({
      src: normalizePublicSrc(item.src),
      title: item.title || "School photo",
      category: galleryCategories.includes(item.category) ? item.category : "Events"
    }));
};

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const setImage = (selector, src) => {
  document.querySelectorAll(selector).forEach((image) => {
    image.src = src;
  });
};

const renderParagraphs = (value = "") =>
  String(value)
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

const setParagraphs = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.innerHTML = renderParagraphs(value);
  });
};

const applyAdminData = () => {
  const data = loadAdminData();
  const dashboardGallery = dashboardGalleryItems();
  const gallerySource = dashboardGallery.length ? dashboardGallery : data.gallery;

  replaceArray(quickFacts, data.quickFacts.map((fact) => ({ value: fact.value || "", label: fact.label || "" })));
  replaceArray(homeFeatures, data.homeFeatures.map((item) => ({ ...item })));
  replaceArray(latestNewsItems, data.newsItems.map((item) => ({ ...item })));
  Object.keys(aboutTabs).forEach((key) => delete aboutTabs[key]);
  Object.assign(aboutTabs, data.aboutTabs);
  replaceArray(facilities, data.facilities.map((item) => ({ title: item.title || "", copy: item.copy || "" })));
  replaceArray(
    galleryImages,
    gallerySource
      .filter((item) => item.visible !== false && galleryCategories.includes(item.category))
      .map((item) => ({ src: normalizePublicSrc(item.src), title: item.title || "School photo", category: item.category }))
  );
  replaceArray(
    heroSlides,
    uniqueBySrc([
      {
        src: normalizePublicSrc(data.images.homeCampus),
        title: "Matric Campus",
        copy: "A disciplined State Board school in Kaveripakkam since 1991."
      },
      ...defaultHeroSlides,
      ...galleryImages.filter((item) => item.category === "Campus").slice(0, 2)
    ]).slice(0, 4)
  );

  setText(".brand-copy strong", data.site.brandTitle);
  setText(".brand-copy small", data.site.brandSubtitle);
  setText(".site-footer > p:first-child", data.site.footerText);
  setImage(".logo-frame.small img, .hero-logo img", data.images.logo);
  setText(".hero-content .eyebrow", data.home.eyebrow);
  setText(".hero-content h1", data.home.title);
  setText(".hero-content .lead", data.home.lead);
  setImage(".hero-image img", data.images.homeCampus);
  setText(".about .section-text > .eyebrow", data.about.eyebrow);
  setText(".about .section-text h1", data.about.title);
  setParagraphs("[data-about-intro]", data.about.intro);
  setText(".leader-copy .eyebrow", data.about.founderEyebrow);
  setText(".leader-copy h2", data.about.founderTitle);
  setParagraphs("[data-founder-copy]", data.about.founderCopy);
  setImage(".leader-photo img", data.images.founder);
  setImage(".campus-stack .campus-card:nth-child(1) img", data.images.mainCampus);
  setImage(".campus-stack .campus-card:nth-child(2) img", data.images.secondCampus);
};

const currentFile = () => {
  const file = window.location.pathname.split("/").pop();
  return file || "index.html";
};

const markMissingAssets = () => {
  document.querySelectorAll("img[data-required-asset]").forEach((img) => {
    const mark = () => {
      img.closest(".asset-panel")?.classList.add("asset-missing");
      img.closest(".logo-frame")?.classList.add("asset-missing");
    };
    img.addEventListener("error", mark, { once: true });
    if (img.complete && img.naturalWidth === 0) mark();
  });
};

const renderNav = () => {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;
  const activeFile = currentFile();
  nav.innerHTML = navItems
    .map((item) => `<a class="${item.file === activeFile ? "active" : ""}" href="${item.file}" data-nav-link>${item.label}</a>`)
    .join("");
};

const renderSiteFooter = () => {
  const footer = document.querySelector(".site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-brand">
      <strong>Sri Vivekanandha Vidhyalaya</strong>
      <span>Group Of Schools, Kaveripakkam</span>
      <a href="about.html">Read More &gt;&gt;</a>
    </div>
    <div class="footer-block">
      <strong>Follow Us</strong>
      <div class="footer-icons">
        <a href="${instagramUrl}" target="_blank" rel="noreferrer" aria-label="Instagram">
          <img src="assets/icons/instagram.png" alt="Instagram logo" loading="eager" decoding="async" />
        </a>
        <a href="${youtubeUrl}" target="_blank" rel="noreferrer" aria-label="YouTube">
          <img src="assets/icons/youtube.png" alt="YouTube logo" loading="eager" decoding="async" />
        </a>
      </div>
    </div>
    <div class="footer-block footer-contact">
      <a href="${mapUrl}" target="_blank" rel="noreferrer">
        <img src="assets/icons/location-pin.svg" alt="" loading="eager" decoding="async" /> Uppu Mettu Street, Kaveripakkam
      </a>
      <a href="tel:${admissionPhone}">
        <img src="assets/icons/telephone.png" alt="" loading="eager" decoding="async" /> ${displayPhone}
      </a>
      <a href="mailto:${schoolEmail}">
        <img src="assets/icons/gmail.png" alt="" loading="eager" decoding="async" /> ${schoolEmail}
      </a>
    </div>
    <a class="footer-admin-link" href="admin/index.html">Admin</a>
    <p class="copyright-line">© 2026 Sri Vivekanandha Vidhyalaya. All rights reserved.</p>
  `;
};

const renderAnnouncements = () => {
  const target = document.querySelector("[data-announcements]");
  if (!target) return;
  const dashboard = seedAnnouncementDefaults();
  const announcements = Array.isArray(dashboard.announcements)
    ? dashboard.announcements.map(normalizeAnnouncement).filter((item) => item.published)
    : defaultAnnouncements.map((item) => ({ ...item }));
  if (!announcements.length) {
    target.hidden = true;
    target.innerHTML = "";
    return;
  }
  target.hidden = false;
  target.innerHTML = `
    <div class="section-heading compact">
      <p class="eyebrow">Latest Announcements</p>
    </div>
    <div class="announcement-grid">
      ${announcements
        .map(
          (item) => `
            <article class="announcement-card">
              ${
                item.image
                  ? `<img src="${escapeHtml(publicImageSrc(item.image))}" alt="${escapeHtml(item.title)} poster" loading="lazy" decoding="async" />`
                  : ""
              }
              <div>
                <span>${escapeHtml(item.category)}${item.date ? ` · ${escapeHtml(item.date)}` : ""}</span>
                <h2>${escapeHtml(item.title)}</h2>
                <p>${escapeHtml(item.description)}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
};

const renderQuickFacts = () => {
  const target = document.getElementById("quick-facts");
  if (!target) return;
  target.innerHTML = quickFacts
    .map((fact) => `<article class="fact-card"><strong>${fact.value}</strong><span>${fact.label}</span></article>`)
    .join("");
};

const renderHomeFeatures = () => {
  const target = document.getElementById("home-feature-grid");
  if (!target) return;
  target.innerHTML = homeFeatures
    .map(
      (item) => `
        <article class="feature-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.copy)}</p>
          <a href="${item.href}">${escapeHtml(item.label)}</a>
        </article>
      `
    )
    .join("");
};

const renderLatestNews = () => {
  const target = document.getElementById("latest-news-grid");
  if (!target) return;
  const items = latestNewsItems.length ? latestNewsItems : [
    {
      title: "Admissions Open For New Enquiries",
      date: "",
      description: "Parents can contact the school office for admission enquiry and campus visit timing.",
      image: "",
      category: "Notice"
    }
  ];
  target.innerHTML = items
    .map(
      (item) => `
        <article class="news-card">
          ${item.image ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" decoding="async" />` : ""}
          <div>
            <span>${escapeHtml(item.category || "Notice")}${item.date ? ` - ${escapeHtml(item.date)}` : ""}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description || "")}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const setHeroSlide = (index) => {
  const banner = document.querySelector("[data-hero-banner]");
  if (!banner || !heroSlides.length) return;
  heroSlideIndex = (index + heroSlides.length) % heroSlides.length;
  banner.querySelectorAll("[data-hero-slide]").forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === heroSlideIndex);
  });
  banner.querySelectorAll("[data-hero-dot]").forEach((dot, dotIndex) => {
    const isActive = dotIndex === heroSlideIndex;
    dot.classList.toggle("active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
};

const renderHeroBanner = () => {
  const banner = document.querySelector("[data-hero-banner]");
  if (!banner || !heroSlides.length) return;
  banner.innerHTML = `
    <div class="hero-slides">
      ${heroSlides
        .map(
          (slide, index) => `
            <figure class="hero-slide ${index === 0 ? "active" : ""}" data-hero-slide>
              <img
                src="${slide.src}"
                data-required-asset
                alt="${escapeHtml(slide.title)}"
                ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
                decoding="async"
              />
            </figure>
          `
        )
        .join("")}
    </div>
    <div class="hero-slide-controls" aria-label="Hero image controls">
      ${heroSlides
        .map(
          (slide, index) =>
            `<button class="${index === 0 ? "active" : ""}" type="button" data-hero-dot="${index}" aria-label="Show ${escapeHtml(slide.title)}" aria-current="${index === 0 ? "true" : "false"}"></button>`
        )
        .join("")}
    </div>
  `;
  banner.querySelectorAll("[data-hero-dot]").forEach((button) => {
    button.addEventListener("click", () => {
      window.clearInterval(heroTimer);
      setHeroSlide(Number(button.dataset.heroDot));
    });
  });
};

const initHeroBanner = () => {
  if (!document.querySelector("[data-hero-banner]")) return;
  renderHeroBanner();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && heroSlides.length > 1) {
    heroTimer = window.setInterval(() => setHeroSlide(heroSlideIndex + 1), 4600);
  }
};

const renderResultsGlance = () => {
  const target = document.getElementById("results-glance");
  if (!target) return;
  target.innerHTML = resultsGlance
    .map((item) => `<article><strong>${item.range}</strong><span>${item.count}</span></article>`)
    .join("");
};

const renderStaticCards = () => {
  const cards = [
    ["academics-grid", academics, (item) => `<article class="module-card"><strong>${item.title}</strong><p>${item.copy}</p></article>`],
    [
      "rank-list",
      toppers,
      (item) => `
        <article class="rank-item topper-card">
          <strong>${item.rank}</strong>
          <img src="${item.image}" data-required-asset alt="${item.name}" />
          <div>
            <h3>${item.name}</h3>
            <p class="topper-marks">${item.marks}</p>
            ${item.note ? `<p class="topper-note">${item.note}</p>` : ""}
          </div>
        </article>
      `
    ],
    ["admission-steps", admissionSteps, (item) => `<article class="step-card"><h3>${item.title}</h3><p>${item.copy}</p></article>`],
    ["activity-grid", activities, (item) => `<article class="activity-card"><strong>${item.title}</strong><p>${item.copy}</p></article>`]
  ];

  cards.forEach(([id, data, template]) => {
    const target = document.getElementById(id);
    if (target) target.innerHTML = data.map(template).join("");
  });
};

const renderStickyContactBar = () => {
  if (document.querySelector("[data-sticky-contact]")) return;
  document.body.insertAdjacentHTML(
    "beforeend",
    `<nav class="sticky-contact-bar" data-sticky-contact aria-label="Quick admission contact">
      <a href="tel:${admissionPhone}"><img src="assets/icons/telephone.png" alt="" loading="eager" decoding="async" />Call</a>
      <a href="${whatsappLink}" target="_blank" rel="noreferrer"><img src="assets/icons/whatsapp.svg" alt="" loading="eager" decoding="async" />WhatsApp</a>
      <a href="admissions.html">Enquiry</a>
    </nav>`
  );
};

const renderAboutPanel = (key) => {
  const panel = document.querySelector("[data-about-panel]");
  if (!panel) return;
  const entry = aboutTabs[key];
  if (key === "academics" || key === "activities") {
    const items = key === "academics" ? academics : activities;
    panel.innerHTML = `
      <h3>${escapeHtml(entry.title)}</h3>
      <div class="tab-card-grid">
        ${items.map((item) => `<article><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.copy)}</p></article>`).join("")}
      </div>
    `;
  } else {
  panel.innerHTML = `<h3>${escapeHtml(entry.title)}</h3>${renderParagraphs(entry.copy)}`;
  }
  document.querySelectorAll("[data-about-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.aboutTab === key);
  });
};

const initAboutTabs = () => {
  if (!document.querySelector("[data-about-panel]")) return;
  document.querySelectorAll("[data-about-tab]").forEach((button) => {
    button.addEventListener("click", () => renderAboutPanel(button.dataset.aboutTab));
  });
  renderAboutPanel("vision");
};

const initAccordion = () => {
  const container = document.getElementById("facilities-accordion");
  if (!container) return;
  container.innerHTML = facilities
    .map(
      (item, index) => `
        <article class="accordion-item ${index === 0 ? "open" : ""}">
          <button type="button" aria-expanded="${index === 0 ? "true" : "false"}">${item.title}</button>
          <div class="accordion-panel">${item.copy}</div>
        </article>
      `
    )
    .join("");

  container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion-item");
      const willOpen = !item.classList.contains("open");
      container.querySelectorAll(".accordion-item").forEach((entry) => {
        entry.classList.remove("open");
        entry.querySelector("button").setAttribute("aria-expanded", "false");
      });
      item.classList.toggle("open", willOpen);
      button.setAttribute("aria-expanded", String(willOpen));
    });
  });
};

const renderTeachers = (active = "All") => {
  const filters = document.getElementById("faculty-filters");
  const grid = document.getElementById("teacher-grid");
  if (!filters || !grid) return;
  const departments = ["All", ...new Set(teachers.map((teacher) => teacher.department))];

  filters.innerHTML = departments
    .map((department) => `<button class="${department === active ? "active" : ""}" type="button" data-faculty-filter="${department}">${department}</button>`)
    .join("");

  grid.innerHTML = teachers
    .filter((teacher) => active === "All" || teacher.department === active)
    .map((teacher) => `<article class="teacher-card"><h3>${teacher.name}</h3><p>${teacher.role}</p><span>${teacher.department}</span></article>`)
    .join("");

  filters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => renderTeachers(button.dataset.facultyFilter));
  });
};

const renderGallery = (active = "Campus") => {
  const filters = document.getElementById("gallery-filters");
  const grid = document.getElementById("gallery-grid");
  if (!filters || !grid) return;
  const activeCategory = galleryCategories.includes(active) ? active : "Campus";
  currentGalleryCategory = activeCategory;
  currentLightboxItems = galleryImages.filter((item) => item.category === activeCategory);

  filters.innerHTML = galleryCategories
    .map((category) => {
      const count = galleryImages.filter((item) => item.category === category).length;
      return `<button class="${category === activeCategory ? "active" : ""}" type="button" data-gallery-filter="${category}">${category}<span>${count}</span></button>`;
    })
    .join("");

  grid.innerHTML = currentLightboxItems
    .map(
      (item, index) => `
        <button class="gallery-card" type="button" aria-label="Preview ${escapeHtml(item.title)}" data-gallery-index="${index}">
          <img src="${item.src}" data-required-asset alt="${escapeHtml(item.title)}" loading="lazy" decoding="async" />
        </button>
      `
    )
    .join("");

  grid.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => openLightbox(Number(button.dataset.galleryIndex)));
  });
  optimizeImages();
};

const initGalleryControls = () => {
  document.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-gallery-filter]");
    if (!filterButton) return;
    renderGallery(filterButton.dataset.galleryFilter);
  });
};

const updateLightbox = () => {
  const dialog = document.querySelector("[data-lightbox]");
  if (!dialog) return;
  const image = dialog.querySelector("[data-lightbox-image]");
  const counter = dialog.querySelector("[data-lightbox-counter]");
  const item = currentLightboxItems[currentLightboxIndex];
  if (!item) return;
  image.src = item.src;
  image.alt = item.title;
  if (counter) counter.textContent = `${currentLightboxIndex + 1} of ${currentLightboxItems.length}`;
};

const openLightbox = (index = 0) => {
  const dialog = document.querySelector("[data-lightbox]");
  if (!dialog || !currentLightboxItems.length) return;
  currentLightboxIndex = (index + currentLightboxItems.length) % currentLightboxItems.length;
  updateLightbox();
  dialog.showModal();
};

const stepLightbox = (direction) => {
  if (!currentLightboxItems.length) return;
  currentLightboxIndex = (currentLightboxIndex + direction + currentLightboxItems.length) % currentLightboxItems.length;
  updateLightbox();
};

const initLightbox = () => {
  const dialog = document.querySelector("[data-lightbox]");
  const close = document.querySelector("[data-lightbox-close]");
  if (!dialog || !close) return;
  const prev = dialog.querySelector("[data-lightbox-prev]");
  const next = dialog.querySelector("[data-lightbox-next]");
  close.addEventListener("click", () => dialog.close());
  prev?.addEventListener("click", () => stepLightbox(-1));
  next?.addEventListener("click", () => stepLightbox(1));
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") stepLightbox(-1);
    if (event.key === "ArrowRight") stepLightbox(1);
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
};

const optimizeImages = () => {
  document.querySelectorAll("img").forEach((image) => {
    image.decoding = "async";
    if (
      !image.closest(".logo-frame") &&
      !image.closest("[data-hero-banner]") &&
      !image.closest(".site-footer") &&
      !image.closest(".sticky-contact-bar") &&
      !image.hasAttribute("loading")
    ) {
      image.loading = "lazy";
    }
  });
};

const initForms = () => {
  const form = document.querySelector("[data-enquiry-form]");
  if (form) {
    const phoneInput = form.querySelector('input[name="phone"]');
    phoneInput?.addEventListener("input", () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const student = data.get("student").toString().trim();
      const dob = data.get("dob").toString().trim();
      const guardian = data.get("guardian").toString().trim();
      const phone = data.get("phone").toString().trim();
      const email = data.get("email").toString().trim();
      const className = data.get("class").toString();
      const validPhone = /^\d{10}$/.test(phone);
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (student && guardian && validPhone && validEmail && className) {
        const submissions = JSON.parse(localStorage.getItem("svv-admission-enquiries-v1") || "[]");
        submissions.unshift({
          student,
          dob,
          guardian,
          parent: guardian,
          phone: `+91${phone}`,
          email,
          className,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem("svv-admission-enquiries-v1", JSON.stringify(submissions));
      }
      document.querySelector("[data-form-status]").textContent =
        student && guardian && validPhone && validEmail && className
          ? `Thanks, ${guardian}. ${student}'s enquiry for ${className} is ready for office follow-up.`
          : "Enter a valid 10 digit phone number, Mail ID, and complete the required fields.";
      if (student && guardian && validPhone && validEmail && className) form.reset();
    });
  }

  const copyButton = document.querySelector("[data-copy-address]");
  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const status = document.querySelector("[data-copy-status]");
      try {
        await navigator.clipboard.writeText(schoolAddress);
        status.textContent = "Address copied.";
      } catch {
        status.textContent = schoolAddress;
      }
    });
  }
};

const imageSelect = (path, value) => `
  <select data-admin-path="${path}">
    ${adminImageOptions
      .map((option) => `<option value="${option.src}" ${option.src === value ? "selected" : ""}>${option.label}</option>`)
      .join("")}
  </select>
`;

const fieldControl = (label, path, value, multiline = false) => `
  <label class="admin-field">
    <span>${label}</span>
    ${
      multiline
        ? `<textarea rows="4" data-admin-path="${path}">${escapeHtml(value)}</textarea>`
        : `<input type="text" value="${escapeHtml(value)}" data-admin-path="${path}" />`
    }
  </label>
`;

const renderAdminDashboard = () => {
  const dashboard = document.querySelector("[data-admin-dashboard]");
  if (!dashboard) return;
  const data = loadAdminData();
  const aboutEntries = Object.entries(data.aboutTabs);

  dashboard.innerHTML = `
    <form class="admin-form" data-admin-form>
      <section class="admin-panel">
        <div class="admin-panel-heading">
          <p class="eyebrow">Site</p>
          <h2>Header, Footer, And Home Page Text</h2>
        </div>
        <div class="admin-grid">
          ${fieldControl("Brand Title", "site.brandTitle", data.site.brandTitle)}
          ${fieldControl("Brand Subtitle", "site.brandSubtitle", data.site.brandSubtitle)}
          ${fieldControl("Footer Text", "site.footerText", data.site.footerText)}
          ${fieldControl("Home Eyebrow", "home.eyebrow", data.home.eyebrow)}
          ${fieldControl("Home Title", "home.title", data.home.title)}
          ${fieldControl("Home Paragraph", "home.lead", data.home.lead, true)}
        </div>
      </section>

      <section class="admin-panel">
        <div class="admin-panel-heading">
          <p class="eyebrow">Home Highlights</p>
          <h2>Homepage Achievement, Events, Sports, And Co-Curricular Cards</h2>
        </div>
        <div class="admin-list">
          ${data.homeFeatures
            .map(
              (item, index) => `
                <div class="admin-row">
                  <label class="admin-field"><span>Title</span><input type="text" value="${escapeHtml(item.title)}" data-admin-home-feature="${index}" data-admin-home-feature-field="title" /></label>
                  <label class="admin-field wide"><span>Copy</span><textarea rows="3" data-admin-home-feature="${index}" data-admin-home-feature-field="copy">${escapeHtml(item.copy)}</textarea></label>
                  <label class="admin-field"><span>Link</span><input type="text" value="${escapeHtml(item.href)}" data-admin-home-feature="${index}" data-admin-home-feature-field="href" /></label>
                  <label class="admin-field"><span>Button</span><input type="text" value="${escapeHtml(item.label)}" data-admin-home-feature="${index}" data-admin-home-feature-field="label" /></label>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="admin-panel">
        <div class="admin-panel-heading">
          <p class="eyebrow">Latest News</p>
          <h2>Homepage News And Announcement Cards</h2>
        </div>
        <div class="admin-list">
          ${data.newsItems
            .map(
              (item, index) => `
                <div class="admin-row">
                  <label class="admin-field"><span>Title</span><input type="text" value="${escapeHtml(item.title)}" data-admin-news="${index}" data-admin-news-field="title" /></label>
                  <label class="admin-field"><span>Date</span><input type="text" value="${escapeHtml(item.date || "")}" data-admin-news="${index}" data-admin-news-field="date" /></label>
                  <label class="admin-field"><span>Category</span><input type="text" value="${escapeHtml(item.category || "")}" data-admin-news="${index}" data-admin-news-field="category" /></label>
                  <label class="admin-field wide"><span>Description</span><textarea rows="3" data-admin-news="${index}" data-admin-news-field="description">${escapeHtml(item.description || "")}</textarea></label>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="admin-panel">
        <div class="admin-panel-heading">
          <p class="eyebrow">Images</p>
          <h2>Main Image Controls</h2>
        </div>
        <div class="admin-grid">
          <label class="admin-field"><span>Logo</span>${imageSelect("images.logo", data.images.logo)}</label>
          <label class="admin-field"><span>Home Campus Image</span>${imageSelect("images.homeCampus", data.images.homeCampus)}</label>
          <label class="admin-field"><span>Founder Portrait</span>${imageSelect("images.founder", data.images.founder)}</label>
          <label class="admin-field"><span>Facilities Matric Campus</span>${imageSelect("images.mainCampus", data.images.mainCampus)}</label>
          <label class="admin-field"><span>Facilities Main Campus</span>${imageSelect("images.secondCampus", data.images.secondCampus)}</label>
        </div>
      </section>

      <section class="admin-panel">
        <div class="admin-panel-heading">
          <p class="eyebrow">About</p>
          <h2>About Page Content</h2>
        </div>
        <div class="admin-grid">
          ${fieldControl("About Eyebrow", "about.eyebrow", data.about.eyebrow)}
          ${fieldControl("About Heading", "about.title", data.about.title)}
          ${fieldControl("About Intro", "about.intro", data.about.intro, true)}
          ${fieldControl("Founder Eyebrow", "about.founderEyebrow", data.about.founderEyebrow)}
          ${fieldControl("Founder Heading", "about.founderTitle", data.about.founderTitle)}
          ${fieldControl("Founder Copy", "about.founderCopy", data.about.founderCopy, true)}
        </div>
      </section>

      <section class="admin-panel">
        <div class="admin-panel-heading">
          <p class="eyebrow">Facts</p>
          <h2>Home Quick Facts</h2>
        </div>
        <div class="admin-list">
          ${data.quickFacts
            .map(
              (fact, index) => `
                <div class="admin-row">
                  <label class="admin-field"><span>Value</span><input type="text" value="${escapeHtml(fact.value)}" data-admin-fact="${index}" data-admin-fact-field="value" /></label>
                  <label class="admin-field"><span>Label</span><input type="text" value="${escapeHtml(fact.label)}" data-admin-fact="${index}" data-admin-fact-field="label" /></label>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="admin-panel">
        <div class="admin-panel-heading">
          <p class="eyebrow">Tabs</p>
          <h2>Vision, Mission, History, Academics, Activities, And Motto</h2>
        </div>
        <div class="admin-list">
          ${aboutEntries
            .map(
              ([key, entry]) => `
                <div class="admin-row">
                  <label class="admin-field"><span>${entry.title} Title</span><input type="text" value="${escapeHtml(entry.title)}" data-admin-about-tab="${key}" data-admin-about-field="title" /></label>
                  <label class="admin-field wide"><span>${entry.title} Copy</span><textarea rows="3" data-admin-about-tab="${key}" data-admin-about-field="copy">${escapeHtml(entry.copy)}</textarea></label>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="admin-panel">
        <div class="admin-panel-heading">
          <p class="eyebrow">Facilities</p>
          <h2>Facilities Page Cards</h2>
        </div>
        <div class="admin-list">
          ${data.facilities
            .map(
              (item, index) => `
                <div class="admin-row">
                  <label class="admin-field"><span>Title</span><input type="text" value="${escapeHtml(item.title)}" data-admin-facility="${index}" data-admin-facility-field="title" /></label>
                  <label class="admin-field wide"><span>Copy</span><textarea rows="3" data-admin-facility="${index}" data-admin-facility-field="copy">${escapeHtml(item.copy)}</textarea></label>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="admin-panel">
        <div class="admin-panel-heading">
          <p class="eyebrow">Gallery</p>
          <h2>Show, Hide, Rename, And Move Images</h2>
        </div>
        <div class="admin-row admin-add-row">
          <label class="admin-field"><span>Add Supplied Image</span>
            <select data-admin-new-gallery-src>
              <option value="">Choose an image</option>
              ${adminImageOptions.map((option) => `<option value="${option.src}">${option.label}</option>`).join("")}
            </select>
          </label>
          <label class="admin-field"><span>New Image Title</span><input type="text" data-admin-new-gallery-title /></label>
          <label class="admin-field"><span>New Image Section</span>
            <select data-admin-new-gallery-category>
              ${galleryCategories.map((category) => `<option value="${category}">${category}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="admin-gallery-list">
          ${data.gallery
            .map(
              (item, index) => `
                <article class="admin-gallery-item">
                  <img src="${item.src}" alt="${escapeHtml(item.title)}" />
                  <div class="admin-gallery-fields">
                    <label class="admin-check"><input type="checkbox" ${item.visible !== false ? "checked" : ""} data-admin-gallery="${index}" data-admin-gallery-field="visible" /> Show this image</label>
                    <label class="admin-field"><span>Title</span><input type="text" value="${escapeHtml(item.title)}" data-admin-gallery="${index}" data-admin-gallery-field="title" /></label>
                    <label class="admin-field"><span>Section</span>
                      <select data-admin-gallery="${index}" data-admin-gallery-field="category">
                        ${galleryCategories.map((category) => `<option value="${category}" ${item.category === category ? "selected" : ""}>${category}</option>`).join("")}
                      </select>
                    </label>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <div class="admin-actions">
        <button class="button primary" type="submit">Save Changes</button>
        <button class="button secondary" type="button" data-admin-reset>Reset Defaults</button>
        <a class="button secondary" href="gallery.html">Open Gallery</a>
        <span data-admin-status></span>
      </div>
    </form>
  `;

  const form = dashboard.querySelector("[data-admin-form]");
  const status = dashboard.querySelector("[data-admin-status]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const next = loadAdminData();

    form.querySelectorAll("[data-admin-path]").forEach((input) => setByPath(next, input.dataset.adminPath, input.value));
    form.querySelectorAll("[data-admin-fact]").forEach((input) => {
      next.quickFacts[Number(input.dataset.adminFact)][input.dataset.adminFactField] = input.value;
    });
    form.querySelectorAll("[data-admin-about-tab]").forEach((input) => {
      next.aboutTabs[input.dataset.adminAboutTab][input.dataset.adminAboutField] = input.value;
    });
    form.querySelectorAll("[data-admin-facility]").forEach((input) => {
      next.facilities[Number(input.dataset.adminFacility)][input.dataset.adminFacilityField] = input.value;
    });
    form.querySelectorAll("[data-admin-home-feature]").forEach((input) => {
      next.homeFeatures[Number(input.dataset.adminHomeFeature)][input.dataset.adminHomeFeatureField] = input.value;
    });
    form.querySelectorAll("[data-admin-news]").forEach((input) => {
      next.newsItems[Number(input.dataset.adminNews)][input.dataset.adminNewsField] = input.value;
    });
    form.querySelectorAll("[data-admin-gallery]").forEach((input) => {
      const galleryItem = next.gallery[Number(input.dataset.adminGallery)];
      galleryItem[input.dataset.adminGalleryField] = input.type === "checkbox" ? input.checked : input.value;
    });

    const newGallerySrc = form.querySelector("[data-admin-new-gallery-src]").value;
    if (newGallerySrc) {
      const selected = adminImageOptions.find((item) => item.src === newGallerySrc);
      const newGalleryTitle = form.querySelector("[data-admin-new-gallery-title]").value.trim() || selected?.label || "School photo";
      const newGalleryCategory = form.querySelector("[data-admin-new-gallery-category]").value;
      next.gallery.push({ src: newGallerySrc, title: newGalleryTitle, category: newGalleryCategory, visible: true });
    }

    saveAdminData(next);
    applyAdminData();
    status.textContent = "Saved. Refresh any open page to see the changes there.";
  });

  dashboard.querySelector("[data-admin-reset]").addEventListener("click", () => {
    deleteAdminData();
    applyAdminData();
    renderAdminDashboard();
  });
};

const initNav = () => {
  const toggle = document.querySelector("[data-nav-toggle]");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
};

const initHeader = () => {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  update();
  window.addEventListener("scroll", update, { passive: true });
};

document.addEventListener("DOMContentLoaded", () => {
  applyAdminData();
  renderNav();
  renderSiteFooter();
  renderAnnouncements();
  renderQuickFacts();
  renderHomeFeatures();
  renderLatestNews();
  initHeroBanner();
  renderResultsGlance();
  renderStaticCards();
  initAboutTabs();
  initAccordion();
  renderTeachers();
  renderGallery();
  initGalleryControls();
  initLightbox();
  initForms();
  renderAdminDashboard();
  renderStickyContactBar();
  initNav();
  initHeader();
  optimizeImages();
  markMissingAssets();
});
