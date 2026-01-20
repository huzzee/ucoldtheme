$(document).ready(function () {
 var mobslider = document.getElementById('mob-slider');
var desktopslider = document.getElementById('desktop-slider');

[mobslider, desktopslider].forEach(function (slider) {
  if (slider && !slider.noUiSlider) {
    noUiSlider.create(slider, {
      start: [100, 4500],
      connect: true,
      step: 1,
      orientation: 'horizontal',
      range: {
        min: 0,
        max: 10000
      },
      format: wNumb({
        decimals: 0
      })
    });
    const container = slider.parentElement;
    const priceMin = container.querySelector('.price-min');
    const priceMax = container.querySelector('.price-max');

    slider.noUiSlider.on('update', function (values, handle) {
      const sarValue = `SAR ${values[handle]}`;
      if (handle === 0) {
        priceMin.innerHTML = sarValue;
      } else {
        priceMax.innerHTML = sarValue;
      }
    });

  }
});


  
});

const packages = [
  {
    id: "UPN2507-026",
    title: "August | 14 Nights | Land Package",
    image: "approot/storage/app/public/images/defaultItinerary/UPN2507-026d027.png?date=2025-07-31%2018:28:33",
    rectImage: "approot/storage/app/public/images/defaultItinerary/UPN2507-026-rectd027.png?date=2025-07-31%2018:28:33",
    link: "https://umrahcompanions.com/detail/UPN2507-026",
    routes: ["Jeddah Airport", "Makkah", "Madinah", "Jeddah Airport"],
    inclusions: ["Visa", "Transport", "Hotel"],
    pilgrims: 1,
    distance: { makkah: "1.4 KM", madinah: "800 m" },
    price: { currency: "PKR", amount: 107074, per: "pilgrim" },
    isLandPackage: true
  },
  {
    id: "UPN2508-015",
    title: "September | 10 Nights | Air Package",
    image: "approot/storage/app/public/images/defaultItinerary/UPN2507-026d027.png?date=2025-07-31%2018:28:33",
    rectImage: "approot/storage/app/public/images/defaultItinerary/UPN2507-026-rectd027.png?date=2025-07-31%2018:28:33",
    link: "https://umrahcompanions.com/detail/UPN2508-015",
    routes: ["Lahore", "Jeddah", "Makkah", "Madinah", "Lahore"],
    inclusions: ["Flight", "Visa", "Hotel", "Transfer"],
    pilgrims: 2,
    distance: { makkah: "1.2 KM", madinah: "500 m" },
    price: { currency: "PKR", amount: 189999, per: "pilgrim" },
    isLandPackage: false
  },
    {
    title: "August I 14 Nights I 04 Person(s) I Land Package",
    image: "approot/storage/app/public/images/defaultItinerary/UPN2507-026d027.png?date=2025-07-31%2018:28:33",
    rectImage: "approot/storage/app/public/images/defaultItinerary/UPN2507-026-rectd027.png?date=2025-07-31%2018:28:33",
    routes: ["Jeddah Airport", "Makkah", "Madinah", "Madinah Airport"],
    inclusions: ["Visa", "Transfer", "Hotel"],
    pilgrims: 4,
    distance: { makkah: "1.6 KM", madinah: "250 m" },
    price: { currency: "PKR", amount: 125894, per: "pilgrim" },
    link: "https://umrahcompanions.com/detail/UPN2507-010",
    isLandPackage: false

  },
    {
    id: "UPN2507-025",
    title: "09 - 29 August | 20 Nights | SV Flight Package - Islamabad",
    image: "approot/storage/app/public/images/defaultItinerary/UPN2507-026d027.png?date=2025-07-31%2018:28:33",
    rectImage: "approot/storage/app/public/images/defaultItinerary/UPN2507-026-rectd027.png?date=2025-07-31%2018:28:33",
    routes: ["Jeddah Airport", "Makkah", "Madinah", "Makkah", "Jeddah Airport"],
    inclusions: ["Flight", "Visa", "Transfer", "Hotel"],
    pilgrims: 1,
    distance: { makkah: "750 m", madinah: "1 KM" },
    price: { currency: "PKR", amount: 285348, per: "pilgrim" },
    link: "https://umrahcompanions.com/detail/UPN2507-010",
    isLandPackage: false
  }
];

