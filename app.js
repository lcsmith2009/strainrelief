const strains = [
  {name:"Harlequin", emoji:"🌱", type:"CBD-dominant Hybrid", visual:"visual-cbd", thc:"Low to moderate THC", cbd:"High CBD", terpenes:["Myrcene","Pinene","Caryophyllene"], tags:["Calm","Clear-headed","CBD-forward"], goals:["Anxiety","Stress","Body Comfort"], caution:["Strong high seekers"], score:94, insight:"Often chosen by users seeking calmer, lower-intensity daytime directions."},
  {name:"ACDC", emoji:"🍃", type:"CBD-forward Hybrid", visual:"visual-cbd", thc:"Very low THC", cbd:"Very high CBD", terpenes:["Myrcene","Pinene","Caryophyllene"], tags:["Functional","Calm","Low intoxication"], goals:["Anxiety","Stress"], caution:["Strong euphoria seekers"], score:91, insight:"Frequently associated with low-intensity daytime wellness directions."},
  {name:"Cannatonic", emoji:"🌿", type:"Balanced THC/CBD Hybrid", visual:"visual-cbd", thc:"Low to moderate THC", cbd:"Moderate to high CBD", terpenes:["Myrcene","Pinene","Caryophyllene"], tags:["Balanced","Calm","Body comfort"], goals:["Stress","Body Comfort"], caution:["Heavy sedation seekers"], score:89, insight:"A balanced direction often associated with calm body comfort."},
  {name:"Northern Lights", emoji:"🌙", type:"Indica", visual:"visual-night", thc:"Moderate to high THC", cbd:"Low CBD", terpenes:["Myrcene","Caryophyllene","Limonene"], tags:["Sleepy","Relaxed","Nighttime"], goals:["Sleep","Stress"], caution:["Daytime focus","Low THC tolerance"], score:88, insight:"Commonly associated with nighttime wind-down routines."},
  {name:"Blue Dream", emoji:"💙", type:"Balanced Hybrid", visual:"visual-day", thc:"Moderate THC", cbd:"Low CBD", terpenes:["Myrcene","Pinene","Caryophyllene"], tags:["Mood","Creative","Balanced"], goals:["Mood","Stress"], caution:["High anxiety sensitivity"], score:86, insight:"Often connected with daytime balance and mood-focused experiences."},
  {name:"Granddaddy Purple", emoji:"🍇", type:"Indica", visual:"visual-night", thc:"Moderate to high THC", cbd:"Low CBD", terpenes:["Myrcene","Caryophyllene","Pinene"], tags:["Relaxation","Evening","Sleep"], goals:["Sleep","Stress"], caution:["Daytime tasks"], score:92, insight:"Often selected for evening comfort and calming sessions."},
  {name:"Sour Diesel", emoji:"⚡", type:"Sativa", visual:"visual-bright", thc:"High THC", cbd:"Low CBD", terpenes:["Limonene","Caryophyllene","Myrcene"], tags:["Energy","Daytime","Focus"], goals:["Mood","Focus"], caution:["Anxiety-prone users","Sleep time"], score:80, insight:"Commonly associated with energetic daytime experiences."},
  {name:"Girl Scout Cookies", emoji:"🍪", type:"Hybrid", visual:"visual-dessert", thc:"High THC", cbd:"Low CBD", terpenes:["Caryophyllene","Limonene","Humulene"], tags:["Balanced","Mood","Relaxation"], goals:["Mood","Stress","Appetite"], caution:["Low THC tolerance"], score:84, insight:"Popular balanced option often associated with stress and mood direction."},
  {name:"Pineapple Express", emoji:"🍍", type:"Hybrid", visual:"visual-day", thc:"Moderate THC", cbd:"Low CBD", terpenes:["Limonene","Pinene","Caryophyllene"], tags:["Happy","Creative","Daytime"], goals:["Mood","Focus"], caution:["Sleep time"], score:83, insight:"Frequently connected with upbeat daytime sessions."},
  {name:"Jack Herer", emoji:"🌸", type:"Sativa-leaning Hybrid", visual:"visual-bright", thc:"Moderate THC", cbd:"Low CBD", terpenes:["Terpinolene","Pinene","Caryophyllene"], tags:["Focus","Energy","Mood"], goals:["Mood","Focus"], caution:["Night use"], score:81, insight:"Often selected for focus-oriented daytime experiences."},
  {name:"Purple Punch", emoji:"🫐", type:"Indica-leaning Hybrid", visual:"visual-night", thc:"High THC", cbd:"Low CBD", terpenes:["Myrcene","Caryophyllene","Limonene"], tags:["Sleep","Calm","Evening"], goals:["Sleep","Stress"], caution:["Daytime productivity"], score:87, insight:"Known for heavier nighttime wellness directions."},
  {name:"Lemon Haze", emoji:"🍋", type:"Sativa-leaning", visual:"visual-bright", thc:"Moderate to high THC", cbd:"Low CBD", terpenes:["Limonene","Myrcene","Caryophyllene"], tags:["Creative","Daytime","Mood"], goals:["Mood","Focus"], caution:["Anxiety-prone users"], score:78, insight:"Bright daytime direction with citrus-inspired profile."},
  {name:"Ringo's Gift", emoji:"🎁", type:"CBD-dominant Hybrid", visual:"visual-cbd", thc:"Very low THC", cbd:"Very high CBD", terpenes:["Myrcene","Pinene","Caryophyllene"], tags:["Calm","Beginner","Stress"], goals:["Anxiety","Stress"], caution:["Strong high seekers"], score:90, insight:"CBD-forward direction commonly associated with a gentler experience."},
  {name:"Charlotte's Web", emoji:"🕊️", type:"CBD-forward", visual:"visual-cbd", thc:"Very low THC", cbd:"Very high CBD", terpenes:["Myrcene","Pinene","Humulene"], tags:["Calm","Stress","Low THC"], goals:["Anxiety","Stress"], caution:["Strong euphoria seekers"], score:88, insight:"CBD-forward option commonly associated with gentle experiences."},
  {name:"Maui Wowie", emoji:"🏝️", type:"Sativa", visual:"visual-bright", thc:"Moderate THC", cbd:"Low CBD", terpenes:["Limonene","Pinene","Myrcene"], tags:["Energy","Mood","Daytime"], goals:["Mood","Focus"], caution:["Sleep time"], score:82, insight:"A tropical daytime direction often associated with uplift."},
  {name:"Durban Poison", emoji:"☀️", type:"Sativa", visual:"visual-bright", thc:"High THC", cbd:"Low CBD", terpenes:["Terpinolene","Ocimene","Pinene"], tags:["Focus","Daytime","Energy"], goals:["Mood","Focus"], caution:["Anxiety-prone users"], score:77, insight:"Often discussed as an energizing daytime strain direction."},
  {name:"White Widow", emoji:"🕸️", type:"Balanced Hybrid", visual:"visual-day", thc:"Moderate to high THC", cbd:"Low CBD", terpenes:["Myrcene","Pinene","Caryophyllene"], tags:["Balanced","Mood","Relaxation"], goals:["Mood","Stress"], caution:["Low THC tolerance"], score:79, insight:"A balanced direction often associated with mood and relaxed creativity."},
  {name:"Wedding Cake", emoji:"🎂", type:"Indica-dominant Hybrid", visual:"visual-dessert", thc:"High THC", cbd:"Low CBD", terpenes:["Caryophyllene","Limonene","Myrcene"], tags:["Relaxation","Mood","Evening"], goals:["Stress","Appetite"], caution:["Beginners"], score:82, insight:"Dessert-like evening direction often associated with relaxation."},
  {name:"Gelato", emoji:"🍨", type:"Hybrid", visual:"visual-dessert", thc:"High THC", cbd:"Low CBD", terpenes:["Caryophyllene","Limonene","Humulene"], tags:["Mood","Relaxation","Creative"], goals:["Mood","Stress"], caution:["Very low tolerance"], score:81, insight:"Popular hybrid direction associated with mood and relaxation."},
  {name:"OG Kush", emoji:"🌲", type:"Hybrid", visual:"visual-night", thc:"High THC", cbd:"Low CBD", terpenes:["Myrcene","Limonene","Caryophyllene"], tags:["Relaxation","Stress","Mood"], goals:["Stress","Body Comfort"], caution:["Beginners"], score:83, insight:"Classic evening direction often associated with relaxation."},
  {name:"Bubba Kush", emoji:"🛋️", type:"Indica", visual:"visual-night", thc:"High THC", cbd:"Low CBD", terpenes:["Myrcene","Caryophyllene","Limonene"], tags:["Sleep","Calm","Evening"], goals:["Sleep","Stress"], caution:["Daytime focus"], score:86, insight:"Often associated with heavier nighttime relaxation."},
  {name:"Zkittlez", emoji:"🌈", type:"Indica-leaning Hybrid", visual:"visual-dessert", thc:"Moderate to high THC", cbd:"Low CBD", terpenes:["Caryophyllene","Limonene","Humulene"], tags:["Relaxation","Mood","Calm"], goals:["Mood","Stress"], caution:["Daytime productivity"], score:80, insight:"Sweet-profile direction often associated with calm mood."},
  {name:"Super Silver Haze", emoji:"✨", type:"Sativa", visual:"visual-bright", thc:"High THC", cbd:"Low CBD", terpenes:["Terpinolene","Caryophyllene","Myrcene"], tags:["Energy","Focus","Daytime"], goals:["Mood","Focus"], caution:["Anxiety-prone users"], score:76, insight:"Strong daytime direction often linked with focus and energy."},
  {name:"Green Crack", emoji:"🟢", type:"Sativa", visual:"visual-bright", thc:"High THC", cbd:"Low CBD", terpenes:["Myrcene","Caryophyllene","Pinene"], tags:["Focus","Energy","Mood"], goals:["Focus","Mood"], caution:["Anxiety-prone users"], score:75, insight:"Energetic daytime direction that may be too intense for some users."},
  {name:"LA Confidential", emoji:"🌃", type:"Indica", visual:"visual-night", thc:"High THC", cbd:"Low CBD", terpenes:["Myrcene","Pinene","Caryophyllene"], tags:["Sleep","Calm","Evening"], goals:["Sleep","Body Comfort"], caution:["Daytime focus"], score:85, insight:"Nighttime direction often associated with relaxation and body heaviness."},
  {name:"Remedy", emoji:"🧘", type:"CBD-forward", visual:"visual-cbd", thc:"Very low THC", cbd:"Very high CBD", terpenes:["Myrcene","Pinene","Caryophyllene"], tags:["Calm","Stress","Low THC"], goals:["Anxiety","Stress"], caution:["Strong high seekers"], score:89, insight:"CBD-forward direction that may feel less intense for some users."},
  {name:"Pennywise", emoji:"🪙", type:"Balanced THC/CBD", visual:"visual-cbd", thc:"Low to moderate THC", cbd:"Moderate CBD", terpenes:["Myrcene","Pinene","Caryophyllene"], tags:["Calm","Body comfort","Stress"], goals:["Anxiety","Stress","Body Comfort"], caution:["Heavy high seekers"], score:87, insight:"Balanced THC/CBD direction often associated with calm body comfort."},
  {name:"Mango Kush", emoji:"🥭", type:"Indica-leaning Hybrid", visual:"visual-dessert", thc:"Moderate THC", cbd:"Low CBD", terpenes:["Myrcene","Limonene","Caryophyllene"], tags:["Relaxation","Mood","Evening"], goals:["Stress","Appetite"], caution:["High focus needs"], score:82, insight:"Sweet evening direction often associated with relaxation and appetite."},
  {name:"Strawberry Cough", emoji:"🍓", type:"Sativa", visual:"visual-bright", thc:"Moderate THC", cbd:"Low CBD", terpenes:["Myrcene","Pinene","Caryophyllene"], tags:["Mood","Creative","Daytime"], goals:["Mood","Focus"], caution:["Anxiety sensitivity"], score:79, insight:"Bright berry-like daytime direction often associated with social mood."},
  {name:"Chemdawg", emoji:"⛽", type:"Hybrid", visual:"visual-bright", thc:"High THC", cbd:"Low CBD", terpenes:["Caryophyllene","Myrcene","Limonene"], tags:["Balanced","Relaxation","Mood"], goals:["Mood","Stress"], caution:["Beginners","Anxiety-prone users"], score:74, insight:"Strong hybrid direction often discussed for creative mood and relaxation."}
];

