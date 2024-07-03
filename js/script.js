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

      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        slideShadows: true,
      },

      breakpoints: {
        480: {
          spaceBetween: 40,
        },

        740: {
          spaceBetween: 50,
        },

        991: {
          spaceBetween: 80,
        },
      },

      initialSlide: 2,
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
    });
  });

  let slider2 = new Swiper('.career-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    breakpoints: {
      480: {
        slidesPerView: 2,
      },
    }
  });

  // Валидация полей ФИО и телефон в форме,
  // переключение на окно подтверждения отправки формы
  const popUpCloseBtn = document.getElementById('pop-up-close')
  const popupForm = document.getElementById('pop-up-form');
  const formSendDiv = document.getElementById('form-send');
  const formSendCloseBtn = document.getElementById('form-send-close');
  const nameInput = document.getElementById('name-input');
  const phoneInput = document.getElementById('phone-input');
  const nameErr = document.getElementById('name-error');
  const phoneErr = document.getElementById('phone-error');

  function isValidName(name) {
    const pattern = /^[а-яА-Яa-zA-Z]+$/;
    return pattern.test(name);
  }

  function isValidPhone(phone) {
    const pattern = /^\d+$/;
    return pattern.test(phone);
  }

  popupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!nameInput.value && !phoneInput.value) {
      nameErr.innerHTML = '*value';
      phoneErr.innerHTML = '*value';
      return;
    }

    if (!nameInput.value) {
      nameErr.innerHTML = '*value';
      return;
    }

    if (!phoneInput.value) {
      phoneErr.innerHTML = '*value';
      return;
    }

    if (!isValidName(nameInput.value)) {
      nameErr.innerHTML = '*value';
      return;
    }

    if (!isValidPhone(phoneInput.value)) {
      phoneErr.innerHTML = '*value';
      return;
    }

    popupForm.classList.add('invisible');
    formSendDiv.classList.remove('invisible');

    popupForm.reset();
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