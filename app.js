const KEY = "clica-e-cozinha-v1";
const GATE_KEY = "clica-e-cozinha-in";
const $ = (id) => document.getElementById(id);

const I18N = {
  pt: {
    brand: "Clica e Cozinha",
    line: "Clica e",
    name: "Cozinha",
    tag: "Culinária do mundo",
    enter: "Começar a cozinhar",
    splashLede: "Escolhe o país, a região e o prato. Ingredientes e passos estão aqui — sem YouTube.",
    splashFoot: "País · Região · Receita",
    heroA: "Monte seu",
    heroB: "Prato do Dia",
    chip: "Clica e Cozinha · Mundo",
    search: "Buscar culinária, país ou prato…",
    pickCountry: "Escolha um país",
    pickRegion: "Escolha a região",
    tapRegion: "Toque para o prato tradicional daquele sítio.",
    ingredients: "O que precisa",
    steps: "Como fazer",
    add: "Lista",
    added: "Na lista",
    list: "Lista de compras",
    emptyList: "Toque em Lista junto a um ingrediente. É a sua compra para cozinhar hoje.",
    clear: "Limpar lista",
    explore: "Todos os pratos",
    back: "Voltar",
    time: "min",
    serves: "pessoas",
    tip: "Dica",
    tabHome: "Início",
    tabExplore: "Explorar",
    tabList: "Lista",
    tabProfile: "Perfil",
    about: "Isto não é entrega. Escolhe o país, a cidade e cozinha em casa.",
    honestTitle: "Como trabalhamos as receitas",
    honestBody: "Cada ficha tem pesos, tempos e o que deve ver no ponto. O método é o tradicional do sítio. Ainda não cozinhámos estes pratos nesta cozinha da app — se algo falhar na sua, o erro é nosso. Escreva o que viu. Não queremos enganar ninguém.",
    origin: "De onde é",
    equipment: "O que precisa na cozinha",
    mistakes: "Onde a receita costuma falhar",
    serve: "Como servir",
    prep: "preparo",
    cook: "fogo",
    easy: "fácil",
    facil: "fácil",
    media: "média",
    dificil: "exige pulso",
    cue: "Ponto",
  },
  es: {
    brand: "Clica y Cocina",
    line: "Clica y",
    name: "Cocina",
    tag: "Cocina del mundo",
    enter: "Empezar a cocinar",
    splashLede: "Elige el país, la región y el plato. Ingredientes y pasos están aquí — sin YouTube.",
    splashFoot: "País · Región · Receta",
    heroA: "Monte su",
    heroB: "Plato del día",
    chip: "Clica y Cocina · Mundo",
    search: "Buscar cocina, país o plato…",
    pickCountry: "Elija un país",
    pickRegion: "Elija la región",
    tapRegion: "Toque para el plato tradicional de ese lugar.",
    ingredients: "Qué necesita",
    steps: "Cómo se hace",
    add: "Lista",
    added: "En la lista",
    list: "Lista de la compra",
    emptyList: "Toque Lista junto a un ingrediente. Es la compra para cocinar hoy.",
    clear: "Vaciar lista",
    explore: "Todos los platos",
    back: "Volver",
    time: "min",
    serves: "personas",
    tip: "Consejo",
    tabHome: "Inicio",
    tabExplore: "Explorar",
    tabList: "Lista",
    tabProfile: "Perfil",
    about: "Esto no es delivery. Elige el país, la ciudad y cocina en casa.",
    honestTitle: "Cómo trabajamos las recetas",
    honestBody: "Cada ficha tiene pesos, tiempos y qué debe ver en el punto. El método es el tradicional del lugar. Aún no hemos cocinado estos platos en esta cocina de la app — si algo falla en la suya, el error es nuestro. Cuéntenos qué vio. No queremos engañar a nadie.",
    origin: "De dónde es",
    equipment: "Qué hace falta en la cocina",
    mistakes: "Dónde suele fallar",
    serve: "Cómo servir",
    prep: "preparación",
    cook: "fuego",
    easy: "fácil",
    facil: "fácil",
    media: "media",
    dificil: "pide pulso",
    cue: "Punto",
  },
};

