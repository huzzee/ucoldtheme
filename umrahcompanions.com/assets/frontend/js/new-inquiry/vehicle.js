const vehicles = [
  {
    name: "Sedan",
    image: "assets/frontend/img/camry.png",
    travelers: "4 Travelers",
    model: "Hyundai Sonata",
    luggage: "2 Luggage"
  },  
  {
    name: "GMC",
    image: "assets/frontend/img/GMC.png",
    travelers: "22 Travelers",
    model: "Toyota Coaster",
    luggage: "8 Luggage"
  },
   {
    name: "Staria",
    image: "assets/frontend/img/staria.png",
    travelers: "22 Travelers",
    model: "Toyota Coaster",
    luggage: "8 Luggage"
  },
  {
    name: "HiAce",
    image: "assets/frontend/img/hiace.png",
    travelers: "10 Travelers",
    model: "Toyota HiAce",
    luggage: "5 Luggage"
  },
  {
    name: "Coaster",
    image: "assets/frontend/img/coaster.png",
    travelers: "22 Travelers",
    model: "Toyota Coaster",
    luggage: "8 Luggage"
  },
   {
    name: "Bus",
    image: "assets/frontend/img/bus.png",
    travelers: "22 Travelers",
    model: "Toyota Coaster",
    luggage: "8 Luggage"
  },

 
];

const vehicleContainer = document.getElementById("vehicleContainer");

function renderVehicles() {
  vehicles.forEach(vehicle => {
    const wrapper = document.createElement("div");
    wrapper.className = "vehicle-card-wrapper";
    wrapper.setAttribute("data-vehicle", vehicle.name);
    wrapper.innerHTML = `
    
      <div class="vehicle-card " style="display: flex; flex-direction: column; gap:13px">
        <img src="${vehicle.image}" width="100%" alt="${vehicle.name}">
        <div class="row" style="width:100%; display:flex; justify-content: space-between; gap:20px; margin: 0px 10px;">
          <h5 class="sub-heading" style="width:fit-content;">${vehicle.name}</h5>
                  </div>
        <hr>
        <div class="features-div">
          <span class="features"><img src="assets/frontend/img/users.svg" alt="">${vehicle.travelers}</span>
          <span class="features"><img src="assets/frontend/img/suitcase.svg" alt="">${vehicle.luggage}</span>
        </div>
        <div class="hotel-item quantity-wrapper" >
          <label class="counter-label">Quantity</label>
          <div class="counter">
            <button type="button" class="decrement">–</button>
            <input style="display:none;" type="text" name="quantity_${vehicle.name}" value="1" class="counter-input" readonly />
            
            <span id="quantity_${vehicle.name}" style="padding:5px 2px"  class="counter-value">01</span>
            <button type="button" class="increment">+</button>
          </div>
        </div>
        <input type="radio" name="selected_vehicle" value="${vehicle.name}" style="display:none;" />
      </div>
    `;
    vehicleContainer.appendChild(wrapper);
  });

  bindEvents();
}

function bindEvents() {
  const wrappers = document.querySelectorAll(".vehicle-card-wrapper");

  wrappers.forEach(wrapper => {
    const button = wrapper.querySelector(".vehicle-button");
    const radio = wrapper.querySelector("input[type='radio']");
    const quantityWrapper = wrapper.querySelector(".quantity-wrapper");

      wrapper.classList.add("selected");
      quantityWrapper.style.display = "flex";
    // Quantity buttons

  const plusBtn = wrapper.querySelector('.increment');
    const minusBtn = wrapper.querySelector('.decrement');
    const counterSpan = wrapper.querySelector('.counter-value');
    const hiddenInput = wrapper.querySelector('.counter-input');
    const parseCounter = (value) => parseInt(value, 10) || 0;

    const updateDisplay = (value) => {
      counterSpan.textContent = value.toString().padStart(2, '0');
      hiddenInput.value = value;
    };

    plusBtn.addEventListener('click', () => {
      let value = parseCounter(counterSpan.textContent);
      value++;
      updateDisplay(value);
    });

    minusBtn.addEventListener('click', () => {
      let value = parseCounter(counterSpan.textContent);
      if (value > 0) {
        value--;
        updateDisplay(value);
      }
    });

})
}

renderVehicles();
