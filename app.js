const STORAGE_KEY = "project-tracker-state-v2-2026-doc";
const statuses = ["Planned", "In Progress", "Review", "Done"];
const statusColors = {
  Planned: "#7656b8",
  "In Progress": "#2f67d8",
  Review: "#a1600a",
  Done: "#1f8a5b",
};
const projectColors = ["#2f67d8", "#1f8a5b", "#a1600a", "#bf3c30", "#7656b8", "#256f78"];
const NEW_PROJECT_VALUE = "__new_project__";
const workstreams = [
  {
    id: "device-infrastructure",
    name: "Device & Infrastructure Systems",
    summary: "Endpoint, network, and platform work that keeps hardware and managed environments ready for daily use.",
    match: /printer|computer|refresh|apple|business manager|qa|network|laptop|device|jamf|intune/i,
  },
  {
    id: "access-identity",
    name: "Access & Identity Governance",
    summary: "Account review, identity workflows, and permission hygiene that keep access aligned with current roles.",
    match: /account|audit|okta|identity|access|1password|zoom|azure/i,
  },
  {
    id: "support-operations",
    name: "Support Operations & Tooling",
    summary: "Support platform improvements, automation ideas, response systems, and cleanup work that reduce friction.",
    match: /freshdesk|macro|ticket|workflow|automation|slack|support/i,
  },
  {
    id: "inventory-lifecycle",
    name: "Inventory & Lifecycle Management",
    summary: "Inventory visibility, stock planning, e-waste readiness, and lifecycle routines for offices and equipment.",
    match: /inventory|lifecycle|e-waste|ewaste|stock|peripheral/i,
  },
  {
    id: "onboarding-contractors",
    name: "Onboarding & Contractor Systems",
    summary: "Repeatable intake and account setup paths for contractors, new hires, and cross-team handoffs.",
    match: /contractor|databeat|new-hire|onboarding|gmail/i,
  },
  {
    id: "process-documentation",
    name: "Process & Documentation Systems",
    summary: "Reusable process writing, standards, and operational documentation that make systems easier to run.",
    match: /document|documentation|how-to|process|training|standard/i,
  },
];

