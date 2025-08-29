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
    // hotels=makHotels
    createCards(makHotels);

  }if(city=='Mad'){
    // hotels=madHotels
    createCards(madHotels);
  }



}
function createCards(hotels){
    console.log(hotels)
  const container= document.getElementById("hotelContainer");
  
    if (!container) {
        console.warn("vehicleContainer not found");
        return;
    }
    container.innerHTML = ""; // clear
    console.log(container)
    hotels.forEach(hotel=>{
        console.log(hotel)
        const card = `
                <div class="hotel-card" style="display: flex; flex-direction: column; gap:13px">
                    <!-- <input type="checkbox" class="checkbox-main vehicle-checkbox" id="vehicle"> -->
                    <div>
                        <img src="assets/frontend/img/hotel1.png" width="100%" alt="">
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
                        <div class="row form-row" style="display:flex; align-items: center; margin-top:20px;">
                            <div class="col l8">
                                <h5 class="sub-heading"><span>From </span> PKR ${hotel.price} <span>/Night</span></h5>
                                <span>${hotel.pk_price}</span>
                            </div>
                            <div class="col l4" style="">
                                <button class="hotel-button" type="button" data-hotel='${JSON.stringify(hotel)}'>Select</button>
                            </div>
                        </div>
                    </div>

                </div>
            `;
    container.insertAdjacentHTML("beforeend", card);

    document.querySelectorAll(".hotel-button").forEach(btn=>{
    btn.addEventListener("click", function(){
        const hotel = JSON.parse(this.dataset.hotel);
        openHotelDetails(hotel);
    });
});
})
}

function openHotelDetails(hotelName){
    console.log("Selected Hotel:", hotelName);
    window.location.href='/umrahcompanions.com/hoteldetails.html';
}
