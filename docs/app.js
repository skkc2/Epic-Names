import { charts, relationshipNames } from './charts.js';

const $ = selector => document.querySelector(selector);
const landing = $('#landing');
const viewer = $('#viewer');
const sections = $('#sections');
const detail = $('#character-detail');
const svgNS = 'http://www.w3.org/2000/svg';
const themes = { ramayana: 'rama', mahabharata: 'maha', bhagavatam: 'bhag' };
let currentChart;
let activePerson;

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function svgElement(tag, attributes) {
  const node = document.createElementNS(svgNS, tag);
  for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
  return node;
}

function hasArrow(kind) {
  return ['parent', 'guardian', 'lineage'].includes(kind);
}

function drawEdge(svg, kind, line, markerId) {
  const path = svgElement('path', { class: 'edge ' + kind, d: line });
  if (hasArrow(kind)) path.setAttribute('marker-end', 'url(#' + markerId + ')');
  svg.append(path);
}

function addMarker(svg, id) {
  const marker = svgElement('marker', {
    id, viewBox: '0 0 8 8', refX: 7, refY: 4,
    markerWidth: 5, markerHeight: 5, orient: 'auto',
  });
  marker.append(svgElement('path', { d: 'M 0 0 L 8 4 L 0 8 Z', fill: 'context-stroke' }));
  const defs = svgElement('defs', {});
  defs.append(marker);
  svg.append(defs);
}

function renderLegend() {
  const list = $('#legend');
  list.replaceChildren();
  for (const [kind, name] of Object.entries(relationshipNames)) {
    const item = element('li');
    const svg = svgElement('svg', { viewBox: '0 0 25 12', 'aria-hidden': 'true' });
    const marker = 'legend-' + kind;
    if (hasArrow(kind)) addMarker(svg, marker);
    drawEdge(svg, kind, 'M 1 6 H 24', marker);
    item.append(svg, element('span', name));
    list.append(item);
  }
}

function groupName(id) {
  return currentChart.groups.find(group => group.id === id).name;
}

function makeSection(group) {
  const section = element('section', '', 'chart-section');
  section.id = group.id;
  const heading = element('h2', group.name);
  heading.id = 'heading-' + group.id;
  heading.tabIndex = -1;
  section.setAttribute('aria-labelledby', heading.id);

  const canvas = element('div', '', 'canvas');
  canvas.tabIndex = 0;
  canvas.setAttribute('role', 'region');
  canvas.setAttribute('aria-labelledby', heading.id);
  const diagram = element('div', '', 'diagram');
  diagram.style.width = group.width + 'px';
  diagram.style.height = group.height + 'px';
  const svg = svgElement('svg', { viewBox: '0 0 ' + group.width + ' ' + group.height, 'aria-hidden': 'true' });
  const marker = 'arrow-' + group.id;
  addMarker(svg, marker);
  for (const [index, line] of group.curves) {
    drawEdge(svg, currentChart.edges[index][2], line, marker);
  }
  diagram.append(svg);
  const positions = Object.entries(group.positions)
    .sort(([, [x1, y1]], [, [x2, y2]]) => y1 - y2 || x1 - x2);
  for (const [key, [x, y]] of positions) {
    const { name, detail: description, tone } = currentChart.nodes[key];
    const person = element('button', '', 'person ' + tone);
    person.id = 'person-' + key;
    person.type = 'button';
    person.style.left = x + 'px';
    person.style.top = y + 'px';
    person.setAttribute('aria-haspopup', 'dialog');
    person.append(element('b', name));
    if (description) person.append(element('small', description));
    person.addEventListener('click', () => showPerson(key));
    diagram.append(person);
  }
  canvas.append(diagram);
  section.append(heading, canvas);
  return section;
}

function relationshipCaption(kind, label, outgoing) {
  if (kind === 'parent') return outgoing ? 'Parent of' : 'Child of';
  if (kind === 'guardian') return outgoing ? 'Adoptive or foster parent of' : 'Adopted or fostered by';
  if (kind === 'spouse') return 'Spouse';
  if (kind === 'sibling') return 'Sibling';
  if (outgoing || !label) return label || relationshipNames[kind];
  if (kind === 'lineage') return 'Lineage or birth account';
  return 'Story connection';
}

