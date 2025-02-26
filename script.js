let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

var swiper =new Swiper(".anime-slider",{
    spaceBetween: 30,
    centeredSlides: true,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper =new Swiper(".anime-slider",{
    spaceBetween: 30,
    centeredSlides: true,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
  });