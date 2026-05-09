let lowAnxietyMode=false;
let nightMode=false;
let deferredPrompt=null;

const tips=[
 "Start low and go slow, especially with THC.",
 "CBD-forward options may feel less intense for some users.",
 "Terpenes influence aroma, flavor, and the overall direction of a strain.",
 "Avoid driving or operating machinery while impaired.",
 "Ask dispensaries for lab-tested products and cannabinoid percentages.",
 "For anxiety-prone users, lower THC or balanced THC/CBD options may feel more comfortable.",
 "Keep notes on serving size, timing, and how you felt."
];

const terpeneGuide=[
 ["🥭 Myrcene","Often associated with body relaxation, heavier comfort, and nighttime-style effects."],
 ["🍋 Limonene","Often associated with brighter, uplifting, citrus-style effects."],
 ["🌲 Pinene","Often associated with clearer, more alert, focused effects."],
 ["🌶️ Beta-Caryophyllene","Often associated with calming body comfort and peppery aroma."],
 ["🌸 Linalool","Often associated with floral aroma and calming relaxation."],
 ["🍃 Humulene","Often associated with earthy aroma and balanced body comfort."],
 ["🪵 Terpinolene","Often associated with herbal, fresh, creative, or uplifting directions."],
 ["🍊 Ocimene","Often associated with sweet, citrusy aroma and lighter daytime directions."]
];

const categories=[
 ["Beginner Friendly","Beginner"],
 ["Sleep","Sleep Trouble"],
 ["Lower Anxiety","Anxiety"],
 ["Stress","Stress"],
 ["Body Comfort","Body Pain"],
 ["Mood","Low Mood"],
 ["Appetite","Appetite Loss"],
 ["Soreness","Muscle Soreness"]
];

