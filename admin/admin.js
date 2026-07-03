const root = document.getElementById("admin-root");
const sessionKey = "svv-admin-session-v1";
const contentKey = "svv-school-admin-content-v1";
const enquiryKey = "svv-admission-enquiries-v1";
const dashboardKey = "svv-admin-dashboard-v1";

const sections = [
  "Pages",
  "Gallery",
  "Toppers",
  "Chairman's Corner",
  "Testimonials",
  "Announcements",
  "Admission Enquiries"
];

const defaultDashboard = {
  uploads: {},
  gallery: [
    { src: "../assets/school-building.jpg", title: "Matric campus building", category: "Campus", visible: true },
    { src: "../assets/gallery/second-campus-purple.jpeg", title: "Main campus building", category: "Campus", visible: true },
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
  testimonials: [
    { quote: "Parent testimonials can be added here after approval from the school office.", by: "Parent Feedback" },
    { quote: "Alumni notes can include name, batch, achievement, and consent.", by: "Alumni Feedback" },
    { quote: "Short, real quotes will make this section stronger than generic claims.", by: "Content Note" }
  ],
  announcements: [],
  notes: {
    pages: "",
    gallery: "",
    toppers: "",
    chairman: "",
    testimonials: ""
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
  return {
    ...defaultDashboard,
    ...saved,
    notes: { ...defaultDashboard.notes, ...(saved.notes || {}) },
    uploads: { ...defaultDashboard.uploads, ...(saved.uploads || {}) },
    gallery: Array.isArray(saved.gallery) ? saved.gallery : defaultDashboard.gallery,
    testimonials: Array.isArray(saved.testimonials) ? saved.testimonials : defaultDashboard.testimonials
  };
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
    ${current ? `<img src="${current}" alt="${escapeHtml(label)} preview" />` : `<img src="../assets/logo.png" alt="${escapeHtml(label)} placeholder" />`}
    <label class="field">${label}<input type="file" accept="image/*" data-upload-key="${key}" /></label>
  </article>
`;

const renderPagesPanel = () => {
  const content = getContent();
  return `
    ${panelIntro("Pages", "Edit core website text used by the public pages.")}
    <div class="grid">
      <label class="field">Home headline<input data-content-path="home.title" value="${escapeHtml(content.home?.title || "")}" placeholder="Home headline" /></label>
      <label class="field">Home eyebrow<input data-content-path="home.eyebrow" value="${escapeHtml(content.home?.eyebrow || "")}" placeholder="Home eyebrow" /></label>
      <label class="field">Home paragraph<textarea rows="5" data-content-path="home.lead" placeholder="Home paragraph">${escapeHtml(content.home?.lead || "")}</textarea></label>
      <label class="field">About intro<textarea rows="5" data-content-path="about.intro" placeholder="About intro">${escapeHtml(content.about?.intro || "")}</textarea></label>
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
      <label class="field">Add image<input type="file" accept="image/*" data-gallery-add-file /></label>
      <label class="field">Title<input type="text" data-gallery-add-title placeholder="Image title" /></label>
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
                <label class="field">Replace image<input type="file" accept="image/*" data-gallery-replace="${item.src}" /></label>
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
    ["topper-1", "Topper 1 photo"],
    ["topper-2", "Topper 2 photo"],
    ["topper-3", "Topper 3 photo"],
    ["topper-4", "Topper 4 photo"],
    ["topper-5", "Topper 5 photo"]
  ]);

const renderChairmanPanel = () => {
  const dashboard = getDashboard();
  return `
    ${panelIntro("Chairman's Corner", "Update chairman text and recognition images.")}
    <div class="grid">
      <label class="field">Chairman's message<textarea rows="7" data-note-key="chairman">${escapeHtml(dashboard.notes.chairman || "")}</textarea></label>
    </div>
    <div class="cards">
      ${uploadControl("chairman-main", "Chairman header photo", dashboard.uploads["chairman-main"])}
      ${uploadControl("chairman-award-1", "Recognition photo 1", dashboard.uploads["chairman-award-1"])}
      ${uploadControl("chairman-award-2", "Recognition photo 2", dashboard.uploads["chairman-award-2"])}
      ${uploadControl("chairman-award-3", "Recognition photo 3", dashboard.uploads["chairman-award-3"])}
    </div>
  `;
};

const renderTestimonialsPanel = () => {
  const dashboard = getDashboard();
  return `
    ${panelIntro("Testimonials", "Edit parent and alumni testimonial notes.")}
    <div class="testimonial-admin-list">
      ${dashboard.testimonials
        .map(
          (item, index) => `
            <article class="mini-card">
              <label class="field">Quote<textarea rows="4" data-testimonial-index="${index}" data-testimonial-field="quote">${escapeHtml(item.quote)}</textarea></label>
              <label class="field">Name / label<input type="text" value="${escapeHtml(item.by)}" data-testimonial-index="${index}" data-testimonial-field="by" /></label>
              <button class="button secondary danger" type="button" data-testimonial-delete="${index}">Delete</button>
            </article>
          `
        )
        .join("") || `<article class="mini-card"><p>No testimonials added yet.</p></article>`}
    </div>
    <div class="testimonial-add">
      <label class="field">New quote<textarea rows="3" data-new-testimonial-quote placeholder="Type the testimonial"></textarea></label>
      <label class="field">Name / label<input type="text" data-new-testimonial-by placeholder="Parent or alumni name" /></label>
      <button class="button primary" type="button" data-add-testimonial>Add Testimonial</button>
    </div>
  `;
};

const renderAnnouncementsPanel = () => {
  const dashboard = getDashboard();
  return `
    ${panelIntro("Announcements", "Post notices for later publishing.")}
    <div class="grid">
      <label class="field">New announcement<textarea rows="4" data-new-announcement placeholder="Type announcement here"></textarea></label>
    </div>
    <button class="button primary" type="button" data-add-announcement>Post Announcement</button>
    <div class="cards">
      ${dashboard.announcements
        .map((item) => `<article class="mini-card"><strong>${escapeHtml(item.date)}</strong><p>${escapeHtml(item.text)}</p></article>`)
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
        <thead><tr><th>Date</th><th>Parent</th><th>Student</th><th>Phone</th><th>Email</th><th>Class</th></tr></thead>
        <tbody>
          ${enquiries
            .map(
              (item) => `
                <tr>
                  <td>${escapeHtml(new Date(item.submittedAt).toLocaleString())}</td>
                  <td>${escapeHtml(item.parent)}</td>
                  <td>${escapeHtml(item.student || "")}</td>
                  <td>${escapeHtml(item.phone)}</td>
                  <td>${escapeHtml(item.email || "")}</td>
                  <td>${escapeHtml(item.className)}</td>
                </tr>
              `
            )
            .join("") || `<tr><td colspan="6">No enquiries yet.</td></tr>`}
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
  if (active === "Testimonials") return renderTestimonialsPanel();
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
      const input = document.querySelector("[data-new-announcement]");
      const text = input.value.trim();
      if (!text) return;
      const dashboard = getDashboard();
      dashboard.announcements.unshift({ text, date: new Date().toLocaleDateString() });
      saveDashboard(dashboard, "Announcement saved.");
      renderDashboard("Announcements");
    });
  }

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

  document.querySelectorAll("[data-testimonial-index]").forEach((input) => {
    input.addEventListener("change", () => {
      const dashboard = getDashboard();
      const item = dashboard.testimonials[Number(input.dataset.testimonialIndex)];
      if (item) item[input.dataset.testimonialField] = input.value;
      saveDashboard(dashboard, "Testimonial saved.");
    });
  });

  document.querySelectorAll("[data-testimonial-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const dashboard = getDashboard();
      dashboard.testimonials.splice(Number(button.dataset.testimonialDelete), 1);
      saveDashboard(dashboard, "Testimonial deleted.");
      renderDashboard("Testimonials");
    });
  });

  const addTestimonial = document.querySelector("[data-add-testimonial]");
  if (addTestimonial) {
    addTestimonial.addEventListener("click", () => {
      const quoteInput = document.querySelector("[data-new-testimonial-quote]");
      const byInput = document.querySelector("[data-new-testimonial-by]");
      const quote = quoteInput.value.trim();
      const by = byInput.value.trim();
      if (!quote) return;
      const dashboard = getDashboard();
      dashboard.testimonials.unshift({ quote, by: by || "Testimonial" });
      saveDashboard(dashboard, "Testimonial added.");
      renderDashboard("Testimonials");
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
