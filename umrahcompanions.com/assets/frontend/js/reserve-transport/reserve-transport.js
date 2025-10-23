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

const vehicles = [
  {
    name:'GMC',
    type:'transport',
    route:"Jeddah - Makkah - Madinah - Jeddah",
    img:'assets/frontend/img/GMC.png',
    storage:'4 Baggage',
    pilgrims:4,
    vehicle_type:'Sedan',
    condition:'AC',
    quantity:'',
    price:'7,324'
  },
  {
    name:'GMC',
    type:'transport',
    route:"Jeddah - Makkah - Madinah - Jeddah",
    img:'assets/frontend/img/GMC.png',
    storage:'4 Baggage',
    pilgrims:4,
    vehicle_type:'Sedan',
    condition:'AC',
    quantity:'',
    price:'7,324'
  },
  {
    name:'GMC',
    type:'transport',
    route:"Jeddah - Makkah - Madinah - Jeddah",
    img:'assets/frontend/img/GMC.png',
    storage:'4 Baggage',
    pilgrims:4,
    vehicle_type:'Sedan',
    condition:'AC',
    quantity:'',
    price:'7,324'
  },
];

function renderVehicles() {
  const container = document.getElementById("hotelContainer");
  container.innerHTML = "";

  vehicles.forEach(vehicle => {
    const card = document.createElement("div");
    card.classList.add("hotel-card");

    card.innerHTML = `
      <div class="hotel-inner"> 
        <img class="hotel-img" style="z-index:0;" src="${vehicle.img}" alt="${vehicle.name}">
        <div class="transports">
        <div class="hotel-info" style="flex-direction:row; justify-content:space-between; align-items:center; width:100%;">
          <div class="transport-info">
            <h5 class="sub-heading" style="width: 100%; display:flex; gap:19px; margin:0px; ">${vehicle.name}</h5>
            <div class="features-div">
              <span style=" padding:2px 4px;"  class="features"><img src="assets/frontend/img/baggages.svg"  alt="">${document.getElementById("hotelContainer").classList.contains('list-view') ? vehicle.storage:"4"}</span>
              <span style=" padding:2px 4px;"  class="features"><img src="assets/frontend/img/vehicle.svg"  alt=""> ${vehicle.vehicle_type}</span>
              <span style=" padding:2px 4px;" class="features "><img src="assets/frontend/img/ac.svg" class=""  alt=""> ${vehicle.condition} </span>
            </div>
          </div>
          <div class="grid-view-price">
            <p><strong>PKR ${vehicle.price}</strong></p>
          </div>
        </div>
        <div class="quantity">
          <div>
            <div class="counter-label" style="text-align:start; margin-bottom:5px;">Quantity</div>
            <div class="counter-controls">
              <button type="button" class="counter-btn minus">−</button>
              <input style="display:none;" class="counter-input" type="number" name="input-field3" id="counter3">
              <span id="quantity"  class="counter-value">00</span>
              <button type="button" class="counter-btn plus">+</button>
            </div>
          </div>
          <button class="book-btn" type="button" data-vehicle='${JSON.stringify(vehicle)}'>Book Now</button>
        </div>
        </div>
      </div>
      
      <div class="price">
        <div>
        <p><strong>PKR ${vehicle.price}</strong></p>
        </div>
       
        <button class="book-btn" type="button" data-vehicle='${JSON.stringify(vehicle)}'>Book Now</button>
      </div>
    `;

    container.appendChild(card);
  });
  // Quantity counter buttons
    document.querySelectorAll(".counter-controls").forEach(counter => {
      const minusBtn = counter.querySelector(".minus");
      const plusBtn = counter.querySelector(".plus");
      const valueSpan = counter.querySelector(".counter-value");

      minusBtn.addEventListener("click", () => {
        let current = parseInt(valueSpan.textContent);
        if (current > 1) {
          valueSpan.textContent = current - 1;
        }
      });

      plusBtn.addEventListener("click", () => {
        let current = parseInt(valueSpan.textContent);
        valueSpan.textContent = current + 1;
      });
    });

    document.querySelectorAll(".book-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); 
         // Get the parent `.quantity` div to find the correct quantity span
        const quantityContainer = this.closest(".quantity");
        const quantityValue = quantityContainer.querySelector(".counter-value");
        const quantity = parseInt(quantityValue.textContent);

       const vehicle = JSON.parse(this.dataset.vehicle);
        vehicle.quantity = quantity; // ✅ attach quantity

      localStorage.setItem("selectedvehicle", JSON.stringify(this.dataset.vehicle));

      openVehicleDetails(vehicle);
    });
  });
}

// Initial render
renderVehicles();
function getCartItems() {
  const data = localStorage.getItem("cartItems");
  return data ? JSON.parse(data) : [];
}

function openVehicleDetails(vehicle) {

  console.log("Selected Vehicle:", vehicle.name);
  let cart = getCartItems();  // get existing
  cart.push(vehicle);            // add new
  localStorage.setItem("cartItems", JSON.stringify(cart)); 
  const vehicleParam = encodeURIComponent(vehicle.name);
  window.location.href = `checkout.html?vehicle=${vehicleParam}&destination=checkout`; 
}


// View toggle
// View toggle
document.getElementById("listView").addEventListener("click", () => {
  document.getElementById("hotelContainer").style.display = "block";
  document.getElementById("hotelTableContainer").style.display = "none";

  document.getElementById("hotelContainer").classList.add("list-view");
  document.getElementById("hotelContainer").classList.remove("grid-view");

  document.getElementById("listView").classList.add("active");
  document.getElementById("gridView").classList.remove("active");
  document.getElementById("tableView").classList.remove("active");
    renderVehicles();

});

document.getElementById("gridView").addEventListener("click", () => {
  document.getElementById("hotelContainer").style.display = "flex";
  document.getElementById("hotelTableContainer").style.display = "none";

  document.getElementById("hotelContainer").classList.add("grid-view");
  document.getElementById("hotelContainer").classList.remove("list-view");

  document.getElementById("gridView").classList.add("active");
  document.getElementById("listView").classList.remove("active");
  document.getElementById("tableView").classList.remove("active");
    renderVehicles();

});

document.getElementById("tableView").addEventListener("click", () => {
  document.getElementById("hotelContainer").style.display = "none";
  document.getElementById("hotelTableContainer").style.display = "block";

  document.getElementById("tableView").classList.add("active");
  document.getElementById("listView").classList.remove("active");
  document.getElementById("gridView").classList.remove("active");
});

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








