const root = document.getElementById("admin-root");
const sessionKey = "svv-admin-session-v1";
const contentKey = "svv-school-admin-content-v1";
const enquiryKey = "svv-admission-enquiries-v1";
const dashboardKey = "svv-admin-dashboard-v1";
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

const sections = [
  "Pages",
  "Gallery",
  "Toppers",
  "Chairman's Corner",
  "Announcements",
  "Admission Enquiries"
];

const defaultDashboard = {
  uploads: {},
  gallery: [
    { src: "../assets/school-building.jpg", title: "Matric Campus Building", category: "Campus", visible: true },
    { src: "../assets/gallery/second-campus-purple.jpeg", title: "Main Campus Building", category: "Campus", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-06 at 14.51.28.jpeg", title: "WhatsApp Image 2026-06-06 at 14.51.28.jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-06 at 14.51.30.jpeg", title: "WhatsApp Image 2026-06-06 at 14.51.30.jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.26.56 (1).jpeg", title: "WhatsApp Image 2026-06-07 at 09.26.56 (1).jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.26.56 (2).jpeg", title: "WhatsApp Image 2026-06-07 at 09.26.56 (2).jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.26.57 (1).jpeg", title: "WhatsApp Image 2026-06-07 at 09.26.57 (1).jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-06 at 14.51.28 (2).jpeg", title: "WhatsApp Image 2026-06-06 at 14.51.28 (2).jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-06 at 14.51.29 (2).jpeg", title: "WhatsApp Image 2026-06-06 at 14.51.29 (2).jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-06 at 14.51.29.jpeg", title: "WhatsApp Image 2026-06-06 at 14.51.29.jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-06 at 14.51.29 (1).jpeg", title: "WhatsApp Image 2026-06-06 at 14.51.29 (1).jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.26.57.jpeg", title: "WhatsApp Image 2026-06-07 at 09.26.57.jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.26.58.jpeg", title: "WhatsApp Image 2026-06-07 at 09.26.58.jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.26.59 (2).jpeg", title: "WhatsApp Image 2026-06-07 at 09.26.59 (2).jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.27.00 (1).jpeg", title: "WhatsApp Image 2026-06-07 at 09.27.00 (1).jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.27.00 (2).jpeg", title: "WhatsApp Image 2026-06-07 at 09.27.00 (2).jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.27.00 (3).jpeg", title: "WhatsApp Image 2026-06-07 at 09.27.00 (3).jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.27.00.jpeg", title: "WhatsApp Image 2026-06-07 at 09.27.00.jpeg", category: "Events", visible: true },
    { src: "../assets/events/WhatsApp Image 2026-06-07 at 09.27.01.jpeg", title: "WhatsApp Image 2026-06-07 at 09.27.01.jpeg", category: "Events", visible: true }
  ],
  announcementsVersion,
  announcements: defaultAnnouncements.map((item) => ({ ...item })),
  notes: {
    pages: "",
    gallery: "",
    toppers: "",
    chairman: ""
  }
};

const readJson = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const getContent = () => readJson(contentKey, {});
const getDashboard = () => {
  const saved = readJson(dashboardKey, {});
  const dashboard = {
    ...defaultDashboard,
    ...saved,
    notes: { ...defaultDashboard.notes, ...(saved.notes || {}) },
    uploads: { ...defaultDashboard.uploads, ...(saved.uploads || {}) },
    gallery: Array.isArray(saved.gallery) ? saved.gallery : defaultDashboard.gallery,
    announcements:
      saved.announcementsVersion === announcementsVersion && Array.isArray(saved.announcements)
        ? saved.announcements.map(normalizeAnnouncement)
        : [
            ...defaultAnnouncements.map((item) => ({ ...item })),
            ...(Array.isArray(saved.announcements) ? saved.announcements.map(normalizeAnnouncement) : [])
          ],
    announcementsVersion
  };
  if (saved.announcementsVersion !== announcementsVersion) writeJson(dashboardKey, dashboard);
  return dashboard;
};

const normalizeAnnouncement = (item = {}) => ({
  title: item.title || "School Notice",
  date: item.date || "",
  category: item.category || "Notice",
  description: item.description || item.text || "",
  image: item.image || "",
  published: item.published !== false
});

const adminImageSrc = (src = "") => {
  const value = String(src).trim();
  if (!value) return "../assets/logo.png";
  if (/^(https?:|data:|blob:)/.test(value)) return value;
  if (value.startsWith("/")) return ".." + value;
  if (value.startsWith("../")) return value;
  return "../" + value;
};

const saveContentField = (path, value) => {
  const content = getContent();
  const parts = path.split(".");
  const last = parts.pop();
  const target = parts.reduce((current, key) => {
    current[key] = current[key] || {};
    return current[key];
  }, content);
  target[last] = value;
  writeJson(contentKey, content);
};

const saveDashboard = (dashboard, statusText = "Saved.") => {
  writeJson(dashboardKey, dashboard);
  const status = document.querySelector("[data-status]");
  if (status) status.textContent = statusText;
};

const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const renderLogin = () => {
  root.innerHTML = `
    <section class="login-page">
      <form class="login-card" data-login-form>
        <div class="login-brand">
          <img src="../assets/logo.png" alt="Sri Vivekanandha Vidhyalaya crest" />
          <h1>Admin Dashboard</h1>
          <p>Sri Vivekanandha Vidhyalaya</p>
        </div>
        <label class="field">Username<input type="text" name="username" autocomplete="username" required /></label>
        <label class="field">Password<input type="password" name="password" autocomplete="current-password" required /></label>
        <button class="button primary" type="submit">Log In</button>
        <p class="status" data-login-status aria-live="polite"></p>
      </form>
    </section>
  `;

  root.querySelector("[data-login-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const username = form.username.value.trim();
    const password = form.password.value;
    if (username !== "admin" || password !== "svv@1991") {
      root.querySelector("[data-login-status]").textContent = "Invalid username or password.";
      return;
    }
    sessionStorage.setItem(sessionKey, "1");
    renderDashboard("Pages");
  });
};

