const makHotels=[
    {
        name:'Fairmont Makkah Hotel',
        img:'assets/frontend/img/hotel1.png',
        city:'Makkah',
        distance:1.4,
        nights:7,
        rating:4,
        price:7325,
        pk_price:"PKR 49,897 for 7 nights"
    },
        {
        name:'Swissotel Makkah',
        img:'assets/frontend/img/hotel2.png',
        city:'Makkah',
        distance:1.4,
        nights:7,
        rating:4,
        price:7325,
        pk_price:"PKR 49,897 for 7 nights"
    },
        {
        name:'Fairmont Makkah Hotel',
        img:'assets/frontend/img/hotel3.png',
        city:'Makkah',
        distance:1.4,
        nights:7,
        rating:4,
        price:7325,
        pk_price:"PKR 49,897 for 7 nights"
    },
];
const madHotels=[
    {
        name:'Pullman Zamzam Hotel',
        img:'assets/frontend/img/hotel1.png',
        city:'Madinah',
        distance:1.4,
        nights:7,
        rating:4,
        price:7325,
        pk_price:"PKR 49,897 for 7 nights"
    },
        {
        name:'Madinah Hilton',
        img:'assets/frontend/img/hotel2.png',
        city:'Madinah',
        distance:1.4,
        nights:7,
        rating:4,
        price:7325,
        pk_price:"PKR 49,897 for 7 nights"
    },
        {
        name:'Al Madinah Concord',
        img:'assets/frontend/img/hotel3.png',
        city:'Madinah',
        distance:1.4,
        nights:7,
        rating:4,
        price:7325,
        pk_price:"PKR 49,897 for 7 nights"
    },
];

let hotelName=''
function changeImage(el) {
  let mainImage = document.getElementById("mainImage");
  mainImage.src = el.src;
}
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
hotelName = urlParams.get("hotel");
 // Merge both hotel lists
  const allHotels = [...makHotels, ...madHotels];
  const selectedHotel = allHotels.find(h => h.name === hotelName);
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {
      accordion: true 
    });
  });
// Track selected rooms
let selectedRooms = [];

document.querySelectorAll(".box-border").forEach((box) => {
  const plusBtn = box.querySelector(".plus");
  const minusBtn = box.querySelector(".minus");
  const valueSpan = box.querySelector(".counter-value");
  const roomTypeEl = box.querySelector("h6"); 
  const roomType = roomTypeEl ? roomTypeEl.innerText.trim() : "Unknown";
  let quantity = 0;
  if (plusBtn && valueSpan) {
    plusBtn.addEventListener("click", () => {
      quantity++;
      valueSpan.textContent = quantity.toString().padStart(2, "0");
      updateSelection(roomType, quantity, box);
    });
  }
  if (minusBtn && valueSpan) {
    minusBtn.addEventListener("click", () => {
      if (quantity > 0) {
        quantity--;
        valueSpan.textContent = quantity.toString().padStart(2, "0");
        updateSelection(roomType, quantity, box);
      }
    });
  }
});
function updateSelection(roomType, quantity, box) {
  // Remove if quantity = 0
  selectedRooms = selectedRooms.filter(r => r.type !== roomType);
  if (quantity > 0) {
    selectedRooms.push({ type: roomType, qty: quantity });
    box.classList.add("active"); // highlight selected
  } else {
    box.classList.remove("active");
  }

}

function selectRoomsAndBack() {
  // Merge both hotel lists
  const allHotels = [...makHotels, ...madHotels];
  const selectedHotel = allHotels.find(h => h.name === hotelName);
  // Build query string from selectedRooms
  const query = selectedRooms
    .map(r => `${encodeURIComponent(r.type)}=${encodeURIComponent(r.qty)}`)
    .join("&");

  // Add hotel name and city into query
  let extraParams = "";
  if (selectedHotel) {
    extraParams = `&hotel=${encodeURIComponent(selectedHotel.name)}&city=${encodeURIComponent(selectedHotel.city)}`;
  }

  // Redirect back with rooms + hotel + city
  window.location.href =
    `/umrahcompanions.com/BuildUmrahPackage.html?tab=2&step=another-hotel&${query}${extraParams}`;
}

