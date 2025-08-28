

const visaCards = [
  {
    title: "Umrah Visa",
    tags: ["Pilgrimage"],
    details: ["For Makkah & Madinah", "90 Days validity", "Single entry"]
  },
  {
    title: "Tourist Visa",
    tags: ["Tourism", "Pilgrimage"],
    details: ["90 days per visit", "Valid 1 year", "Leisure travel and Pilgrimage"]
  },
  {
    title: "Visa not required",
    tags: ["Existing"],
    details: ["Already have one", "Not required"]
  }
];

// ---- Store booking data ----
// ---- Store booking data ----
let bookingData = {
  visaType: null,
  packageType: null,
  nationality: null,
  adults: 0,
  child: 0,
  infants: 0
};

// ---- Render Visa Cards ----
function renderVisaCards() {
  const container = document.getElementById("visaCardsContainer");
  if (!container) {
    console.warn("visaCardsContainer not found yet");
    return;
  }
  container.innerHTML = "";

  visaCards.forEach(card => {
    const col = document.createElement("div");
    col.classList.add("col", "l4", "m6", "s12"); // safer than className

    col.innerHTML = `
      <div class="card visa-card" data-visa="${card.title}">
        <div class="flex">
          <div class="rounded-circle">
            <img src="assets/frontend/img/CreditCard.svg" alt="">
          </div>
        </div>
        <h3>${card.title}</h3>
        <div class="tags">
          ${card.tags.map(tag => `<span class="badge">${tag}</span>`).join("")}
        </div>
        <ul>
          ${card.details.map(d => `<li>${d}</li>`).join("")}
        </ul>
      </div>
    `;
    container.appendChild(col);
  });
}

// ---- Handle Visa Card Click ----
$(document).on("click", ".visa-card", function () {
  // Save visa selection
  bookingData.visaType = $(this).data("visa");

  // Save traveler info
  bookingData.nationality = $("#nationality").val();
  bookingData.adults  = parseInt($("#adults").text(), 10) || 0;
  bookingData.child   = parseInt($("#child").text(), 10) || 0;
  bookingData.infants = parseInt($("#infants").text(), 10) || 0;

  console.log("Saved bookingData:", bookingData);

  // Load Customize page
  const nextTabPath = "assets/frontend/shared/tabs/customize-tab.html";
  $("#tab-content").load(nextTabPath, function () {
    console.log("Customize tab loaded, data available:", bookingData);
    showStep("package-type");

    // Render package cards inside customize tab
    // renderpackages();


  });

  // Update tab styling
  $(".tab").removeClass("active");
  $('div.tab[data-tab="assets/frontend/shared/tabs/customize-tab.html"]').addClass("active");
});

// ---- Handle Package Card Click ----
$(document).on("click", ".package-card", function () {
  // Save package selection
  $(".package-card").removeClass("active");

  // Add active class to clicked one
  $(this).addClass("active");

  bookingData.packageType = $(this).data("package");

  console.log("Package selected:", bookingData.packageType);
});

const steps = ["package-type", "flight-type", "Days", "flight-details", "transport-details", "hotel-details"];
let currentIndex = 0; // start with first step

function showStep(stepId) {
  document.querySelectorAll("#customize-page .custom-card").forEach(box => {
    box.style.display = "none";
  });

  const target = document.getElementById(stepId);
  if (target) {
    target.style.display = "flex";
    renderCards(stepId);
    populateFilters();
    renderFlights(flights);
    renderVehicles();

    console.log("Showing step:", stepId);
  }
  // if(target=="flight-details"){
  //     document.getElementById('next').innerHTML="Continue without Flights";

  // }
   document.querySelector(".skip-flight-btn").style.display = "none";

    // If flight-details step, show it
    if (stepId === "flight-details") {
        document.querySelector(".skip-flight-btn").style.display = "inline-block";
    }
    if(stepId === "transport-details"){
      document.querySelector(".skip-flight-btn").style.display = "inline-block";
      document.querySelector(".skip-flight-btn").innerHTML="Skip Transport"

    }
    if(stepId==="hotel-details"){
       const newDatePickers = document.querySelectorAll('.package-datepicker');
        M.Datepicker.init(newDatePickers, {
          autoClose: true,
          format: 'yyyy-mm-dd',
          minDate: new Date(),
          onSelect: function () {
            $(this.el).trigger('change');
          }
  });

    }
}

// ---- Next ----
function showNext() {
  if (currentIndex < steps.length - 1) {
    currentIndex++;
    showStep(steps[currentIndex]);
  } else {
    alert("All steps completed!");
  }
}

// ---- Back ----
function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    showStep(steps[currentIndex]);
  }
}

// ---- Initialize first step ----
document.addEventListener("DOMContentLoaded", () => {
  showStep(steps[currentIndex]);
});
// ---- Initialize on Pilgrim Info Page ----
$(document).ready(function () {
  renderVisaCards(); // Only visa cards first
});