const panelIntro = (title, copy) => `
  <div class="panel-title">
    <h1>${title}</h1>
    <p>${copy}</p>
  </div>
`;

const uploadControl = (key, label, current) => `
  <article class="image-card">
    ${current ? `<img src="${current}" alt="${escapeHtml(label)} preview" />` : `<img src="../assets/logo.png" alt="${escapeHtml(label)} default preview" />`}
    <label class="field">${label}<input type="file" accept="image/*" data-upload-key="${key}" /></label>
  </article>
`;

const renderPagesPanel = () => {
  const content = getContent();
  return `
    ${panelIntro("Pages", "Edit core website text used by the public pages.")}
    <div class="grid">
      <label class="field">Home Headline<input data-content-path="home.title" value="${escapeHtml(content.home?.title || "")}" /></label>
      <label class="field">Home Eyebrow<input data-content-path="home.eyebrow" value="${escapeHtml(content.home?.eyebrow || "")}" /></label>
      <label class="field">Home Paragraph<textarea rows="5" data-content-path="home.lead">${escapeHtml(content.home?.lead || "")}</textarea></label>
      <label class="field">About Intro<textarea rows="5" data-content-path="about.intro">${escapeHtml(content.about?.intro || "")}</textarea></label>
    </div>
  `;
};

const renderImagePanel = (title, note, keys) => {
  const dashboard = getDashboard();
  return `
    ${panelIntro(title, note)}
    <div class="cards">
      ${keys.map(([key, label]) => uploadControl(key, label, dashboard.uploads[key])).join("")}
    </div>
  `;
};

