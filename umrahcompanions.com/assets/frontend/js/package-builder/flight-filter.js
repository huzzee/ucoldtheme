// Example flights data (can come from API later)
const flights = [
  {
    index:1,
    airline: "PIA",
    price: 120000,
    departureCity: "Islamabad",
    arrivalCity: "Jeddah",
    departTime: "05:50 PM",
    departDate: "1 Aug, 2025",
    returnCity: "Lahore",
    returnTime: "10:00 PM",
    returnDate: "8 Aug, 2025",
    month: "August",
    duration: "7"
  },
  {
    index:2,
    airline: "Saudi Airlines",
    price: 140000,
    departureCity: "Lahore",
    arrivalCity: "Makkah",
    departTime: "08:50 PM",
    departDate: "5 Sep, 2025",
    returnCity: "Lahore",
    returnTime: "11:00 PM",
    returnDate: "12 Sep, 2025",
    month: "September",
    duration: "14"
  }
];

// Render flights
function renderFlights(data) {
  const container = document.getElementById("flightContainer");
 
  if (!container) {
    console.warn("flightContainer not found");
    return;
  }
 container.innerHTML = "";
  document.querySelector(".primary-btn").disabled = false;
  $(document).off("click", "#flight-details .flight-card").on("click", "#flight-details .flight-card", function () {
    $("#flight-details .flight-card").removeClass("active");
    $(this).addClass("active");

     const index = $(this).data("index");    // get index
    bookingData.flight = data[index];   
    console.log("Package selected:", bookingData.flight, bookingData);
      $(".primary-btn").prop("disabled", false);

  });
  if (data.length === 0) {
    container.innerHTML = `
      <div class="no-flights">
         <div class="row form-row flex-row">
          <div class="col l12 d-flex" style="justify-content:center">
            <div class="rounded-circle">
              <img src="assets/frontend/img/grey-flight.svg" alt="">
            </div>
            <h3 style="margin:0px;">No flights found</h3>
          </div>
        </div>
        <div class="no-flight-text">
        <p class="text-center">Try adjusting filters to see more options</p>
        <button class="secondary-btn" id="continueWithoutFlight">Clear All Filters</button>

        </div>
      </div>
    `;
    return;
  }

  data.forEach(flight => {
    console.log(flight)
    container.innerHTML += `
      <div class="flight-card" data-index="${flight.index}">
        <div class="row form-row form-row-package flex-row" style="width:100%;">
          <div class="col l7 s12 d-flex">
            <div class="rounded-circle">
              <img src="assets/frontend/img/light-flight.svg" alt="">
            </div>
            <h3 style="margin:0px;">${flight.airline}</h3>
          </div>
          <div class="col l4 s12" style="display: flex; justify-content: end;">
            <div style="text-align: end;">
              <h5 class="sub-heading" style="margin:0px">PKR ${flight.price.toLocaleString()}</h5>
              <span>Per person</span>
            </div>
          </div>
        </div>

        <!-- Depart -->
        <div class="row form-row depart">
          <div><span class="badge depart-badge">Depart</span></div>
          <div class="row form-row form-row-package col l12">
            <div class="col l3 s12">
              <p>${flight.departureCity}</p>
              <p>${flight.departTime}</p>
              <p>${flight.departDate}</p>
            </div>
            <div class="col l6 s12">
              <div class="flight-flex">
                <img src="assets/frontend/img/depart.svg" alt="">
                <div class="flex">
                  <img src="assets/frontend/img/flight-circle.svg" alt="">
                  <hr>
                  <img src="assets/frontend/img/flight-circle.svg" alt="">
                </div>                            
                <img src="assets/frontend/img/return-flight.svg" alt="">
              </div>
            </div>
            <div class="col l3 s12 right-align">
              <p>${flight.arrivalCity}</p>
              <p>${flight.departTime}</p>
              <p>${flight.departDate}</p>
            </div>
          </div>
        </div>

        <!-- Return -->
        <div class="row form-row return" style="width:100%;">
          <div><span class="badge return-badge">Return</span></div>
          <div class="row form-row form-row-package col l12">
            <div class="col l3 s12">
              <p>${flight.returnCity}</p>
              <p>${flight.returnTime}</p>
              <p>${flight.returnDate}</p>
            </div>
            <div class="col l6 s12">
              <div class="flight-flex">
                <img src="assets/frontend/img/depart.svg" alt="">
                <div class="flex">
                  <img src="assets/frontend/img/flight-circle.svg" alt="">
                  <hr>
                  <img src="assets/frontend/img/flight-circle.svg" alt="">
                </div>                            
                <img src="assets/frontend/img/return-flight.svg" alt="">
              </div>
            </div>
            <div class="col l3 s12 right-align">
              <p>${flight.departureCity}</p>
              <p>${flight.returnTime}</p>
              <p>${flight.returnDate}</p>
            </div>
          </div>
        </div>
      </div>`;
  });
 

}

// Apply filters
function applyFilters() {
  console.log("filter Working")
  const month = document.getElementById("months").value;
  const airline = document.getElementById("airlines").value.trim().toLowerCase();
  const depCity = document.getElementById("departure-city").value.trim().toLowerCase();
  const arrCity = document.getElementById("arrival-city").value.trim().toLowerCase();
  const duration = document.getElementById("duration").value.trim().toLowerCase();
    const noFilters =
    !month && !airline && !depCity && !arrCity && !duration;

  let filtered;
  if (noFilters) {
    filtered = flights;
  } else {
    console.log(month)
    filtered = flights.filter(f =>
    (!month || f.month === month) &&
    (!airline || f.airline.toLowerCase().includes(airline)) &&
    (!depCity || f.departureCity.toLowerCase().includes(depCity)) &&
    (!arrCity || f.arrivalCity.toLowerCase().includes(arrCity)) &&
    (!duration || f.duration.toLowerCase().includes(duration))
  );
}

  renderFlights(filtered);
}
// Wait until DOM ready
document.addEventListener("DOMContentLoaded", () => {

  // Initial render
  renderFlights(flights);
  console.log("flight working")

  // Add listeners
  const clearFiltersBtn = document.getElementById("clearFilters");
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      document.querySelectorAll("#months, #departure-city, #arrival-city, #duration, #airlines")
        .forEach(el => el.value = "");
      renderFlights(flights);
    });
  }

  document.querySelectorAll("#months, #departure-city, #arrival-city, #duration, #airlines")
    .forEach(el => el.addEventListener("change", applyFilters));
});


