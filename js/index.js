document.addEventListener("DOMContentLoaded", function() {
    const openPopupButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const darkBg = document.getElementById('dark-bg');
   // const closeButton = document.getElementById('close-popup-btn');
    // const body = document.body;

    openPopupButton.addEventListener('click', function() {
        popup.style.display = 'block';
        darkBg.style.display = 'block';
        popup.style.animation = 'none'; // Очищаем анимацию для немедленного скрытия
        // body.style.overflow = 'hidden';
    });

    document.getElementById('closePopup').addEventListener('click', function() {
        popup.style.display = 'none';
        darkBg.style.display = 'none';
        // popup.style.animation = 'none'; // Очищаем анимацию для немедленного скрытия
        setTimeout(() => {
            popup.style.display = 'none'; // После очистки анимации скрываем всплывающее окно
        }, 500); // Задержка соответствует длительности анимации
    });

    // closeButton.addEventListener('click', function() {
    //     darkBg.style.display = 'none';
    //     popup.style.display = 'none';
    //     // body.style.overflow = '';
    // });

});

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  var swiper = new Swiper(".myProject", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-project-pagination",
        clickable: true,
      },
  });

  var swiper = new Swiper(".myWork", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-work-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".myTeam", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-team-pagination",
      clickable: true,
    },
    mousewheel: {
        sensitivity: 1,
      }
  });