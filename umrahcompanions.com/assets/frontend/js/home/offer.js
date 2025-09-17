const offers = [
        { imgSrc: "assets/frontend/img/flight.svg", title: "Flights", description: "Choose from a variety of hotels, flights, and transport options. Tailor every part of your Umrah journey to fit your needs and budget." },
        { imgSrc: "assets/frontend/img/transfer.svg", title: "Transport", description: "Choose from a variety of hotels, flights, and transport options. Tailor every part of your Umrah journey to fit your needs and budget." },
        { imgSrc: "assets/frontend/img/visa.svg", title: "Visa", description: "Choose from a variety of hotels, flights, and transport options. Tailor every part of your Umrah journey to fit your needs and budget." },
        { imgSrc: "assets/frontend/img/guide.svg", title: "Tour Guide", description: "Choose from a variety of hotels, flights, and transport options. Tailor every part of your Umrah journey to fit your needs and budget." },
        { imgSrc: "assets/frontend/img/support.svg", title: "Customer Support", description: "Choose from a variety of hotels, flights, and transport options. Tailor every part of your Umrah journey to fit your needs and budget." },
        { imgSrc: "assets/frontend/img/hotel.svg", title: "Hotels", description: "Choose from a variety of hotels, flights, and transport options. Tailor every part of your Umrah journey to fit your needs and budget." }
    ];

    // Function to generate dynamic HTML
    function generateOffers() {
        const container = document.getElementById("offer-row-container");
        
        offers.forEach(offer => {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("col", "s12", "l4");

            const contentDiv = document.createElement("div");

            const imgElement = document.createElement("img");
            imgElement.src = offer.imgSrc;
            imgElement.className="offer-image"
            // imgElement.width = "20%";
            imgElement.alt = offer.title;

            const titleElement = document.createElement("h6");
            titleElement.textContent = offer.title;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = offer.description;

            contentDiv.appendChild(imgElement);
            contentDiv.appendChild(titleElement);
            contentDiv.appendChild(descriptionElement);

            columnDiv.appendChild(contentDiv);
            container.appendChild(columnDiv);
        });
    }

    // Call the function to render the offers when the page loads
    window.onload = generateOffers;
