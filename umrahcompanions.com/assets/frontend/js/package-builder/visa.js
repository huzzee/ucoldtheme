
function showStep(stepId) {
  $("#customize-page .box").hide();  // hide all step boxes inside customize page wrapper
  $("#" + stepId).show();            // show the selected one
}

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

    // Render package cards inside customize tab
    renderpackages();
    showStep("package-type");

  });

  // Update tab styling
  $(".tab").removeClass("active");
  $('div.tab[data-tab="assets/frontend/shared/tabs/customize-tab.html"]').addClass("active");
});

// ---- Handle Package Card Click ----
$(document).on("click", ".package-card", function () {
  // Save package selection
  bookingData.packageType = $(this).data("package");

  console.log("Package selected:", bookingData.packageType);
  console.log("Updated bookingData:", bookingData);
    showStep("package-type");

  // 👉 Here you can load the next step/tab (e.g. hotel selection)
  // const nextStepPath = "assets/frontend/shared/tabs/hotel-tab.html";
  // $("#tab-content").load(nextStepPath, function () {
  //   console.log("Hotel tab loaded with bookingData:", bookingData);
  // });
});

function showNext() {
  let currentStep = $("#customize-page .box:visible").attr("id");

  if (currentStep === "package-type") {
    showStep("flight-type");
  } else if (currentStep === "flight-type") {
    showStep("Days");
  } else if (currentStep === "Days") {
    alert("All steps completed! " + JSON.stringify(bookingData));
  }
}

// ---- Initialize on Pilgrim Info Page ----
$(document).ready(function () {
  renderVisaCards(); // Only visa cards first
});