const COUNTRIES = [
  { id: "br", flag: "🇧🇷", dish: "feijoada",
    pt: { name: "Brasil", hint: "feijoada" }, es: { name: "Brasil", hint: "feijoada" },
    regions: [
      { id: "rj", dish: "feijoada", pt: { name: "Rio de Janeiro", hint: "feijoada" }, es: { name: "Río de Janeiro", hint: "feijoada" } },
      { id: "vix", dish: "muqueca", pt: { name: "Vitória", hint: "muqueca capixaba" }, es: { name: "Vitória", hint: "muqueca capixaba" } },
      { id: "vv", dish: "casquinha-siri", pt: { name: "Vila Velha", hint: "casquinha de siri" }, es: { name: "Vila Velha", hint: "casquinha de siri" } },
      { id: "ba", dish: "acaraje", pt: { name: "Bahia", hint: "acarajé" }, es: { name: "Bahía", hint: "acarajé" } },
      { id: "mg", dish: "pao-queijo", pt: { name: "Minas Gerais", hint: "pão de queijo" }, es: { name: "Minas Gerais", hint: "pan de queso" } },
      { id: "sp", dish: "virado", pt: { name: "São Paulo", hint: "virado paulista" }, es: { name: "São Paulo", hint: "virado paulista" } },
      { id: "pa", dish: "tacaca", pt: { name: "Pará", hint: "tacacá" }, es: { name: "Pará", hint: "tacacá" } },
      { id: "ne", dish: "carne-sol", pt: { name: "Nordeste", hint: "carne de sol" }, es: { name: "Nordeste", hint: "carne de sol" } },
    ] },
  { id: "es", flag: "🇪🇸", dish: "paella",
    pt: { name: "Espanha", hint: "paella" }, es: { name: "España", hint: "paella" },
    regions: [
      { id: "vc", dish: "paella", pt: { name: "Valência", hint: "paella" }, es: { name: "Valencia", hint: "paella" } },
      { id: "an", dish: "gazpacho", pt: { name: "Andaluzia", hint: "gazpacho" }, es: { name: "Andalucía", hint: "gazpacho" } },
      { id: "ga", dish: "pulpo", pt: { name: "Galiza", hint: "polvo à galega" }, es: { name: "Galicia", hint: "pulpo a la gallega" } },
    ] },
  { id: "mx", flag: "🇲🇽", dish: "tacos",
    pt: { name: "México", hint: "tacos" }, es: { name: "México", hint: "tacos" }, regions: [] },
  { id: "it", flag: "🇮🇹", dish: "pasta",
    pt: { name: "Itália", hint: "pasta" }, es: { name: "Italia", hint: "pasta" }, regions: [] },
  { id: "jp", flag: "🇯🇵", dish: "onigiri",
    pt: { name: "Japão", hint: "onigiri" }, es: { name: "Japón", hint: "onigiri" }, regions: [] },
  { id: "us", flag: "🇺🇸", dish: "burger",
    pt: { name: "EUA", hint: "burger" }, es: { name: "EE. UU.", hint: "burger" }, regions: [] },
  { id: "in", flag: "🇮🇳", dish: "curry",
    pt: { name: "Índia", hint: "curry" }, es: { name: "India", hint: "curry" }, regions: [] },
  { id: "pe", flag: "🇵🇪", dish: "ceviche",
    pt: { name: "Peru", hint: "ceviche" }, es: { name: "Perú", hint: "ceviche" }, regions: [] },
];

const DISHES = RECIPES;

let db = { lang: "pt", list: [], q: "" };
try {
  db = { ...db, ...JSON.parse(localStorage.getItem(KEY) || "{}") };
} catch { /* ignore */ }

