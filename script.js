/* ====== MA'LUMOTLAR ====== */
const U = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const apartments = [
  {
    id: 1, title: "Zamonaviy 2 xonali kvartira", district: "Yunusobod tumani",
    address: "Toshkent sh., Yunusobod tumani, Amir Temur ko'chasi, 45-uy, 32-xonadon",
    rooms: 2, area: 68, floor: "7 / 12", price: 4500000, phone: "+998 90 123 45 67",
    desc: "Yangi ta'mirlangan, to'liq jihozlangan kvartira. Metro va supermarketga yaqin, atrofi tinch va xavfsiz.",
    features: ["Wi-Fi", "Konditsioner", "Lift", "Muzlatgich", "Kir yuvish mashinasi", "Avtoturargoh"],
    images: ["1502672260266-1c1ef2d93688", "1560448204-e02f11c3d0e2", "1556909114-f6e7ad7d3136", "1505691938895-1758d7feb511", "1552321554-5fefe8c9ef14"].map(U)
  },
  {
    id: 2, title: "Keng 3 xonali oilaviy kvartira", district: "Chilonzor tumani",
    address: "Toshkent sh., Chilonzor tumani, Bunyodkor shoh ko'chasi, 12-uy, 58-xonadon",
    rooms: 3, area: 95, floor: "4 / 9", price: 6200000, phone: "+998 91 234 56 78",
    desc: "Oilaviy yashash uchun ideal. Yaqin atrofda maktab, bog'cha va bozor bor. Katta balkon va yorug' xonalar.",
    features: ["Wi-Fi", "Balkon", "Mebel", "Televizor", "Isitish", "Xavfsizlik"],
    images: ["1522708323590-d24dbb6b0267", "1484154218962-a197022b5858", "1540518614846-7eded433c457", "1513694203232-719a280e022f", "1552321554-5fefe8c9ef14"].map(U)
  },
  {
    id: 3, title: "Qulay 1 xonali studiya", district: "Mirzo Ulug'bek tumani",
    address: "Toshkent sh., Mirzo Ulug'bek tumani, Mustaqillik ko'chasi, 8-uy, 14-xonadon",
    rooms: 1, area: 42, floor: "3 / 5", price: 2800000, phone: "+998 93 345 67 89",
    desc: "Talaba va yosh juftliklar uchun qulay narxdagi studiya. Universitetlar va bekatga juda yaqin.",
    features: ["Wi-Fi", "Konditsioner", "Oshxona jihozlari", "Kir yuvish mashinasi"],
    images: ["1493809842364-78817add7ffb", "1536376072261-38c75010e6c9", "1556909114-f6e7ad7d3136", "1552321554-5fefe8c9ef14"].map(U)
  },
  {
    id: 4, title: "Premium 4 xonali penthouse", district: "Mirobod tumani",
    address: "Toshkent sh., Mirobod tumani, Shahrisabz ko'chasi, 3-uy, 120-xonadon",
    rooms: 4, area: 160, floor: "16 / 16", price: 12500000, phone: "+998 94 456 78 90",
    desc: "Shahar manzarasi ochilgan hashamatli penthouse. Katta terrasa, dizayner ta'miri va yopiq avtoturargoh.",
    features: ["Terrasa", "Smart uy", "Jakuzi", "Konditsioner", "Lift", "Garaj", "24/7 qo'riqlash"],
    images: ["1600585154340-be6161a56a0c", "1600607687939-ce8a6c25118c", "1618221195710-dd6b41faaea6", "1600566753190-17f0baa2a6c3", "1540518614846-7eded433c457", "1552321554-5fefe8c9ef14"].map(U)
  },
  {
    id: 5, title: "Shinam 2 xonali kvartira", district: "Sergeli tumani",
    address: "Toshkent sh., Sergeli tumani, Yangi Sergeli ko'chasi, 21-uy, 7-xonadon",
    rooms: 2, area: 60, floor: "2 / 9", price: 3500000, phone: "+998 97 567 89 01",
    desc: "Yangi qurilgan uyda, hamyonbop narxda. Atrofda park va do'konlar, jamoat transporti yaqin.",
    features: ["Wi-Fi", "Mebel", "Balkon", "Isitish"],
    images: ["1502005229762-cf1b2da7c5d6", "1560185007-cde436f6a4d0", "1484154218962-a197022b5858", "1505691938895-1758d7feb511"].map(U)
  },
  {
    id: 6, title: "Hashamatli 3 xonali kvartira", district: "Shayxontohur tumani",
    address: "Toshkent sh., Shayxontohur tumani, Navoiy ko'chasi, 77-uy, 41-xonadon",
    rooms: 3, area: 110, floor: "9 / 14", price: 8000000, phone: "+998 95 678 90 12",
    desc: "Shahar markazida, Evro-ta'mirlangan. Panoramik oynalar, zamonaviy oshxona va keng yashash xonasi.",
    features: ["Wi-Fi", "Konditsioner", "Lift", "Panoramik oyna", "Oshxona texnikasi", "Avtoturargoh"],
    images: ["1560185127-6ed189bf02f4", "1618221195710-dd6b41faaea6", "1556909114-f6e7ad7d3136", "1540518614846-7eded433c457", "1552321554-5fefe8c9ef14"].map(U)
  }
];

