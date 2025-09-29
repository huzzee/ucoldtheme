document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
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
    paymentSection.style.display = "block";
    paymentSection.scrollIntoView({ behavior: "smooth" });

  } else {
    
    var successModal = M.Modal.getInstance(document.getElementById('successModal'));
    successModal.open();
  }
}