const seedState = {
  selectedProjectId: "all",
  view: "board",
  projects: [
    {
      id: "p-ny-printers",
      name: "Repackage New York Printers",
      owner: "Jenn + Trey",
      due: "",
      color: "#2f67d8",
    },
    {
      id: "p-account-audit",
      name: "Account Audit",
      owner: "Jenn",
      due: "2026-06-30",
      color: "#1f8a5b",
    },
    {
      id: "p-apple-business-manager",
      name: "Apple Business Manager",
      owner: "Jenn + Helpdesk",
      due: "2026-12-31",
      color: "#a1600a",
    },
    {
      id: "p-computer-refreshes",
      name: "Computer Refreshes",
      owner: "Jenn + Helpdesk",
      due: "2026-12-31",
      color: "#bf3c30",
    },
    {
      id: "p-macro-refresh",
      name: "Macro Refresh",
      owner: "Jenn",
      due: "",
      color: "#7656b8",
    },
    {
      id: "p-okta-workflows",
      name: "Okta Workflow Trainings",
      owner: "Jenn",
      due: "",
      color: "#256f78",
    },
    {
      id: "p-prince-street-inventory",
      name: "Prince Street Inventory List",
      owner: "Jenn + Ed",
      due: "",
      color: "#2f67d8",
    },
    {
      id: "p-qa-hidden-network",
      name: "QA Devices on Hidden Network",
      owner: "Jenn + Dave",
      due: "2026-02-12",
      color: "#1f8a5b",
    },
    {
      id: "p-databeat-contractors",
      name: "Bulk Databeat Contractor Accounts",
      owner: "Jenn + Vince",
      due: "2026-02-23",
      color: "#a1600a",
    },
    {
      id: "p-freshdesk-automations",
      name: "Freshdesk Workflow Automations and Integrations",
      owner: "Jenn",
      due: "",
      color: "#bf3c30",
    },
    {
      id: "p-freshdesk-cleanup",
      name: "Freshdesk Ticket Log Cleanup",
      owner: "Jenn",
      due: "",
      color: "#7656b8",
    },
  ],
  tasks: [
    {
      id: "t-ny-printers-how-to",
      projectId: "p-ny-printers",
      title: "Publish repackaging how-to for Prince Street printers",
      status: "Review",
      priority: "High",
      owner: "Jenn + Trey",
      due: "",
      tags: ["ongoing", "jamf", "printers"],
      notes: "Document the process for repackaging New York office printers and deploying them through Jamf Pro.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-ny-printers-driver-validation",
      projectId: "p-ny-printers",
      title: "Validate driver deployment and Self Service reinstall flow",
      status: "In Progress",
      priority: "Medium",
      owner: "Jenn + Trey",
      due: "",
      tags: ["ongoing", "jamf", "testing"],
      notes: "Cover macOS driver mapping, Jamf Printer Manager, admin access handling, local driver validation, policy scoping, and reinstall testing.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-account-audit-1password",
      projectId: "p-account-audit",
      title: "Review inactive 1Password accounts",
      status: "In Progress",
      priority: "High",
      owner: "Jenn",
      due: "2026-06-30",
      tags: ["ongoing", "quarterly", "licenses"],
      notes: "Identify inactive or unused accounts, coordinate removals where appropriate, and keep license counts accurate.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-account-audit-zoom",
      projectId: "p-account-audit",
      title: "Pull Zoom active-user report and review stale logins",
      status: "Review",
      priority: "Medium",
      owner: "Jenn",
      due: "2026-06-30",
      tags: ["ongoing", "quarterly", "zoom"],
      notes: "Use last-login dates to flag accounts that may no longer need active access.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-account-audit-access",
      projectId: "p-account-audit",
      title: "Verify access levels against current roles",
      status: "Planned",
      priority: "Medium",
      owner: "Jenn",
      due: "2026-06-30",
      tags: ["ongoing", "access", "security"],
      notes: "Confirm permissions stay aligned with current roles and security standards.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-abm-remove-recycled",
      projectId: "p-apple-business-manager",
      title: "Remove recycled computers from device management",
      status: "In Progress",
      priority: "High",
      owner: "Jenn + Helpdesk",
      due: "2026-12-31",
      tags: ["ongoing", "abm", "jamf", "intune"],
      notes: "Remove recycled computers from Intune and Jamf so reporting and device lookup stay clean.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-abm-ewaste",
      projectId: "p-apple-business-manager",
      title: "Prepare recycled devices for e-waste",
      status: "Planned",
      priority: "Medium",
      owner: "Jenn + Helpdesk",
      due: "2026-12-31",
      tags: ["ongoing", "inventory", "ewaste"],
      notes: "Coordinate with the Computer Refresh objective so only active, usable devices remain in systems.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-refresh-tracking-sheet",
      projectId: "p-computer-refreshes",
      title: "Maintain refresh tracking sheet for about 80 employees",
      status: "In Progress",
      priority: "High",
      owner: "Jenn",
      due: "2026-12-31",
      tags: ["ongoing", "refresh", "tracking"],
      notes: "Manage the Google Sheet tracking and organization for the end-of-year laptop refresh.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-refresh-scheduling",
      projectId: "p-computer-refreshes",
      title: "Coordinate communication, preparation, and scheduling",
      status: "In Progress",
      priority: "High",
      owner: "Jenn + Helpdesk",
      due: "2026-12-31",
      tags: ["ongoing", "refresh", "employee-support"],
      notes: "Support smooth device swaps with minimal disruption to day-to-day work.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-refresh-standards",
      projectId: "p-computer-refreshes",
      title: "Validate laptop standards and returned-device stock",
      status: "Planned",
      priority: "Medium",
      owner: "Jenn + Helpdesk",
      due: "2026-12-31",
      tags: ["ongoing", "hardware", "ewaste"],
      notes: "Prepare systems for deployment and maintain returned laptops set aside for e-waste.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-macro-update-existing",
      projectId: "p-macro-refresh",
      title: "Update existing ticket-response macros",
      status: "In Progress",
      priority: "Medium",
      owner: "Jenn",
      due: "",
      tags: ["ongoing", "freshdesk", "macros"],
      notes: "Refresh existing macros so responses reflect current support needs.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-macro-create-new",
      projectId: "p-macro-refresh",
      title: "Create new macros for common ticket inquiries",
      status: "Planned",
      priority: "Medium",
      owner: "Jenn",
      due: "",
      tags: ["ongoing", "freshdesk", "macros"],
      notes: "Improve response accuracy, consistency, and resolution time.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-okta-training",
      projectId: "p-okta-workflows",
      title: "Continue Okta workflow training",
      status: "In Progress",
      priority: "Medium",
      owner: "Jenn",
      due: "",
      tags: ["ongoing", "okta", "training"],
      notes: "Stay current with the Okta environment and workflow capabilities.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-inventory-update",
      projectId: "p-prince-street-inventory",
      title: "Keep NYC peripheral inventory sheet current",
      status: "In Progress",
      priority: "Medium",
      owner: "Jenn + Ed",
      due: "",
      tags: ["ongoing", "inventory", "nyc"],
      notes: "Track peripherals including laptops, keyboards, chargers, and related supplies.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-inventory-quantities",
      projectId: "p-prince-street-inventory",
      title: "Review quantities against NYC employee needs",
      status: "Planned",
      priority: "Low",
      owner: "Jenn + Ed",
      due: "",
      tags: ["ongoing", "inventory", "planning"],
      notes: "Use the living sheet to keep appropriate quantities available for NYC employees.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-qa-hidden-network-configure",
      projectId: "p-qa-hidden-network",
      title: "Configure QA devices on hidden network",
      status: "Done",
      priority: "High",
      owner: "Jenn + Dave",
      due: "2026-02-12",
      tags: ["completed", "qa", "network"],
      notes: "Added ATMODevNet hidden network to Android phones and a laptop for Gitesh's team.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-qa-hidden-network-document",
      projectId: "p-qa-hidden-network",
      title: "Document repeatable hidden SSID setup process",
      status: "Done",
      priority: "Medium",
      owner: "Jenn + Dave",
      due: "2026-02-12",
      tags: ["completed", "documentation", "network"],
      notes: "Captured security settings, authentication checks, and MAC address lookup steps for future setups.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-databeat-tickets",
      projectId: "p-databeat-contractors",
      title: "Create new-hire tickets for Databeat contractors",
      status: "Done",
      priority: "High",
      owner: "Jenn + Vince",
      due: "2026-02-23",
      tags: ["completed", "contractors", "onboarding"],
      notes: "Created tickets to track members and make follow-up conversations easier.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-databeat-okta",
      projectId: "p-databeat-contractors",
      title: "Create Okta and Azure accounts",
      status: "Done",
      priority: "High",
      owner: "Jenn",
      due: "2026-02-23",
      tags: ["completed", "okta", "azure"],
      notes: "Made Okta accounts for 8 members; Azure accounts were automated by the Okta workflow.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-databeat-login",
      projectId: "p-databeat-contractors",
      title: "Contact team to log into Okta and Gmail",
      status: "Done",
      priority: "Medium",
      owner: "Jenn",
      due: "2026-02-23",
      tags: ["completed", "onboarding", "communication"],
      notes: "Reached out to the contractor team to complete first login steps.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-freshdesk-automations-map",
      projectId: "p-freshdesk-automations",
      title: "Map Freshdesk workflow automation opportunities",
      status: "Planned",
      priority: "Medium",
      owner: "Jenn",
      due: "",
      tags: ["ideas", "freshdesk", "automation"],
      notes: "Explore workflow automations that make ticketing smoother, current, and easier to report on.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-freshdesk-slack-integration",
      projectId: "p-freshdesk-automations",
      title: "Explore Slack-to-ticket intake integration",
      status: "Planned",
      priority: "Low",
      owner: "Jenn",
      due: "",
      tags: ["ideas", "slack", "freshdesk"],
      notes: "Consider a public support channel and third-party tooling to generate Freshdesk ticket forms and reduce side conversations.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-freshdesk-cleanup-criteria",
      projectId: "p-freshdesk-cleanup",
      title: "Define criteria for old ticket cleanup",
      status: "Planned",
      priority: "Medium",
      owner: "Jenn",
      due: "",
      tags: ["ideas", "freshdesk", "cleanup"],
      notes: "Identify what ticket history still adds value and what could be removed after a certain date.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t-freshdesk-cleanup-risk",
      projectId: "p-freshdesk-cleanup",
      title: "Assess low-risk cleanup implementation",
      status: "Planned",
      priority: "Medium",
      owner: "Jenn",
      due: "",
      tags: ["ideas", "freshdesk", "process"],
      notes: "Explore a thoughtful implementation that improves day-to-day efficiency without losing useful records.",
      createdAt: new Date().toISOString(),
    },
  ],
};

