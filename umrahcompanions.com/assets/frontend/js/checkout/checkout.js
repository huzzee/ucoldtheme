document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
   const data = localStorage.getItem("cartItems");
   console.log(data)
  // return data ? JSON.parse(data) : [];

let hotelName = urlParams.get("hotel");

    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {
      accordion: true 
    });
    console.log(JSON.parse(localStorage.getItem("bookingData")));

  

  document.querySelectorAll("#phone, #guestPhone").forEach(input => {
  window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: function(callback) {
      fetch('https://ipinfo.io/json?token=your_token') 
        .then(res => res.json())
        .then(data => callback(data.country))
        .catch(() => callback('us'));
    },
    nationalMode: false,
    formatOnDisplay: true,
    autoPlaceholder: "polite",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });
});
  const cards = document.querySelectorAll(".payment-card");

  const sections = {
    credit: document.getElementById("credit-section"),
    bank: document.getElementById("bank-section"),
  };

  function showSection(method) {
    console.log(method)
    // hide all
    Object.keys(sections).forEach(key => {
      console.log(key)
      sections[key].style.display = (key === method) ? "block" : "none";
    });
  }

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // remove active from all
      cards.forEach(c => c.classList.remove("active"));
      // activate clicked
      card.classList.add("active");
      // show section
      const method = card.getAttribute("data-method");
      showSection(method);
    });
  });

  // Default -> Credit Card visible
  showSection("credit");
const creditCards = document.querySelectorAll(".credit-cards .card");

  creditCards.forEach(card => {
    card.addEventListener("click", () => {
      // remove active from all
      creditCards.forEach(c => c.classList.remove("active"));
      // add active to clicked one
      card.classList.add("active");
    });
  });  
  const bankCards = document.querySelectorAll(".bank-cards .card");

  bankCards.forEach(card => {
    card.addEventListener("click", () => {
      // remove active from all
      bankCards.forEach(c => c.classList.remove("active"));
      // add active to clicked one
      card.classList.add("active");
    });
  });

   const paymentcards = document.querySelectorAll(".card-paymented");
    console.log(cards)
    paymentcards.forEach(card => {
      card.addEventListener("click", () => {
        paymentcards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
      });
    });

    var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);


});


function validatePassengerForm() {
  let valid = true;

  const name = document.querySelector("input[name='fullname']");
  const email = document.querySelector("input[name='email']");
  const phone = document.querySelector("#phone");

  // reset errors
  document.querySelectorAll(".text-danger").forEach(el => el.remove());
    [name, email, phone].forEach(el => {
   if (el)  el.addEventListener('change', function(){
          clearErrors(el);
    })
  });

  if (!name.value.trim()) {
    showError(name, "Name is required");
    valid = false;
  }

  if (!validateEmail(email.value)) {
    showError(email, "Valid email is required");
    valid = false;
  }

  if (!phone.value.trim()) {
    showError(phone.closest(".wrap_spacing"), "Valid phone number is required");
    valid = false;
  }

  return valid;
}

// function validatePaymentForm() {
//   let valid = true;
//   const activeMethod = document.querySelector(".payment-card.active").dataset.method;

//   // reset errors
//   document.querySelectorAll(".text-danger").forEach(el => el.remove());

//   if (activeMethod === "credit") {
//     const cardNumber = document.querySelector("input[placeholder='Card Number']");
//     const cvv = document.querySelector("input[placeholder='CVV']");

//     if (!cardNumber.value.trim()) {
//       showError(cardNumber, "Card number is required");
//       valid = false;
//     }
//     if (!cvv.value.trim()) {
//       showError(cvv, "CVV is required");
//       valid = false;
//     }
//       [cardNumber, cvv].forEach(el => {
//    if (el)  el.addEventListener('change', function(){
//           clearErrors(el);
//     })
//   });
//   }
//   // bank or cash don’t require extra fields here
//   return valid;
// }