const filters = ["All","CBD","Sleep","Daytime","Mood","Focus","Stress","Body Comfort"];

const education = [
  {title:"Start low and go slow", body:"Use lower serving sizes first, especially if new or sensitive to THC. Wait to understand how it affects you."},
  {title:"THC vs CBD", body:"THC is commonly associated with intoxication. CBD is not usually associated with the same intoxicating effect."},
  {title:"What are terpenes?", body:"Terpenes are aroma compounds that help describe flavor, smell, and the general direction of a strain profile."},
  {title:"Dispensary checklist", body:"Ask for lab-tested products, THC/CBD percentages, terpene profile, serving size, and beginner-friendly options."},
  {title:"Legal reminder", body:"Follow local laws. Do not drive or operate machinery while impaired."},
  {title:"Medical disclaimer", body:"StrainRelief is educational only and does not diagnose, treat, cure, or prevent any condition."}
];

let currentFilter = "All";

function $(id){ return document.getElementById(id); }

function showToast(msg){
  const toast = $("toast");
  toast.textContent = msg;
  toast.style.display = "block";
  setTimeout(()=> toast.style.display = "none", 1700);
}

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  $(id).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
  const index = ["home","search","recommend","saved","learn"].indexOf(id);
  if(index >= 0) document.querySelectorAll(".nav-btn")[index].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id === "saved") renderSaved();
}

