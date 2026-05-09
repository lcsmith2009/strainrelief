
const strainSeeds=[
["Harlequin","🌱","CBD-dominant Hybrid","Calm","Clear-headed","CBD-forward"],
["ACDC","🪴","CBD-dominant Hybrid","Functional","Calm","Low intoxication"],
["Cannatonic","🌿","Balanced THC/CBD","Balanced","Calm","Body comfort"],
["Northern Lights","🌙","Indica","Sleep","Evening","Relaxation"],
["Blue Dream","💙","Hybrid","Mood","Creative","Balanced"],
["Granddaddy Purple","🍇","Indica","Sleep","Calm","Stress"],
["Sour Diesel","⚡","Sativa","Energy","Daytime","Mood"],
["Girl Scout Cookies","🍪","Hybrid","Balanced","Relaxation","Mood"],
["Pineapple Express","🍍","Hybrid","Happy","Daytime","Creative"],
["Jack Herer","🌸","Sativa","Focus","Energy","Mood"],
["Purple Punch","🫐","Indica","Evening","Sleep","Relaxation"],
["Lemon Haze","🍋","Sativa","Daytime","Mood","Creative"],
["Ringo's Gift","🎁","CBD-forward","Calm","Beginner","Stress"],
["Charlotte's Web","🕊️","CBD-forward","Calm","Low THC","Stress"],
["Maui Wowie","🏝️","Sativa","Energy","Mood","Daytime"],
["Durban Poison","☀️","Sativa","Focus","Daytime","Energy"],
["White Widow","🕸️","Hybrid","Balanced","Mood","Relaxation"],
["Wedding Cake","🎂","Indica-dominant","Relaxation","Mood","Evening"],
["Gelato","🍨","Hybrid","Mood","Relaxation","Creative"],
["OG Kush","🌲","Hybrid","Relaxation","Stress","Mood"],
["Bubba Kush","🛋️","Indica","Sleep","Calm","Evening"],
["Zkittlez","🌈","Indica","Relaxation","Mood","Calm"],
["Super Silver Haze","✨","Sativa","Energy","Focus","Daytime"],
["Green Crack","🟢","Sativa","Focus","Energy","Mood"],
["LA Confidential","🌃","Indica","Sleep","Calm","Evening"],
["Remedy","🧘","CBD-forward","Calm","Stress","Low THC"],
["Pennywise","🪙","Balanced THC/CBD","Calm","Body comfort","Stress"],
["Mango Kush","🥭","Indica","Relaxation","Mood","Evening"],
["Strawberry Cough","🍓","Sativa","Mood","Creative","Daytime"],
["Chemdawg","⛽","Hybrid","Balanced","Relaxation","Mood"]
];

const container=document.getElementById("strain-list");

strainSeeds.forEach(strain=>{
const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<div class="emoji">${strain[1]}</div>
<h2>${strain[0]}</h2>
<p>${strain[2]}</p>

<div class="tags">
<span>${strain[3]}</span>
<span>${strain[4]}</span>
<span>${strain[5]}</span>
</div>

<button onclick="alert('${strain[0]} saved!')">View Direction</button>
`;

container.appendChild(card);
});