const strainSeeds=[
 ["Harlequin","🌱","img-cbd","CBD-dominant Hybrid","Low to moderate THC","High CBD","low","Myrcene, Pinene, Beta-Caryophyllene","Earthy, herbal, mild sweetness","Day or evening","Mild",["Calm","Clear-headed","CBD-forward"],["Anxiety","Headache","Stress"],["Heavy sedation","Strong high"],["Anxiety","Headache","Stress"],94,92,82,42],
 ["ACDC","🍃","img-cbd","CBD-dominant Hybrid","Very low THC","Very high CBD","low","Myrcene, Pinene, Beta-Caryophyllene","Earthy, citrus, light pine","Daytime","Mild",["Functional","Calm","Low intoxication"],["Anxiety","Beginner use","Stress"],["Strong euphoria"],["Anxiety","Stress"],91,97,78,35],
 ["Cannatonic","🌿","img-cbd","Balanced THC/CBD Hybrid","Low to moderate THC","Moderate to high CBD","mid","Myrcene, Pinene, Caryophyllene","Citrus, earthy, slightly sweet","Day or evening","Moderate",["Balanced","Calm","Body comfort"],["Body Pain","Stress","Soreness"],["Heavy couch-lock"],["Body Pain","Stress","Headache","Muscle Soreness"],89,82,86,50],
 ["Northern Lights","🌙","img-night","Indica","Moderate to high THC","Low CBD","high","Myrcene, Caryophyllene, Limonene","Pine, earthy, sweet spice","Evening / nighttime","Strong",["Sleepy","Body heavy","Relaxed"],["Sleep Trouble","Body Pain"],["Daytime focus","Driving","Low tolerance"],["Body Pain","Sleep Trouble","Muscle Soreness"],88,48,93,91],
 ["Blue Dream","💚","img-day","Balanced Hybrid","Moderate THC","Low CBD","mid","Myrcene, Pinene, Caryophyllene","Berry, sweet, herbal","Day or evening","Moderate",["Uplifted","Creative","Relaxed"],["Stress","Low Mood"],["High anxiety sensitivity"],["Stress","Low Mood"],86,70,75,38],
 ["Granddaddy Purple","🌌","img-night","Indica-leaning","Moderate to high THC","Low CBD","high","Myrcene, Caryophyllene, Pinene","Grape, berry, sweet earth","Nighttime","Strong",["Sleepy","Heavy relaxation","Nighttime"],["Sleep Trouble"],["Daytime tasks","Driving","Beginners"],["Sleep Trouble"],92,45,95,96],
 ["Sour Diesel","⚡","img-bright","Sativa-leaning","High THC","Low CBD","high","Limonene, Caryophyllene, Myrcene","Diesel, citrus, sharp herbal","Daytime","Strong",["Energetic","Uplifted","Creative"],["Low Mood","Experienced users"],["Anxiety-prone","Sleep time","Beginners"],["Low Mood"],80,35,40,10],
 ["Girl Scout Cookies","🍪","img-dessert","Hybrid","High THC","Low CBD","high","Caryophyllene, Limonene, Humulene","Sweet, earthy, dessert-like","Evening","Strong",["Hungry","Euphoric","Relaxed"],["Appetite Loss","Evening relaxation"],["Low THC tolerance","Anxiety-prone"],["Appetite Loss"],84,38,82,62],
 ["Pineapple Express","🍍","img-day","Hybrid","Moderate THC","Low CBD","mid","Limonene, Pinene, Caryophyllene","Pineapple, citrus, tropical","Daytime","Moderate",["Uplifted","Creative","Bright"],["Low Mood","Stress"],["Sleep time"],["Low Mood","Stress"],83,66,55,20],
 ["Jack Herer","🌸","img-bright","Sativa-leaning Hybrid","Moderate THC","Low CBD","mid","Terpinolene, Pinene, Caryophyllene","Pine, herbal, spicy","Daytime","Moderate",["Focused","Clear","Uplifted"],["Low Mood","Focus"],["Night use","Anxiety sensitivity"],["Low Mood","Stress"],81,62,45,12],
 ["Purple Punch","🫐","img-night","Indica-leaning Hybrid","High THC","Low CBD","high","Myrcene, Caryophyllene, Limonene","Berry, grape, dessert","Nighttime","Strong",["Sleepy","Relaxed","Heavy"],["Sleep Trouble","Evening relaxation"],["Daytime focus","Beginners"],["Sleep Trouble"],87,42,91,93],
 ["Lemon Haze","🍋","img-bright","Sativa-leaning","Moderate to high THC","Low CBD","high","Limonene, Myrcene, Caryophyllene","Lemon, citrus, sweet","Daytime","Strong",["Uplifted","Energetic","Bright"],["Low Mood"],["Anxiety-prone","Sleep time"],["Low Mood"],78,40,35,8],
 ["Ringo's Gift","🎁","img-cbd","CBD-dominant Hybrid","Very low THC","Very high CBD","low","Myrcene, Pinene, Caryophyllene","Mint, pine, earthy","Daytime","Mild",["Calm","Functional","CBD-forward"],["Anxiety","Stress","Beginner use"],["Strong high"],["Anxiety","Stress"],90,96,76,30],
 ["Charlotte's Web","🕊️","img-cbd","CBD-dominant","Very low THC","Very high CBD","low","Myrcene, Pinene, Humulene","Earthy, floral, pine","Daytime","Mild",["Gentle","Clear","CBD-forward"],["Anxiety","Beginner use"],["Strong euphoria"],["Anxiety"],88,98,70,28],
 ["Maui Wowie","🏝️","img-bright","Sativa-leaning","Moderate THC","Low CBD","mid","Limonene, Pinene, Myrcene","Tropical, citrus, sweet","Daytime","Moderate",["Uplifted","Bright","Social"],["Low Mood","Stress"],["Sleep time"],["Low Mood","Stress"],82,64,42,10],
 ["Durban Poison","🌞","img-bright","Sativa","High THC","Low CBD","high","Terpinolene, Myrcene, Ocimene","Sweet, pine, spicy","Daytime","Strong",["Focused","Energetic","Creative"],["Low Mood","Focus"],["Anxiety-prone","Beginners"],["Low Mood"],77,30,30,5],
 ["White Widow","🕸️","img-day","Balanced Hybrid","Moderate to high THC","Low CBD","high","Myrcene, Caryophyllene, Pinene","Earthy, woody, pepper","Day or evening","Strong",["Balanced","Euphoric","Relaxed"],["Stress","Low Mood"],["Low tolerance"],["Stress","Low Mood"],79,45,68,35],
 ["Wedding Cake","🎂","img-dessert","Indica-leaning Hybrid","High THC","Low CBD","high","Caryophyllene, Limonene, Myrcene","Vanilla, sweet, earthy","Evening","Strong",["Relaxed","Hungry","Euphoric"],["Appetite Loss","Stress"],["Beginners","Anxiety-prone"],["Appetite Loss","Stress"],82,36,84,64],
 ["Gelato","🍨","img-dessert","Hybrid","High THC","Low CBD","high","Caryophyllene, Limonene, Humulene","Creamy, sweet, berry","Evening","Strong",["Relaxed","Happy","Hungry"],["Stress","Appetite Loss"],["Low THC tolerance"],["Stress","Appetite Loss"],81,40,80,58],
 ["OG Kush","🌲","img-night","Hybrid","High THC","Low CBD","high","Myrcene, Limonene, Caryophyllene","Fuel, pine, spice","Evening","Strong",["Relaxed","Heavy","Euphoric"],["Stress","Body Pain"],["Beginners","Driving"],["Stress","Body Pain"],83,38,88,72],
 ["Bubba Kush","🛋️","img-night","Indica","High THC","Low CBD","high","Myrcene, Caryophyllene, Limonene","Coffee, earth, chocolate","Nighttime","Strong",["Sleepy","Heavy","Relaxed"],["Sleep Trouble","Body Pain"],["Daytime tasks","Beginners"],["Sleep Trouble","Body Pain"],86,40,93,90],
 ["Zkittlez","🌈","img-dessert","Indica-leaning Hybrid","Moderate to high THC","Low CBD","high","Caryophyllene, Limonene, Humulene","Candy, fruit, sweet","Evening","Strong",["Relaxed","Happy","Hungry"],["Stress","Appetite Loss"],["Anxiety-prone"],["Stress","Appetite Loss"],80,48,78,60],
 ["Super Silver Haze","✨","img-bright","Sativa-leaning","High THC","Low CBD","high","Terpinolene, Caryophyllene, Myrcene","Citrus, spice, skunk","Daytime","Strong",["Energetic","Focused","Uplifted"],["Low Mood","Focus"],["Anxiety-prone","Sleep time"],["Low Mood"],76,34,32,7],
 ["Green Crack","🟢","img-bright","Sativa-leaning","High THC","Low CBD","high","Myrcene, Caryophyllene, Pinene","Citrus, mango, sharp","Daytime","Strong",["Energetic","Focused","Bright"],["Low Mood","Focus"],["Anxiety-prone","Beginners"],["Low Mood"],75,32,28,5],
 ["LA Confidential","🌃","img-night","Indica","High THC","Low CBD","high","Myrcene, Pinene, Caryophyllene","Pine, earthy, skunky","Nighttime","Strong",["Sleepy","Relaxed","Body heavy"],["Sleep Trouble","Body Pain"],["Daytime focus"],["Sleep Trouble","Body Pain"],85,39,92,88],
 ["Remedy","🧘","img-cbd","CBD-dominant","Very low THC","Very high CBD","low","Myrcene, Pinene, Caryophyllene","Pine, lemon, herbal","Day or evening","Mild",["Calm","CBD-forward","Functional"],["Anxiety","Stress","Headache"],["Strong euphoria"],["Anxiety","Stress","Headache"],89,96,80,34],
 ["Pennywise","🪙","img-cbd","Balanced THC/CBD Hybrid","Low to moderate THC","Moderate CBD","mid","Myrcene, Pinene, Caryophyllene","Coffee, pepper, sweet","Day or evening","Moderate",["Balanced","Calm","Clear"],["Anxiety","Stress","Body Pain"],["Heavy high"],["Anxiety","Stress","Body Pain"],87,84,78,40],
 ["Mango Kush","🥭","img-dessert","Indica-leaning Hybrid","Moderate THC","Low CBD","mid","Myrcene, Limonene, Caryophyllene","Mango, tropical, sweet","Evening","Moderate",["Relaxed","Hungry","Mellow"],["Appetite Loss","Stress"],["High focus needs"],["Appetite Loss","Stress"],82,58,82,60],
 ["Strawberry Cough","🍓","img-bright","Sativa-leaning","Moderate THC","Low CBD","mid","Myrcene, Pinene, Caryophyllene","Strawberry, sweet, herbal","Daytime","Moderate",["Uplifted","Social","Bright"],["Low Mood","Stress"],["Anxiety sensitivity"],["Low Mood","Stress"],79,58,45,12],
 ["Chemdawg","⛽","img-bright","Hybrid","High THC","Low CBD","high","Caryophyllene, Myrcene, Limonene","Diesel, chemical, pine","Day or evening","Strong",["Creative","Euphoric","Strong"],["Low Mood","Experienced users"],["Beginners","Anxiety-prone"],["Low Mood"],74,28,45,18]
];


