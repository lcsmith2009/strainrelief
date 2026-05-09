const strains=[
{
name:"Harlequin",
emoji:"🌱",
type:"CBD-dominant Hybrid",
tags:["Calm","Clear-headed","CBD-forward"],
insight:"Often chosen by users seeking calmer lower-intensity daytime directions."
},
{
name:"ACDC",
emoji:"🪴",
type:"CBD-forward Hybrid",
tags:["Functional","Calm","Low intoxication"],
insight:"Frequently associated with low-intensity daytime wellness directions."
},
{
name:"Blue Dream",
emoji:"💙",
type:"Balanced Hybrid",
tags:["Mood","Creative","Balanced"],
insight:"Often connected with daytime balance and mood-focused experiences."
},
{
name:"Northern Lights",
emoji:"🌙",
type:"Indica",
tags:["Sleep","Evening","Relaxation"],
insight:"Commonly associated with nighttime wind-down routines."
},
{
name:"Granddaddy Purple",
emoji:"🍇",
type:"Indica",
tags:["Relaxation","Evening","Sleep"],
insight:"Often selected for evening comfort and calming sessions."
},
{
name:"Sour Diesel",
emoji:"⚡",
type:"Sativa",
tags:["Energy","Daytime","Focus"],
insight:"Commonly associated with energetic daytime experiences."
},
{
name:"Girl Scout Cookies",
emoji:"🍪",
type:"Hybrid",
tags:["Balanced","Mood","Relaxation"],
insight:"Popular balanced option often associated with stress direction."
},
{
name:"Pineapple Express",
emoji:"🍍",
type:"Hybrid",
tags:["Happy","Creative","Daytime"],
insight:"Frequently connected with upbeat daytime sessions."
},
{
name:"Jack Herer",
emoji:"🌸",
type:"Sativa",
tags:["Focus","Energy","Mood"],
insight:"Often selected for focus-oriented daytime experiences."
},
{
name:"Purple Punch",
emoji:"🫐",
type:"Indica",
tags:["Sleep","Calm","Evening"],
insight:"Known for heavier nighttime wellness directions."
},
{
name:"Lemon Haze",
emoji:"🍋",
type:"Sativa",
tags:["Creative","Daytime","Mood"],
insight:"Bright daytime direction with citrus-inspired profile."
},
{
name:"Charlotte's Web",
emoji:"🕊️",
type:"CBD-forward",
tags:["Calm","Stress","Low THC"],
insight:"CBD-forward option commonly associated with gentle experiences."
}
];

const strainList=document.getElementById("strain-list");
const searchInput=document.getElementById("searchInput");

const modal=document.getElementById("modal");
const closeModal=document.getElementById("closeModal");

const modalTitle=document.getElementById("modalTitle");
const modalType=document.getElementById("modalType");
const modalEmoji=document.getElementById("modalEmoji");
const modalTags=document.getElementById("modalTags");
const modalInsight=document.getElementById("modalInsight");

const saveBtn=document.getElementById("saveBtn");
const shareBtn=document.getElementById("shareBtn");

let activeStrain=null;

function renderStrains(filter=""){
strainList.innerHTML="";

strains
.filter(strain=>
strain.name.toLowerCase().includes(filter.toLowerCase()) ||
strain.tags.join(" ").toLowerCase().includes(filter.toLowerCase())
)
.forEach(strain=>{

const card=document.createElement("div");
card.className="strain-card";

card.innerHTML=`
<div class="card-top">
<div class="card-emoji">${strain.emoji}</div>
<div>
<h2>${strain.name}</h2>
<p>${strain.type}</p>
</div>
</div>

<div class="tags">
${strain.tags.map(tag=>`<span>${tag}</span>`).join("")}
</div>

<button class="view-btn">View Direction</button>
`;

card.querySelector(".view-btn").addEventListener("click",()=>openModal(strain));

strainList.appendChild(card);
});
}

function openModal(strain){
activeStrain=strain;

modalTitle.textContent=strain.name;
modalType.textContent=strain.type;
modalEmoji.textContent=strain.emoji;
modalInsight.textContent=strain.insight;

modalTags.innerHTML="";

strain.tags.forEach(tag=>{
const span=document.createElement("span");
span.textContent=tag;
modalTags.appendChild(span);
});

modal.classList.remove("hidden");
}

closeModal.addEventListener("click",()=>{
modal.classList.add("hidden");
});

saveBtn.addEventListener("click",()=>{
if(!activeStrain)return;

let saved=JSON.parse(localStorage.getItem("savedStrains")||"[]");

if(!saved.includes(activeStrain.name)){
saved.push(activeStrain.name);
localStorage.setItem("savedStrains",JSON.stringify(saved));
alert(activeStrain.name+" saved!");
}else{
alert("Already saved.");
}
});

shareBtn.addEventListener("click",()=>{
if(!activeStrain)return;

if(navigator.share){
navigator.share({
title:activeStrain.name,
text:"Check out this strain direction on StrainRelief"
});
}else{
alert("Sharing not supported on this device.");
}
});

searchInput.addEventListener("input",(e)=>{
renderStrains(e.target.value);
});

renderStrains();