/* ====== YORDAMCHI ====== */
const $ = s => document.querySelector(s);
const fmt = n => n.toLocaleString("ru-RU").replace(/,/g, " ");
const roomWord = n => `${n} xonali`;

// Rasm yuklanmasa — chiroyli zaxira rasm chiqadi
function fallback(img, label = "Kvartira") {
  img.onerror = null;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#6c4cf5'/><stop offset='1' stop-color='#ff6b9d'/></linearGradient></defs>
    <rect width='1200' height='800' fill='url(#g)'/>
    <text x='600' y='400' font-size='90' text-anchor='middle' fill='white' font-family='sans-serif'>🏠 ${label}</text></svg>`;
  img.src = "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
function imgTag(src, alt, cls = "") {
  return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" onerror="fallback(this,'${alt.replace(/'/g, "")}')">`;
}

/* ====== KARTALARNI CHIZISH ====== */
const grid = $("#grid");
function render() {
  const q = $("#q").value.trim().toLowerCase();
  const r = $("#rooms").value;
  const s = $("#sort").value;

  let list = apartments.filter(a => {
    const text = (a.title + a.address + a.district).toLowerCase();
    const okRoom = r === "all" || (r === "4" ? a.rooms >= 4 : a.rooms === +r);
    return text.includes(q) && okRoom;
  });
  if (s === "asc") list.sort((a, b) => a.price - b.price);
  if (s === "desc") list.sort((a, b) => b.price - a.price);

  $("#empty").hidden = list.length > 0;
  grid.innerHTML = list.map(a => `
    <article class="card" data-id="${a.id}">
      <div class="card-img">
        ${imgTag(a.images[0], a.title)}
        <span class="badge">${roomWord(a.rooms)}</span>
        <span class="photos">📷 ${a.images.length} ta rasm</span>
      </div>
      <div class="card-body">
        <h3>${a.title}</h3>
        <p class="addr">📍 ${a.district}</p>
        <div class="tags"><span>📐 ${a.area} m²</span><span>🏢 ${a.floor} qavat</span></div>
        <div class="card-foot">
          <div class="price">${fmt(a.price)} <small>so'm/oy</small></div>
          <button class="more">Batafsil →</button>
        </div>
      </div>
    </article>`).join("");

  // birin-ketin chiqish animatsiyasi
  grid.querySelectorAll(".card").forEach((c, i) => {
    c.style.transitionDelay = `${i * 0.1}s`;
    cardObserver.observe(c);
    c.addEventListener("click", () => openDetail(+c.dataset.id));
  });
}

/* ====== SCROLL ANIMATSIYALAR ====== */
const cardObserver = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); cardObserver.unobserve(e.target); } });
}, { threshold: .12 });
const revealObserver = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); revealObserver.unobserve(e.target); } });
}, { threshold: .15 });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObserver.observe(el);
});

// hisoblagich
document.querySelectorAll("[data-count]").forEach(el => {
  const target = +el.dataset.count; let n = 0;
  const step = Math.max(1, Math.ceil(target / 60));
  setTimeout(() => {
    const t = setInterval(() => {
      n = Math.min(target, n + step); el.textContent = n + (target > 100 ? "+" : "");
      if (n >= target) clearInterval(t);
    }, 25);
  }, 900);
});

window.addEventListener("scroll", () => $("#nav").classList.toggle("scrolled", scrollY > 30));

/* ====== MODAL ====== */
function openModal(el) { el.classList.add("open"); el.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
function closeModals() {
  document.querySelectorAll(".modal.open").forEach(m => { m.classList.remove("open"); m.setAttribute("aria-hidden", "true"); });
  document.body.style.overflow = "";
}
document.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", closeModals));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModals();
  if ($("#modal").classList.contains("open")) {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  }
});