function cardHTML(s){
  return `
    <article class="strain-card" onclick="openModal('${s.name.replace(/'/g,"\'")}')">
      <div class="card-hero ${s.visual}">
        <div class="card-emoji">${s.emoji}</div>
      </div>
      <span class="eyebrow">${s.type}</span>
      <h3>${s.name}</h3>
      <p>${s.insight}</p>
      <div class="tags">
        ${s.tags.map(t=>`<span class="tag">${t}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderFeatured(){
  $("featuredGrid").innerHTML = strains.slice(0,8).map(cardHTML).join("");
}

function renderFilters(){
  $("filterRow").innerHTML = filters.map(f=>`<button class="filter-chip ${f===currentFilter?'active':''}" onclick="setFilter('${f}')">${f}</button>`).join("");
}

function setFilter(f){
  currentFilter = f;
  renderFilters();
  renderSearch();
}

function renderSearch(){
  const q = $("searchInput").value.toLowerCase();
  const filtered = strains.filter(s=>{
    const text = [s.name,s.type,s.tags.join(" "),s.goals.join(" "),s.terpenes.join(" ")].join(" ").toLowerCase();
    const passSearch = text.includes(q);
    const passFilter = currentFilter === "All" || text.includes(currentFilter.toLowerCase());
    return passSearch && passFilter;
  });
  $("strainGrid").innerHTML = filtered.length ? filtered.map(cardHTML).join("") : `<div class="panel"><h3>No matches yet</h3><p>Try another strain, goal, terpene, or feeling.</p></div>`;
}

function openModal(name){
  const s = strains.find(x=>x.name===name);
  if(!s) return;
  const similar = strains.filter(x=>x.name!==s.name && (x.visual===s.visual || x.goals.some(g=>s.goals.includes(g)))).slice(0,3);
  $("modalBody").innerHTML = `
    <div class="modal-head">
      <div class="modal-emoji">${s.emoji}</div>
      <div>
        <span class="eyebrow">Strain Profile</span>
        <h2>${s.name}</h2>
        <p>${s.type}</p>
      </div>
    </div>
    <div class="tags">${s.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    <div class="panel">
      <h3>Match Score: ${s.score}%</h3>
      <div class="score-bar"><div class="score-fill" style="width:${s.score}%"></div></div>
      <p>${s.insight}</p>
    </div>
    <div class="panel">
      <h3>THC / CBD Direction</h3>
      <p><strong>THC:</strong> ${s.thc}</p>
      <p><strong>CBD:</strong> ${s.cbd}</p>
    </div>
    <div class="panel">
      <h3>Terpene Direction</h3>
      <div class="tags">${s.terpenes.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    </div>
    <div class="panel">
      <h3>May align with</h3>
      <div class="tags">${s.goals.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    </div>
    <div class="panel">
      <h3>Use caution if</h3>
      <div class="tags">${s.caution.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    </div>
    <div class="panel">
      <h3>Similar directions</h3>
      <div class="tags">${similar.map(t=>`<span class="tag" onclick="openModal('${t.name.replace(/'/g,"\'")}')">${t.name}</span>`).join("")}</div>
    </div>
    <button onclick="saveFavorite('${s.name.replace(/'/g,"\'")}')">Save ${s.name}</button>
    <button class="ghost" onclick="shareStrain('${s.name.replace(/'/g,"\'")}')">Share Direction</button>
  `;
  $("strainModal").classList.remove("hidden");
}

function closeModal(){
  $("strainModal").classList.add("hidden");
}

function saveFavorite(name){
  let saved = JSON.parse(localStorage.getItem("srSaved") || "[]");
  if(!saved.includes(name)) saved.unshift(name);
  saved = saved.slice(0,20);
  localStorage.setItem("srSaved", JSON.stringify(saved));
  renderSaved();
  showToast("Saved " + name);
}

function renderSaved(){
  const saved = JSON.parse(localStorage.getItem("srSaved") || "[]");
  $("savedList").innerHTML = saved.length ? saved.map(n=>`<div class="mini-item" onclick="openModal('${n.replace(/'/g,"\'")}')">${n}</div>`).join("") : `<p>No favorites saved yet. Tap a strain and save it.</p>`;
  renderJournal();
}