let state = loadState();
let activeColor = projectColors[0];
let activeWorkstream = "all";

const elements = {
  todayLabel: document.querySelector("#todayLabel"),
  projectNav: document.querySelector("#projectNav"),
  newProjectButton: document.querySelector("#newProjectButton"),
  newTaskButton: document.querySelector("#newTaskButton"),
  importDocButton: document.querySelector("#importDocButton"),
  exportButton: document.querySelector("#exportButton"),
  resetButton: document.querySelector("#resetButton"),
  projectEyebrow: document.querySelector("#projectEyebrow"),
  projectTitle: document.querySelector("#projectTitle"),
  searchInput: document.querySelector("#searchInput"),
  editProjectButton: document.querySelector("#editProjectButton"),
  priorityFilter: document.querySelector("#priorityFilter"),
  ownerFilter: document.querySelector("#ownerFilter"),
  boardViewButton: document.querySelector("#boardViewButton"),
  listViewButton: document.querySelector("#listViewButton"),
  metrics: document.querySelector("#metrics"),
  boardView: document.querySelector("#boardView"),
  listView: document.querySelector("#listView"),
  taskTableBody: document.querySelector("#taskTableBody"),
  taskDialog: document.querySelector("#taskDialog"),
  taskForm: document.querySelector("#taskForm"),
  taskDialogTitle: document.querySelector("#taskDialogTitle"),
  taskId: document.querySelector("#taskId"),
  taskTitleInput: document.querySelector("#taskTitleInput"),
  taskProjectInput: document.querySelector("#taskProjectInput"),
  taskNewProjectField: document.querySelector("#taskNewProjectField"),
  taskNewProjectInput: document.querySelector("#taskNewProjectInput"),
  taskStatusInput: document.querySelector("#taskStatusInput"),
  taskPriorityInput: document.querySelector("#taskPriorityInput"),
  taskOwnerInput: document.querySelector("#taskOwnerInput"),
  taskDueInput: document.querySelector("#taskDueInput"),
  taskTagsInput: document.querySelector("#taskTagsInput"),
  taskNotesInput: document.querySelector("#taskNotesInput"),
  deleteTaskButton: document.querySelector("#deleteTaskButton"),
  projectDialog: document.querySelector("#projectDialog"),
  projectForm: document.querySelector("#projectForm"),
  projectDialogTitle: document.querySelector("#projectDialogTitle"),
  projectIdInput: document.querySelector("#projectIdInput"),
  projectNameInput: document.querySelector("#projectNameInput"),
  projectOwnerInput: document.querySelector("#projectOwnerInput"),
  projectDueInput: document.querySelector("#projectDueInput"),
  projectColorInput: document.querySelector("#projectColorInput"),
  deleteProjectButton: document.querySelector("#deleteProjectButton"),
  saveProjectButton: document.querySelector("#saveProjectButton"),
  importDialog: document.querySelector("#importDialog"),
  importForm: document.querySelector("#importForm"),
  docImportInput: document.querySelector("#docImportInput"),
  importSummary: document.querySelector("#importSummary"),
  emptyStateTemplate: document.querySelector("#emptyStateTemplate"),
};

if (elements.todayLabel) {
  elements.todayLabel.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date());
}

elements.newTaskButton.addEventListener("click", () => openTaskDialog());
elements.newProjectButton.addEventListener("click", () => openProjectDialog());
elements.editProjectButton.addEventListener("click", () => openProjectDialog(state.selectedProjectId));
elements.importDocButton.addEventListener("click", openImportDialog);
elements.exportButton.addEventListener("click", exportState);
elements.resetButton.addEventListener("click", resetDemo);
elements.searchInput.addEventListener("input", render);
elements.taskProjectInput.addEventListener("change", handleTaskProjectChange);
elements.priorityFilter.addEventListener("change", render);
elements.ownerFilter.addEventListener("change", render);
elements.boardViewButton?.addEventListener("click", () => setView("board"));
elements.listViewButton?.addEventListener("click", () => setView("list"));
elements.taskForm.addEventListener("submit", saveTaskFromForm);
elements.projectForm.addEventListener("submit", saveProjectFromForm);
elements.importForm.addEventListener("submit", importDocFromForm);
elements.docImportInput.addEventListener("input", updateImportSummary);
elements.deleteTaskButton.addEventListener("click", deleteCurrentTask);
elements.deleteProjectButton.addEventListener("click", deleteCurrentProject);

renderProjectColorChoices();
render();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return clone(seedState);
    }

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed.projects) || !Array.isArray(parsed.tasks) || !parsed.projects.length) {
      return clone(seedState);
    }
    return {
      selectedProjectId: parsed.selectedProjectId || "all",
      view: parsed.view || "board",
      projects: parsed.projects,
      tasks: parsed.tasks,
    };
  } catch {
    return clone(seedState);
  }
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Some browsers block storage for downloaded file:// pages. The app still works without persistence.
  }
}

function render() {
  if (state.selectedProjectId !== "all" && !state.projects.some((project) => project.id === state.selectedProjectId)) {
    state.selectedProjectId = "all";
  }

  persist();
  renderProjectNav();
  renderProjectOptions();
  renderOwnerOptions();
  renderHeader();
  renderMetrics();
  renderViews();
}