const renderGalleryManager = (filter = "All") => {
  const dashboard = getDashboard();
  const items = dashboard.gallery.filter((item) => filter === "All" || item.category === filter);
  return `
    ${panelIntro("Gallery", "Current gallery images. Delete, replace, move between Campus and Events, or add more.")}
    <div class="gallery-toolbar">
      ${["All", "Campus", "Events"].map((category) => `<button class="button ${category === filter ? "primary" : "secondary"}" type="button" data-gallery-filter="${category}">${category}</button>`).join("")}
    </div>
    <div class="gallery-add">
      <label class="field">Add Image<input type="file" accept="image/*" data-gallery-add-file /></label>
      <label class="field">Title<input type="text" data-gallery-add-title /></label>
      <label class="field">Section
        <select data-gallery-add-category>
          <option>Campus</option>
          <option>Events</option>
        </select>
      </label>
      <button class="button primary" type="button" data-gallery-add>Add More</button>
    </div>
    <div class="gallery-admin-grid">
      ${items
        .map(
          (item) => `
            <article class="gallery-admin-card ${item.visible === false ? "is-hidden" : ""}">
              <img src="${item.src}" alt="${escapeHtml(item.title)}" />
              <div class="gallery-admin-fields">
                <label class="field">Title<input type="text" value="${escapeHtml(item.title)}" data-gallery-title="${item.src}" /></label>
                <label class="field">Section
                  <select data-gallery-category="${item.src}">
                    <option ${item.category === "Campus" ? "selected" : ""}>Campus</option>
                    <option ${item.category === "Events" ? "selected" : ""}>Events</option>
                  </select>
                </label>
                <label class="field">Replace Image<input type="file" accept="image/*" data-gallery-replace="${item.src}" /></label>
                <div class="gallery-actions">
                  <button class="button secondary" type="button" data-gallery-toggle="${item.src}">${item.visible === false ? "Show" : "Hide"}</button>
                  <button class="button secondary danger" type="button" data-gallery-delete="${item.src}">Delete</button>
                </div>
              </div>
            </article>
          `
        )
        .join("") || `<article class="mini-card"><p>No images in this section.</p></article>`}
    </div>
  `;
};

const renderToppersPanel = () =>
  renderImagePanel("Toppers", "Upload or replace topper photos and maintain result notes.", [
    ["topper-1", "Topper 1 Photo"],
    ["topper-2", "Topper 2 Photo"],
    ["topper-3", "Topper 3 Photo"],
    ["topper-4", "Topper 4 Photo"],
    ["topper-5", "Topper 5 Photo"]
  ]);

const renderChairmanPanel = () => {
  const dashboard = getDashboard();
  return `
    ${panelIntro("Chairman's Corner", "Update chairman text and recognition images.")}
    <div class="grid">
      <label class="field">Chairman’s Message<textarea rows="7" data-note-key="chairman">${escapeHtml(dashboard.notes.chairman || "")}</textarea></label>
    </div>
    <div class="cards">
      ${uploadControl("chairman-main", "Chairman Header Photo", dashboard.uploads["chairman-main"])}
      ${uploadControl("chairman-award-1", "Recognition Photo 1", dashboard.uploads["chairman-award-1"])}
      ${uploadControl("chairman-award-2", "Recognition Photo 2", dashboard.uploads["chairman-award-2"])}
      ${uploadControl("chairman-award-3", "Recognition Photo 3", dashboard.uploads["chairman-award-3"])}
    </div>
  `;
};

const renderAnnouncementsPanel = () => {
  const dashboard = getDashboard();
  return `
    ${panelIntro("Announcements", "Add, edit, delete, and publish About Us page announcements.")}
    <div class="announcement-add">
      <label class="field">Title<input type="text" data-announcement-new-field="title" /></label>
      <label class="field">Date<input type="text" data-announcement-new-field="date" placeholder="04 July 2026" /></label>
      <label class="field">Category<input type="text" data-announcement-new-field="category" /></label>
      <label class="field">Image Path Or URL<input type="text" data-announcement-new-field="image" placeholder="/images/announcements/example.png" /></label>
      <label class="field wide">Short Description<textarea rows="3" data-announcement-new-field="description"></textarea></label>
    </div>
    <button class="button primary" type="button" data-add-announcement>Post Announcement</button>
    <div class="announcement-admin-list">
      ${dashboard.announcements
        .map(
          (item, index) => `
            <article class="announcement-admin-card">
              <img src="${escapeHtml(adminImageSrc(item.image))}" alt="${escapeHtml(item.title)} preview" />
              <div class="announcement-admin-fields">
                <label class="field">Title<input type="text" value="${escapeHtml(item.title)}" data-announcement-index="${index}" data-announcement-field="title" /></label>
                <label class="field">Date<input type="text" value="${escapeHtml(item.date)}" data-announcement-index="${index}" data-announcement-field="date" /></label>
                <label class="field">Category<input type="text" value="${escapeHtml(item.category)}" data-announcement-index="${index}" data-announcement-field="category" /></label>
                <label class="field">Image Path Or URL<input type="text" value="${escapeHtml(item.image)}" data-announcement-index="${index}" data-announcement-field="image" /></label>
                <label class="field wide">Short Description<textarea rows="3" data-announcement-index="${index}" data-announcement-field="description">${escapeHtml(item.description)}</textarea></label>
                <label class="field inline-field"><input type="checkbox" ${item.published ? "checked" : ""} data-announcement-index="${index}" data-announcement-field="published" /> Published</label>
                <button class="button secondary danger" type="button" data-announcement-delete="${index}">Delete</button>
              </div>
            </article>
          `
        )
        .join("") || `<article class="mini-card"><p>No announcements posted yet.</p></article>`}
    </div>
  `;
};

