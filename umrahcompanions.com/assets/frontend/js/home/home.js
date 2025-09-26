 const partnerLogos = [
    { src: "assets/frontend/img/PIA.svg", alt: "umrah packages" },
    { src: "assets/frontend/img/zeeVersion.svg", alt: "umrah packages" },
    { src: "assets/frontend/img/partnerLogo.svg", alt: "umrah packages" },
    { src: "assets/frontend/img/clickLogo.svg", alt: "umrah packages" },
    { src: "assets/frontend/img/amaarLogo.svg", alt: "umrah packages" },
    { src: "assets/frontend/img/aryLogo.svg", alt: "umrah packages" },
    { src: "assets/frontend/img/wosolLogo.svg", alt: "umrah packages" },
    { src: "assets/frontend/img/STALogo.svg", alt: "umrah packages" },
    // { src: "approot/storage/app/public/images/frontend/maqam_logo.svg", alt: "umrah packages" },
    // { src: "approot/storage/app/public/images/frontend/nusuk_logo.svg", alt: "umrah" },
    // { src: "approot/storage/app/public/images/frontend/saudi_logo.svg", alt: "umrah" },
    // { src: "approot/storage/app/public/images/frontend/ary_logo.svg", alt: "umrah package" },
    // { src: "approot/storage/app/public/images/frontend/zindigi_logo.svg", alt: "family umrah packages 2022", extraClass: "zindagi" }
  ];

  // Insert dynamically into carousel
  const partnersContainer = document.getElementById("partners");

  partnerLogos.forEach(logo => {
    const div = document.createElement("div");
    div.classList.add("item");

    const img = document.createElement("img");
    img.classList.add("partnerslogos");
    if (logo.extraClass) img.classList.add(logo.extraClass);
    img.src = logo.src;
    img.alt = logo.alt;

    div.appendChild(img);
    partnersContainer.appendChild(div);
  });

  // Reinitialize owl-carousel after adding items
  $(document).ready(function () {
    $("#partners").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoPlay: false,          
      autoPlayTimeout: 1000,   
      autoPlayHoverPause: true, // optional, pause on hover
      responsive: {
        0: { items: 2 },
        600: { items: 8 },
        1000: { items: 8 }
      }
    });

  });

   // Array of packages
  const packages = [
    {
      title: "Ramadan Umrah Package",
      chips: ["Economy $$", "Fixed Departure", "4 Nights"],
      inclusions: ["Visa", "Transfer", "Hotel", "Flight"],
      distances: [
        { city: "Makkah", dist: "1.4 km" },
        { city: "Madinah", dist: "800 m" }
      ],
      price: "7,325"
    },
    {
      title: "Deluxe Umrah Package",
      chips: ["Deluxe $$$", "Flexible", "7 Nights"],
      inclusions: ["Visa", "Transfer", "Hotel", "Flight"],
      distances: [
        { city: "Makkah", dist: "500 m" },
        { city: "Madinah", dist: "300 m" }
      ],
      price: "12,500"
    },
    {
      title: "VIP Umrah Package",
      chips: ["VIP $$$$", "Luxury", "10 Nights"],
      inclusions: ["Visa", "Transfer", "Hotel", "Flight"],
      distances: [
        { city: "Makkah", dist: "100 m" },
        { city: "Madinah", dist: "200 m" }
      ],
      price: "22,000"
    }
  ];

  // Container
  const container = document.getElementById("packagesRow");

  // Loop through packages
  packages.forEach(pkg => {
    const col = document.createElement("div");
    col.className = "col s12 m6 l4";

    col.innerHTML = `
      <div class="card z-depth-2">
        <div class="card-content">
          <span class="card-title">${pkg.title}</span>

          <!-- Chips -->
          ${pkg.chips.map((chip, index) => `<div class="chip${index}">${chip}</div>`).join("")}

          <!-- Inclusions -->
          <p class="grey-text text-darken-1" style="margin:15px 0px;">Inclusions</p>
          <div class="row center-align">
            ${pkg.inclusions.map(item => `
              <div class="col s3 inclusion">
                <img src="assets/frontend/img/${item.toLowerCase()}.svg" class="responsive-img" style="max-width:28px;">
                <p class="small">${item}</p>
              </div>
            `).join("")}
          </div>

          <!-- Distance -->
          <p class="grey-text text-darken-1">Distance</p>
          <div class="row distance-row">
            ${pkg.distances.map(d => `
              <div class="col s6 distance">
              <img src="assets/frontend/img/${d.city.toLowerCase()}.svg" class="responsive-img" style="max-width:28px;"> ${d.city} | ${d.dist}</div>
            `).join("")}
          </div>

          <!-- Route Dropdown -->
          <div class="input-field route-input-field">
            <select>
              <option value="" disabled selected>Route</option>
              <option value="makkah-first">Makkah First</option>
              <option value="madinah-first">Madinah First</option>
            </select>
          </div>
        </div>
        <!-- Footer -->
        <div class="card-action" style="display:flex; justify-content:space-between; align-items:center; padding:5px 0px;">
          <h6 style="margin:0;"><sup class="grey-text text-darken-1" style="padding-bottom:5px;" >SAR </sup><b>${pkg.price}</b> <span class="grey-text text-darken-1">/Person</span></h6>
          <div style="width:45%;display:flex; align-items:center; gap:10px;">
            <a href="packagepdf/document-4.pdf" class="btn-flat waves-effect outline" style="margin-right:0px; padding:0px;">
            <img src="assets/frontend/img/pdf.svg"></a>
            <a href="https://umrahcompanions.com/detail/UPN2507-011" class="btn blue waves-effect waves-light">Book Now</a>
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });

  // Init Materialize selects
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  });
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.counter-box').forEach(counter => {
    const input = counter.querySelector('.pilgrims');
    const incrementBtn = counter.querySelector('.increment');
    const decrementBtn = counter.querySelector('.decrement');

    incrementBtn.addEventListener('click', () => {
      let value = parseInt(input.value);
      if (value < parseInt(input.max)) {
        input.value = value + 1;
      }
    });

    decrementBtn.addEventListener('click', () => {
      let value = parseInt(input.value);
      if (value > parseInt(input.min)) {
        input.value = value - 1;
      }
    });
  });
});

