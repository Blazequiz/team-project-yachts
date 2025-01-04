// import Swiper JS
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
    var swiper = new Swiper(".yachtsSwiper", {
        modules: [Navigation],
        grabCursor: true,
        slidesPerView: 3,
      //відстань між слайдами
        spaceBetween: 16,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
      // кількість слайдів та відстань між ними в пікселяк на кожний перелом
        breakpoints: {
          375: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          //  >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          // >= 1200px
          1200: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        },
      });