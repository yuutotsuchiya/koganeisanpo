<template>
  <swiper
    :slidesPerView="1"
    :centeredSlides="false"
    :slidesPerGroupSkip="1"
    :grabCursor="true"
    :keyboard="{
      enabled: true,
    }"
    :breakpoints="{
      '769': {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    }"
    :navigation="true"
    :pagination="pagination" 
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Keyboard, Navigation,Pagination],
    };
  }
}
</script>
<style lang="scss" scoped>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #fff;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #fff;
}

@media only screen and (min-width: 769px) {
  .swiper-slide:first-child {
    transition: transform 100ms;
  }

  .swiper-slide:first-child img {
    transition: box-shadow 500ms;
  }

  .swiper-slide.swiper-slide-active:first-child {
    transform: translateX(50%);
    z-index: 2;
  }

  .swiper-slide.swiper-slide-active:first-child img {
    box-shadow: 0px 32px 80px rgba(0, 0, 0, 0.35);
  }

  .swiper-slide:nth-child(2) {
    transition: transform 100ms;
  }

  .swiper-slide.swiper-slide-next:nth-child(2) {
    transform: translateX(55%);
    z-index: 1;
  }

  .swiper[dir="rtl"] .swiper-slide.swiper-slide-active:first-child {
    transform: translateX(-50%);
  }

  .swiper[dir="rtl"] .swiper-slide.swiper-slide-next:nth-child(2) {
    transform: translateX(-55%);
  }
}
</style>

