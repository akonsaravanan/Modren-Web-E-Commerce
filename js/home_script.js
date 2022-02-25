const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (scrollY >= 180) {
    navbar.classList.add("bgeffect");
  } else {
    navbar.classList.remove("bgeffect");
  }
});

// const collageimg = document.querySelectorAll(".collage-img");

// collageimg.forEach((collage) => {
//   collage.addEventListener("mouseover"),
//     function () {
//       collage.style.filter = "blur(2px)";
//     };
// });

const usericon = document.querySelector(".user");
usericon.addEventListener("click", function (e) {
  e.preventDefault();
  usericon.classList.add("active");
});