function showPerson(key, move = false) {
  const button = document.getElementById('person-' + key);
  activePerson?.classList.remove('is-active');
  activePerson = button;
  button.classList.add('is-active');
  if (move && !detail.open) button.focus({ preventScroll: true });
  const { name, detail: description, group } = currentChart.nodes[key];
  $('#person-group').textContent = groupName(group);
  $('#person-name').textContent = name;
  $('#person-role').textContent = description;

  const list = $('#relationships');
  list.replaceChildren();
  const relationships = currentChart.edges
    .filter(([start, end]) => start === key || end === key)
    .sort((a, b) => Object.keys(relationshipNames).indexOf(a[2]) - Object.keys(relationshipNames).indexOf(b[2]));
  for (const [start, end, kind, label] of relationships) {
    const outgoing = start === key;
    const other = outgoing ? end : start;
    const item = element('li');
    const link = element('button', currentChart.nodes[other].name);
    link.type = 'button';
    link.addEventListener('click', () => showPerson(other, true));
    const targetGroup = currentChart.nodes[other].group;
    const contextual = !outgoing && label ? ' · ' + currentChart.nodes[start].name + ' → ' + name + ' (' + label + ')' : '';
    const sectionName = targetGroup !== group ? ' · ' + groupName(targetGroup) : '';
    item.append(link, element('small', relationshipCaption(kind, label, outgoing) + contextual + sectionName));
    list.append(item);
  }
  if (!relationships.length) list.append(element('li', 'This character has no links in this chart.'));
  if (move) button.scrollIntoView({ behavior: motion(), block: 'center', inline: 'center' });
  if (!detail.open) detail.showModal();
  detail.scrollTop = 0;
  detail.querySelector('.drawer-header button').focus({ preventScroll: true });
}

function motion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
}

function normalize(value) {
  return value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
}

function showRoute(initial = false) {
  const slug = location.hash.slice(1);
  const wasViewing = !!currentChart;
  currentChart = Object.hasOwn(charts, slug) ? charts[slug] : null;
  if (detail.open) detail.close();
  landing.hidden = !!currentChart;
  viewer.hidden = !currentChart;
  if (!currentChart) {
    sections.replaceChildren();
    document.title = 'Epic Names';
    if (wasViewing) landing.querySelector('a').focus();
    return;
  }
  document.title = currentChart.title + ' · Epic Names';
  $('.chart-header').className = 'chart-header ' + themes[slug];
  $('#chart-script').textContent = currentChart.sanskrit;
  $('#chart-title').textContent = currentChart.title;
  $('#summary').textContent = currentChart.summary;
  $('#note').textContent = currentChart.note;
  $('.sources').open = false;
  $('#source-links').replaceChildren(...currentChart.sources.map(([label, href]) => {
    const item = element('li');
    const link = element('a', label);
    link.href = href;
    item.append(link);
    return item;
  }));
  const jump = $('#jump');
  jump.replaceChildren(new Option('Choose a section', ''), ...currentChart.groups.map(group => new Option(group.name, group.id)));
  $('#names').replaceChildren(...[...new Set(Object.values(currentChart.nodes).map(node => node.name))]
    .sort((a, b) => a.localeCompare(b)).map(name => new Option(name, name)));
  $('#search').reset();
  $('#search-status').hidden = true;
  sections.replaceChildren(...currentChart.groups.map(makeSection));
  window.scrollTo(0, 0);
  if (!initial) $('#chart-title').focus({ preventScroll: true });
}

$('#jump').addEventListener('change', event => {
  const section = document.getElementById(event.target.value);
  if (!section) return;
  section.scrollIntoView({ behavior: motion() });
  section.querySelector('h2').focus({ preventScroll: true });
});

$('#search').addEventListener('submit', event => {
  event.preventDefault();
  const query = normalize($('#character').value);
  const status = $('#search-status');
  if (!query) return;
  const matches = Object.entries(currentChart.nodes).filter(([, node]) => normalize(node.name + ' ' + node.detail).includes(query));
  const exact = matches.find(([, node]) => normalize(node.name) === query);
  status.hidden = !!matches.length;
  if (matches.length) showPerson((exact || matches[0])[0], true);
  else status.textContent = 'No matching character. Try another spelling or a shorter name.';
});

detail.addEventListener('close', () => {
  if (activePerson?.isConnected) activePerson.focus({ preventScroll: true });
});
window.addEventListener('hashchange', () => showRoute());
renderLegend();
showRoute(true);
