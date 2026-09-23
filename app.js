// Progressive enhancement only: all content is already in the page (baked at build time)
// for crawlers and no-JS visitors. This just wires up the click-to-expand rikishi panels.
document.querySelectorAll('.srow[data-detail]').forEach(row => {
  const detail = document.getElementById(row.dataset.detail);
  if (!detail) return;
  row.tabIndex = 0;
  row.setAttribute('role', 'button');
  row.setAttribute('aria-expanded', 'false');
  const toggle = () => {
    detail.hidden = !detail.hidden;
    row.classList.toggle('open', !detail.hidden);
    row.setAttribute('aria-expanded', String(!detail.hidden));
  };
  row.addEventListener('click', toggle);
  row.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });
});
