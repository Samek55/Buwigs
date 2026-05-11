function scrollLeftBox(id) {
  document.getElementById(id).scrollLeft -= 300;
}

function scrollRightBox(id) {
  document.getElementById(id).scrollLeft += 300;
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    const title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});