const renderEnquiriesPanel = () => {
  const enquiries = readJson(enquiryKey, []);
  return `
    ${panelIntro("Admission Enquiries", "Submissions from the public admission enquiry form.")}
    <div class="table-wrap">
      <table>
        <thead><tr><th>Date</th><th>Student</th><th>Date of Birth</th><th>Parent / Guardian</th><th>Phone</th><th>Email</th><th>Class</th></tr></thead>
        <tbody>
          ${enquiries
            .map(
              (item) => `
                <tr>
                  <td>${escapeHtml(new Date(item.submittedAt).toLocaleString())}</td>
                  <td>${escapeHtml(item.student || "")}</td>
                  <td>${escapeHtml(item.dob || "")}</td>
                  <td>${escapeHtml(item.guardian || item.parent || "")}</td>
                  <td>${escapeHtml(item.phone)}</td>
                  <td>${escapeHtml(item.email || "")}</td>
                  <td>${escapeHtml(item.className)}</td>
                </tr>
              `
            )
            .join("") || `<tr><td colspan="7">No enquiries yet.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
};

const panelFor = (active) => {
  if (active === "Pages") return renderPagesPanel();
  if (active === "Gallery") return renderGalleryManager(window.currentGalleryFilter || "All");
  if (active === "Toppers") return renderToppersPanel();
  if (active === "Chairman's Corner") return renderChairmanPanel();
  if (active === "Announcements") return renderAnnouncementsPanel();
  return renderEnquiriesPanel();
};

