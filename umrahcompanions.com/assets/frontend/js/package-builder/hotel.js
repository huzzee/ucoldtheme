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

function searchHotel(){
  const city = document.getElementById("hotel-city").value;
  const checkin = document.getElementById("hotel-checkin").value;
  const checkout = document.getElementById("hotel-checkout").value;
  console.log(city, checkin, checkout)
  document.getElementById("search-hotel").style.display="none";
  document.getElementById("filter-hotel").style.display="block";
  document.getElementById("show-hotels").style.display="flex";

//   let hotels=[];

  if(city=='Mak'){
    createCards(makHotels);

  }if(city=='Mad'){
    createCards(madHotels);
  }



}
function createCards(hotels) {
  const container = document.getElementById("hotelContainer");

  if (!container) {
    console.warn("hotelContainer not found");
    return;
  }
  container.innerHTML = ""; 

  hotels.forEach(hotel => {
    const card = `
      <div class="hotel-card" data-aos="fade-left" data-aos-duration="1000"  style="display: flex; flex-direction: column; gap:13px">
        <div>
          <img src="${hotel.img}" width="100%" alt="">
        </div>
        <div class="hotel-desc">
          <div class="row " style="display:flex; justify-content: space-between; margin: 0px 10px;">
            <h5 class="sub-heading" style="width: 100%;">${hotel.name}</h5>
          </div>
          <hr>
          <div class="features-div">
            <span class="features"><img src="assets/frontend/img/Kabah.svg" alt="">${hotel.city} | ${hotel.distance} km</span>
            <span class="features"><img src="assets/frontend/img/night.svg" alt=""> ${hotel.nights} Nights</span>
            <span class="features"><img src="assets/frontend/img/rating.svg" alt=""> ${hotel.rating} Star</span>
          </div>
          <div class=" form-row form-row-hotel" style="display:flex; align-items: center;justify-content:space-between; margin-top:20px;">
            <div class="col l8">
              <h5 class="sub-heading"><span>From</span> PKR ${hotel.price} <span>/Night</span></h5>
              <span>${hotel.pk_price}</span>
            </div>
            <div class="col l4">
              <button class="hotel-button" type="button" data-hotel='${JSON.stringify(hotel)}'>Select</button>
            </div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", card);
  });

  document.querySelectorAll(".hotel-button").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); 
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
      const hotel = JSON.parse(this.dataset.hotel);
      openHotelDetails(hotel);
    });
  });
}

function openHotelDetails(hotel) {
  console.log("Selected Hotel:", hotel.name);
  const hotelParam = encodeURIComponent(hotel.name);
  window.location.href = `hoteldetails.html?hotel=${hotelParam}`; 
}