function renderProjectNav() {
  const allCount = state.projects.length;
  const buttons = [
    {
      id: "all",
      name: "All Systems",
      subline: `${state.projects.length} operating systems`,
      count: allCount,
      color: "#224f3b",
    },
    ...workstreams.map((workstream) => {
      const projects = projectsForWorkstream(workstream.id);
      return {
        id: workstream.id,
        name: workstream.name,
        subline: workstream.summary,
        count: projects.length,
        color: "#1f6b4c",
      };
    }),
  ];

  elements.projectNav.replaceChildren(
    ...buttons.map((workstream) => {
      const button = document.createElement("button");
      button.className = `project-nav-button ${activeWorkstream === workstream.id ? "active" : ""}`;
      button.type = "button";
      button.style.setProperty("--project-color", workstream.color);
      button.addEventListener("click", () => {
        activeWorkstream = workstream.id;
        state.selectedProjectId = "all";
        render();
      });

      button.innerHTML = `
        <span class="project-dot" aria-hidden="true"></span>
        <span>
          <span class="project-name">${escapeHtml(workstream.name)}</span>
          <span class="project-subline">${escapeHtml(workstream.subline)}</span>
        </span>
        <span class="project-count" aria-label="${workstream.count} systems">${workstream.count}</span>
      `;
      return button;
    }),
  );

  elements.projectNav.querySelector(".project-nav-button.active")?.scrollIntoView({
    block: "nearest",
    inline: "center",
  });
}

function renderProjectOptions() {
  elements.taskProjectInput.replaceChildren(
    new Option("New System...", NEW_PROJECT_VALUE),
    ...state.projects.map((project) => new Option(project.name, project.id)),
  );
}