const bindPanelEvents = (active) => {
  document.querySelectorAll("[data-content-path]").forEach((input) => {
    input.addEventListener("change", () => saveContentField(input.dataset.contentPath, input.value));
  });

  document.querySelectorAll("[data-note-key]").forEach((input) => {
    input.addEventListener("change", () => {
      const dashboard = getDashboard();
      dashboard.notes[input.dataset.noteKey] = input.value;
      saveDashboard(dashboard);
    });
  });

  document.querySelectorAll("[data-upload-key]").forEach((input) => {
    input.addEventListener("change", async () => {
      if (!input.files?.[0]) return;
      const dashboard = getDashboard();
      dashboard.uploads[input.dataset.uploadKey] = await fileToDataUrl(input.files[0]);
      saveDashboard(dashboard, "Image saved in this browser.");
      renderDashboard(active);
    });
  });

  const addAnnouncement = document.querySelector("[data-add-announcement]");
  if (addAnnouncement) {
    addAnnouncement.addEventListener("click", () => {
      const fields = [...document.querySelectorAll("[data-announcement-new-field]")].reduce((values, input) => {
        values[input.dataset.announcementNewField] = input.value.trim();
        return values;
      }, {});
      if (!fields.title && !fields.description) return;
      const dashboard = getDashboard();
      dashboard.announcements.unshift({
        title: fields.title || "School Notice",
        date: fields.date,
        category: fields.category || "Notice",
        description: fields.description,
        image: fields.image,
        published: true
      });
      saveDashboard(dashboard, "Announcement saved.");
      renderDashboard("Announcements");
    });
  }

  document.querySelectorAll("[data-announcement-field]").forEach((input) => {
    input.addEventListener("change", () => {
      const dashboard = getDashboard();
      const item = dashboard.announcements[Number(input.dataset.announcementIndex)];
      if (!item) return;
      item[input.dataset.announcementField] = input.type === "checkbox" ? input.checked : input.value;
      saveDashboard(dashboard, "Announcement updated.");
      if (input.dataset.announcementField === "image") renderDashboard("Announcements");
    });
  });

  document.querySelectorAll("[data-announcement-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const dashboard = getDashboard();
      dashboard.announcements.splice(Number(button.dataset.announcementDelete), 1);
      saveDashboard(dashboard, "Announcement deleted.");
      renderDashboard("Announcements");
    });
  });

  document.querySelectorAll("[data-gallery-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      window.currentGalleryFilter = button.dataset.galleryFilter;
      renderDashboard("Gallery");
    });
  });

  document.querySelectorAll("[data-gallery-title]").forEach((input) => {
    input.addEventListener("change", () => {
      const dashboard = getDashboard();
      const item = dashboard.gallery.find((entry) => entry.src === input.dataset.galleryTitle);
      if (item) item.title = input.value;
      saveDashboard(dashboard);
    });
  });

  document.querySelectorAll("[data-gallery-category]").forEach((select) => {
    select.addEventListener("change", () => {
      const dashboard = getDashboard();
      const item = dashboard.gallery.find((entry) => entry.src === select.dataset.galleryCategory);
      if (item) item.category = select.value;
      saveDashboard(dashboard, "Moved to " + select.value + ".");
      renderDashboard("Gallery");
    });
  });

  document.querySelectorAll("[data-gallery-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const dashboard = getDashboard();
      const item = dashboard.gallery.find((entry) => entry.src === button.dataset.galleryToggle);
      if (item) item.visible = item.visible === false;
      saveDashboard(dashboard, item?.visible === false ? "Image hidden." : "Image visible.");
      renderDashboard("Gallery");
    });
  });

  document.querySelectorAll("[data-gallery-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const dashboard = getDashboard();
      dashboard.gallery = dashboard.gallery.filter((entry) => entry.src !== button.dataset.galleryDelete);
      saveDashboard(dashboard, "Image deleted from admin gallery.");
      renderDashboard("Gallery");
    });
  });

  document.querySelectorAll("[data-gallery-replace]").forEach((input) => {
    input.addEventListener("change", async () => {
      if (!input.files?.[0]) return;
      const dashboard = getDashboard();
      const item = dashboard.gallery.find((entry) => entry.src === input.dataset.galleryReplace);
      if (item) {
        item.src = await fileToDataUrl(input.files[0]);
        item.title = input.files[0].name;
      }
      saveDashboard(dashboard, "Image replaced.");
      renderDashboard("Gallery");
    });
  });

  const addGallery = document.querySelector("[data-gallery-add]");
  if (addGallery) {
    addGallery.addEventListener("click", async () => {
      const fileInput = document.querySelector("[data-gallery-add-file]");
      if (!fileInput.files?.[0]) return;
      const titleInput = document.querySelector("[data-gallery-add-title]");
      const categoryInput = document.querySelector("[data-gallery-add-category]");
      const dashboard = getDashboard();
      dashboard.gallery.unshift({
        src: await fileToDataUrl(fileInput.files[0]),
        title: titleInput.value.trim() || fileInput.files[0].name,
        category: categoryInput.value,
        visible: true
      });
      saveDashboard(dashboard, "Image added.");
      window.currentGalleryFilter = categoryInput.value;
      renderDashboard("Gallery");
    });
  }

};

const renderDashboard = (active = "Pages") => {
  root.innerHTML = `
    <section class="admin-shell">
      <aside class="sidebar">
        <div class="sidebar-brand">
          <img src="../assets/logo.png" alt="Sri Vivekanandha Vidhyalaya crest" />
          <div><strong>Sri Vivekanandha Vidhyalaya</strong><span>Admin</span></div>
        </div>
        <nav class="sidebar-nav">
          ${sections.map((section) => `<button class="${section === active ? "active" : ""}" type="button" data-section="${section}">${section}</button>`).join("")}
        </nav>
      </aside>
      <section class="main">
        <div class="topbar">
          <div class="panel-title"><h1>${active}</h1><p>Simple controls for school staff.</p></div>
          <button class="button secondary" type="button" data-logout>Log Out</button>
        </div>
        <div class="panel">
          ${panelFor(active)}
          <span class="status" data-status></span>
        </div>
      </section>
    </section>
  `;

  document.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => renderDashboard(button.dataset.section));
  });
  document.querySelector("[data-logout]").addEventListener("click", () => {
    sessionStorage.removeItem(sessionKey);
    renderLogin();
  });
  bindPanelEvents(active);
};

if (sessionStorage.getItem(sessionKey)) {
  renderDashboard();
} else {
  renderLogin();
}
