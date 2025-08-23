
  // flight.js
  const packageCards = [
  {
    title: "Land Package",
    tags: ["Budget Friendly"],
    img:"assets/frontend/img/land.svg",
    details: ["Hotel Accommodation", "Transportation", "Visa"]
  },
  {
    title: "Flight Package",
    tags: ["Complete Umrah Package", "Budget Friendly"],
    img:"assets/frontend/img/flight.svg",
    details: ["flights", "hotel accommodations", "Transport", "Visa"]
  },
];

// ---- Render cards dynamically ----
function renderpackages() {
  const container = document.getElementById("packageContainer");
  if (!container) {
    console.warn("packageContainer not found yet");
    return;
  }

  container.innerHTML = ""; // clear old content

  packageCards.forEach(card => {
    const col = document.createElement("div");
    col.className = "col l6 m6 s12";

    col.innerHTML = `
      <div class="card package-card" data-package="${card.title}">
        <div class="flex">
          <div class="rounded-circle">
            <img src="${card.img}" alt="">
          </div>
        </div>
        <h3>${card.title}</h3>
        <div class="tags">
          ${card.tags.map(tag => `<span class="badge">${tag}</span>`).join("")}
        </div>
        <ul>
          ${card.details.map(d => `<li>${d}</li>`).join("")}
        </ul>
      </div>
    `;

    container.appendChild(col);
  });
}

