var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
      },
    },
  });


// sidenav

var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function () {
    if (btnst == true) {
        document.querySelector('.toggle span').classList.add('toggle');
        document.getElementById('sidebar').classList.add('sidebarshow');
        btnst = false;
    } else if (btnst == false) {
        document.querySelector('.toggle span').classList.remove('toggle');
        document.getElementById('sidebar').classList.remove('sidebarshow');
        btnst = true;
    }
}
 