function renderPackages() {
  const container = document.getElementById("package-container");
  container.innerHTML = "";

  packages.forEach(pkg => {
    const card = document.createElement("div");
    card.classList.add("package-card");

    // Generate route HTML dynamically
    const routesHTML = pkg.routes
      .map(
        (route, index) =>
          `<li class="flexRoute">${route}</li>${
            index < pkg.routes.length - 1
              ? `<img src="approot/storage/app/public/images/frontend/arrow-right.svg" alt="arrow" />`
              : ""
          }`
      )
      .join("");

    // Generate inclusions HTML dynamically
    const inclusionsHTML = pkg.inclusions
      .map(inc => {
        let iconHTML = "";
        switch (inc.toLowerCase()) {
          case "visa":
            iconHTML = `<img src="approot/storage/app/public/images/frontend/visaicon.png" alt="${pkg.title}" />`;
            break;
          case "hotel":
            iconHTML = `<i class="fas fa-hotel"></i>`;
            break;
          case "transport":
            iconHTML = `<i class="fas fa-car"></i>`;
            break;
          case "flight":
            iconHTML = `<i class="fas fa-plane"></i>`;
            break;
          default:
            iconHTML = `<i class="fas fa-check"></i>`;
        }
        return `<li>${iconHTML}<h6>${inc}</h6></li>`;
      })
      .join("");

    card.innerHTML = `
      <div class="mainPakgdiv">
        <div class="mob-pkgImg">
          <img src="${pkg.image}" alt="${pkg.title}" />
        </div>
        <div class="row">
          <div class="innerPakgWrap">
            <div class="pakgleftText">
              <div class="col s12">
                <div class="pakgDate">
                  <h3><a href="${pkg.link}" target="_blank">${pkg.title}</a></h3>
                </div>

                <h5 class="routeHeading">Routes:</h5>
                <ul class="packageRoute">${routesHTML}</ul>
                <hr />

                <div class="twoInclu">
                  <div class="disWrap disWrap1 b-fixed-pakg">
                    <h5>Inclusion</h5>
                    <ul>${inclusionsHTML}</ul>
                  </div>

                  <div class="disWrap disWrap2">
                    <h5 style="margin:0px 5px">Pilgrims</h5>
                    <ul style="margin: 5px 0px">
                      <li>
                        <i class="material-icons">person</i>
                        <span class="abst-text-num">${pkg.pilgrims}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="disWrap disWrap3">
                    <h5 style="margin:0px 5px">Distance</h5>
                    <ul>
                      <li>
                        <img src="approot/storage/app/public/images/frontend/macca.webp" alt="${pkg.title}" />
                        <h6 style="width: 75px">${pkg.distance.makkah}</h6>
                      </li>
                      <li>
                        <img src="approot/storage/app/public/images/frontend/madinah.webp" alt="${pkg.title}" />
                        <h6 style="width: 75px">${pkg.distance.madinah}</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="pakgRightText fixed-pakg valign-wrapper">
              <h3 class="pakg-price">
                <span>${pkg.price.currency}</span>
                ${pkg.price.amount.toLocaleString()}
                <em>per ${pkg.price.per}</em>
              </h3>

              <div class="travel-form">
                <span>Pilgrims</span>
                <select class="browser-default" tabindex="0" disabled readonly>
                  <option value="${pkg.pilgrims}" selected>${pkg.pilgrims}</option>
                </select>
                <strong>${pkg.price.currency} ${(pkg.price.amount*pkg.pilgrims).toLocaleString()}</strong>
              </div>

              <a href="#" 
                        class="btn waves-effect waves-light h-btn-done whiteBtn book-now-btn"
                        data-package='${JSON.stringify(pkg)}'>Book Now</a>
            </div>
          </div>
        </div>

        <div class="pakgImgflow valign-wrapper">
          <img src="${pkg.rectImage}" alt="${pkg.title}" />
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}
function renderGridView() {
  const container = document.getElementById("package-container");
  container.innerHTML = "";

  packages.forEach(pkg => {
    const col = document.createElement("div");
    col.className = "col s12 m6 l4";

    // optional chips (we’ll generate some info tags)
    const chips = [
      pkg.isLandPackage ? "Land Package" : "Air Package",
      `${pkg.routes.length} Stops`,
      `${pkg.pilgrims} Pilgrim${pkg.pilgrims > 1 ? "s" : ""}`
    ];

    // convert your distance object into array
    const distances = [
      { city: "Makkah", dist: pkg.distance.makkah },
      { city: "Madinah", dist: pkg.distance.madinah }
    ];

    col.innerHTML = `
      <div class="card z-depth-2">
        <div class="card-content">
          <span class="card-title">${pkg.title}</span>

          <!-- Chips -->
          <div style="margin:8px 0;">
            ${chips
              .map((chip, index) => `<div class="chip chip-${index}">${chip}</div>`)
              .join("")}
          </div>

          <!-- Inclusions -->
          <p class="grey-text text-darken-1" style="margin:15px 0px;">Inclusions</p>
          <div class="row center-align">
            ${pkg.inclusions
              .map(
                item => `
              <div class="col s3 inclusion">
                <img src="assets/frontend/img/${item.toLowerCase()}.svg" class="responsive-img" style="max-width:28px;">
                <p class="small">${item}</p>
              </div>`
              )
              .join("")}
          </div>

          <!-- Distance -->
          <p class="grey-text text-darken-1">Distance</p>
          <div class="row distance-row">
            ${distances
              .map(
                d => `
              <div class="col s6 distance">
                <img src="assets/frontend/img/${d.city.toLowerCase()}.svg" class="responsive-img" style="max-width:28px;">
                ${d.city} | ${d.dist}
              </div>`
              )
              .join("")}
          </div>

          <!-- Route Dropdown -->
          <div class="input-field route-input-field">
            <select>
              <option value="" disabled selected>Select Route</option>
              <option value="makkah-first">Makkah First</option>
              <option value="madinah-first">Madinah First</option>
            </select>
          </div>
        </div>

        <!-- Footer -->
        <div class="card-action" style="display:flex; justify-content:space-between; align-items:center; padding:5px 0px;">
          <h6 style="margin:0;">
            <sup class="grey-text text-darken-1" style="padding-bottom:5px;">${pkg.price.currency}</sup>
            <b>${pkg.price.amount.toLocaleString()}</b>
            <span class="grey-text text-darken-1">/ ${pkg.price.per}</span>
          </h6>

          <div style="width:45%;display:flex; align-items:center; gap:10px;">
            <a href="packagepdf/document-4.pdf" class="btn-flat waves-effect outline" style="margin-right:0px; padding:0px;">
              <img src="assets/frontend/img/pdf.svg">
            </a>
            <a href="#" 
              class="btn blue waves-effect waves-light book-now-btn"
              data-package='${JSON.stringify(pkg)}'>Book Now</a>

          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("book-now-btn")) {
    e.preventDefault();
    const pkgData = JSON.parse(e.target.getAttribute("data-package"));
    console.log(pkgData)
    openPackageDetails(pkgData);
  }
});
  // Reinitialize Materialize selects (if using MaterializeCSS)
  if (M && M.FormSelect) {
    M.FormSelect.init(document.querySelectorAll('select'));
  }
}




