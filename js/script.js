window.addEventListener('DOMContentLoaded', () => {

  const productsSliders = document.querySelectorAll('.products-slider');

  productsSliders.forEach((item) => {
    let slider = new Swiper(item, {
      navigation: {
        nextEl: item.querySelector('.swiper-button-next'),
        prevEl: item.querySelector('.swiper-button-prev'),
      },

      pagination: {
        el: item.querySelector('.swiper-pagination'),
        type: 'bullets',
        clickable: 'true',
      },

      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
    });
  });

  const slider2 = new Swiper('.career-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
  });

  const popUpCloseBtn = document.getElementById('pop-up-close')
  const popupForm = document.getElementById('pop-up-form');
  const formSendDiv = document.getElementById('form-send');
  const formSendCloseBtn = document.getElementById('form-send-close');

  popupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    popupForm.classList.add('invisible');
    formSendDiv.classList.remove('invisible');
  });

  function classToggle(firstEl, secondEl, clickedBtn, className) {
    clickedBtn.addEventListener('click', () => {
      firstEl.classList.add(className);
      secondEl.classList.remove(className);
    });
  }

  classToggle(formSendDiv, popupForm, popUpCloseBtn, 'invisible');
  classToggle(formSendDiv, popupForm, formSendCloseBtn, 'invisible');
});