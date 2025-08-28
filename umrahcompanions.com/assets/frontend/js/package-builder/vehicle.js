    const vehicles = {
        sedan: {
            name: "Sedan",
            price: "PKR 7,325",
            img: "assets/frontend/img/car.png",
            capacity: "4 people",
            model: "Hyundai Sonata",
            luggage: "2 Luggages"
        },
        GMC: {
            name: "GMC",
            price: "PKR 12,000",
            img: "assets/frontend/img/car.png",
            capacity: "6 people",
            model: "GMC Yukon",
            luggage: "4 Luggages"
        },
        staria: {
            name: "Staria",
            price: "PKR 10,500",
            img: "assets/frontend/img/car.png",
            capacity: "6 people",
            model: "Hyundai Staria",
            luggage: "3 Luggages"
        },
        hiace: {
            name: "HiAce",
            price: "PKR 9,800",
            img: "assets/frontend/img/car.png",
            capacity: "10 people",
            model: "Toyota HiAce",
            luggage: "5 Luggages"
        },
        coaster: {
            name: "Coaster",
            price: "PKR 15,000",
            img: "assets/frontend/img/car.png",
            capacity: "22 people",
            model: "Toyota Coaster",
            luggage: "8 Luggages"
        },
        bus: {
            name: "Bus",
            price: "PKR 20,000",
            img: "assets/frontend/img/car.png",
            capacity: "45 people",
            model: "Luxury Bus",
            luggage: "20 Luggages"
        }
    };

    function renderVehicles() {
        document.getElementById("sedan").checked = true;
    console.log(document.getElementById("sedan"), "sedan checkbox")

        document.querySelectorAll(".main-checkboxes").forEach(cb => {
        cb.addEventListener("change", renderVehicles);
    });


          const container = document.getElementById("vehicleContainer");
 
        if (!container) {
            console.warn("vehicleContainer not found");
            return;
        }
        container.innerHTML = ""; // clear
        document.querySelectorAll(".main-checkboxes:checked").forEach(cb => {
            const v = vehicles[cb.id];
            toggleParentColor(cb)
            if (!v) return;

            const card = `
                <div class="vehicle-card-wrapper">
                    <div class="vehicle-card" style="display:flex;flex-direction:column;gap:13px">
                        <img src="${v.img}" width="100%" alt="${v.name}">
                        <div class="row" style="width:100%;display:flex;justify-content:space-between;gap:20px;margin:0px 10px;">
                            <div class="col l3">
                                <h5 class="sub-heading" style="width:fit-content;">${v.name}</h5>
                            </div>
                            <div class="col l8">
                                <h5 class="sub-heading text-right">${v.price}/ <sub>Total</sub></h5>
                            </div>
                        </div>
                        <hr>
                        <div class="features-div">
                            <span class="features"><img src="assets/frontend/img/users.svg" alt="">${v.capacity}</span>
                            <span class="features"><img src="assets/frontend/img/car.svg" alt="">${v.model}</span>
                            <span class="features"><img src="assets/frontend/img/suitcase.svg" alt="">${v.luggage}</span>
                        </div>
                        <div class="hotel-item quantity-wrapper" >
                            <label class="counter-label">Quantity</label>
                            <div class="counter">
                                <button type="button" class="decrement">–</button>
                                <input style="display:none;" type="text" name="quantity_${cb.id}" value="1" class="counter-input" readonly />
                                <span id="quantity_${cb.id}" style="padding:5px 2px" class="counter-value">01</span>
                                <button type="button" class="increment">+</button>
                            </div>
                        </div>
                        <div style="">
                              <button class="vehicle-button"> Select</button>
                        </div>
                        <input type="radio" name="selected_vehicle" value="${cb.id}" style="display:none;" />
                    </div>
                </div>
            `;
            container.insertAdjacentHTML("beforeend", card);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
    // Default checked sedan
    document.getElementById("sedan").checked = true;
    console.log(document.getElementById("sedan"), "sedan checkbox")

    // Vehicles data (you can expand this)
    // Listen to checkbox changes

    // Initial render
    renderVehicles();
});
function toggleParentColor(cb) {
        const parent = cb.closest(".vehicle-boxes");
        const label = cb.nextElementSibling; // the <label>
        if (cb.checked) {
            parent.style.backgroundColor = "#17a2b8"; // teal
            parent.style.color = "#fff";
            label.style.color="#fff"
            parent.style.borderRadius = "6px";
            parent.style.padding = "8px";
        } else {
            parent.style.backgroundColor = "#f8f8f8"; // reset
            parent.style.color = "#000";
        }
    }

