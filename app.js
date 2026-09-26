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
    splashLede: "Escolhe o país, a região e o prato. Ingredientes e passos, tudo num só lugar.",
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
    honestBody: "O lume é na sua casa. Aqui vai a ficha de estação: pesos, ordem e o ponto para confirmar na panela. O método é o tradicional do sítio. Não escrevemos “receita testada nesta cozinha” — isso seria mentira. Se o ponto falhar, o erro é da ficha.",
    chefMark: "Ficha de estação · o lume é na sua casa",
    mise: "Antes do lume",
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
    mine: "Os meus pratos",
    mineNew: "Montar o meu prato",
    mineEdit: "Editar o meu prato",
    mineEmpty: "Ainda não montou nenhum. Escreva o nome, o que leva e como faz.",
    mineName: "Nome do prato",
    mineOrigin: "De onde vem (casa, cidade, avó…)",
    mineQty: "Quanto",
    mineItem: "Ingrediente",
    mineStep: "Passo",
    mineAddIng: "Mais um ingrediente",
    mineAddStep: "Mais um passo",
    mineSave: "Guardar o prato",
    mineDel: "Apagar o meu prato",
    mineNeed: "Falta o nome, um ingrediente e um passo.",
    mineTip: "Dica (opcional)",
    mineTime: "Minutos no total",
    mineServes: "Para quantas pessoas",
    minePhoto: "Foto do prato",
    minePhotoPick: "Escolher foto",
    minePhotoDel: "Tirar a foto",
    minePhotoEmpty: "Ainda sem foto. Tire uma ou escolha da galeria.",
    minePhotoBig: "A foto é grande demais para este aparelho. Tirei a foto e guardei o resto.",
    mineMark: "O seu prato · neste aparelho (e no computador, se ligar)",
    mineHonest: "Isto não entra no catálogo tradicional. É o seu. Fica neste aparelho. Se ligar o computador em Perfil, os dois partilham os seus pratos. Se limpar os dados do browser, some.",
    syncTitle: "Computador",
    syncLead: "Escrever no telemóvel é difícil. Abra a app no computador, mostre o código e autorize aqui. Depois escreva no teclado — o telemóvel atualiza.",
    syncShow: "Mostrar código neste computador",
    syncCodeLabel: "Código do computador",
    syncConnect: "Ligar ao computador",
    syncStop: "Desligar",
    syncHostTitle: "Escrever neste computador",
    syncHostLead: "No telemóvel: Perfil → código de 6 números → Ligar → Permitir.",
    syncWifi: "Os dois precisam de internet. Na mesma Wi-Fi funciona melhor.",
    syncAuthTitle: "Permitir este computador?",
    syncAuthLead: "Ele vai ver e alterar os seus pratos neste telemóvel. Só aceite se foi você que abriu a app no computador.",
    syncAllow: "Permitir",
    syncDeny: "Recusar",
    syncWaiting: "À espera do telemóvel…",
    syncWaitingAuth: "À espera de permissão no telemóvel…",
    syncJoining: "A ligar…",
    syncConnected: "Ligado. O que guardar num lado aparece no outro.",
    syncDisconnected: "Ligação encerrada.",
    syncDenied: "O telemóvel recusou este computador.",
    syncNeed: "Digite o código de 6 números que aparece no computador.",
    syncFail: "Não foi possível ligar. Confira a internet e tente na mesma Wi-Fi.",
    syncMerged: "Juntei os pratos dos dois lados.",
    syncBannerIdle: "Escreva os pratos do telemóvel neste computador.",
    syncBannerStart: "Começar",
    syncBannerWait: "No telemóvel: Perfil → ",
    syncBannerOn: "Ligado ao telemóvel",
    syncBannerPhone: "Ligado ao computador",
    syncBannerOpen: "Ver código",
    syncBusy: "Esse código já está em uso. A gerar outro…",
  },
  es: {
    brand: "Clica y Cocina",
    line: "Clica y",
    name: "Cocina",
    tag: "Cocina del mundo",
    enter: "Empezar a cocinar",
    splashLede: "Elige el país, la región y el plato. Ingredientes y pasos, todo en un solo lugar.",
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
    honestBody: "El fuego es en su casa. Aquí va la ficha de estación: pesos, orden y el punto para confirmar en la olla. El método es el tradicional del lugar. No escribimos “receta testada en esta cocina”: sería mentira. Si el punto falla, el error es de la ficha.",
    chefMark: "Ficha de estación · el fuego es en su casa",
    mise: "Antes del fuego",
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
    mine: "Mis platos",
    mineNew: "Montar mi plato",
    mineEdit: "Editar mi plato",
    mineEmpty: "Aún no ha montado ninguno. Escriba el nombre, qué lleva y cómo se hace.",
    mineName: "Nombre del plato",
    mineOrigin: "De dónde viene (casa, ciudad, abuela…)",
    mineQty: "Cuánto",
    mineItem: "Ingrediente",
    mineStep: "Paso",
    mineAddIng: "Otro ingrediente",
    mineAddStep: "Otro paso",
    mineSave: "Guardar el plato",
    mineDel: "Borrar mi plato",
    mineNeed: "Falta el nombre, un ingrediente y un paso.",
    mineTip: "Consejo (opcional)",
    mineTime: "Minutos en total",
    mineServes: "Para cuántas personas",
    minePhoto: "Foto del plato",
    minePhotoPick: "Elegir foto",
    minePhotoDel: "Quitar la foto",
    minePhotoEmpty: "Aún sin foto. Haga una o elija de la galería.",
    minePhotoBig: "La foto es demasiado grande para este aparato. Quité la foto y guardé el resto.",
    mineMark: "Su plato · en este aparato (y en el computador, si lo enlaza)",
    mineHonest: "Esto no entra en el catálogo tradicional. Es suyo. Queda en este aparato. Si enlaza el computador en Perfil, los dos comparten sus platos. Si borra los datos del navegador, desaparece.",
    syncTitle: "Computador",
    syncLead: "Escribir en el teléfono es difícil. Abra la app en el computador, muestre el código y autorice aquí. Después escriba en el teclado — el teléfono se actualiza.",
    syncShow: "Mostrar código en este computador",
    syncCodeLabel: "Código del computador",
    syncConnect: "Enlazar al computador",
    syncStop: "Desconectar",
    syncHostTitle: "Escribir en este computador",
    syncHostLead: "En el teléfono: Perfil → código de 6 números → Enlazar → Permitir.",
    syncWifi: "Los dos necesitan internet. En la misma Wi-Fi funciona mejor.",
    syncAuthTitle: "¿Permitir este computador?",
    syncAuthLead: "Va a ver y cambiar sus platos en este teléfono. Acepte solo si fue usted quien abrió la app en el computador.",
    syncAllow: "Permitir",
    syncDeny: "Rechazar",
    syncWaiting: "Esperando el teléfono…",
    syncWaitingAuth: "Esperando permiso en el teléfono…",
    syncJoining: "Conectando…",
    syncConnected: "Enlazado. Lo que guarde en un lado aparece en el otro.",
    syncDisconnected: "Conexión cerrada.",
    syncDenied: "El teléfono rechazó este computador.",
    syncNeed: "Escriba el código de 6 números que aparece en el computador.",
    syncFail: "No se pudo enlazar. Compruebe internet e inténtelo en la misma Wi-Fi.",
    syncMerged: "Junté los platos de los dos lados.",
    syncBannerIdle: "Escriba los platos del teléfono en este computador.",
    syncBannerStart: "Empezar",
    syncBannerWait: "En el teléfono: Perfil → ",
    syncBannerOn: "Enlazado al teléfono",
    syncBannerPhone: "Enlazado al computador",
    syncBannerOpen: "Ver código",
    syncBusy: "Ese código ya está en uso. Generando otro…",
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

let db = { lang: "pt", list: [], q: "", mine: [] };
try {
  db = { ...db, ...JSON.parse(localStorage.getItem(KEY) || "{}") };
} catch { /* ignore */ }
if (!Array.isArray(db.mine)) db.mine = [];
db.mineErr = false;

let minePhotoDraft = { formId: null, data: "", dirty: false };
const SYNC_PEER_PREFIX = "cecozinha";
const syncLink = {
  peer: null, conn: null, role: "", code: "", status: "idle",
  authorized: false, hostRetries: 0, pushTimer: 0,
};

function save(opts) {
  const payload = { lang: db.lang, list: db.list, q: db.q, mine: db.mine };
  try {
    localStorage.setItem(KEY, JSON.stringify(payload));
  } catch {
    notify(t("minePhotoBig"));
    return false;
  }
  if (!(opts && (opts.fromSync || opts.quiet))) scheduleSyncPush();
  return true;
}
function t(k) {
  return (I18N[db.lang] || I18N.pt)[k] || I18N.pt[k] || k;
}
function dish(id) {
  if (DISHES[id]) return DISHES[id];
  return (db.mine || []).find((x) => x.id === id);
}
function isMine(id) {
  return String(id || "").startsWith("meu-");
}
function loc(obj) {
  if (!obj) return {};
  if (obj.custom) return obj.pt || obj.es || obj;
  return db.lang === "es" ? obj.es : obj.pt;
}
function mineSlug(name) {
  const s = String(name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
  return s || "prato";
}
function safePhoto(src) {
  return typeof src === "string" && /^data:image\/(jpeg|jpg|png|webp);base64,/i.test(src) ? src : "";
}
function readDishPhoto(file) {
  return new Promise((resolve) => {
    if (!file || !String(file.type || "").startsWith("image/")) return resolve("");
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const max = 720;
      let w = img.naturalWidth || 1;
      let h = img.naturalHeight || 1;
      if (w > max || h > max) {
        const s = max / Math.max(w, h);
        w = Math.round(w * s);
        h = Math.round(h * s);
      }
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", 0.72));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve("");
    };
    img.src = url;
  });
}
function photoPreviewHtml(src) {
  if (safePhoto(src)) return `<img class="photo-prev" src="${src}" alt="">`;
  return `<div class="photo-prev empty">${t("minePhotoEmpty")}</div>`;
}
function collectMineForm() {
  const name = ($("f-name") && $("f-name").value.trim()) || "";
  const origin = ($("f-origin") && $("f-origin").value.trim()) || "";
  const time = Number($("f-time") && $("f-time").value) || 0;
  const serves = Number($("f-serves") && $("f-serves").value) || 0;
  const qtys = [...document.querySelectorAll(".f-qty")];
  const items = [...document.querySelectorAll(".f-item")];
  const ings = qtys.map((q, i) => [
    q.value.trim(),
    (items[i] && items[i].value.trim()) || "",
  ]).filter((row) => row[0] || row[1]);
  const steps = [...document.querySelectorAll(".f-step")]
    .map((el) => ({ do: el.value.trim() }))
    .filter((s) => s.do);
  const tip = ($("f-tip") && $("f-tip").value.trim()) || "";
  return { name, origin, time, serves, ings, steps, tip };
}
function saveMine(id) {
  const f = collectMineForm();
  if (!(f.name && f.ings.length && f.steps.length)) {
    const form = $("mine-form");
    if (form && !form.querySelector(".mine-err")) {
      const p = document.createElement("p");
      p.className = "honest mine-err";
      p.textContent = t("mineNeed");
      const mark = form.querySelector("h1");
      if (mark) mark.after(p);
      else form.prepend(p);
    }
    if ($("f-name")) $("f-name").focus();
    return;
  }
  const text = {
    name: f.name,
    origin: f.origin,
    ings: f.ings,
    steps: f.steps,
    tip: f.tip,
  };
  const keep = id && isMine(id) ? id : `meu-${mineSlug(f.name)}-${Date.now()}`;
  const prev = id && isMine(id) ? dish(id) : null;
  const photo = minePhotoDraft.dirty ? safePhoto(minePhotoDraft.data) : safePhoto(prev && prev.photo);
  const rec = {
    id: keep,
    custom: true,
    time: f.time || 30,
    serves: f.serves || 2,
    photo,
    updatedAt: new Date().toISOString(),
    pt: text,
    es: { ...text },
  };
  const i = db.mine.findIndex((x) => x.id === rec.id);
  if (i >= 0) db.mine[i] = rec;
  else db.mine.push(rec);
  db.mineErr = false;
  if (!save()) {
    rec.photo = "";
    if (i >= 0) db.mine[i] = rec;
    else db.mine[db.mine.length - 1] = rec;
    save({ quiet: true });
  }
  minePhotoDraft = { formId: rec.id, data: rec.photo, dirty: false };
  location.hash = `#prato/${rec.id}`;
}
function deleteMine(id) {
  if (!isMine(id)) return;
  db.mine = db.mine.filter((x) => x.id !== id);
  save();
  if (location.hash === `#prato/${id}`) location.hash = "#explorar";
  else render();
}
function country(id) {
  return COUNTRIES.find((c) => c.id === id);
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
  if (isMine(dishId)) {
    const d = dish(dishId);
    if (d && safePhoto(d.photo)) {
      return `<div class="thumb"><img src="${d.photo}" alt="${esc(alt)}"></div>`;
    }
    const letter = String(alt || "?").trim().slice(0, 1).toUpperCase() || "?";
    return `<div class="thumb"><div class="ph mine-ph">${esc(letter)}</div></div>`;
  }
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
    <small>${d.time || "—"} ${t("time")} · ${d.serves || "—"} ${t("serves")}</small>
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
  const mine = db.mine || [];
  const q = (db.q || "").toLowerCase().trim();
  const mineHit = q
    ? mine.filter((d) => loc(d).name.toLowerCase().includes(q))
    : mine;
  return `<section class="hero">
    <p><button class="back splash-back" type="button" data-act="splash">‹ ${t("back")}</button></p>
    <h1><span>${t("heroA")}</span>${t("heroB")}</h1>
    <p class="pick">${t("pickCountry")}</p>
    <label class="search-wrap">
      <svg class="ico" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
      <input class="search" id="q" placeholder="${t("search")}" value="${esc(db.q)}" autocomplete="off" />
      ${q ? `<button class="clear-q" type="button" data-act="clear-q" aria-label="${t("back")}">✕</button>`
        : `<svg class="filter-ico" viewBox="0 0 24 24"><path d="M4 7h16M7 12h10M10 17h4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`}
    </label>
    <a class="btn mine-cta" href="#montar">${t("mineNew")}</a>
  </section>
  ${mineHit.length ? `<p class="wrap meta">${t("mine")}</p><div class="grid">${mineHit.map((d) => dishCard(d.id)).join("")}</div>` : ""}
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
  const mine = isMine(id);
  const owner = COUNTRIES.find((c) => c.dish === id || c.regions.some((r) => r.dish === id));
  const back = mine ? "#explorar" : owner && owner.regions.length ? `#pais/${owner.id}` : "#inicio";
  const diff = t(d.difficulty || "facil");
  const steps = (L.steps || []).map((s, i) => {
    const text = typeof s === "string" ? s : s.do;
    const cue = typeof s === "string" ? "" : s.cue;
    return `<div class="step"><span class="num">${i + 1}</span><div><p>${text}</p>${cue ? `<p class="cue"><strong>${t("cue")}.</strong> ${cue}</p>` : ""}</div></div>`;
  }).join("");
  const pic = mine
    ? (safePhoto(d.photo)
      ? `<img class="recipe-pic" src="${d.photo}" alt="${esc(L.name)}">`
      : `<div class="recipe-pic mine-hero">${esc((L.name || "?").slice(0, 1).toUpperCase())}</div>`)
    : `<img class="recipe-pic" src="img/${id}.jpg" alt="${esc(L.name)}" onerror="this.style.background='linear-gradient(160deg,#fdba74,#9a3412)';this.removeAttribute('src')">`;
  return `<article class="wrap recipe">
    <p><a class="back" href="${back}">‹ ${t("back")}</a></p>
    ${pic}
    <p class="chef-mark">${mine ? t("mineMark") : t("chefMark")}</p>
    <h1>${L.name}</h1>
    <p class="meta">${d.time || "—"} ${t("time")} · ${d.serves || "—"} ${t("serves")}${mine ? "" : ` · ${d.prep || 0} ${t("prep")} · ${diff}`}</p>
    ${L.origin ? `<p class="origin"><strong>${t("origin")}.</strong> ${L.origin}</p>` : ""}
    <p class="honest">${mine ? t("mineHonest") : (L.honest || t("honestBody"))}</p>
    ${!mine && L.mise && L.mise.length ? `<h2>${t("mise")}</h2><ol class="mise">${L.mise.map((m) => `<li>${m}</li>`).join("")}</ol>` : ""}
    ${!mine && L.equipment && L.equipment.length ? `<p class="equip"><strong>${t("equipment")}.</strong> ${L.equipment.join(" · ")}</p>` : ""}
    <h2>${t("ingredients")}</h2>
    ${(L.ings || []).map((row) => {
      const label = row[1] || row[0];
      const on = inList(label);
      return `<div class="ing"><span><strong>${row[0]}</strong> ${row[1] || ""}</span>
        <button type="button" data-act="tog" data-item="${esc(label)}">${on ? t("added") : t("add")}</button></div>`;
    }).join("")}
    <h2>${t("steps")}</h2>
    ${steps}
    ${L.tip ? `<p class="tip"><strong>${t("tip")}.</strong> ${L.tip}</p>` : ""}
    ${!mine && L.mistakes ? `<p class="mistakes"><strong>${t("mistakes")}.</strong> ${L.mistakes}</p>` : ""}
    ${!mine && L.serve ? `<p class="serve"><strong>${t("serve")}.</strong> ${L.serve}</p>` : ""}
    ${mine ? `<div class="actions">
      <a class="btn ghost" href="#montar/${id}">${t("mineEdit")}</a>
      <button class="btn" type="button" data-act="del-mine" data-id="${esc(id)}">${t("mineDel")}</button>
    </div>` : ""}
  </article>`;
}

function pageExplorar() {
  const mine = db.mine || [];
  return `<section class="wrap">
    <h1>${t("explore")}</h1>
    <a class="btn mine-cta" href="#montar">${t("mineNew")}</a>
  </section>
  ${mine.length
    ? `<p class="wrap meta">${t("mine")}</p><div class="grid">${mine.map((d) => dishCard(d.id)).join("")}</div>`
    : `<p class="wrap empty">${t("mineEmpty")}</p>`}
  <p class="wrap meta">${t("pickCountry")}</p>
  <div class="grid">${Object.keys(DISHES).map(dishCard).join("")}</div>`;
}

function pageMontar(id) {
  const editing = id && isMine(id) ? dish(id) : null;
  const L = editing ? loc(editing) : {};
  const ings = (L.ings && L.ings.length) ? L.ings : [["", ""]];
  const steps = (L.steps && L.steps.length) ? L.steps : [{ do: "" }];
  return `<form class="wrap recipe" id="mine-form" data-id="${esc(editing ? editing.id : "")}">
    <p><a class="back" href="${editing ? `#prato/${id}` : "#inicio"}">‹ ${t("back")}</a></p>
    <p class="chef-mark">${t("mineMark")}</p>
    <h1>${editing ? t("mineEdit") : t("mineNew")}</h1>
    <p class="honest">${t("mineHonest")}</p>
    <div class="photo-pick">
      <span>${t("minePhoto")}</span>
      <div id="photoPrev">${photoPreviewHtml(minePhotoDraft.data)}</div>
      <label class="btn ghost file-btn">${t("minePhotoPick")}
        <input id="f-photo" type="file" accept="image/*" />
      </label>
      ${minePhotoDraft.data ? `<button class="btn ghost" type="button" data-act="photo-del">${t("minePhotoDel")}</button>` : ""}
    </div>
    <label class="field">${t("mineName")}
      <input id="f-name" value="${esc(L.name || "")}" autocomplete="off" required />
    </label>
    <label class="field">${t("mineOrigin")}
      <input id="f-origin" value="${esc(L.origin || "")}" autocomplete="off" />
    </label>
    <div class="field-row">
      <label class="field">${t("mineTime")}
        <input id="f-time" type="number" min="1" inputmode="numeric" value="${esc(editing ? editing.time : "")}" />
      </label>
      <label class="field">${t("mineServes")}
        <input id="f-serves" type="number" min="1" inputmode="numeric" value="${esc(editing ? editing.serves : "")}" />
      </label>
    </div>
    <h2>${t("ingredients")}</h2>
    ${ings.map((row, i) => `<div class="field-row ing-row">
      <input class="f-qty" placeholder="${t("mineQty")}" value="${esc(row[0] || "")}" data-i="${i}" />
      <input class="f-item" placeholder="${t("mineItem")}" value="${esc(row[1] || "")}" data-i="${i}" />
    </div>`).join("")}
    <button class="btn ghost" type="button" data-act="row-ing">${t("mineAddIng")}</button>
    <h2>${t("steps")}</h2>
    ${steps.map((s, i) => {
      const text = typeof s === "string" ? s : (s.do || "");
      return `<label class="field">${t("mineStep")} ${i + 1}
        <textarea class="f-step" rows="3">${esc(text)}</textarea>
      </label>`;
    }).join("")}
    <button class="btn ghost" type="button" data-act="row-step">${t("mineAddStep")}</button>
    <label class="field">${t("mineTip")}
      <textarea id="f-tip" rows="2">${esc(L.tip || "")}</textarea>
    </label>
    <div class="actions">
      <button class="btn" type="submit">${t("mineSave")}</button>
    </div>
  </form>`;
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
  const code = formatSyncCode(syncLink.code);
  const hosting = syncLink.role === "host" && syncLink.status !== "idle";
  return `<section class="wrap">
    <h1>${t("tabProfile")}</h1>
    <p class="meta">${t("about")}</p>
    <h2>${t("syncTitle")}</h2>
    <p class="honest">${t("syncLead")}</p>
    <p class="sync-code" id="syncCodeDisplay"${hosting && syncLink.code ? "" : " hidden"}>${code || "—"}</p>
    <p class="sync-status" id="syncStatus"></p>
    <div class="actions">
      <button class="btn" type="button" data-act="sync-host">${t("syncShow")}</button>
    </div>
    <label class="field">${t("syncCodeLabel")}
      <input id="syncJoinInput" inputmode="numeric" maxlength="7" autocomplete="one-time-code" placeholder="000 000" />
    </label>
    <div class="actions">
      <button class="btn" type="button" data-act="sync-join">${t("syncConnect")}</button>
      <button class="btn ghost" type="button" data-act="sync-stop" id="syncStopBtn"${syncLink.status === "idle" ? " hidden" : ""}>${t("syncStop")}</button>
    </div>
    <p class="meta">${t("syncWifi")}</p>
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
  document.querySelectorAll(".gate-flags [data-c]").forEach((el) => {
    const c = country(el.dataset.c);
    const name = el.querySelector(".flag-name");
    if (c && name) name.textContent = loc(c).name;
  });
  document.documentElement.lang = db.lang === "es" ? "es" : "pt";
  document.title = t("brand");
  const { name, a } = page();
  document.querySelectorAll(".tabs a").forEach((el) => {
    const tab = el.dataset.tab;
    const label = el.querySelector(".tab-label");
    const names = { inicio: "tabHome", explorar: "tabExplore", lista: "tabList", perfil: "tabProfile" };
    if (label) label.textContent = t(names[tab] || "tabHome");
    el.classList.toggle("active", name === tab || ((name === "pais" || name === "prato") && tab === "inicio") || (name === "montar" && tab === "explorar"));
  });
  const view = $("view");
  if (name === "montar") {
    const fid = a || "";
    if (minePhotoDraft.formId !== fid) {
      const d = fid && isMine(fid) ? dish(fid) : null;
      minePhotoDraft = { formId: fid, data: (d && d.photo) || "", dirty: false };
    }
    view.innerHTML = pageMontar(a);
  } else if (name === "pais") view.innerHTML = pagePais(a);
  else if (name === "prato") view.innerHTML = pagePrato(a);
  else if (name === "explorar") view.innerHTML = pageExplorar();
  else if (name === "lista") view.innerHTML = pageLista();
  else if (name === "perfil") view.innerHTML = pagePerfil();
  else view.innerHTML = pageInicio();
  const form = $("mine-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      saveMine(form.dataset.id || "");
    });
  }
  const photo = $("f-photo");
  if (photo) {
    photo.addEventListener("change", async () => {
      const file = photo.files && photo.files[0];
      const data = await readDishPhoto(file);
      minePhotoDraft.data = data;
      minePhotoDraft.dirty = true;
      const box = $("photoPrev");
      if (box) box.innerHTML = photoPreviewHtml(data);
      const pick = photo.closest(".photo-pick");
      if (data && pick && !pick.querySelector("[data-act=photo-del]")) {
        pick.insertAdjacentHTML("beforeend", `<button class="btn ghost" type="button" data-act="photo-del">${t("minePhotoDel")}</button>`);
      }
    });
  }
  const join = $("syncJoinInput");
  if (join) {
    join.addEventListener("input", () => {
      const formatted = formatSyncCode(join.value);
      if (join.value !== formatted) join.value = formatted;
    });
  }
  const q = $("q");
  if (q) {
    q.addEventListener("input", () => {
      db.q = q.value;
      save({ quiet: true });
      render();
      const again = $("q");
      if (again) {
        again.focus();
        again.setSelectionRange(db.q.length, db.q.length);
      }
    });
  }
  updateSyncUi();
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
  if (btn.dataset.act === "row-ing") {
    btn.insertAdjacentHTML("beforebegin", `<div class="field-row ing-row">
      <input class="f-qty" placeholder="${esc(t("mineQty"))}" />
      <input class="f-item" placeholder="${esc(t("mineItem"))}" />
    </div>`);
  }
  if (btn.dataset.act === "row-step") {
    const n = document.querySelectorAll(".f-step").length + 1;
    btn.insertAdjacentHTML("beforebegin", `<label class="field">${esc(t("mineStep"))} ${n}
      <textarea class="f-step" rows="3"></textarea>
    </label>`);
  }
  if (btn.dataset.act === "del-mine") {
    if (window.confirm(t("mineDel") + "?")) deleteMine(btn.dataset.id);
  }
  if (btn.dataset.act === "photo-del") {
    minePhotoDraft.data = "";
    minePhotoDraft.dirty = true;
    const box = $("photoPrev");
    if (box) box.innerHTML = photoPreviewHtml("");
    btn.remove();
  }
  if (btn.dataset.act === "splash") {
    event.preventDefault();
    showSplash();
  }
  if (btn.dataset.act === "clear-q") {
    db.q = "";
    save({ quiet: true });
    location.hash = "#inicio";
    render();
  }
  if (btn.dataset.act === "sync-host") startComputerHost({ openSheet: true });
  if (btn.dataset.act === "sync-host-close") setSyncHostSheetOpen(false);
  if (btn.dataset.act === "sync-join") joinComputerHost();
  if (btn.dataset.act === "sync-stop") stopSyncLink(true);
  if (btn.dataset.act === "sync-allow") allowSyncComputer();
  if (btn.dataset.act === "sync-deny") denySyncComputer();
  if (btn.dataset.act === "sync-banner") handleSyncBannerClick();
});

