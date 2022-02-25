const stars = document.querySelectorAll(".review-star");
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    for (let i = 0; i < stars.length; i++) {
      if (i <= index) {
        stars[i].src = "../img/fill star.png";
      } else {
        stars[i].src = "../img/no fill star.png";
      }
    }
  });
});
