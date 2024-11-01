// 메인 배너 Swiper 초기화
var mainSwiper = new Swiper('.main-swiper', {
  loop: true,
  autoplay: {
    delay: 5000, // 5초마다 전환
    disableOnInteraction: false,
  },
  effect: 'fade', // 페이드 효과 적용
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// 배너 스크롤 효과 구현
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var banner = document.querySelector('.main-banner');
  var maxScroll = window.innerHeight - 80; // 헤더 높이만큼 뺌

  if (scrollPosition <= maxScroll) {
    banner.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    banner.style.opacity = 1 - scrollPosition / maxScroll;
  } else {
    banner.style.opacity = 0;
  }
});

// 소장품 섹션 Swiper 초기화
var collectionSwiper = new Swiper('.collection-swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.collection-swiper .swiper-button-next',
    prevEl: '.collection-swiper .swiper-button-prev',
  },
  breakpoints: {
    // 반응형 설정
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