function save() {
  localStorage.setItem(KEY, JSON.stringify(db));
}
function t(k) {
  return (I18N[db.lang] || I18N.pt)[k] || I18N.pt[k] || k;
}
function loc(obj) {
  return db.lang === "es" ? obj.es : obj.pt;
}
function country(id) {
  return COUNTRIES.find((c) => c.id === id);
}
function dish(id) {
  return DISHES[id];
}
function page() {
  const h = (location.hash || "#inicio").replace("#", "");
  const p = h.split("/");
  return { name: p[0] || "inicio", a: p[1], b: p[2] };
}
function inList(label) {
  return db.list.some((x) => x === label);
}

const FLAG = {
  br: '<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#009c3b"/><polygon points="15,1 29,10 15,19 1,10" fill="#ffdf00"/><circle cx="15" cy="10" r="4" fill="#002776"/></svg>',
  es: '<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#c60b1e"/><rect y="5" width="30" height="10" fill="#ffc400"/></svg>',
  mx: '<svg viewBox="0 0 30 20"><rect width="10" height="20" fill="#006847"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#ce1126"/></svg>',
  it: '<svg viewBox="0 0 30 20"><rect width="10" height="20" fill="#009246"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#ce2b37"/></svg>',
  jp: '<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="5.5" fill="#bc002d"/></svg>',
  us: '<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#bf0a30"/><rect y="2" width="30" height="2" fill="#fff"/><rect y="6" width="30" height="2" fill="#fff"/><rect y="10" width="30" height="2" fill="#fff"/><rect y="14" width="30" height="2" fill="#fff"/><rect y="18" width="30" height="2" fill="#fff"/><rect width="13" height="11" fill="#002868"/></svg>',
  in: '<svg viewBox="0 0 30 20"><rect width="30" height="7" fill="#ff9933"/><rect y="7" width="30" height="6" fill="#fff"/><rect y="13" width="30" height="7" fill="#138808"/><circle cx="15" cy="10" r="2.2" fill="none" stroke="#000080" stroke-width=".8"/></svg>',
  pe: '<svg viewBox="0 0 30 20"><rect width="10" height="20" fill="#d91023"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#d91023"/></svg>',
};

function thumb(dishId, flagId, alt) {
  return `<div class="thumb">
    <img src="img/${dishId}.jpg" alt="${esc(alt)}" onerror="this.className='ph';this.removeAttribute('src')">
    <span class="flag-badge">${FLAG[flagId] || ""}</span>
  </div>`;
}

function countryCard(c) {
  const L = loc(c);
  const href = c.regions.length ? `#pais/${c.id}` : `#prato/${c.dish}`;
  return `<a class="card" href="${href}">
    ${thumb(c.dish, c.id, L.name)}
    <h3>${L.name}</h3>
    <small>${L.hint}</small>
  </a>`;
}

function regionCard(c, r) {
  const L = loc(r);
  return `<a class="card" href="#prato/${r.dish}">
    ${thumb(r.dish, c.id, L.name)}
    <h3>${L.name}</h3>
    <small>${L.hint}</small>
  </a>`;
}

function dishCard(id) {
  const d = dish(id);
  if (!d) return "";
  const L = loc(d);
  const owner = COUNTRIES.find((c) => c.dish === id || c.regions.some((r) => r.dish === id));
  return `<a class="card" href="#prato/${id}">
    ${thumb(id, owner ? owner.id : "", L.name)}
    <h3>${L.name}</h3>
    <small>${d.time} ${t("time")} · ${d.serves} ${t("serves")}</small>
  </a>`;
}

function filteredCountries() {
  const q = (db.q || "").toLowerCase().trim();
  if (!q) return COUNTRIES;
  return COUNTRIES.filter((c) => {
    const L = loc(c);
    const d = dish(c.dish);
    const n = d ? loc(d).name : "";
    const regions = (c.regions || []).map((r) => loc(r).name + loc(r).hint).join(" ");
    return (L.name + L.hint + n + regions).toLowerCase().includes(q);
  });
}