const collections=[
 {title:"Beginner-Friendly Collection",desc:"Lower-intensity or CBD-forward directions to explore first.",filter:s=>s.beginner>=80},
 {title:"CBD-Forward Options",desc:"Options with CBD-forward or balanced profiles.",filter:s=>s.level==="low" || s.cbd.toLowerCase().includes("high")},
 {title:"Sleep + Wind-Down",desc:"Nighttime-style directions with stronger relaxation scores.",filter:s=>s.sleep>=80},
 {title:"Functional Daytime",desc:"Clearer daytime directions that may feel less heavy.",filter:s=>s.use.toLowerCase().includes("day") && s.sleep<50},
 {title:"Body Comfort",desc:"Directions commonly associated with body comfort or soreness goals.",filter:s=>s.symptoms.includes("Body Pain") || s.symptoms.includes("Muscle Soreness")},
 {title:"Appetite Direction",desc:"Options often associated with hunger or evening appetite support.",filter:s=>s.symptoms.includes("Appetite Loss")}
];

const articles=[
 {title:"What does CBD-forward mean?",body:"CBD-forward means the product is centered more around CBD than THC. For some users, this may feel less intense than high-THC options. Always check lab results and start low."},
 {title:"THC vs CBD explained simply",body:"THC is the cannabinoid most associated with intoxication. CBD is not usually associated with the same intoxicating effect. Many products contain both, so ask for percentages and serving size."},
 {title:"What are terpenes?",body:"Terpenes are aroma compounds that influence smell and flavor. They are also commonly discussed when describing the overall direction of a strain, such as citrusy, earthy, sleepy, bright, or calming."},
 {title:"Start low and go slow",body:"Start with a low serving, especially if you are new or sensitive to THC. Wait to understand how it affects you before taking more. Avoid driving while impaired."},
 {title:"How to shop at a dispensary",body:"Ask for lab-tested products, THC/CBD percentages, terpene profile, serving size, onset time, and lower-risk beginner-friendly options. Follow local laws."},
 {title:"Lower-anxiety cannabis directions",body:"For anxiety-prone users, lower THC, CBD-forward, or balanced THC/CBD options may be more comfortable directions to explore. Cannabis affects everyone differently."}
];

