
  // flight.js
  const packageCards = [
  {
    title: "Land Package",
    tags: [{name:"Budget Friendly", color:"#24B3BA"}],
    img:"assets/frontend/img/land.svg",
    details: ["Hotel Accommodation", "Transportation", "Visa"],
    tagsStyle:'start'

  },
  {
    title: "Flight Package",
    tags: [{name:"Complete Umrah Package", color:'#24B3BA'},
      {name: "Budget Friendly", color:'#24B3BA"'}],
    img:"assets/frontend/img/flight.svg",
    details: ["flights", "hotel accommodations", "Transport", "Visa"],
    tagsStyle:'start'

  },
];

const packageDurationCards=[
   {
    title: "Fixed",
    tags: [
      {name:"Best Value", color:'#22A566'},
      {name:"14 Days", color:'#24B3BA'},
      {name:'21 Days', color:'#24B3BA'}],
    desc:'Pre-planned packages with set itineraries.',
    img:"assets/frontend/img/Clock.svg",
    details: ["Structured Itinerary", "Discounted Rates", "Guided experiences"],
    tagsStyle:'start'

  },
  {
    title: "Flexible",
    tags: [{name:"Complete Flexible",color:'#1547A2'}],
    desc:"Customize your flight according to your preferences.",
    img:"assets/frontend/img/CalendarBlank.svg",
    details: ["Custom Dates", "flexible itinerary ", "Multiple Choices"],
    tagsStyle:'start'

  },
];
const daysCards=[
   {
    title: "14 Days Package",
    tags: [
      {name:"Popular Choice",color:'#22A566'},
      {name: "Balanced", color:'#24B3BA'}],
    desc:'Perfect for first-time pilgrims.',
    img:"assets/frontend/img/CalendarBlank.svg",
    tagsStyle:'center'

  },
  {
    title: "21 Days Package",
    tags: [{name:"Premium", color:'#901CCB'}, 
      {name:"Extended", color:'#24B3BA'}],
    desc:"Extended spiritual journey.",
    img:"assets/frontend/img/CalendarBlank.svg",
    tagsStyle:'center'
  },
];


// ---- Render cards dynamically based on type ----
function renderCards(type) {
  let data = [];
  let containers='';

  if (type === "package-type") {
    data = packageCards;
      const container = document.getElementById("packageContainer");
    if (!container) {
      console.warn("packageContainer not found yet");
      return;
    }else{
      containers=container
    }
  } else if (type === "flight-type") {
    data = packageDurationCards;
     const container = document.getElementById("packageDuration");
    if (!container) {
      console.warn("packageContainer not found yet");
      return;
    }else{
      containers=container
    }

  } else if(type==='Days'){
     data = daysCards;
     const container = document.getElementById("packageDays");
    if (!container) {
      console.warn("packageContainer not found yet");
      return;
    }else{
      containers=container
    }
  }
   else {
    console.warn("Unknown card type:", type);
    return;
  }


  containers.innerHTML = ""; // clear old content

  data.forEach(card => {
    const col = document.createElement("div");
    col.className = "col l6 m6 s12";
    console.log(data)

    col.innerHTML = `
      <div class="card package-card" data-package="${card.title}">
        <div class="flex">
          <div class="rounded-circle">
            <img src="${card.img}" alt="">
          </div>
        </div>
        <h3 style="margin-bottom:5px;">${card.title}</h3>
        <div class="desc">${card.desc?card.desc:''}</div>

        <div class="tags" style="justify-content:${card.tagsStyle}">
          ${card.tags.map(tag => `<span class="badge" style="color:${tag.color} !important;">${tag.name}</span>`).join("")}
        </div>
        <ul>
          ${card.details?card.details.map(d => `<li>${d}</li>`).join(""):""}
        </ul>
      </div>
    `;
    console.log(col)
    containers.appendChild(col);
  });
}