function showError(element, message) {
  const error = document.createElement("span");
  error.className = "text-danger";
  error.textContent = message;

  if (element.classList.contains("wrap_spacing")) {
    element.appendChild(error);
  } else {
    element.insertAdjacentElement("afterend", error);
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function goToPayment() {
  const passengerSection = document.getElementById('passenger-section');
  const paymentSection = document.getElementById('payment-section');

  if (passengerSection && passengerSection.style.display !== "none") {
    let isValid = validatePassengerForm(); // <- your existing validation
    if (!isValid) return;

    const passenger = M.Collapsible.getInstance(passengerSection);
    if (passenger) passenger.close(0);
    passengerSection.style.display = "none";

    const payment = M.Collapsible.getInstance(paymentSection);
    if (payment) payment.open(0);
    document.querySelector("#payment-tab").classList.add('active')  
    paymentSection.style.display = "block";
    paymentSection.scrollIntoView({ behavior: "smooth" });

  } else {
    
    var successModal = M.Modal.getInstance(document.getElementById('successModal'));
    successModal.open();
  }
}
function renderCart() {
  const data = localStorage.getItem("cartItems");
  cartItems=data ? JSON.parse(data) : [];
  console.log(cartItems)
  const container = document.getElementById("cart-container");
  container.innerHTML = "";

 cartItems.forEach((item, index) => {
    console.log(item)
    let html = "";

    if (item.type === "hotel") {
      html = `
        <div class="hotel">
          <img width="30%" src="${item.img}" alt="">
          <div style="width:80%;">
            <div style="width:100%;">
              <div style="display:flex; justify-content:space-between; align-items:center">
                <h6 style="width:60%;">${item.name}</h6>
                <div style="width:20%; display:flex; align-items:center ; justify-content:space-between;gap:15px;">
                  <a style="width:35%;" href=""><img style="width:20px;" src="assets/frontend/img/Pencil.svg"></a>
                  <a style="width:50%;"><img  src="assets/frontend/img/delete.svg"></a>
                </div>
              </div>
            </div>
            <div style="display:flex;align-items:start;">
              <img src="assets/frontend/img/MapPin.svg" alt="">
              <address style="font-style: normal;">${item.address}</address>
            </div>
          </div>
         
        </div>
        <div class="details">
          <div class="box-border">
            <div class="form-row-detail">
              <div class="detail">
                <img src="assets/frontend/img/CalendarDots.svg" alt="">
                <div>
                  <span>Check in Date</span>
                  <p>${item.checkin}</p>
                </div>
              </div>
              <div class="detail">
                <img src="assets/frontend/img/CalendarDots.svg" alt="">
                <div>
                  <span>Check out Date</span>
                  <p>${item.checkout}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="box-border">
            <div class="form-row-detail">
              <div class="detail">
                <img src="assets/frontend/img/Moon.svg" width="15%" alt="">
                <div>
                  <span>Total Nights</span>
                  <p>${item.nights} Nights</p>
                </div>
              </div>
              <div class="detail">
                <img src="assets/frontend/img/Bed.svg" alt="">
                <div>
                  <span>Room Type</span>
                  <p>${item.room_type}</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    }

    if (item.type === "transport") {
       html = `
        <div class="hotel">
          <img width="20%" src="${item.img}" alt="">
          <div style="width:80%;">
            <div style="width:100%;">
              <div style="display:flex; justify-content:space-between; align-items:center">
                <h6 style="width:60%;">${item.name}</h6>
                <div style="width:20%; display:flex; align-items:center ; justify-content:space-between;gap:15px;">
                  <a style="width:35%;" href=""><img style="width:20px;" src="assets/frontend/img/Pencil.svg"></a>
                  <a class="remove-btn"  data-index="${index}" style="width:50%;"><img  src="assets/frontend/img/delete.svg"></a>
                </div>
              </div>
            </div>
            <div style="display:flex;align-items:start;">
              <img src="assets/frontend/img/MapPin.svg" alt="">
              <address style="font-style: normal;">${item.route}</address>
            </div>
          </div>
        </div>
        <div class="details">
          <div class="box-border">
            <div class="form-row-detail">
              <div class="detail">
                <img src="assets/frontend/img/CalendarDots.svg" alt="">
                <div>
                  <span>Pick Up at</span>
                  <p>${item.checkIn}</p>
                </div>
              </div>
              <div class="detail">
                <img src="assets/frontend/img/CalendarDots.svg" alt="">
                <div>
                  <span>Drop off at</span>
                  <p>${item.checkOut}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="box-border">
            <div class="form-row-detail">
              <div class="detail">
                <img src="assets/frontend/img/users.svg" width="15%" alt="">
                <div>
                  <span>Pilgrims</span>
                  <p>${item.pilgrims}</p>
                </div>
              </div>
              <div class="detail">
                <img src="assets/frontend/img/baggages.svg"  width="15%" alt="">
                <div>
                  <span>Storage</span>
                  <p>${item.storage}</p>
                </div>
              </div>
            </div>
          </div>
          <hr style="width:100%; margin:0px;">
          <div style="display:flex; justify-content:space-between; width:100%; align-item:center;">
            <div>
              <p>Quantity &nbsp; ${item.quantity}</p>
            </div>
            <div>
              <p>PKR &nbsp; <strong style="font-size:18px;">${item.price}</strong></p>
              
            </div>

          </div>
        </div>`;
    }

    if (item.type === "package") {
      html = `
        <div class="package">
          <img width="30%" src="${item.image}" alt="">
          <div>
            <h6>${item.name}</h6>
            <p><strong>Duration:</strong> ${item.duration}</p>
            <p><strong>Includes:</strong> ${item.services.join(", ")}</p>
            <p><strong>Price:</strong> ${item.price}</p>
          </div>
        </div>`;
    }
    container.innerHTML += `<div class="" style="padding-bottom:20px;">${html}</div>`;
  });
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      let index = btn.getAttribute("data-index");
      removeFromCart(index);
    });
  });
}

renderCart();
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  cart.splice(index, 1); // remove one item
  localStorage.setItem("cartItems", JSON.stringify(cart));
  renderCart(); // refresh UI
}