const strains=strainSeeds.map(x=>({
 name:x[0],emoji:x[1],image:x[2],type:x[3],thc:x[4],cbd:x[5],level:x[6],terpenes:x[7],flavor:x[8],use:x[9],intensity:x[10],
 effects:x[11],good:x[12],avoid:x[13],symptoms:x[14],match:x[15],beginner:x[16],relax:x[17],sleep:x[18],
 why:`A ${x[10].toLowerCase()} ${x[3].toLowerCase()} direction often associated with ${x[11].join(", ").toLowerCase()} effects.`,
 insight:`Based on its ${x[7]} terpene profile and ${x[4].toLowerCase()} direction, ${x[0]} may align with ${x[12].join(", ").toLowerCase()} goals for some users. Start low and ask for lab-tested options.`,
 warning:x[6]==="high" ? "Higher THC direction. Start low, avoid driving, and use extra caution if anxiety-prone or new to cannabis." : "Lower-risk direction, but cannabis affects everyone differently. Start low and follow local laws.",
 similar:[]
}));

strains.forEach(s=>{
 s.similar=strains.filter(x=>x.name!==s.name && (x.level===s.level || x.type.includes(s.type.split(" ")[0]))).slice(0,3).map(x=>x.name);
});

function toggleDark(){document.body.classList.toggle("dark")}
function finishOnboarding(){
 const profile={
  priority:document.getElementById("onboardPriority").value || "Not selected",
  sensitivity:document.getElementById("onboardSensitivity").value || "Not selected",
  preference:document.getElementById("onboardPreference").value || "Not selected"
 };
 localStorage.setItem("strainReliefProfile",JSON.stringify(profile));
 localStorage.setItem("strainReliefOnboarding","done");
 loadProfile();
 showPageById("home");
 showToast("Profile saved");
}
function resetOnboarding(){
 showPageById("onboardingPage");
}
function loadProfile(){
 const profile=JSON.parse(localStorage.getItem("strainReliefProfile")||"null");
 const box=document.getElementById("profileBox");
 if(!box)return;
 if(!profile){
  box.innerHTML="No profile saved yet. Complete onboarding or use the quiz below.";
  return;
 }
 box.innerHTML=`
  <div class="profile-pill"><strong>Priority:</strong> ${profile.priority}</div>
  <div class="profile-pill"><strong>THC Sensitivity:</strong> ${profile.sensitivity}</div>
  <div class="profile-pill"><strong>Preferred Direction:</strong> ${profile.preference}</div>
 `;
}
function toggleFilter(type){
 if(type==="anxiety"){lowAnxietyMode=!lowAnxietyMode;document.getElementById("lowAnxietyBtn").classList.toggle("active")}
 if(type==="night"){nightMode=!nightMode;document.getElementById("nightBtn").classList.toggle("active")}
}

