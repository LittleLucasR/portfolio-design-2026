import type { Project } from "../types/project";

const dialog = document.getElementById("project-modal") as HTMLDialogElement;
const closeBtn = document.getElementById("modal-close") as HTMLButtonElement;

function renderModal(project: Project): void {
  (document.getElementById("modal-image") as HTMLImageElement).src = project.image;
  (document.getElementById("modal-image") as HTMLImageElement).alt = project.title;
  (document.getElementById("modal-title") as HTMLElement).textContent = project.title;
  (document.getElementById("modal-category") as HTMLElement).textContent = project.category;
  (document.getElementById("modal-year") as HTMLElement).textContent = String(project.year);
  (document.getElementById("modal-description") as HTMLElement).textContent = project.description;

  const tagsEl = document.getElementById("modal-tags") as HTMLElement;
  tagsEl.innerHTML = "";
  project.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    tagsEl.appendChild(span);
  });

  const linkEl = document.getElementById("modal-link") as HTMLAnchorElement;
  linkEl.href = project.link || "#";
  linkEl.style.display = project.link ? "inline-block" : "none";
}

function openModal(project: Project): void {
  renderModal(project);
  dialog.showModal(); // nativo — já faz focus trap + aria + backdrop
}

function closeModal(): void {
  dialog.close(); // nativo
}

// Escuta o evento customizado disparado pelos cards
window.addEventListener("open-project-modal", (e) => {
  const project = (e as CustomEvent<Project>).detail;
  openModal(project);
});

// Fecha ao clicar no backdrop (clique fora do container)
dialog.addEventListener("click", (e) => {
  const rect = dialog.getBoundingClientRect();
  const clickedOutside =
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom;
  if (clickedOutside) closeModal();
});

closeBtn.addEventListener("click", closeModal);
// Escape já fecha nativamente — não precisa de keydown listener