// Initial render
renderPackages();
function getCartItems() {
  const data = localStorage.getItem("cartItems");
  return data ? JSON.parse(data) : [];
}

function openPackageDetails(package) {

  console.log("Selected package:", package.name);
  let cart = getCartItems();  // get existing
  cart.push(package);            // add new
  localStorage.setItem("cartItems", JSON.stringify(cart)); 
  const packageParam = encodeURIComponent(package.name);
  window.location.href = `package-detail.html?package=${packageParam}&destination=checkout`; 
}
// View toggle
// View toggle
document.getElementById("listView").addEventListener("click", () => {
  document.getElementById("package-container").style.display = "block";
  document.getElementById("package-container").classList.add("list-view");
  document.getElementById("package-container").classList.remove("grid-view");

  document.getElementById("listView").classList.add("active");
  document.getElementById("gridView").classList.remove("active");
  renderPackages();

});

document.getElementById("gridView").addEventListener("click", () => {
  document.getElementById("package-container").style.display = "flex";
    document.getElementById("package-container").style.height = "500px";

  document.getElementById("package-container").style.flexWrap = "wrap";
  document.getElementById("package-container").style.flexDirection = "column";
  document.getElementById("package-container").style.overflowX = "scroll";
  document.getElementById("package-container").style.scrollbarWidth = "none";

  document.getElementById("package-container").classList.add("grid-view");
  document.getElementById("package-container").classList.remove("list-view");
  document.getElementById("gridView").classList.add("active");
  document.getElementById("listView").classList.remove("active");
renderGridView()

});

// document.getElementById("tableView").addEventListener("click", () => {
//   document.getElementById("hotelContainer").style.display = "none";
//   document.getElementById("hotelTableContainer").style.display = "block";
//   document.getElementById("tableView").classList.add("active");
//   document.getElementById("listView").classList.remove("active");
//   document.getElementById("gridView").classList.remove("active");
// });

// Open sidebar when clicking the filter button
document.querySelector('.open-sidebar-btn').addEventListener('click', function() {
  const sidebar = document.getElementById('filterSidebar');
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  } else {
    sidebar.classList.add('open');
  }
});

// Close sidebar when clicking the close button
document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('filterSidebar').classList.remove('open');
});
// Close sidebar when clicking outside of it (optional)
document.addEventListener('click', function(event) {
  var sidebar = document.getElementById('filterSidebar');
  if (!sidebar.contains(event.target) && !event.target.matches('.open-sidebar-btn')) {
    sidebar.classList.remove('open');
  }
});