function loadJournalSelect(){
  $("journalStrain").innerHTML = `<option value="">Select strain</option>` + strains.map(s=>`<option>${s.name}</option>`).join("");
}

function saveJournal(){
  const strain = $("journalStrain").value;
  const mood = $("journalMood").value;
  const note = $("journalNote").value.trim();
  if(!strain){ showToast("Select a strain first"); return; }
  let journal = JSON.parse(localStorage.getItem("srJournal") || "[]");
  journal.unshift({strain,mood,note,date:new Date().toLocaleDateString()});
  journal = journal.slice(0,30);
  localStorage.setItem("srJournal", JSON.stringify(journal));
  $("journalMood").value = "";
  $("journalNote").value = "";
  renderJournal();
  showToast("Journal saved");
}

function renderJournal(){
  const journal = JSON.parse(localStorage.getItem("srJournal") || "[]");
  $("journalList").innerHTML = journal.length ? journal.map(j=>`
    <div class="mini-item"><strong>${j.strain}</strong><br>${j.date} · ${j.mood || "No mood selected"}<br>${j.note || "No notes added."}</div>
  `).join("") : `<p>No journal entries yet.</p>`;
}

function runMatcher(){
  const goal = $("goalSelect").value;
  const sensitivity = $("sensitivitySelect").value;
  let results = strains.filter(s=> !goal || s.goals.includes(goal) || s.tags.includes(goal));
  if(sensitivity === "low") results = results.filter(s=> s.thc.toLowerCase().includes("low") || s.cbd.toLowerCase().includes("high"));
  if(!results.length) results = strains.filter(s=>s.visual==="visual-cbd").slice(0,4);
  results = results.sort((a,b)=>b.score-a.score).slice(0,6);
  $("matchResults").innerHTML = results.map(cardHTML).join("");
  showToast("Directions matched");
}

function renderEducation(){
  $("learnGrid").innerHTML = education.map(e=>`
    <div class="education-card">
      <h3>${e.title}</h3>
      <p>${e.body}</p>
    </div>
  `).join("");
}

function dailyTip(){
  const pick = strains[new Date().getDate() % strains.length];
  $("dailyTitle").textContent = pick.name;
  $("dailyText").textContent = pick.insight + " Educational only — start low and follow local laws.";
}

window.addEventListener("load",()=>{
  setTimeout(()=>{
    const splash = $("splash");
    if(splash){
      splash.style.opacity = "0";
      setTimeout(()=>splash.remove(),450);
    }
  },900);
});

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service-worker.js").catch(()=>{});
}

$("searchInput").addEventListener("input", renderSearch);

dailyTip();
renderFeatured();
renderFilters();
renderSearch();
loadJournalSelect();
renderSaved();
renderEducation();