function renderOwnerOptions() {
  const currentValue = elements.ownerFilter.value;
  const owners = [...new Set(state.tasks.map((task) => task.owner).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  elements.ownerFilter.replaceChildren(new Option("All", "all"), ...owners.map((owner) => new Option(owner, owner)));
  elements.ownerFilter.value = owners.includes(currentValue) ? currentValue : "all";
}

function renderHeader() {
  const workstream = workstreamById(activeWorkstream);
  elements.editProjectButton.classList.add("hidden");
  elements.projectEyebrow.textContent = workstream ? "Focused workstream" : "Systems Portfolio";
  elements.projectTitle.textContent = workstream ? workstream.name : "Systems Portfolio";
  document.querySelector(".lede").textContent = workstream
    ? workstream.summary
    : "A view into the systems that keep operations running-structured across infrastructure, access, support, onboarding, and lifecycle workflows.";
}

function renderMetrics() {
  const scopedTasks = getVisibleTasks();
  const visibleProjects = getVisibleProjects();
  const openTasks = scopedTasks.filter((task) => task.status !== "Done");
  const dueSoon = openTasks.filter((task) => daysUntil(task.due) >= 0 && daysUntil(task.due) <= 7);
  const overdue = openTasks.filter((task) => isOverdue(task.due));
  const doneCount = scopedTasks.filter((task) => task.status === "Done").length;
  const progress = scopedTasks.length ? Math.round((doneCount / scopedTasks.length) * 100) : 0;

  const metrics = [
    {
      value: visibleProjects.length,
      label: visibleProjects.length === 1 ? "System" : "Systems",
      note: `${openTasks.length} active initiatives`,
    },
    {
      value: openTasks.length,
      label: "Active initiatives",
      note: `${doneCount} completed`,
    },
    {
      value: overdue.length,
      label: "Needs review",
      note: `${dueSoon.length} due this week`,
    },
    {
      value: `${progress}%`,
      label: "Resolved",
      note: scopedTasks.length ? `${doneCount} of ${scopedTasks.length} initiatives done` : "No initiatives yet",
    },
  ];

  elements.metrics.replaceChildren(
    ...metrics.map((metric) => {
      const article = document.createElement("article");
      article.className = "metric";
      article.innerHTML = `
        <div class="metric-value">${metric.value}</div>
        <div class="metric-label">${escapeHtml(metric.label)}</div>
        <div class="metric-note">${escapeHtml(metric.note)}</div>
      `;
      return article;
    }),
  );
}

function renderViews() {
  const filteredTasks = getFilteredTasks();
  elements.boardViewButton?.classList.toggle("active", true);
  elements.listViewButton?.classList.toggle("active", false);
  elements.boardViewButton?.setAttribute("aria-selected", "true");
  elements.listViewButton?.setAttribute("aria-selected", "false");
  elements.boardView.classList.remove("hidden");
  elements.listView.classList.add("hidden");

  renderSystemsPortfolio(filteredTasks);
}

function renderSystemsPortfolio(tasks) {
  const visibleProjects = getVisibleProjects();
  const groups = workstreams
    .map((workstream) => {
      const projects = visibleProjects.filter((project) => projectWorkstream(project).id === workstream.id);
      return { ...workstream, projects };
    })
    .filter((workstream) => workstream.projects.length);

  if (!groups.length) {
    elements.boardView.replaceChildren(emptyState());
    return;
  }

  elements.boardView.replaceChildren(
    ...groups.map((workstream) => {
      const section = document.createElement("section");
      section.className = "workstream-section";
      section.id = workstream.id;

      const systemArticles = workstream.projects
        .map((project) => createSystemArticle(project, tasks.filter((task) => task.projectId === project.id)))
        .filter(Boolean);

      section.innerHTML = `
        <div class="workstream-heading">
          <p class="eyebrow">${escapeHtml(workstream.name)}</p>
          <h3>${escapeHtml(workstream.name)}</h3>
          <p>${escapeHtml(workstream.summary)}</p>
        </div>
      `;
      section.append(...systemArticles);
      return section;
    }),
  );
}

function createSystemArticle(project, tasks) {
  if (!tasks.length) return null;

  const article = document.createElement("article");
  article.className = "system-article";
  const activeCount = tasks.filter((task) => task.status !== "Done").length;
  const summary = summarizeSystem(project, tasks);

  article.innerHTML = `
    <header class="system-header">
      <div>
        <p class="system-meta">${escapeHtml(project.owner || "Unassigned")} / ${escapeHtml(formatDate(project.due))} / ${activeCount} active initiatives</p>
        <h4>
          <button class="system-title-button" type="button">${escapeHtml(project.name)}</button>
        </h4>
      </div>
      <span class="status-chip">${escapeHtml(systemStatus(tasks))}</span>
    </header>
    <p class="system-summary">${escapeHtml(summary)}</p>
    <ul class="initiative-list">
      ${tasks.map((task) => initiativeItemMarkup(task)).join("")}
    </ul>
  `;

  article.querySelector(".system-title-button").addEventListener("click", () => openProjectDialog(project.id));
  article.querySelectorAll("[data-task-id]").forEach((button) => {
    button.addEventListener("click", () => openTaskDialog(button.dataset.taskId));
  });
  return article;
}

function initiativeItemMarkup(task) {
  const dueText = formatDate(task.due);
  const tags = task.tags.length ? ` / ${task.tags.map((tag) => `#${escapeHtml(tag)}`).join(" ")}` : "";
  const note = task.notes ? `<span class="initiative-note">${escapeHtml(cleanInitiativeNote(task.notes))}</span>` : "";

  return `
    <li>
      <button class="initiative-title" type="button" data-task-id="${escapeHtml(task.id)}">${escapeHtml(task.title)}</button>
      <span class="initiative-meta">${escapeHtml(task.status)} / ${escapeHtml(task.priority)} / ${escapeHtml(task.owner || "Unassigned")} / ${escapeHtml(dueText)}${tags}</span>
      ${note}
    </li>
  `;
}

function summarizeSystem(project, tasks) {
  const firstNote = tasks.map((task) => cleanInitiativeNote(task.notes)).find(Boolean);
  if (firstNote) return firstNote;
  const openCount = tasks.filter((task) => task.status !== "Done").length;
  const completedCount = tasks.length - openCount;
  return `${project.name} is tracked as an operational system with ${openCount} active initiatives and ${completedCount} completed work items.`;
}

function cleanInitiativeNote(note) {
  return note
    .split("\n")
    .map((line) => line.replace(/^(Objective|Timeline):\s*/i, "").trim())
    .filter(Boolean)[0] || "";
}

function systemStatus(tasks) {
  if (tasks.every((task) => task.status === "Done")) return "Resolved";
  if (tasks.some((task) => task.status === "Review")) return "In review";
  if (tasks.some((task) => task.status === "In Progress")) return "Active";
  return "Planned";
}

function renderBoard(tasks) {
  elements.boardView.replaceChildren(
    ...statuses.map((status) => {
      const columnTasks = tasks.filter((task) => task.status === status);
      const column = document.createElement("section");
      column.className = "board-column";
      column.style.setProperty("--status-color", statusColors[status]);
      column.innerHTML = `
        <div class="column-header">
          <h3>${status}</h3>
          <span class="column-count">${columnTasks.length}</span>
        </div>
      `;

      const stack = document.createElement("div");
      stack.className = "task-stack";
      stack.dataset.status = status;
      stack.addEventListener("dragover", allowDrop);
      stack.addEventListener("dragleave", clearDragState);
      stack.addEventListener("drop", dropTask);

      if (columnTasks.length) {
        stack.replaceChildren(...columnTasks.map(createTaskCard));
      } else {
        stack.append(emptyState());
      }

      column.append(stack);
      return column;
    }),
  );
}

function createTaskCard(task) {
  const project = projectById(task.projectId);
  const card = document.createElement("article");
  card.className = "task-card";
  card.draggable = true;
  card.dataset.taskId = task.id;
  card.addEventListener("dragstart", dragTask);
  card.addEventListener("dragend", clearDraggingCards);

  const dueClass = isOverdue(task.due) && task.status !== "Done" ? " overdue" : "";
  const tags = task.tags.map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`).join("");

  card.innerHTML = `
    <div class="task-card-header">
      <button class="task-title-button" type="button" aria-label="Edit ${escapeHtml(task.title)}">
        <span class="task-title">${escapeHtml(task.title)}</span>
      </button>
    </div>
    <div class="task-meta">
      <span class="pill project-pill">${escapeHtml(project?.name || "No project")}</span>
      <span class="pill ${task.priority.toLowerCase()}">${task.priority}</span>
      <span class="pill${dueClass}">${formatDate(task.due)}</span>
      ${task.owner ? `<span class="pill">${escapeHtml(task.owner)}</span>` : ""}
    </div>
    ${task.notes ? `<p class="task-notes">${escapeHtml(task.notes)}</p>` : ""}
    ${tags ? `<div class="tag-row">${tags}</div>` : ""}
  `;

  card.querySelector(".task-title-button").addEventListener("click", () => openTaskDialog(task.id));
  card.addEventListener("dblclick", () => openTaskDialog(task.id));
  return card;
}

function renderTable(tasks) {
  if (!tasks.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.append(emptyState());
    row.append(cell);
    elements.taskTableBody.replaceChildren(row);
    return;
  }

  elements.taskTableBody.replaceChildren(
    ...tasks.map((task) => {
      const project = projectById(task.projectId);
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>
          <div class="row-title">${escapeHtml(task.title)}</div>
          <div class="row-subtitle">${task.tags.map((tag) => `#${escapeHtml(tag)}`).join(" ")}</div>
        </td>
        <td>${escapeHtml(project?.name || "No project")}</td>
        <td><span class="pill">${task.status}</span></td>
        <td><span class="pill ${task.priority.toLowerCase()}">${task.priority}</span></td>
        <td>${escapeHtml(task.owner || "Unassigned")}</td>
        <td><span class="pill${isOverdue(task.due) && task.status !== "Done" ? " overdue" : ""}">${formatDate(task.due)}</span></td>
        <td class="row-actions"><button class="ghost-button" type="button">Edit</button></td>
      `;
      row.querySelector("button").addEventListener("click", () => openTaskDialog(task.id));
      return row;
    }),
  );
}

function getFilteredTasks() {
  const query = elements.searchInput.value.trim().toLowerCase();
  const priority = elements.priorityFilter.value;
  const owner = elements.ownerFilter.value;

  return getVisibleTasks()
    .filter((task) => {
      const project = projectById(task.projectId);
      const haystack = [
        task.title,
        task.owner,
        task.priority,
        task.status,
        task.notes,
        project?.name,
        ...task.tags,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        (!query || haystack.includes(query)) &&
        (priority === "all" || task.priority === priority) &&
        (owner === "all" || task.owner === owner)
      );
    })
    .sort(sortTasks);
}

function getVisibleProjects() {
  return activeWorkstream === "all" ? state.projects : projectsForWorkstream(activeWorkstream);
}

function getVisibleTasks() {
  const projectIds = new Set((activeWorkstream === "all" ? state.projects : projectsForWorkstream(activeWorkstream)).map((project) => project.id));
  return state.tasks.filter((task) => projectIds.has(task.projectId));
}

function projectsForWorkstream(workstreamId) {
  return state.projects.filter((project) => projectWorkstream(project).id === workstreamId);
}

function projectWorkstream(project) {
  const name = project.name.toLowerCase();
  if (/inventory/.test(name)) return workstreamById("inventory-lifecycle");
  if (/databeat|contractor|onboarding|new-hire/.test(name)) return workstreamById("onboarding-contractors");
  if (/document|process|training/.test(name)) return workstreamById("process-documentation");
  if (/account|audit|okta|identity|access/.test(name)) return workstreamById("access-identity");
  if (/freshdesk|macro|ticket|workflow|automation|support/.test(name)) return workstreamById("support-operations");
  if (/printer|computer|refresh|apple|qa|network|device/.test(name)) return workstreamById("device-infrastructure");

  const projectTasks = state.tasks.filter((task) => task.projectId === project.id);
  const text = [
    project.name,
    project.owner,
    ...projectTasks.flatMap((task) => [task.title, task.notes, task.owner, task.tags.join(" ")]),
  ]
    .filter(Boolean)
    .join(" ");

  return workstreams.find((workstream) => workstream.match.test(text)) || workstreams.at(-1);
}

function workstreamById(id) {
  return workstreams.find((workstream) => workstream.id === id);
}

function tasksForSelectedProject() {
  if (state.selectedProjectId === "all") {
    return state.tasks;
  }
  return state.tasks.filter((task) => task.projectId === state.selectedProjectId);
}

function sortTasks(a, b) {
  const statusDiff = statuses.indexOf(a.status) - statuses.indexOf(b.status);
  if (statusDiff) return statusDiff;
  const priorityOrder = { High: 0, Medium: 1, Low: 2 };
  const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
  if (priorityDiff) return priorityDiff;
  return (a.due || "9999-12-31").localeCompare(b.due || "9999-12-31");
}

function setView(view) {
  state.view = view;
  render();
}

function handleTaskProjectChange() {
  const isNewProject = elements.taskProjectInput.value === NEW_PROJECT_VALUE;
  elements.taskNewProjectField.classList.toggle("hidden", !isNewProject);
  elements.taskNewProjectInput.required = isNewProject;
  elements.taskNewProjectInput.setCustomValidity("");
  if (isNewProject) {
    elements.taskNewProjectInput.focus();
  }
}

function openTaskDialog(taskId = null) {
  const task = taskId ? state.tasks.find((item) => item.id === taskId) : null;
  elements.taskDialogTitle.textContent = task ? "Edit Initiative" : "New Initiative";
  elements.deleteTaskButton.classList.toggle("hidden", !task);
  elements.taskId.value = task?.id || "";
  elements.taskTitleInput.value = task?.title || "";
  elements.taskProjectInput.value =
    task?.projectId || (activeWorkstream !== "all" ? projectsForWorkstream(activeWorkstream)[0]?.id : state.projects[0]?.id) || NEW_PROJECT_VALUE;
  elements.taskNewProjectInput.value = "";
  elements.taskStatusInput.value = task?.status || "Planned";
  elements.taskPriorityInput.value = task?.priority || "Medium";
  elements.taskOwnerInput.value = task?.owner || "";
  elements.taskDueInput.value = task?.due || "";
  elements.taskTagsInput.value = task?.tags.join(", ") || "";
  elements.taskNotesInput.value = task?.notes || "";
  handleTaskProjectChange();

  elements.taskDialog.showModal();
  elements.taskTitleInput.focus();
}

function saveTaskFromForm(event) {
  if (event.submitter?.value === "cancel") {
    return;
  }

  event.preventDefault();
  const existingId = elements.taskId.value;
  let projectId = elements.taskProjectInput.value;
  if (projectId === NEW_PROJECT_VALUE) {
    const projectName = elements.taskNewProjectInput.value.trim();
    if (!projectName) {
      elements.taskNewProjectInput.setCustomValidity("Enter a system name.");
      elements.taskNewProjectInput.reportValidity();
      return;
    }

    const project = {
      id: createId("p"),
      name: projectName,
      owner: elements.taskOwnerInput.value.trim() || "Jenn",
      due: elements.taskDueInput.value,
      color: projectColors[state.projects.length % projectColors.length],
    };
    state.projects.push(project);
    state.selectedProjectId = project.id;
    projectId = project.id;
  }

  const payload = {
    id: existingId || createId("t"),
    projectId,
    title: elements.taskTitleInput.value.trim(),
    status: elements.taskStatusInput.value,
    priority: elements.taskPriorityInput.value,
    owner: elements.taskOwnerInput.value.trim(),
    due: elements.taskDueInput.value,
    tags: elements.taskTagsInput.value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    notes: elements.taskNotesInput.value.trim(),
    createdAt: state.tasks.find((task) => task.id === existingId)?.createdAt || new Date().toISOString(),
  };

  if (!payload.title || !payload.projectId) return;

  if (existingId) {
    state.tasks = state.tasks.map((task) => (task.id === existingId ? payload : task));
  } else {
    state.tasks.push(payload);
  }

  elements.taskDialog.close();
  render();
}

function deleteCurrentTask() {
  const taskId = elements.taskId.value;
  if (!taskId) return;
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task || !confirm(`Delete "${task.title}"?`)) return;

  state.tasks = state.tasks.filter((item) => item.id !== taskId);
  elements.taskDialog.close();
  render();
}

function openProjectDialog(projectId = null) {
  const project = projectById(projectId);
  elements.projectDialogTitle.textContent = project ? "Edit System" : "New System";
  elements.saveProjectButton.textContent = project ? "Save System" : "Create System";
  elements.deleteProjectButton.classList.toggle("hidden", !project);
  elements.projectIdInput.value = project?.id || "";
  elements.projectNameInput.value = project?.name || "";
  elements.projectOwnerInput.value = project?.owner || "";
  elements.projectDueInput.value = project?.due || "";
  activeColor = project?.color || projectColors[state.projects.length % projectColors.length];
  renderProjectColorChoices();
  elements.projectDialog.showModal();
  elements.projectNameInput.focus();
}

function saveProjectFromForm(event) {
  if (event.submitter?.value === "cancel") {
    return;
  }

  event.preventDefault();
  const name = elements.projectNameInput.value.trim();
  if (!name) return;

  const existingId = elements.projectIdInput.value;
  const project = {
    id: existingId || createId("p"),
    name,
    owner: elements.projectOwnerInput.value.trim(),
    due: elements.projectDueInput.value,
    color: activeColor,
  };

  if (existingId) {
    state.projects = state.projects.map((item) => (item.id === existingId ? project : item));
  } else {
    state.projects.push(project);
  }
  state.selectedProjectId = project.id;
  elements.projectDialog.close();
  render();
}

function deleteCurrentProject() {
  const projectId = elements.projectIdInput.value;
  const project = projectById(projectId);
  if (!project) return;

  const taskCount = state.tasks.filter((task) => task.projectId === projectId).length;
  const label = taskCount === 1 ? "1 initiative" : `${taskCount} initiatives`;
  if (!confirm(`Delete "${project.name}" and ${label}?`)) {
    return;
  }

  state.projects = state.projects.filter((item) => item.id !== projectId);
  state.tasks = state.tasks.filter((task) => task.projectId !== projectId);
  state.selectedProjectId = "all";
  elements.projectDialog.close();
  render();
}

function openImportDialog() {
  elements.docImportInput.value = "";
  elements.importSummary.textContent = "Paste the Google Doc text to preview the import.";
  elements.importDialog.showModal();
  elements.docImportInput.focus();
}

function updateImportSummary() {
  const text = elements.docImportInput.value.trim();
  if (!text) {
    elements.importSummary.textContent = "Paste the Google Doc text to preview the import.";
    return;
  }

  const parsed = parseDocText(text);
  if (!parsed.projects.length) {
    elements.importSummary.textContent = "No systems found yet. Include names with Objective or Timeline lines.";
    return;
  }

  elements.importSummary.textContent = `Ready to import ${parsed.projects.length} systems and ${parsed.tasks.length} initiatives.`;
}

function importDocFromForm(event) {
  if (event.submitter?.value === "cancel") {
    return;
  }

  event.preventDefault();
  const parsed = parseDocText(elements.docImportInput.value);
  if (!parsed.projects.length) {
    elements.importSummary.textContent = "I could not find systems. Paste the doc text with project bullets plus Objective or Timeline lines.";
    return;
  }

  const label = parsed.projects.length === 1 ? "1 system" : `${parsed.projects.length} systems`;
  const taskLabel = parsed.tasks.length === 1 ? "1 initiative" : `${parsed.tasks.length} initiatives`;
  if (!confirm(`Replace this tracker with ${label} and ${taskLabel} from the pasted doc text?`)) {
    return;
  }

  state = parsed;
  elements.searchInput.value = "";
  elements.priorityFilter.value = "all";
  elements.ownerFilter.value = "all";
  elements.importDialog.close();
  render();
}

function parseDocText(rawText) {
  const lines = rawText
    .replace(/\uFEFF/g, "")
    .replace(/\r/g, "\n")
    .split("\n")
    .map(normalizeDocLine)
    .filter(Boolean);
  const year = extractDocYear(lines) || new Date().getFullYear();
  const projects = [];
  const tasks = [];
  let section = "ongoing";

  for (let index = 0; index < lines.length; index += 1) {
    const nextSection = sectionFromLine(lines[index]);
    if (nextSection) {
      section = nextSection;
      continue;
    }

    if (!isProjectHeader(lines, index)) {
      continue;
    }

    const block = [lines[index]];
    let nextIndex = index + 1;
    while (nextIndex < lines.length && !sectionFromLine(lines[nextIndex]) && !isProjectHeader(lines, nextIndex)) {
      block.push(lines[nextIndex]);
      nextIndex += 1;
    }

    const parsedProject = parseProjectBlock(block, section, year, projects.length);
    if (parsedProject) {
      projects.push(parsedProject.project);
      tasks.push(parsedProject.task);
    }
    index = nextIndex - 1;
  }

  return {
    selectedProjectId: "all",
    view: state.view || "board",
    projects,
    tasks,
  };
}

function parseProjectBlock(block, section, year, index) {
  const title = stripDocMarker(block[0]);
  if (!title) return null;

  const objective = firstValueAfterLabel(block, "Objective");
  const timeline = firstValueAfterLabel(block, "Timeline");
  const detailLines = block
    .slice(1)
    .map(stripDocMarker)
    .filter((line) => line && !isDocMetadataLine(line));
  const detailText = detailLines.join(" ");
  const owner = inferOwner(`${title} ${objective} ${detailText}`);
  const due = parseTimelineDate(timeline, year);
  const projectId = `p-import-${index + 1}-${slugify(title)}`;
  const taskTitle = objective || `Track ${title}`;
  const notes = [
    objective ? `Objective: ${objective}` : "",
    timeline ? `Timeline: ${timeline}` : "",
    detailText,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    project: {
      id: projectId,
      name: title,
      owner,
      due,
      color: projectColors[index % projectColors.length],
    },
    task: {
      id: `t-import-${index + 1}-${slugify(taskTitle)}`,
      projectId,
      title: taskTitle,
      status: inferStatus(section, timeline, detailText),
      priority: inferPriority(section, title, objective, detailText),
      owner,
      due,
      tags: inferTags(section, `${title} ${objective} ${detailText}`),
      notes,
      createdAt: new Date().toISOString(),
    },
  };
}

function normalizeDocLine(line) {
  return line
    .replace(/\t/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sectionFromLine(line) {
  const clean = stripDocMarker(line).toLowerCase();
  if (/^projects?\s*-\s*ongoing/.test(clean)) return "ongoing";
  if (/^projects?\s*-\s*completed/.test(clean)) return "completed";
  if (/^projects?\s*-\s*ideas?/.test(clean)) return "ideas";
  return "";
}

function isProjectHeader(lines, index) {
  const line = lines[index];
  const title = stripDocMarker(line);
  if (!title || title.length > 110 || sectionFromLine(line) || isDocMetadataLine(title)) {
    return false;
  }

  const looksLikeHeading = /^[\u2022*-]\s*/.test(line) || /^[A-Z0-9]/.test(title);
  const nearbyMetadata = lines
    .slice(index + 1, index + 6)
    .map(stripDocMarker)
    .some((candidate) => /^(Objective|Timeline)\s*:/i.test(candidate));
  return looksLikeHeading && nearbyMetadata;
}

function isDocMetadataLine(line) {
  return /^(Objective|Timeline|Write Up|Google Link|Website Link)\s*:?\s*/i.test(line);
}

function firstValueAfterLabel(lines, label) {
  const pattern = new RegExp(`^${label}\\s*:\\s*(.*)$`, "i");
  for (const line of lines.map(stripDocMarker)) {
    const match = line.match(pattern);
    if (match) return match[1].trim();
  }
  return "";
}

function stripDocMarker(line) {
  return line.replace(/^[\s\u2022*-]+/, "").trim();
}

function extractDocYear(lines) {
  const match = lines.join(" ").match(/\b(20\d{2})\b/);
  return match ? Number(match[1]) : null;
}

function parseTimelineDate(timeline, year) {
  const clean = timeline.trim();
  const dateMatch = clean.match(/\b(\d{1,2})\/(\d{1,2})\/(\d{2,4})\b/);
  if (dateMatch) {
    const month = dateMatch[1].padStart(2, "0");
    const day = dateMatch[2].padStart(2, "0");
    const parsedYear = dateMatch[3].length === 2 ? `20${dateMatch[3]}` : dateMatch[3];
    return `${parsedYear}-${month}-${day}`;
  }
  if (/end of year/i.test(clean)) {
    return `${year}-12-31`;
  }
  return "";
}

function inferStatus(section, timeline, detailText) {
  if (section === "completed") return "Done";
  if (section === "ideas" || /exploration/i.test(timeline)) return "Planned";
  return detailText ? "In Progress" : "Planned";
}

function inferPriority(section, title, objective, detailText) {
  if (section === "ideas") return "Low";
  const text = `${title} ${objective} ${detailText}`.toLowerCase();
  if (/audit|security|license|refresh|network|account|jamf|intune|okta/.test(text)) return "High";
  return "Medium";
}

function inferOwner(text) {
  const names = ["Trey", "Dave", "Vince", "Ed", "Helpdesk"];
  const matches = names.filter((name) => new RegExp(`\\b${name}\\b`, "i").test(text));
  return matches.length ? `Jenn + ${matches.join(" + ")}` : "Jenn";
}

function inferTags(section, text) {
  const lowerText = text.toLowerCase();
  const tags = [section];
  const keywords = [
    "jamf",
    "intune",
    "okta",
    "freshdesk",
    "zoom",
    "1password",
    "inventory",
    "printer",
    "printers",
    "network",
    "qa",
    "macros",
    "contractor",
    "contractors",
    "slack",
    "apple",
    "laptop",
    "laptops",
  ];

  for (const keyword of keywords) {
    if (lowerText.includes(keyword) && tags.length < 5) {
      tags.push(keyword.replace(/s$/, ""));
    }
  }
  return [...new Set(tags)];
}

function renderProjectColorChoices() {
  elements.projectColorInput.replaceChildren(
    ...projectColors.map((color) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `swatch ${color === activeColor ? "active" : ""}`;
      button.style.setProperty("--swatch-color", color);
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", String(color === activeColor));
      button.setAttribute("aria-label", color);
      button.addEventListener("click", () => {
        activeColor = color;
        renderProjectColorChoices();
      });
      return button;
    }),
  );
}

function dragTask(event) {
  event.dataTransfer.setData("text/plain", event.currentTarget.dataset.taskId);
  event.dataTransfer.effectAllowed = "move";
  event.currentTarget.classList.add("is-dragging");
}

function allowDrop(event) {
  event.preventDefault();
  event.currentTarget.classList.add("drag-over");
}

function clearDragState(event) {
  event.currentTarget.classList.remove("drag-over");
}

function clearDraggingCards() {
  document.querySelectorAll(".is-dragging, .drag-over").forEach((element) => {
    element.classList.remove("is-dragging", "drag-over");
  });
}

function dropTask(event) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData("text/plain");
  const status = event.currentTarget.dataset.status;

  state.tasks = state.tasks.map((task) => (task.id === taskId ? { ...task, status } : task));
  clearDraggingCards();
  render();
}

function exportState() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `project-tracker-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function resetDemo() {
  if (!confirm("Reset all systems and initiatives to the Google Doc plan?")) {
    return;
  }
  state = clone(seedState);
  elements.searchInput.value = "";
  elements.priorityFilter.value = "all";
  elements.ownerFilter.value = "all";
  render();
}

function projectById(id) {
  return state.projects.find((project) => project.id === id);
}

function getSelectedProject() {
  return state.selectedProjectId === "all" ? null : projectById(state.selectedProjectId);
}

function emptyState() {
  return elements.emptyStateTemplate.content.firstElementChild.cloneNode(true);
}

function offsetDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return "No date";
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(date);
}

function daysUntil(value) {
  if (!value) return Number.POSITIVE_INFINITY;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(`${value}T00:00:00`);
  return Math.ceil((due - today) / 86_400_000);
}

function isOverdue(value) {
  return daysUntil(value) < 0;
}

function createId(prefix) {
  if (globalThis.crypto?.randomUUID) {
    return `${prefix}-${globalThis.crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