window.addEventListener("hashchange", render);
if (sessionStorage.getItem(GATE_KEY) === "1") {
  document.body.classList.remove("gated");
  const gate = $("gate");
  if (gate) gate.hidden = true;
}
render();

function showSplash() {
  sessionStorage.removeItem(GATE_KEY);
  const gate = $("gate");
  document.body.classList.add("gated");
  if (gate) {
    gate.hidden = false;
    gate.classList.remove("is-leaving");
  }
  if ((location.hash || "#inicio") !== "#inicio") location.hash = "#inicio";
  updateSyncUi();
}

function enterApp() {
  sessionStorage.setItem(GATE_KEY, "1");
  const gate = $("gate");
  document.body.classList.remove("gated");
  if (gate) {
    gate.classList.add("is-leaving");
    setTimeout(() => { gate.hidden = true; }, 450);
  }
  updateSyncUi();
}

function notify(msg) {
  const n = $("toast");
  if (!n) return;
  n.textContent = msg;
  n.hidden = false;
  clearTimeout(notify.t);
  notify.t = setTimeout(() => { n.hidden = true; }, 2800);
}

function isDesktopComputer() {
  return window.matchMedia("(min-width: 768px)").matches;
}
function formatSyncCode(code) {
  const digits = String(code || "").replace(/\D/g, "").slice(0, 6);
  return digits.length > 3 ? `${digits.slice(0, 3)} ${digits.slice(3)}` : digits;
}
function syncPeerId(code) {
  return `${SYNC_PEER_PREFIX}${String(code || "").replace(/\D/g, "")}`;
}
function loadPeerJs() {
  if (window.Peer) return Promise.resolve(window.Peer);
  if (loadPeerJs.pending) return loadPeerJs.pending;
  loadPeerJs.pending = new Promise((resolve, reject) => {
    const local = document.createElement("script");
    local.src = "./vendor/peerjs.min.js";
    local.onload = () => (window.Peer ? resolve(window.Peer) : reject(new Error("peerjs")));
    local.onerror = () => {
      local.remove();
      const remote = document.createElement("script");
      remote.src = "https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js";
      remote.onload = () => (window.Peer ? resolve(window.Peer) : reject(new Error("peerjs")));
      remote.onerror = () => reject(new Error("peerjs"));
      document.head.appendChild(remote);
    };
    document.head.appendChild(local);
  }).catch((error) => {
    loadPeerJs.pending = null;
    throw error;
  });
  return loadPeerJs.pending;
}
function kitchenSnapshot() {
  return { mine: db.mine, list: db.list };
}
function normalizeMine(raw) {
  if (!raw || typeof raw !== "object") return null;
  const id = String(raw.id || "");
  if (!id.startsWith("meu-")) return null;
  const text = raw.pt || raw.es || {};
  const name = String(text.name || "").trim();
  if (!name) return null;
  const ings = Array.isArray(text.ings)
    ? text.ings.map((row) => [String((row && row[0]) || ""), String((row && row[1]) || "")]).filter((r) => r[0] || r[1])
    : [];
  const steps = Array.isArray(text.steps)
    ? text.steps.map((s) => ({ do: typeof s === "string" ? s : String((s && s.do) || "") })).filter((s) => s.do)
    : [];
  const packed = {
    name,
    origin: String(text.origin || ""),
    ings,
    steps,
    tip: String(text.tip || ""),
  };
  return {
    id,
    custom: true,
    time: Number(raw.time) || 30,
    serves: Number(raw.serves) || 2,
    photo: safePhoto(raw.photo),
    updatedAt: String(raw.updatedAt || ""),
    pt: packed,
    es: packed,
  };
}
function sendSyncMessage(message) {
  if (!syncLink.conn || syncLink.conn.open === false) return false;
  try {
    syncLink.conn.send(message);
    return true;
  } catch {
    return false;
  }
}
function scheduleSyncPush() {
  if (!syncLink.authorized || !syncLink.conn) return;
  clearTimeout(syncLink.pushTimer);
  syncLink.pushTimer = setTimeout(() => {
    if (!syncLink.authorized) return;
    sendSyncMessage({ type: "state", payload: kitchenSnapshot() });
  }, 280);
}
function applySyncState(payload, opts) {
  const options = opts || {};
  if (!payload || typeof payload !== "object") return;
  const incoming = Array.isArray(payload.mine) ? payload.mine.map(normalizeMine).filter(Boolean) : [];
  if (options.merge) {
    const map = new Map();
    (db.mine || []).forEach((d) => map.set(d.id, d));
    incoming.forEach((d) => {
      const prev = map.get(d.id);
      if (!prev || String(d.updatedAt || "") >= String(prev.updatedAt || "")) map.set(d.id, d);
    });
    db.mine = [...map.values()];
    db.list = [...new Set([...(db.list || []), ...((payload.list) || []).map(String)])];
  } else {
    db.mine = incoming;
    if (Array.isArray(payload.list)) db.list = payload.list.map(String);
  }
  save({ fromSync: true });
  if (options.reply) scheduleSyncPush();
  render();
  if (options.merge) notify(t("syncMerged"));
}
function handleSyncMessage(message) {
  if (!message || typeof message !== "object") return;
  if (message.type === "hello" && syncLink.role === "host") {
    syncLink.status = "auth";
    updateSyncUi();
    return;
  }
  if (message.type === "auth-ok" && syncLink.role === "host") {
    syncLink.authorized = true;
    syncLink.status = "linked";
    setSyncHostSheetOpen(false);
    applySyncState(message.payload, { merge: true, reply: true });
    updateSyncUi();
    notify(t("syncConnected"));
    return;
  }
  if (message.type === "auth-deny" && syncLink.role === "host") {
    notify(t("syncDenied"));
    stopSyncLink(true);
    return;
  }
  if (message.type === "state" && syncLink.authorized) {
    applySyncState(message.payload);
  }
}
function bindSyncConnection(conn) {
  syncLink.conn = conn;
  conn.on("data", handleSyncMessage);
  conn.on("close", () => {
    if (syncLink.conn !== conn) return;
    const wasLinked = syncLink.authorized;
    stopSyncLink(false);
    if (wasLinked) notify(t("syncDisconnected"));
  });
  conn.on("error", () => {
    if (syncLink.conn !== conn) return;
    notify(t("syncFail"));
    stopSyncLink(true);
  });
}
function destroySyncPeer() {
  try { syncLink.conn && syncLink.conn.close && syncLink.conn.close(); } catch { /* already closed */ }
  try { syncLink.peer && syncLink.peer.destroy && syncLink.peer.destroy(); } catch { /* already destroyed */ }
  syncLink.peer = null;
  syncLink.conn = null;
}
function stopSyncLink(notifyStop) {
  clearTimeout(syncLink.pushTimer);
  const wasActive = syncLink.status !== "idle";
  destroySyncPeer();
  syncLink.role = "";
  syncLink.code = "";
  syncLink.status = "idle";
  syncLink.authorized = false;
  syncLink.hostRetries = 0;
  if ($("syncAuthSheet")) $("syncAuthSheet").hidden = true;
  setSyncHostSheetOpen(false);
  updateSyncUi();
  if (notifyStop && wasActive) notify(t("syncDisconnected"));
}
function setSyncHostSheetOpen(open) {
  if ($("syncHostSheet")) $("syncHostSheet").hidden = !open;
}
function handleSyncBannerClick() {
  if (syncLink.status === "linked") {
    stopSyncLink(true);
    return;
  }
  if (syncLink.role === "host") {
    setSyncHostSheetOpen(true);
    return;
  }
  startComputerHost({ openSheet: true });
}
async function startComputerHost(opts) {
  const openSheet = !!(opts && opts.openSheet);
  const retry = !!(opts && opts.retry);
  if (syncLink.role === "guest" && syncLink.status !== "idle") stopSyncLink(false);
  if (syncLink.role === "host" && syncLink.peer && !retry) {
    if (openSheet) setSyncHostSheetOpen(true);
    updateSyncUi();
    return;
  }
  try {
    await loadPeerJs();
  } catch {
    notify(t("syncFail"));
    return;
  }
  destroySyncPeer();
  const code = String(Math.floor(100000 + Math.random() * 900000));
  syncLink.role = "host";
  syncLink.code = code;
  syncLink.status = "hosting";
  syncLink.authorized = false;
  if (openSheet) setSyncHostSheetOpen(true);
  updateSyncUi();
  const peer = new window.Peer(syncPeerId(code), { debug: 0 });
  syncLink.peer = peer;
  peer.on("open", () => {
    syncLink.hostRetries = 0;
    updateSyncUi();
  });
  peer.on("connection", (conn) => {
    if (syncLink.authorized && syncLink.conn && syncLink.conn.open) {
      try { conn.close(); } catch { /* ignore extra guest */ }
      return;
    }
    bindSyncConnection(conn);
    conn.on("open", () => {
      syncLink.status = "auth";
      updateSyncUi();
    });
  });
  peer.on("error", (error) => {
    if (error && error.type === "unavailable-id" && syncLink.hostRetries < 6) {
      syncLink.hostRetries += 1;
      notify(t("syncBusy"));
      startComputerHost({ openSheet, retry: true });
      return;
    }
    notify(t("syncFail"));
    stopSyncLink(false);
  });
  peer.on("disconnected", () => {
    if (syncLink.status === "idle") return;
    try { peer.reconnect(); } catch { /* ignore */ }
  });
}
async function joinComputerHost() {
  const code = String(($("syncJoinInput") && $("syncJoinInput").value) || "").replace(/\D/g, "");
  if (code.length !== 6) {
    notify(t("syncNeed"));
    return;
  }
  if (syncLink.role === "host") stopSyncLink(false);
  try {
    await loadPeerJs();
  } catch {
    notify(t("syncFail"));
    return;
  }
  destroySyncPeer();
  syncLink.role = "guest";
  syncLink.code = code;
  syncLink.status = "joining";
  syncLink.authorized = false;
  updateSyncUi();
  const peer = new window.Peer({ debug: 0 });
  syncLink.peer = peer;
  peer.on("open", () => {
    const conn = peer.connect(syncPeerId(code), { reliable: true });
    bindSyncConnection(conn);
    conn.on("open", () => {
      sendSyncMessage({ type: "hello" });
      syncLink.status = "auth";
      if ($("syncAuthSheet")) $("syncAuthSheet").hidden = false;
      updateSyncUi();
    });
  });
  peer.on("error", () => {
    notify(t("syncFail"));
    stopSyncLink(false);
  });
}
function allowSyncComputer() {
  if (syncLink.role !== "guest" || !syncLink.conn) return;
  syncLink.authorized = true;
  syncLink.status = "linked";
  if ($("syncAuthSheet")) $("syncAuthSheet").hidden = true;
  sendSyncMessage({ type: "auth-ok", payload: kitchenSnapshot() });
  updateSyncUi();
  notify(t("syncConnected"));
}
function denySyncComputer() {
  sendSyncMessage({ type: "auth-deny" });
  if ($("syncAuthSheet")) $("syncAuthSheet").hidden = true;
  stopSyncLink(true);
}
function updateSyncUi() {
  const code = formatSyncCode(syncLink.code);
  const hosting = syncLink.role === "host" && syncLink.status !== "idle";
  const joining = syncLink.role === "guest" && syncLink.status !== "idle";
  const linked = syncLink.status === "linked";
  if ($("syncCodeDisplay")) {
    $("syncCodeDisplay").hidden = !hosting || !syncLink.code;
    $("syncCodeDisplay").textContent = code || "—";
  }
  if ($("syncHostSheetCode")) $("syncHostSheetCode").textContent = code || "—";
  if ($("syncHostTitle")) $("syncHostTitle").textContent = t("syncHostTitle");
  if ($("syncHostLead")) $("syncHostLead").textContent = t("syncHostLead");
  if ($("syncHostWifi")) $("syncHostWifi").textContent = t("syncWifi");
  if ($("syncAuthTitle")) $("syncAuthTitle").textContent = t("syncAuthTitle");
  if ($("syncAuthLead")) $("syncAuthLead").textContent = t("syncAuthLead");
  if ($("syncAllowBtn")) $("syncAllowBtn").textContent = t("syncAllow");
  if ($("syncDenyBtn")) $("syncDenyBtn").textContent = t("syncDeny");
  if ($("syncHostClose")) $("syncHostClose").textContent = t("back");
  let statusText = "";
  if (syncLink.status === "hosting") statusText = t("syncWaiting");
  else if (syncLink.status === "joining") statusText = t("syncJoining");
  else if (syncLink.status === "auth" && syncLink.role === "host") statusText = t("syncWaitingAuth");
  else if (syncLink.status === "auth" && syncLink.role === "guest") statusText = t("syncAuthTitle");
  else if (linked) statusText = t("syncConnected");
  if ($("syncStatus")) $("syncStatus").textContent = statusText;
  if ($("syncHostSheetStatus")) $("syncHostSheetStatus").textContent = statusText;
  if ($("syncStopBtn")) $("syncStopBtn").hidden = syncLink.status === "idle";
  const showBanner = linked || hosting || isDesktopComputer();
  if ($("syncBanner")) {
    $("syncBanner").hidden = !showBanner || document.body.classList.contains("gated");
    $("syncBanner").classList.toggle("linked", linked);
  }
  if ($("syncBannerText") && $("syncBannerBtn")) {
    if (linked) {
      $("syncBannerText").textContent = syncLink.role === "guest" ? t("syncBannerPhone") : t("syncBannerOn");
      $("syncBannerBtn").textContent = t("syncStop");
    } else if (hosting) {
      $("syncBannerText").textContent = t("syncBannerWait") + (code || "");
      $("syncBannerBtn").textContent = t("syncBannerOpen");
    } else {
      $("syncBannerText").textContent = t("syncBannerIdle");
      $("syncBannerBtn").textContent = t("syncBannerStart");
    }
  }
}