function findStrain(){
 const symptom=document.getElementById("symptom").value;
 const experience=document.getElementById("experience").value;
 const goal=document.getElementById("goal").value;
 const result=document.getElementById("result");
 const loader=document.getElementById("loader");
 const loaderText=document.getElementById("loaderText");

 result.style.display="none";
 loader.style.display="block";

 const msgs=["Analyzing terpene compatibility...","Checking THC sensitivity...","Building your wellness profile..."];
 let i=0;
 const timer=setInterval(()=>{loaderText.innerText=msgs[i%msgs.length];i++},500);

 setTimeout(()=>{
  clearInterval(timer);
  loader.style.display="none";
  result.style.display="block";

  if(!symptom){
   result.innerHTML="<div class='warning'>Please select a symptom first.</div>";
   return;
  }

  addSearch(symptom);
  if(goal)addSearch(goal);

  let matches=strains.filter(s=>s.symptoms.includes(symptom));

  if(lowAnxietyMode) matches=matches.filter(s=>s.level!=="high");
  if(nightMode) matches=matches.sort((a,b)=>b.sleep-a.sleep);
  if(experience==="Beginner") matches=matches.sort((a,b)=>b.beginner-a.beginner);
  if(goal==="Sleepy") matches=matches.sort((a,b)=>b.sleep-a.sleep);
  if(goal==="Relaxed") matches=matches.sort((a,b)=>b.relax-a.relax);
  if(goal==="Focused") matches=matches.sort((a,b)=>b.beginner + b.match - (b.sleep/2) - (a.beginner + a.match - (a.sleep/2)));

  if(!matches.length) matches=strains.filter(s=>s.level==="low"||s.cbd.includes("High")).slice(0,3);

  let title=lowAnxietyMode ? "Your Lower-Anxiety Wellness Directions" : "Your Personalized Wellness Directions";

  let html=`
  <h2>${title}</h2>
  <div class="profile-summary">
    <strong>Your profile:</strong><br>
    ✓ ${symptom}<br>
    ✓ ${goal || "Balanced comfort"}<br>
    ✓ ${experience || "General"} experience level<br>
    ${lowAnxietyMode ? "✓ Lower-anxiety preference<br>" : ""}
    ${nightMode ? "✓ Nighttime preference<br>" : ""}
  </div>
  <div class="info"><strong>AI Wellness Insight:</strong><br>${buildInsight(symptom,experience,goal)}</div>
  <div class="carousel">
  `;

  matches.forEach((s,index)=>{addRecent(s.name);html+=strainCard(s,index)});
  html+="</div>";

  if(experience==="Beginner"){
    html+=`<div class="warning"><strong>Beginner Tip:</strong><br>Start low and go slow. Consider lower THC or balanced THC/CBD products first.</div>`;
  }

  html+=`
  <div class="info">
    <strong>Why these were chosen:</strong><br>
    These options were matched using your comfort goal, intensity preference, THC/CBD direction, terpene profile, and safety filters.
  </div>
  <div class="info">
    <strong>Dispensary script:</strong><br>
    “I’m looking for something associated with ${symptom}. I prefer ${goal || "a balanced feeling"} and my experience level is ${experience || "not selected"}. I’d like ${lowAnxietyMode ? "lower-THC, CBD-forward, or balanced options" : "lower-risk, lab-tested options"}.”
  </div>`;

  result.innerHTML=html;
  loadRecent();
  loadSearches();
 },1100);
}

function buildInsight(symptom,experience,goal){
 let parts=[];
 if(symptom==="Anxiety") parts.push("lower-THC or CBD-forward directions may be a better starting point");
 if(symptom==="Sleep Trouble") parts.push("myrcene-forward nighttime directions may better match your wind-down goal");
 if(symptom==="Low Mood") parts.push("brighter limonene-forward directions may align with an uplifted daytime preference");
 if(symptom==="Body Pain" || symptom==="Muscle Soreness") parts.push("balanced body-comfort directions with caryophyllene or myrcene may be worth asking about");
 if(experience==="Beginner") parts.push("beginner-friendly options should stay lower intensity");
 if(goal) parts.push("your desired feeling is " + goal.toLowerCase());
 return parts.length ? "Based on your profile, " + parts.join(", ") + ". Ask for lab-tested options and start low." : "Based on your profile, balanced, lab-tested options may be the safest educational direction to explore first.";
}

