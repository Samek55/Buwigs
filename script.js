function scrollLeftBox(id) {
  const box = document.getElementById(id);
  box.scrollLeft -= box.clientWidth * 0.75;
}

function scrollRightBox(id) {
  const box = document.getElementById(id);
  box.scrollLeft += box.clientWidth * 0.75;
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    const title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(value)) {
      card.classList.remove("is-hidden");
    } else {
      card.classList.add("is-hidden");
    }
  });
});
