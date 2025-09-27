
  // flight.js
  const packageCards = [
  {
    title: "Flight Package",
    tags: [{name:"Complete Umrah Package", color:'#24B3BA'},
      {name: "Budget Friendly", color:'#24B3BA"'}],
    img:"assets/frontend/img/flight-package.svg",
    details: ["flights", "hotel accommodations", "Transport", "Visa"],
    tagsStyle:'start'

  }, {
    title: "Land Package",
    tags: [{name:"Budget Friendly", color:"#24B3BA"}],
    img:"assets/frontend/img/land-package.svg",
    details: ["Hotel Accommodation", "Transportation", "Visa"],
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
    img:"assets/frontend/img/fixed.svg",
    details: ["Structured Itinerary", "Discounted Rates", "Guided experiences"],
    tagsStyle:'start'

  },
  {
    title: "Flexible",
    tags: [{name:"Complete Flexible",color:'#1547A2'}],
    desc:"Customize your flight according to your preferences.",
    img:"assets/frontend/img/flexible.svg",
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
    img:"assets/frontend/img/flexible.svg",
    tagsStyle:'start'

  },
  {
    title: "21 Days Package",
    tags: [{name:"Premium", color:'#901CCB'}, 
      {name:"Extended", color:'#24B3BA'}],
    desc:"Extended spiritual journey.",
    img:"assets/frontend/img/flexible.svg",
    tagsStyle:'start'
  },
];



// ---- Render cards dynamically based on type ----
function renderCards(type) {
  let data = [];
  let containers='';
 if (type === "package-type") {
  data = packageCards;
  const container = document.getElementById("packageContainer");
  if (!container) return;
  containers = container;
  $(".primary-btn").prop("disabled", true);
  $(document).off("click", "#packageContainer .package-card").on("click", "#packageContainer .package-card", function () {
    // Only reset cards inside this container
    $("#packageContainer .package-card").removeClass("active");
    $(this).addClass("active");

    bookingData.packageType = $(this).data("package");
      $(".primary-btn").prop("disabled", false);

  });

} else if (type === "flight-type") {
  data = packageDurationCards;
  const container = document.getElementById("packageDuration");
  if (!container) return;
  containers = container;
      $(".primary-btn").prop("disabled", true);

  $(document).off("click", "#flight-type .package-card").on("click", "#flight-type .package-card", function () {
    $("#packageDuration .package-card").removeClass("active");
    $(this).addClass("active");

    bookingData.flight_type = $(this).data("package");
      $(".primary-btn").prop("disabled", false);

  });

} else if (type === "Days") {
  if(bookingData.packageType=="Land Package"){
    
    data=[
   {
    title: "7 Days Package",
    tags: [
      {name:"Popular Choice",color:'#22A566'},
      {name: "Balanced", color:'#24B3BA'}],
    desc:'Perfect for first-time pilgrims.',
    img:"assets/frontend/img/flexible.svg",
    tagsStyle:'start'

  },{
    title: "14 Days Package",
    tags: [
      {name:"Popular Choice",color:'#22A566'},
      {name: "Balanced", color:'#24B3BA'}],
    desc:'Perfect for first-time pilgrims.',
    img:"assets/frontend/img/flexible.svg",
    tagsStyle:'start'

  },
  {
    title: "21 Days Package",
    tags: [{name:"Premium", color:'#901CCB'}, 
      {name:"Extended", color:'#24B3BA'}],
    desc:"Extended spiritual journey.",
    img:"assets/frontend/img/flexible.svg",
    tagsStyle:'start'
  },
];
  }else{
  data = daysCards;
  }
  const container = document.getElementById("packageDays");
  if (!container) return;
  containers = container;
    $(".primary-btn").prop("disabled", true);

  $(document).off("click", "#Days .package-card").on("click", "#Days .package-card", function () {
    $("#packageDays .package-card").removeClass("active");
    $(this).addClass("active");

    bookingData.duration = $(this).data("package");
      $(".primary-btn").prop("disabled", false);

  });
}
  containers.innerHTML = ""; // clear old content
  data.forEach(card => {
    const col = document.createElement("div");
    console.log(currentIndex)
    if(bookingData.packageType=="Land Package" && currentIndex===2){
      col.className = "col l4 m6 s12";
    }else{
      col.className = "col l6 m6 s12";
    }
    col.innerHTML = `
      <div class="card package-card" data-aos="fade-left" data-aos-duration="1000" data-package="${card.title}">
        <div class="flex">
          <h3 style="margin:0px;">${card.title}</h3>
            <img src="${card.img}" alt="">
        </div>
        <div class="desc">${card.desc?card.desc:''}</div>

        <div class="tags" style="justify-content:${card.tagsStyle}">
          ${card.tags.map(tag => `<span class="badge" style="color:${tag.color} !important; border:1px solid ${tag.color} !important;">${tag.name}</span>`).join("")}
        </div>
        <ul>
          ${card.details?card.details.map(d => `<li>${d}</li>`).join(""):""}
        </ul>
      </div>
    `;
    containers.appendChild(col);
  });
}