function strainCard(s,index){
 return `
 <div class="match pressable">
  <div class="image-banner ${s.image}"><span>${s.emoji}</span></div>
  <h3>${index+1}. ${s.name}</h3>
  ${tags(s.effects)}
  <div class="score-box">
    ${score("Match Score",s.match)}
    ${score("Beginner Friendly",s.beginner)}
    ${score("Relaxation",s.relax)}
    ${score("Sleep Support",s.sleep)}
  </div>
  <p><strong>Type:</strong> ${s.type}</p>
  <p><strong>Intensity:</strong> ${s.intensity}</p>
  <p><strong>THC:</strong> ${s.thc}</p>
  <div class="meter"><div class="thc-${s.level} fill"></div></div>
  <p><strong>CBD:</strong> ${s.cbd}</p>
  <p><strong>Terpenes:</strong> ${s.terpenes}</p>
  <p><strong>Flavor / Aroma:</strong> ${s.flavor}</p>
  <p><strong>Best Use:</strong> ${s.use}</p>
  <div class="info"><strong>AI Wellness Insight:</strong><br>${s.insight}</div>
  <div class="info"><strong>Good For:</strong><br>${tags(s.good)}</div>
  <div class="warning"><strong>Avoid If:</strong><br>${tags(s.avoid)}</div>
  <div class="info"><strong>Why this direction:</strong><br>${s.why}</div>
  <div class="info"><strong>Similar strains:</strong><br>${tags(s.similar)}</div>
  <div class="warning"><strong>Safety note:</strong><br>${s.warning}</div>
  <button onclick="openDetails('${s.name}')">View Full Profile</button>
  <button onclick="saveFavorite('${s.name}')">Save ${s.name}</button>
  <button class="mode" onclick="shareStrain('${s.name}')">Share Recommendation</button>
 </div>`;
}

function score(label,value){
 return `<div class="score-row"><strong>${label}: ${value}%</strong><div class="meter"><div class="fill" style="width:${value}%"></div></div></div>`;
}
function tags(arr){return arr.map(x=>`<span class="tag">${x}</span>`).join("")}

function searchStrains(){
 const q=document.getElementById("searchInput").value.toLowerCase();
 const box=document.getElementById("searchResults");
 if(!q){box.innerHTML="";return}
 addSearch(q);
 const found=strains.filter(s=>
  s.name.toLowerCase().includes(q) ||
  s.type.toLowerCase().includes(q) ||
  s.terpenes.toLowerCase().includes(q) ||
  s.effects.join(" ").toLowerCase().includes(q) ||
  s.good.join(" ").toLowerCase().includes(q) ||
  s.symptoms.join(" ").toLowerCase().includes(q)
 );
 found.forEach(s=>addRecent(s.name));
 box.innerHTML=found.length ? `<h2>Results</h2><div class="carousel">${found.map((s,i)=>strainCard(s,i)).join("")}</div>` : "<p>No strain found.</p>";
 loadRecent();loadSearches();
}

function filterCategory(value){
 let found;
 if(value==="Beginner") found=strains.filter(s=>s.beginner>=70);
 else found=strains.filter(s=>s.symptoms.includes(value) || s.good.includes(value));
 document.getElementById("searchResults").innerHTML=`<h2>${value}</h2><div class="carousel">${found.map((s,i)=>strainCard(s,i)).join("")}</div>`;
 showPageById("searchPage");
}

function openDetails(name){
 const s=strains.find(x=>x.name===name);
 if(!s)return;
 addRecent(name);loadRecent();

 const levelLabel = s.level === "high" ? "Higher THC Caution" : s.level === "mid" ? "Moderate Intensity" : "Lower Intensity";
 const vibeLine = s.effects.join(" • ");
 const goodLine = s.good.join(" • ");

 document.getElementById("modalContent").innerHTML=`
  <div class="detail-hero ${s.image}">
    <div class="detail-emoji">${s.emoji}</div>
    <div>
      <p class="eyebrow">Strain Profile</p>
      <h2>${s.name}</h2>
      <p>${s.type} · ${s.use}</p>
    </div>
  </div>

  <div class="detail-chip-row">
    <span class="tag gold">${levelLabel}</span>
    <span class="tag">${s.intensity}</span>
    <span class="tag">${s.use}</span>
  </div>

  <div class="detail-section">
    <h3>Often Associated With</h3>
    <p>${vibeLine}</p>
    ${tags(s.effects)}
  </div>

  <div class="detail-grid">
    <div class="detail-stat">
      <strong>THC</strong>
      <span>${s.thc}</span>
      <div class="meter"><div class="thc-${s.level} fill"></div></div>
    </div>
    <div class="detail-stat">
      <strong>CBD</strong>
      <span>${s.cbd}</span>
    </div>
  </div>

  <div class="score-box">
    ${score("Match Score",s.match)}
    ${score("Beginner Friendly",s.beginner)}
    ${score("Relaxation",s.relax)}
    ${score("Sleep Support",s.sleep)}
  </div>

  <div class="detail-section">
    <h3>Terpene Direction</h3>
    <p>${s.terpenes}</p>
  </div>

  <div class="detail-section">
    <h3>Flavor / Aroma</h3>
    <p>${s.flavor}</p>
  </div>

  <div class="info"><strong>Wellness Insight:</strong><br>${s.insight}</div>
  <div class="info"><strong>May Align With:</strong><br>${goodLine}<br><br>${tags(s.good)}</div>
  <div class="warning"><strong>Avoid / Use Caution If:</strong><br>${tags(s.avoid)}</div>
  <div class="info"><strong>Similar Strains:</strong><br>${tags(s.similar)}</div>
  <div class="warning"><strong>Educational Safety Note:</strong><br>${s.warning}</div>

  <button onclick="saveFavorite('${s.name}')">Save ${s.name}</button>
  <button onclick="prefillJournal('${s.name}')">Add Journal Note</button>
  <button class="mode" onclick="shareStrain('${s.name}')">Share Recommendation</button>
  <button class="close" onclick="closeDetails()">Close</button>
 `;
 document.getElementById("detailModal").style.display="flex";
}
function closeDetails(){document.getElementById("detailModal").style.display="none"}
document.getElementById("detailModal").addEventListener("click",e=>{if(e.target.id==="detailModal")closeDetails()});

