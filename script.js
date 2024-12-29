document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");

    fetch("your-api-endpoint") // Replace with your API URL
        .then((response) => response.json())
        .then((data) => {
            data.forEach((slide, index) => {
                const slideDiv = document.createElement("div");
                slideDiv.className = `carousel-item ${index === 0 ? "active" : ""}`;
                slideDiv.innerHTML = `
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        ${slide.cards
                            .map(
                                (card) => `
                                <div class="col">
                                    <div class="card">
                                        <img src="${card.image}" class="card-img-top" alt="${card.title}">
                                        <div class="card-body">
                                            <h5 class="card-title">${card.title}</h5>
                                            <p class="card-text"><span class="rating">${card.rating}</span> ${card.reviews}</p>
                                            <p class="text-muted">Starting from ${card.price}</p>
                                        </div>
                                    </div>
                                </div>
                            `
                            )
                            .join("")}
                    </div>
                `;
                carouselInner.appendChild(slideDiv);
            });
        });
});
