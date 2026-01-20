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

const hotels = [
  {
    name:'Pullman Zamzam Hotel',
    img:'assets/frontend/img/hotel1.png',
    checkin:'Jul 25, 2024',
    room_type:'double',
    checkout:'Jul 25, 2024',
    checkin:'Jul 25, 2024',
    type:'hotel',
    address:'1st Ring Road, Between, King Faisal Street, Madinah Saudi Arabia',
    city:'Madinah',
    distance:1.4,
    nights:7,
    rating:4,
    price:7325,
    pk_price:"PKR 49,897 for 7 nights"
  },
  {
    name:'Madinah Hilton',
    type:'hotel',
    address:'1st Ring Road, Between, King Faisal Street, Madinah Saudi Arabia',
    room_type:'double',
    checkin:'Jul 25, 2024',
    checkout:'Jul 25, 2024',
    img:'assets/frontend/img/hotel2.png',
    city:'Madinah',
    distance:1.4,
    nights:7,
    rating:5,
    price:8400,
    pk_price:"PKR 58,800 for 7 nights"
  },
  {
    name:'Al Madinah Concord',
    type:'hotel',
    address:'1st Ring Road, Between, King Faisal Street, Madinah Saudi Arabia',
    room_type:'double',
    checkin:'Jul 25, 2024',
    checkout:'Jul 25, 2024',
    img:'assets/frontend/img/hotel3.png',
    city:'Madinah',
    distance:1.4,
    nights:7,
    rating:3,
    price:6500,
    pk_price:"PKR 45,500 for 7 nights"
  },
];

function renderHotels() {
  const container = document.getElementById("hotelContainer");
  container.innerHTML = "";

  hotels.forEach(hotel => {
    const card = document.createElement("div");
    card.classList.add("hotel-card");

    card.innerHTML = `
      <div class="hotel-inner"> 
        <img class="hotel-img" src="${hotel.img}" alt="${hotel.name}">
        <div class="hotel-info">
          <h5 class="sub-heading" style="width: 100%; display:flex; gap:19px; margin:0px; ">${hotel.name} <span class="list-rating">${`<img src="assets/frontend/img/rating.svg"  alt="">`.repeat(hotel.rating)}</span></h5>
          <p>Luxury hotel with stunning views of the Holy Mosque</p>
          <hr>
          <div class="inclusion"><span>Inclusions</span></div>
          <div class="features-div">
            <span class="features"><img src="assets/frontend/img/Kabah.svg"  alt="">${hotel.city} | ${hotel.distance} km &nbsp;| 10 Minutes Walk</span>
            <span class="features"><img src="assets/frontend/img/night.svg"  alt=""> ${hotel.nights} Nights</span>
            <span class="features grid-rating"><img src="assets/frontend/img/rating.svg" class=""  alt=""> ${hotel.rating} Star</span>
          </div>
        </div>

      </div>
      <div class="price">
        <div>
          <p>From<strong>${hotel.price}</strong>/Night</p>
         <span>${hotel.pk_price}</span>
        </div>
       
        <button class="book-btn" type="button" data-hotel='${JSON.stringify(hotel)}'>Book Now</button>
      </div>
    `;

    container.appendChild(card);
  });
    document.querySelectorAll(".book-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); 
      localStorage.setItem("selectedHotel", JSON.stringify(this.dataset.hotel));
      const hotel = JSON.parse(this.dataset.hotel);
      openHotelDetails(hotel);
    });
  });
}

// Initial render
renderHotels();
function getCartItems() {
  const data = localStorage.getItem("cartItems");
  return data ? JSON.parse(data) : [];
}

function openHotelDetails(hotel) {
  console.log("Selected Hotel:", hotel.name);
   let cart = getCartItems();  // get existing
  cart.push(hotel);            // add new
  localStorage.setItem("cartItems", JSON.stringify(cart)); 
  const hotelParam = encodeURIComponent(hotel.name);
  window.location.href = `hoteldetails.html?hotel=${hotelParam}&destination=checkout`; 
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
});

document.getElementById("gridView").addEventListener("click", () => {
  document.getElementById("hotelContainer").style.display = "flex";
  document.getElementById("hotelTableContainer").style.display = "none";

  document.getElementById("hotelContainer").classList.add("grid-view");
  document.getElementById("hotelContainer").classList.remove("list-view");

  document.getElementById("gridView").classList.add("active");
  document.getElementById("listView").classList.remove("active");
  document.getElementById("tableView").classList.remove("active");
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







