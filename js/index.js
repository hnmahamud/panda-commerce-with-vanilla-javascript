/*---------------------------------------------
১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে 
index.html এর সাথে কানেক্ট করতে পারো কিনা?
-----------------------------------------------*/
console.log("Connected!");

/*-----------------------------------------------------
২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে 
তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
--------------------------------------------------------*/
const allH2 = document.getElementsByTagName("h2");
for (const h2 of allH2) {
  h2.style.color = "lightblue";
}

/*--------------------------------------------------------------
৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। 
সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
----------------------------------------------------------------*/
const backpackSection = document.getElementById("backpack");
backpackSection.style.backgroundColor = "tomato";

/*-------------------------------------------------------
৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে 
সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
---------------------------------------------------------*/
const allCard = document.getElementsByClassName("card");
for (const card of allCard) {
  card.style.borderRadius = "30px";
}

/*--------------------------------------------------------------
৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। 
এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
----------------------------------------------------------------*/
function fire() {
  console.log("Function fire!");
}

/*-------------------------------------------------------------------------------
৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। 
যাতে যেকোন একটা buy now বাটনে চাপ দিলে card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। 
একটু চিন্তা করে করার চেষ্টা করো। 
---------------------------------------------------------------------------------*/
/* Normal Way */
// const allBuyBtn = document.getElementsByClassName('panda-btn-buy-now');
// for(const buyBtn of allBuyBtn) {
//     buyBtn.addEventListener('click', function(event) {
//         event.target.parentNode.parentNode.remove();
//     });
// }

/* Event Delegation Way */
const shoes = document.getElementById("shoes");
shoes.addEventListener("click", function (event) {
  if (event.target.innerText === "Buy Now") {
    event.target.parentNode.parentNode.remove();
  }
});
const backpack = document.getElementById("backpack");
backpack.addEventListener("click", function (event) {
  if (event.target.innerText === "Buy Now") {
    event.target.parentNode.parentNode.remove();
  }
});

/*-----------------------------------------------------------------
৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। 
সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে 
input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। 
আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
--------------------------------------------------------------------*/
const inputField = document.getElementById("input-field");
inputField.addEventListener("keyup", function (event) {
  const submitBtn = document.getElementById("submit-btn");
  if (event.target.value.includes("email")) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
});



/*---------------------------------------------------------------------------------
৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে 
সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
-----------------------------------------------------------------------------------*/
/* Event Handeller */
function newImg(e) {
  e.src = "images/shoes/shoe-3.png";
}
function oldImg(e) {
  e.src = "images/shoes/shoe-1.png";
}
/* Event Listener */
// const img1 = document.getElementById('img1');
// img1.addEventListener('mouseenter', function() {
//     img1.removeAttribute('src');
//     img1.setAttribute('src', 'images/shoes/shoe-3.png');
// })
// img1.addEventListener('mouseout', function() {
//     img1.removeAttribute('src');
//     img1.setAttribute('src', 'images/shoes/shoe-1.png');
// })



/*----------------------------------------------------------------
৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি 
জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।
------------------------------------------------------------------*/
const touchSection = document.getElementById("touch-section");
touchSection.addEventListener("dblclick", function () {
  touchSection.style.backgroundColor = "skyBlue";
});