let current = null, idx = 0;
function openDetail(id) {
  current = apartments.find(a => a.id === id); idx = 0;
  // BARCHA rasmlar galereyada
  $("#thumbs").innerHTML = current.images.map((src, i) =>
    imgTag(src, `${current.title} ${i + 1}`, i === 0 ? "active" : "")).join("");
  $("#thumbs").querySelectorAll("img").forEach((t, i) => t.addEventListener("click", () => show(i)));
  show(0);

  const a = current;
  $("#mInfo").innerHTML = `
    <h3 style="--i:0">${a.title}</h3>
    <div class="m-price" style="--i:1">${fmt(a.price)} <small>so'm / oy</small></div>
    <p class="m-desc" style="--i:2">${a.desc}</p>
    <div class="info-list" style="--i:3">
      <div class="full"><small>📍 Manzil</small><b>${a.address}</b></div>
      <div><small>🚪 Xonalar soni</small><b>${a.rooms} ta xona</b></div>
      <div><small>📐 Maydoni</small><b>${a.area} m²</b></div>
      <div><small>🏢 Qavat</small><b>${a.floor}</b></div>
      <div><small>📞 Telefon raqami</small><b>${a.phone}</b></div>
    </div>
    <div class="feat" style="--i:4">${a.features.map(f => `<span>✓ ${f}</span>`).join("")}</div>
    <div class="m-btns" style="--i:5">
      <a class="btn call" href="tel:${a.phone.replace(/\s/g, "")}">📞 Qo'ng'iroq</a>
      <button class="btn primary" id="applyBtn">📝 Ariza topshirish</button>
    </div>`;
  $("#applyBtn").addEventListener("click", openApply);
  openModal($("#modal"));
}
function show(i) {
  idx = (i + current.images.length) % current.images.length;
  const main = $("#mainImg");
  main.style.animation = "none"; void main.offsetWidth; main.style.animation = "";
  main.onerror = () => fallback(main, current.title);
  main.src = current.images[idx]; main.alt = current.title;
  $("#counter").textContent = `${idx + 1} / ${current.images.length}`;
  $("#thumbs").querySelectorAll("img").forEach((t, k) => t.classList.toggle("active", k === idx));
}
const go = d => show(idx + d);
$("#prev").addEventListener("click", () => go(-1));
$("#next").addEventListener("click", () => go(1));

/* ====== ARIZA ====== */
function openApply() {
  const a = current;
  $("#applyBody").innerHTML = `
    <h3>Ariza topshirish</h3>
    <p class="sub">${a.title} — ${fmt(a.price)} so'm/oy. Admin siz bilan tez orada bog'lanadi.</p>
    <form id="form">
      <label>Ism-familiyangiz</label>
      <input name="name" required minlength="3" placeholder="Masalan: Aziz Karimov">
      <label>Telefon raqamingiz</label>
      <input name="phone" type="tel" required placeholder="+998 90 000 00 00" pattern="[+0-9 ()-]{9,}">
      <label>Ko'chib o'tish sanasi</label>
      <input name="date" type="date" required>
      <label>Izoh (ixtiyoriy)</label>
      <textarea name="note" placeholder="Qo'shimcha so'rovlaringiz..."></textarea>
      <button class="btn primary" type="submit">Arizani yuborish 🚀</button>
    </form>`;
  const d = $("#form").date; d.min = new Date().toISOString().split("T")[0];
  $("#form").addEventListener("submit", submitApply);
  openModal($("#applyModal"));
}
function submitApply(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const item = {
    apartment: current.title, address: current.address, adminPhone: current.phone,
    name: f.get("name"), phone: f.get("phone"), date: f.get("date"), note: f.get("note"),
    time: new Date().toLocaleString("uz-UZ")
  };
  try {
    const all = JSON.parse(localStorage.getItem("applications") || "[]");
    all.unshift(item); localStorage.setItem("applications", JSON.stringify(all));
  } catch (_) {}
  $("#applyBody").innerHTML = `
    <div class="success">
      <div class="ok">✓</div>
      <h3>Arizangiz qabul qilindi!</h3>
      <p class="sub">Rahmat, ${item.name}. Kvartira admini <b>${current.phone}</b> raqamidan tez orada siz bilan bog'lanadi.</p>
      <button class="btn primary" data-close2>Yopish</button>
    </div>`;
  $("#applyBody").querySelector("[data-close2]").addEventListener("click", closeModals);
  toast("✅ Ariza muvaffaqiyatli yuborildi");
}

/* ====== ADMIN: ARIZALAR RO'YXATI ====== */
function openAdmin() {
  let all = [];
  try { all = JSON.parse(localStorage.getItem("applications") || "[]"); } catch (_) {}
  $("#adminList").innerHTML = all.length ? all.map(x => `
    <div class="admin-item">
      <b>${x.name} — ${x.phone}</b>
      ${x.apartment}<br>
      <small>📅 ${x.date} · 🕒 ${x.time}</small>
      ${x.note ? `<br><small>💬 ${x.note}</small>` : ""}
    </div>`).join("") : `<p class="sub">Hozircha arizalar yo'q.</p>`;
  openModal($("#adminModal"));
}
$("#adminLink").addEventListener("click", e => { e.preventDefault(); openAdmin(); });

function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

/* ====== BOSHLASH ====== */
["#q", "#rooms", "#sort"].forEach(s => $(s).addEventListener("input", render));
render();