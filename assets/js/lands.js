const cardsData = [
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "1 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/assets/pages/details.html",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "2 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "3 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "4 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "5 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "6 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "7 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "8 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "9 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "10 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "11 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
  {
    imgSrc: "/assets/images/background-images/abadimage.jpg",
    title:
      "12 Build-ready 3.45-acre lot in the desirable Ceda Creek Mountain, Rutherford Country, NC!",
    status: "Available",
    state: "NC",
    size: "3.45 Acres",
    price: "$24,500",
    detailsLink: "/",
  },
];

let currentIndex = 0;

function renderCards() {
  const cardsContainer = document.getElementById("cards-container");
  // Clear previous cards
  cardsContainer.innerHTML = "";

  // Get the current set of 2 cards
  const cardsToShow = cardsData.slice(currentIndex, currentIndex + 6);

  // Loop through the cards and render them inside a col
  cardsToShow.forEach((cardData) => {
    const col = document.createElement("div");
    col.classList.add("col"); // Wrap each card inside a col div

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="img-box">
        <img src="${cardData.imgSrc}" alt=""/>
      </div>
      <div class="container text-box">
        <p class="title">${cardData.title}</p>
        <div class="row row-cols-2 g-2">
          <div class="col"><span>Status: </span>${cardData.status}</div>
          <div class="col"><span>State: </span>${cardData.state}</div>
          <div class="col"><span>Size: </span>${cardData.size}</div>
          <div class="col"><span>Sale price: </span>${cardData.price}</div>
        </div>
        <button class="details-btn">
          <a href="${cardData.detailsLink}">View Details</a>
        </button>
      </div>
    `;

    col.appendChild(card);
    cardsContainer.appendChild(col);
  });
}

document
  .getElementById("next-cards-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Move to the next set of cards
    currentIndex += 6;

    // If we reach the end of the array, wrap back to the beginning
    if (currentIndex >= cardsData.length) {
      currentIndex = 0;
    }

    renderCards();
  });

document
  .getElementById("prev-cards-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Move to the previous set of cards
    currentIndex -= 6;

    // If we go below the beginning, wrap to the end
    if (currentIndex < 0) {
      currentIndex = cardsData.length - 6;
    }

    renderCards();
  });

// Initially render the first 2 cards
renderCards();
