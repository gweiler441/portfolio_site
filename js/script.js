// =====================================================
// FOOTER YEAR — auto-updates so you never have to edit it
// =====================================================
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// =====================================================
// HERO IMAGE ROTATOR — cycles the placeholder frames next
// to the headline on index.html. Skips rotation entirely
// if the user prefers reduced motion.
// =====================================================
const rotator = document.getElementById('hero-rotator');

if (rotator) {
  const frames = rotator.querySelectorAll('.hero__image-frame');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (frames.length > 1 && !prefersReducedMotion) {
    let current = 0;
    setInterval(() => {
      frames[current].classList.remove('is-active');
      current = (current + 1) % frames.length;
      frames[current].classList.add('is-active');
    }, 3000);
  }
}

// =====================================================
// PROJECT CARD RENDERING — shared by design.html and
// work.html. Reads from the `projects` array defined in
// js/projects.js (that file must be loaded BEFORE this
// one — check the <script> tag order in the HTML).
// =====================================================

// Turns one project object into the same HTML structure
// the project cards have always used, so all the existing
// CSS (borders, brackets, colors per tag) still applies.
function projectCardHTML(project) {
  const primaryTag = project.tags[0]; // used for the card's border/bracket color
  const label = primaryTag.charAt(0).toUpperCase() + primaryTag.slice(1);

  const imageHTML = project.image
    ? `<img src="${project.image}" alt="${project.title}">`
    : `<span class="image-placeholder">[image]</span>`;

  return `
    <article class="project-card" data-tag="${primaryTag}">
      <div class="project-card__image">${imageHTML}</div>
      <span class="project-card__bracket" aria-hidden="true"></span>
      <span class="project-card__label">${label}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </article>
  `;
}

// True if a project should show under the given filter.
// "all" always matches; otherwise the project needs that
// tag somewhere in its tags array (so multi-tagged
// projects can appear under more than one filter).
function projectMatchesFilter(project, filter) {
  return filter === 'all' || project.tags.includes(filter);
}

// True if a project matches a search query — checks title,
// description, keywords, and tags all at once.
function projectMatchesSearch(project, query) {
  if (!query) return true;
  const haystack = [
    project.title,
    project.description,
    ...(project.keywords || []),
    ...(project.tags || [])
  ].join(' ').toLowerCase();
  return haystack.includes(query.toLowerCase());
}

// =====================================================
// DESIGN PAGE GRID — shows anything tagged "design" or
// "bridge". No filter UI here, just an automatic subset.
// =====================================================
const designGrid = document.getElementById('design-grid');

if (designGrid && typeof projects !== 'undefined') {
  const matches = projects.filter(p =>
    p.tags.includes('design') || p.tags.includes('bridge')
  );
  designGrid.innerHTML = matches.map(projectCardHTML).join('');
}

// =====================================================
// ALL WORK PAGE — filter pills + search box, both reading
// from the shared projects array and re-rendering the grid
// on every change.
// =====================================================
const workGrid = document.getElementById('work-grid');

if (workGrid && typeof projects !== 'undefined') {
  const searchInput = document.getElementById('search-input');
  const pills = document.querySelectorAll('.pill');
  const noResults = document.getElementById('no-results');

  let activeFilter = 'all';

  function renderWorkGrid() {
    const query = searchInput.value.trim();
    const matches = projects.filter(p =>
      projectMatchesFilter(p, activeFilter) && projectMatchesSearch(p, query)
    );

    workGrid.innerHTML = matches.map(projectCardHTML).join('');
    noResults.hidden = matches.length !== 0;
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      activeFilter = pill.dataset.filter;
      renderWorkGrid();
    });
  });

  searchInput.addEventListener('input', renderWorkGrid);

  renderWorkGrid(); // initial render on page load
}