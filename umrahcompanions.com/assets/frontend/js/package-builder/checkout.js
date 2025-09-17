function LoadData() {
  const data = JSON.parse(localStorage.getItem("bookingData")) || bookingData;
  // Guests
  document.getElementById("guests-section").innerHTML = `
    <span class="badge secondary-badge">Adults: ${data.adults}</span>
    <span class="badge secondary-badge">Kids: ${data.child}</span>
    <span class="badge secondary-badge">Infants: ${data.infants}</span>
  `;
  // Visa
  document.getElementById("visa-section").innerHTML = `
    <span class="badge secondary-badge">${data.visaType || "No Visa Selected"}</span>
  `;
  // Transport
  document.getElementById("transport-section").innerHTML =
    data.vehicles.map(v => `<span class="badge secondary-badge">${v.name}</span>`).join("");
  // Makkah Hotel
  if (data.hotel?.Makkah) {
    document.getElementById("makkah-hotel").innerHTML = `
      <span class="badge secondary-badge">${data.hotel.Makkah.name}</span>
      <span class="badge secondary-badge">Room: ${data.hotel.Makkah.room}</span>
      <span class="badge secondary-badge">Nights: ${data.hotel.Makkah.nights}</span>
      ${data.hotel.Makkah.meals ? `<span class="badge secondary-badge">Meals Included</span>` : ""}
    `;
  }
  // Madinah Hotel
  if (data.hotel?.Madinah) {
    document.getElementById("madinah-hotel").innerHTML = `
      <span class="badge secondary-badge">${data.hotel.Madinah.name}</span>
      <span class="badge secondary-badge">Room: ${data.hotel.Madinah.room}</span>
      <span class="badge secondary-badge">Nights: ${data.hotel.Madinah.nights}</span>
      ${data.hotel.Madinah.meals ? `<span class="badge secondary-badge">Meals Included</span>` : ""}
    `;
  }
  // Flight
  if (data.flight) {
    document.getElementById("flight-section").innerHTML = `
      <div class="row form-row form-row-package depart">
        <div><span class="badge depart-badge">Depart</span></div>
        <div class="row form-row col l12">
          <div class="col l3 s12">
            <p>${data.flight.departureCity}</p>
            <p>${data.flight.departTime}</p>
            <p>${data.flight.departDate}</p>
          </div>
          <div class="col l6 s12"><div class="flight-flex">
                <img src="assets/frontend/img/depart.svg" alt="">
                <div class="flex">
                  <img src="assets/frontend/img/flight-circle.svg" alt="">
                  <hr>
                  <img src="assets/frontend/img/flight-circle.svg" alt="">
                </div>                            
                <img src="assets/frontend/img/return-flight.svg" alt="">
              </div></div>
          <div class="col l3 s12 right-align">
            <p>${data.flight.returnCity}</p>
            <p>${data.flight.returnTime}</p>
            <p>${data.flight.returnDate}</p>
          </div>
        </div>
      </div>
      <div class="row form-row form-row-package return">
        <div><span class="badge return-badge">Return</span></div>
        <div class="row form-row col l12">
          <div class="col l3 s12">
            <p>${data.flight.returnCity}</p>
            <p>${data.flight.returnTime}</p>
            <p>${data.flight.returnDate}</p>
          </div>
          <div class="col l6 s12"><div class="flight-flex">
                <img src="assets/frontend/img/depart.svg" alt="">
                <div class="flex">
                  <img src="assets/frontend/img/flight-circle.svg" alt="">
                  <hr>
                  <img src="assets/frontend/img/flight-circle.svg" alt="">
                </div>                            
                <img src="assets/frontend/img/return-flight.svg" alt="">
              </div></div>
          <div class="col l3 s12 right-align">
           <p>${data.flight.departCity}</p>
            <p>${data.flight.departTime}</p>
            <p>${data.flight.departDate}</p>
          </div>
        </div>
      </div>
    `;
  }
}