function saveFavorite(name){
 localStorage.setItem("favoriteStrain",name);
 loadFavorite();
 showToast("💚 Saved " + name);
}
function loadFavorite(){
 const saved=localStorage.getItem("favoriteStrain");
 if(saved){
  document.getElementById("favoriteText").innerText="Saved favorite: "+saved;
  document.getElementById("checklist").innerHTML=`Preferred strain: ${saved}<br>Ask for lab-tested products.<br>Ask about THC, CBD, terpenes, serving size, onset time, and beginner-friendly options.`;
 }
}
function addRecent(name){
 let recent=JSON.parse(localStorage.getItem("recentStrains")||"[]");
 recent=recent.filter(x=>x!==name);
 recent.unshift(name);
 recent=recent.slice(0,5);
 localStorage.setItem("recentStrains",JSON.stringify(recent));
}
function loadRecent(){
 let recent=JSON.parse(localStorage.getItem("recentStrains")||"[]");
 document.getElementById("recentText").innerHTML=recent.length ? recent.map(x=>"• "+x).join("<br>") : "No recently viewed strains yet.";
}
function addSearch(term){
 let searches=JSON.parse(localStorage.getItem("recentSearches")||"[]");
 searches=searches.filter(x=>x!==term);
 searches.unshift(term);
 searches=searches.slice(0,5);
 localStorage.setItem("recentSearches",JSON.stringify(searches));
}
function loadSearches(){
 let searches=JSON.parse(localStorage.getItem("recentSearches")||"[]");
 document.getElementById("recentSearchText").innerHTML=searches.length ? searches.map(x=>"• "+x).join("<br>") : "No recent searches yet.";
}
function shareStrain(name){
 const text=`I found a cannabis wellness direction on StrainRelief: ${name}. Educational only. Follow local laws.`;
 if(navigator.share){
  navigator.share({title:"StrainRelief",text:text,url:location.href});
 }else{
  navigator.clipboard.writeText(text+" "+location.href);
  showToast("Copied recommendation");
 }
}

function showPage(id,btn){
 document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
 document.getElementById(id).classList.remove("hidden");
 document.querySelectorAll(".nav button").forEach(b=>b.classList.remove("active"));
 if(btn)btn.classList.add("active");
 window.scrollTo(0,0);
}
function showPageById(id){showPage(id,null)}

function loadCollections(){
 document.getElementById("collectionsBox").innerHTML=collections.map((c,i)=>`
  <div class="collection-card pressable" onclick="openCollection(${i})">
   <h3>${c.title}</h3>
   <p>${c.desc}</p>
  </div>
 `).join("");
}
function openCollection(i){
 const c=collections[i];
 const found=strains.filter(c.filter);
 document.getElementById("searchResults").innerHTML=`<h2>${c.title}</h2><p>${c.desc}</p><div class="carousel">${found.map((s,index)=>strainCard(s,index)).join("")}</div>`;
 showPageById("searchPage");
}
function loadArticles(){
 document.getElementById("articleBox").innerHTML=articles.map((a,i)=>`
  <div class="article-card pressable" onclick="openArticle(${i})">
   <h3>${a.title}</h3>
   <p>${a.body.slice(0,110)}...</p>
  </div>
 `).join("");
}
function openArticle(i){
 const a=articles[i];
 document.getElementById("modalContent").innerHTML=`
  <h2>${a.title}</h2>
  <p>${a.body}</p>
  <div class="warning"><strong>Reminder:</strong><br>Educational only. Cannabis affects everyone differently. Follow local laws and do not drive while impaired.</div>
  <button class="close" onclick="closeDetails()">Close</button>
 `;
 document.getElementById("detailModal").style.display="flex";
}

