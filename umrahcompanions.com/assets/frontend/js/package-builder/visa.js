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

let bookingData = {
  visaType: null,
  packageType: null,
  nationality: null,
  routeId:null,
  duration:null,
  NoOfDays:null,
  vehicles:[],
  flight_type:null,
  flight:null,
  hotels:null,
  adults: 0,
  child: 0,
  infants: 0
};

// ---- Render Visa Cards ----
function renderVisaCards() {
  const container = document.getElementById("visaCardsContainer");
  if (!container) {
    return;
  }
  container.innerHTML = "";
  visaCards.forEach(card => {
    const col = document.createElement("div");
    col.classList.add("col", "l4", "m6", "s12"); // safer than className
    col.innerHTML = `
      <div class="card visa-card" data-aos="fade-right" data-aos-duration="1000"  data-visa="${card.title}">
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
  // Load Customize page
  const nextTabPath = "assets/frontend/shared/tabs/customize-tab.html";
  $("#tab-content").load(nextTabPath, function () {
    document.getElementById("custom-footer").style.display="block";
    showStep("package-type");
    const urlParams = new URLSearchParams(window.location.search);
  });
  $(".tab").removeClass("active");
  $('div.tab[data-tab="assets/frontend/shared/tabs/customize-tab.html"]').addClass("active");
});
// ---- Handle Package Card Click ----
const steps = [
  "package-type",
  "flight-type",
  "Days",
  "flight-details",
  "transport-details",
  "hotel-details",
  "another-hotel"
];
let currentIndex = 0;
// Show a given step
function showStep(stepId) {
  document.querySelectorAll("#customize-page .custom-card").forEach(box => {
    box.style.display = "none";
  });

  const target = document.getElementById(stepId);
  if (target) {
    target.style.display = "flex";
    // render functions that should only run if exist
    if (typeof renderCards === "function") renderCards(stepId);
    if (typeof populateFilters === "function") populateFilters();
    if (typeof renderFlights === "function" && typeof flights !== "undefined")
      renderFlights(flights);
    if (typeof renderVehicles === "function") renderVehicles();
  }

  // reset skip button
  document.querySelector(".skip-flight-btn").style.display = "none";

  // special cases
  if (stepId === "flight-details") {
    if (bookingData.flight_type === "Flexible") {
      $("#flexible-flight").show();
        document.querySelectorAll('.flight').forEach(container => {
        const minus = container.querySelector('.minus');
        const plus = container.querySelector('.plus');
        const valueSpan = container.querySelector('.counter-value');
        const hiddenInput = container.querySelector('.counter-input');

        let count = parseInt(valueSpan.textContent, 10);

        function updateDisplay() {
            valueSpan.textContent = count.toString().padStart(2, '0'); // show 01, 02...
            hiddenInput.value = count; // sync hidden input
        }

        minus.addEventListener('click', () => {
            if (count > 0) {
                count--;
                updateDisplay();
            }
        });

        plus.addEventListener('click', () => {
            count++;
            updateDisplay();
        });

        updateDisplay(); // initialize on page load
    });
      $("#fixed-flight").hide();
    } else {
      $("#flexible-flight").hide();
      $("#fixed-flight").show();
    }
    initDatePickers();
    document.querySelector(".skip-flight-btn").style.display = "inline-block";
    document.querySelector(".skip-flight-btn").innerHTML = "Skip Flights";
  }

  if (stepId === "transport-details") {
    document.querySelector(".skip-flight-btn").style.display = "inline-block";
    document.querySelector(".skip-flight-btn").innerHTML = "Skip Transport";
  }

  if (stepId === "hotel-details") {
    initDatePickers();
  }

  if (stepId === "another-hotel") {
    document.getElementById("custom-footer").style.display = "none";
  } else {
    document.getElementById("custom-footer").style.display = "block";
  }
}

// Go forward
function showNext() {
  if (currentIndex < steps.length - 1) {
    currentIndex++;

    // skip logic inline
    if (bookingData.packageType === "Land Package" && steps[currentIndex] === "flight-type") {
      currentIndex++; // skip flight-type for Land Package
    }
    if(bookingData.packageType === "Land Package" && steps[currentIndex] === "flight-details") {
      currentIndex++; // skip flight-type for Land Package
    }

    if (
      bookingData.packageType === "Flight Package" &&
      bookingData.flight_type === "Flexible" &&
      steps[currentIndex] === "Days"
    ) {
      currentIndex++; // skip Days when flexible flights chosen
    }

    showStep(steps[currentIndex]);
  } else {
    alert("All steps completed!");
  }
}

// Go back
function showPrev() {
  if(currentIndex==0){
    $(".tab").removeClass('active')
       const tab2 = $('.tab[data-tab="assets/frontend/shared/tabs/pilgrim-information.html"]');
    tab2.addClass('active');

    var tabPath = "assets/frontend/shared/tabs/pilgrim-information.html";
    $('#tab-content').load(tabPath, function () {
        $("#custom-footer").hide();
        renderVisaCards()
      })

    } 
    if (currentIndex > 0) {
    currentIndex--;
    
   
    // reverse skip logic
    if (bookingData.packageType === "Land Package" && steps[currentIndex] === "flight-type") {
      currentIndex--;
    }
    if(bookingData.packageType === "Land Package" && steps[currentIndex] === "flight-details") {
      currentIndex--; // skip flight-type for Land Package      
    }
    if (
      bookingData.packageType === "Flight Package" &&
      bookingData.flight_type === "Flexible" &&
      steps[currentIndex] === "Days"
    ) {
      bookingData.flight_type=null;
      currentIndex--;
    }
    showStep(steps[currentIndex]);
  }
}

// Skip current step
function skip() {
  if (currentIndex < steps.length - 1) {
    currentIndex++;
    showStep(steps[currentIndex]);
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showStep(steps[currentIndex]);
});

// ---- Initialize on Pilgrim Info Page ----
$(document).ready(function () {
  renderVisaCards(); // Only visa cards first
});
function initDatePickers() {
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
    // Add new row
   