function pageInicio() {
  return `<section class="hero">
    <h1><span>${t("heroA")}</span>${t("heroB")}</h1>
    <p class="pick">${t("pickCountry")}</p>
    <label class="search-wrap">
      <svg class="ico" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
      <input class="search" id="q" placeholder="${t("search")}" value="${esc(db.q)}" autocomplete="off" />
      <svg class="filter-ico" viewBox="0 0 24 24"><path d="M4 7h16M7 12h10M10 17h4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
    </label>
  </section>
  <div class="grid">${filteredCountries().map(countryCard).join("")}</div>`;
}

function pagePais(id) {
  const c = country(id);
  if (!c) return pageInicio();
  const L = loc(c);
  if (!c.regions.length) {
    location.hash = `#prato/${c.dish}`;
    return "";
  }
  return `<section class="wrap">
    <p><a class="back" href="#inicio">‹ ${t("back")}</a></p>
    <h1>${L.name}</h1>
    <p class="meta">${t("pickRegion")}</p>
  </section>
  <div class="grid">${c.regions.map((r) => regionCard(c, r)).join("")}</div>`;
}

function pagePrato(id) {
  const d = dish(id);
  if (!d) return pageInicio();
  const L = loc(d);
  const owner = COUNTRIES.find((c) => c.dish === id || c.regions.some((r) => r.dish === id));
  const back = owner && owner.regions.length ? `#pais/${owner.id}` : "#inicio";
  const diff = t(d.difficulty || "media");
  const steps = (L.steps || []).map((s, i) => {
    const text = typeof s === "string" ? s : s.do;
    const cue = typeof s === "string" ? "" : s.cue;
    return `<div class="step"><span class="num">${i + 1}</span><div><p>${text}</p>${cue ? `<p class="cue"><strong>${t("cue")}.</strong> ${cue}</p>` : ""}</div></div>`;
  }).join("");
  return `<article class="wrap recipe">
    <p><a class="back" href="${back}">‹ ${t("back")}</a></p>
    <img class="recipe-pic" src="img/${id}.jpg" alt="${esc(L.name)}" onerror="this.style.background='linear-gradient(160deg,#fdba74,#9a3412)';this.removeAttribute('src')">
    <h1>${L.name}</h1>
    <p class="meta">${d.time} ${t("time")} · ${d.prep || 0} ${t("prep")} · ${d.cook || d.time} ${t("cook")} · ${d.serves} ${t("serves")} · ${diff}</p>
    ${L.origin ? `<p class="origin"><strong>${t("origin")}.</strong> ${L.origin}</p>` : ""}
    <p class="honest">${L.honest || t("honestBody")}</p>
    ${L.equipment && L.equipment.length ? `<p class="equip"><strong>${t("equipment")}.</strong> ${L.equipment.join(" · ")}</p>` : ""}
    <h2>${t("ingredients")}</h2>
    ${L.ings.map((row) => {
      const label = row[1] || row[0];
      const on = inList(label);
      return `<div class="ing"><span><strong>${row[0]}</strong> ${row[1]}</span>
        <button type="button" data-act="tog" data-item="${esc(label)}">${on ? t("added") : t("add")}</button></div>`;
    }).join("")}
    <h2>${t("steps")}</h2>
    ${steps}
    <p class="tip"><strong>${t("tip")}.</strong> ${L.tip}</p>
    ${L.mistakes ? `<p class="mistakes"><strong>${t("mistakes")}.</strong> ${L.mistakes}</p>` : ""}
    ${L.serve ? `<p class="serve"><strong>${t("serve")}.</strong> ${L.serve}</p>` : ""}
  </article>`;
}

function pageExplorar() {
  return `<section class="wrap"><h1>${t("explore")}</h1></section>
  <div class="grid">${Object.keys(DISHES).map(dishCard).join("")}</div>`;
}