function loadTrending(){
 document.getElementById("trendingBox").innerHTML=strains.slice(0,12).map(s=>`
  <div class="mini-card strain-tile pressable" onclick="openDetails('${s.name}')">
   <div class="strain-tile-top">
    <h3>${s.emoji} ${s.name}</h3>
    <span class="tap-pill">Tap</span>
   </div>
   <p>${s.type}</p>
   ${tags(s.effects)}
  </div>
 `).join("");
}
function loadTerpenes(){
 document.getElementById("terpeneBox").innerHTML=terpeneGuide.map(t=>`
  <div class="terpene pressable"><h3>${t[0]}</h3><p>${t[1]}</p></div>
 `).join("");
}
function loadCategories(){
 document.getElementById("categoryCards").innerHTML=categories.map(c=>`
  <div class="mini-card pressable" onclick="filterCategory('${c[1]}')">
    <h3>${c[0]}</h3>
    <p>Explore ${c[0].toLowerCase()} cannabis wellness directions.</p>
  </div>
 `).join("");
 document.getElementById("categoryTabs").innerHTML=categories.map(c=>`
  <button onclick="filterCategory('${c[1]}')">${c[0]}</button>
 `).join("");
}
function showToast(msg){
 const toast=document.getElementById("toast");
 toast.innerText=msg;
 toast.style.display="block";
 setTimeout(()=>toast.style.display="none",1800);
}

function loadJournalSelect(){
 document.getElementById("journalStrain").innerHTML=`<option value="">Select strain</option>`+strains.map(s=>`<option>${s.name}</option>`).join("");
}
function prefillJournal(name){
 closeDetails();
 showPageById("journalPage");
 document.getElementById("journalStrain").value=name;
}
function saveJournal(){
 const strain=document.getElementById("journalStrain").value;
 const mood=document.getElementById("journalMood").value;
 const notes=document.getElementById("journalNotes").value.trim();
 if(!strain){showToast("Select a strain first");return}
 let journal=JSON.parse(localStorage.getItem("strainJournal")||"[]");
 journal.unshift({strain,mood,notes,date:new Date().toLocaleDateString()});
 journal=journal.slice(0,20);
 localStorage.setItem("strainJournal",JSON.stringify(journal));
 document.getElementById("journalMood").value="";
 document.getElementById("journalNotes").value="";
 loadJournal();
 showToast("Journal saved");
}
function loadJournal(){
 const journal=JSON.parse(localStorage.getItem("strainJournal")||"[]");
 document.getElementById("journalList").innerHTML=journal.length ? `
  <h2>Recent Entries</h2>
  ${journal.map((j,i)=>`
   <div class="journal-entry">
    <h3>${j.strain}</h3>
    <p><strong>Date:</strong> ${j.date}</p>
    <p><strong>Feeling:</strong> ${j.mood || "Not selected"}</p>
    <p>${j.notes || "No notes added."}</p>
    <button class="close" onclick="deleteJournal(${i})">Delete Entry</button>
   </div>
  `).join("")}` : "<p>No journal entries yet.</p>";
}
function deleteJournal(i){
 let journal=JSON.parse(localStorage.getItem("strainJournal")||"[]");
 journal.splice(i,1);
 localStorage.setItem("strainJournal",JSON.stringify(journal));
 loadJournal();
}

function setupPWA(){
 if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service-worker.js").catch(()=>{});
 }

 window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault();
  deferredPrompt=e;
  document.getElementById("installBtn").style.display="block";
 });

 document.getElementById("installBtn").addEventListener("click",async()=>{
  if(!deferredPrompt){showToast("Install may be available from your browser menu");return}
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt=null;
  document.getElementById("installBtn").style.display="none";
 });
}

document.getElementById("dailyTip").innerText=tips[new Date().getDate()%tips.length];

loadFavorite();
loadRecent();
loadSearches();
loadTrending();
loadTerpenes();
loadCategories();
loadJournalSelect();
loadJournal();
loadCollections();
loadArticles();
loadProfile();
setupPWA();

if(!localStorage.getItem("strainReliefOnboarding")){
 showPageById("onboardingPage");
}
window.addEventListener('load',()=>{
  const splash=document.getElementById('splashScreen');
  if(splash){
    setTimeout(()=>{
      splash.style.opacity='0';
      setTimeout(()=> splash.remove(),500);
    },1800);
  }
});
