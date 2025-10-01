const visaCards = [
  {
    title: "Umrah Visa",
    img:"assets/frontend/img/visa2.svg",
    tags: [
    {name:"Pilgrimage",color:'#F6B3DC'}],
    details: ["For Makkah & Madinah", "90 Days validity", "Single entry"]
  },
  {
    title: "Tourist Visa",
    img:"assets/frontend/img/tourist-visa.svg",
     tags: [
      {name:"Tourism",color:'#9CDDE0'},
      {name: "Pilgrimage", color:'#F6B3DC'}],
    details: ["90 days per visit", "Valid 1 year", "Leisure travel and Pilgrimage"]
  },
  {
    title: "Visa not required",
    img:"assets/frontend/img/no-visa.svg",
    tags: [
    {name:"Existing",color:'#EACCA5'}],
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
  paymentMethod:null,
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
      <div class="card visa-card" data-visa="${card.title}">
        <div class="flex">
          <h3 style="margin:0px;">${card.title}</h3>
          <img src="${card.img}">
          
        </div>
        
        <div class="tags">
          ${card.tags.map(tag => `<span class="badge" ">${tag.name}</span>`).join("")}
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
  const $this = $(this);

  // Mark clicked card as active
  $(".visa-card").removeClass("active");
  $this.addClass("active");

  // Save visa selection
  bookingData.visaType = $this.data("visa");
  bookingData.nationality = $("#nationality").val();
  bookingData.adults  = parseInt($("#adults").text(), 10) || 0;
  bookingData.child   = parseInt($("#child").text(), 10) || 0;
  bookingData.infants = parseInt($("#infants").text(), 10) || 0;

  // Wait 500ms before switching tab (for UX feedback)
  setTimeout(function () {
    const nextTabPath = "assets/frontend/shared/tabs/customize-tab.html";
    $("#tab-content").load(nextTabPath, function () {
       $(".package-builder").addClass('custom-height');
      document.getElementById("custom-footer").style.display = "block";
      showStep("package-type");
      const urlParams = new URLSearchParams(window.location.search);
    });

    $(".tab").removeClass("active");
    $('div.tab[data-tab="assets/frontend/shared/tabs/customize-tab.html"]').addClass("active");
  }, 1000); // 500ms delay
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
    const isMobile = window.innerWidth <= 768;

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
    document.querySelector(".skip-flight-btn").innerHTML = isMobile ? "Skip" : "Skip Flights";
  }

  if (stepId === "transport-details") {
    const routecheckboxes = document.querySelectorAll('.route');
    const otherRoute = document.querySelector('.other-routes');
    otherRoute.style.display="none";
// const otherRouteHeading = document.querySelector('.other-routes-heading');
    const otherLink = document.getElementById('others-link');
    console.log()
routecheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    routecheckboxes.forEach((cb) => {
      const container = cb.closest('.input_Labels');
      const label = container.querySelector('label');
    
      
      cb.checked = false;
      container.style.backgroundColor = '#F1F5F9';
      container.style.border='1px solid #F1F5F9'
      otherRoute.style.display='none';
      label.style.color = '#292d32';
    });
    checkbox.checked = true;
    const toggleContainer = checkbox.closest('.input_Labels');
    const label = toggleContainer.querySelector('label');
    toggleContainer.style.backgroundColor = '#F7FFFF';
    toggleContainer.style.border='1px solid #24B3BA';    
    label.style.color = 'black';
    otherRoute.style.display='none';
  });
});
      otherLink.addEventListener('click', () => {
        // Reset other route selections
        routecheckboxes.forEach((cb) => {
          const container = cb.closest('.input_Labels');
          const label = container.querySelector('label');

          cb.checked = false;
          container.style.backgroundColor = '#F1F5F9';
          container.style.border = '1px solid #F1F5F9';
          label.style.color = '#292d32';
        });
        // Show the other route section
        otherRoute.style.display = 'flex';
      });

    document.querySelector(".skip-flight-btn").style.display = "inline-block";
    document.querySelector(".skip-flight-btn").innerHTML = isMobile ? "Skip" : "Skip Transport";
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
   console.log(bookingData.packageType, steps[currentIndex])

    // skip logic inline
    if (bookingData.packageType === "Land Package" && steps[currentIndex] === "flight-type") {
      currentIndex=currentIndex+2; // skip flight-type for Land Package
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
    
   console.log(bookingData.packageType, steps[currentIndex])
    // reverse skip logic
    if (bookingData.packageType === "Land Package" && steps[currentIndex] === "flight-details") {
      currentIndex=currentIndex-3;
    }
    // if(bookingData.packageType === "Land Package" && steps[currentIndex] === "flight-details") {
    //   currentIndex--; // skip flight-type for Land Package      
    // }
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
   