function pageLista() {
  if (!db.list.length) {
    return `<section class="wrap"><h1>${t("list")}</h1><p class="empty">${t("emptyList")}</p></section>`;
  }
  return `<section class="wrap">
    <h1>${t("list")}</h1>
    ${db.list.map((item) => `<div class="ing"><span>${esc(item)}</span>
      <button type="button" data-act="tog" data-item="${esc(item)}">✕</button></div>`).join("")}
    <div class="actions"><button class="btn ghost" data-act="clear">${t("clear")}</button></div>
  </section>`;
}

function pagePerfil() {
  return `<section class="wrap">
    <h1>${t("tabProfile")}</h1>
    <p class="meta">${t("about")}</p>
    <h2>${t("honestTitle")}</h2>
    <p class="honest">${t("honestBody")}</p>
    <div class="actions">
      <button class="btn" type="button" data-act="lang">${db.lang === "pt" ? "Español" : "Português"}</button>
    </div>
  </section>`;
}

function esc(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

function render() {
  if ($("brandChip")) $("brandChip").textContent = t("chip");
  $("langBtn").textContent = db.lang === "pt" ? "ES" : "PT";
  if ($("gateLang")) $("gateLang").textContent = db.lang === "pt" ? "ES" : "PT";
  if ($("gateKicker")) $("gateKicker").textContent = t("tag");
  if ($("gateLine")) $("gateLine").textContent = t("line");
  if ($("gateBrand")) $("gateBrand").textContent = t("name");
  if ($("gateLede")) $("gateLede").textContent = t("splashLede");
  if ($("gateEnter")) $("gateEnter").textContent = t("enter");
  if ($("gateFoot")) $("gateFoot").textContent = t("splashFoot");
  document.documentElement.lang = db.lang === "es" ? "es" : "pt";
  document.title = t("brand");
  const { name, a } = page();
  document.querySelectorAll(".tabs a").forEach((el) => {
    const tab = el.dataset.tab;
    const label = el.querySelector(".tab-label");
    const names = { inicio: "tabHome", explorar: "tabExplore", lista: "tabList", perfil: "tabProfile" };
    if (label) label.textContent = t(names[tab] || "tabHome");
    el.classList.toggle("active", name === tab || ((name === "pais" || name === "prato") && tab === "inicio"));
  });
  const view = $("view");
  if (name === "pais") view.innerHTML = pagePais(a);
  else if (name === "prato") view.innerHTML = pagePrato(a);
  else if (name === "explorar") view.innerHTML = pageExplorar();
  else if (name === "lista") view.innerHTML = pageLista();
  else if (name === "perfil") view.innerHTML = pagePerfil();
  else view.innerHTML = pageInicio();
  const q = $("q");
  if (q) {
    q.addEventListener("input", () => {
      db.q = q.value;
      save();
      render();
      const again = $("q");
      if (again) {
        again.focus();
        again.setSelectionRange(db.q.length, db.q.length);
      }
    });
  }
}

document.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-act]");
  if (!btn) return;
  if (btn.dataset.act === "lang") {
    db.lang = db.lang === "pt" ? "es" : "pt";
    save();
    render();
  }
  if (btn.dataset.act === "enter") {
    enterApp();
  }
  if (btn.dataset.act === "focus-search") {
    if (page().name !== "inicio") location.hash = "#inicio";
    setTimeout(() => { const q = $("q"); if (q) q.focus(); }, 80);
  }
  if (btn.dataset.act === "tog") {
    const item = btn.dataset.item;
    db.list = inList(item) ? db.list.filter((x) => x !== item) : db.list.concat(item);
    save();
    render();
  }
  if (btn.dataset.act === "clear") {
    db.list = [];
    save();
    render();
  }
});

window.addEventListener("hashchange", render);
if (sessionStorage.getItem(GATE_KEY) === "1") {
  document.body.classList.remove("gated");
  const gate = $("gate");
  if (gate) gate.hidden = true;
}
render();

function enterApp() {
  sessionStorage.setItem(GATE_KEY, "1");
  const gate = $("gate");
  document.body.classList.remove("gated");
  if (gate) {
    gate.classList.add("is-leaving");
    setTimeout(() => { gate.hidden = true; }, 450);
  }
}
