$(document).ready(function () {

  const params = new URLSearchParams(window.location.search);
  const step = params.get("step");
  const tab = params.get("tab");
    const isMobile = window.innerWidth <= 768;
    document.querySelector(".tab[data-tab='assets/frontend/shared/tabs/customize-tab.html']").innerHTML = isMobile ? "2" : "2. Customization";
    document.querySelector(".tab[data-tab='assets/frontend/shared/tabs/pilgrim-information.html']").innerHTML = isMobile ? "1" : "1. Customization";
    document.querySelector(".tab[data-tab='assets/frontend/shared/tabs/confirmation.html']").innerHTML = isMobile ? "3" : "3. Customization";



  $('.tab').removeClass('active');
  if (tab === '2') {
     $('.package-builder').addClass('custom-height');

    const tab2 = $('.tab[data-tab="assets/frontend/shared/tabs/customize-tab.html"]');
    tab2.addClass('active');
  
    var tabPath = "assets/frontend/shared/tabs/customize-tab.html";
    $('#tab-content').load(tabPath, function () {
        const savedData = localStorage.getItem("bookingData");
        if (savedData) {
          bookingData = JSON.parse(savedData);
          console.log("Restored bookingData:", bookingData);
        }
          $(".package-builder").addClass('custom-height');

       document.getElementById("custom-footer").style.display="block";
       const urlParams = new URLSearchParams(window.location.search);
        if (!bookingData.hotel) bookingData.hotel = {};
        const hotelName = urlParams.get("hotel");
        const hotelCity = urlParams.get("city");
        // Collect selected rooms
        const rooms = [];
        urlParams.forEach((qty, type) => {
          if (type !== "tab" && type !== "step" && type !== "hotel" && type !== "city") {
            rooms.push(`${type}: ${qty}`);
          }
        });
        if (hotelName && hotelCity) {
          bookingData.hotel[hotelCity] = {
            name: hotelName,
            room: rooms.join(", "),   // e.g. "Double Room: 2, Triple Room: 1"
            nights: null,             // you can fill nights if available
            meals: false              // or true if you pass in meals info
          };
        }
        localStorage.setItem("bookingData", JSON.stringify(bookingData));
      if (step && steps.includes(step)) {
        currentIndex = steps.indexOf(step);
      }
      showStep(steps[currentIndex]);
    });
  } else {
    // default tab (first one)
    $('.tab').first().addClass('active');
    var firstTabPath = $('.tab.active').data('tab');
    $('#tab-content').load(firstTabPath, function () {      
      document.getElementById("custom-footer").style.display="none";
      $(".package-builder").removeClass('custom-height');

      populateCountries();
      initCounters();
      renderVisaCards();
    });
  }

});
$('.tab').click(function() {
    var tabPath = $(this).data('tab');
    tabPath.addClass('active');

    $('#tab-content').load(tabPath, function () {
       if(tabPath=='assets/frontend/shared/tabs/customize-tab.html'){
          $(".package-builder").addClass('custom-height');

       document.getElementById("custom-footer").style.display="block";
      }
      else{
          $(".package-builder").removeClass('custom-height');

       document.getElementById("custom-footer").style.display="none";
      }
        populateCountries(); // call again when new tab loads
        initCounters();
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {
          accordion: true 
        });
       if (document.getElementById("visaCardsContainer")) {
        renderVisaCards();
      }

    });
});
function checkout(){
    $('.tab').removeClass('active');
    const tab2 = $('.tab[data-tab="assets/frontend/shared/tabs/confirmation.html"]');
    tab2.addClass('active');
    var tabPath= "assets/frontend/shared/tabs/confirmation.html"
    $('#tab-content').load(tabPath, function () {
      LoadData()
      var elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems, {
        accordion: true 
    });
    });

}
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua And Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas The",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo The Democratic Republic Of The",
  "Cook Islands",
  "Costa Rica",
  "Cote D'Ivoire (Ivory Coast)",
  "Croatia (Hrvatska)",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "External Territories of Australia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji Islands",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia The",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey and Alderney",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard and McDonald Islands",
  "Honduras",
  "Hong Kong S.A.R.",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea North",
  "Korea South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau S.A.R.",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Man (Isle of)",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands Antilles",
  "Netherlands The",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territory Occupied",
  "Panama",
  "Papua new Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Island",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts And Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent And The Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Smaller Territories of the UK",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard And Jan Mayen Islands",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad And Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks And Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City State (Holy See)",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (British)",
  "Virgin Islands (US)",
  "Wallis And Futuna Islands",
  "Western Sahara",
  "Yemen",
  "Yugoslavia",
  "Zambia",
  "Zimbabwe"
];
const months =[
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'Octuber',
  'November',
  'December'
]
function populateCountries() {
    const select = document.getElementById("nationality");
    if (!select) return; // exit if no select exists
    // clear old options
    select.innerHTML = '<option value="">Pilgrim Nationality*</option>';
    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        select.appendChild(option);
    });
}
function populateFilters(){
   const select = document.getElementById("months");
   console.log("select working")
    if (!select) return; // exit if no select exists

    // clear old options
    select.innerHTML = '<option value="">All Months*</option>';

    months.forEach(months => {
        const option = document.createElement("option");
        option.value = months;
        option.textContent = months;
        select.appendChild(option);
    });

}
function initCounters() {
  document.querySelectorAll('.counter-controls').forEach(control => {
    const plusBtn = control.querySelector('.plus');
    const minusBtn = control.querySelector('.minus');
    const counterSpan = control.querySelector('.counter-value');
    const hiddenInput = control.querySelector('.counter-input');
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
  });
}

const toggleBtn = document.getElementById("toggleBreakdown");
const toggleSpan = document.getElementById("toggleSpan")
const breakdownCard = document.getElementById("breakdownCard");
toggleBtn.addEventListener("click", function () {
    breakdownCard.classList.toggle("open");
    document.getElementsByClassName("breakdown-card")[0].style.display = "block";

    if (breakdownCard.classList.contains("open")) {
      toggleSpan.textContent = "Hide Breakdown ";
      document.getElementsByClassName("breakdown-card")[0].style.display = "block"
    } else {
      toggleSpan.textContent = "Show Breakdown ";
      document.getElementsByClassName("breakdown-card")[0].style.display = "none";

  }
});

