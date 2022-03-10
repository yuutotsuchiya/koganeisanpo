<template>
<section class="pamphlet">
  <Titleorange />
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
    <swiper-slide><img src="../assets/pamplet-1.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-2.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-3.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-4.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-5.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-6.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-7.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-8.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-9.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-10.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-11.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-12.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-13.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-14.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-15.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-16.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-17.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-18.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-19.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/pamplet-20.jpg"/></swiper-slide>
  </swiper>
</section>
  
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Titleorange from '@/components/Titleorange.vue'
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
    Titleorange,
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
.pamphlet{
  background-repeat: no-repeat;
  background-image: url("../assets/background.png");
  background-size: 100% auto;
  background-position: bottom 0px right 50%;
  padding-bottom: 100px;
}
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
  width: 60%;
  height: 60%;
  margin:0px auto 0px;
  padding:50px 60px 80px;
  
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
.swiper ::v-deep .swiper-button-next{
    --swiper-navigation-color: #fff;
    position: absolute;
    right: 15px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #ea6227;
}
.swiper ::v-deep .swiper-button-next:after{
  font-size: 10px;
  --swiper-navigation-size:10px;
}
.swiper ::v-deep .swiper-button-prev{
    --swiper-navigation-color: #fff;
    position: absolute;
    left: 15px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #ea6227;
}
.swiper ::v-deep .swiper-button-prev:after{
  font-size: 10px;
  --swiper-navigation-size:10px;
}
.swiper ::v-deep .swiper-pagination{
  position: absolute;
  bottom: 25px;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper ::v-deep .swiper-pagination-bullet {
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 10px;
  color: #ea6227;
  border: solid 1px #ea6227;
  opacity: 1;
  background: #fff;
}
.swiper ::v-deep .swiper-pagination-bullet-active {
  color: #fff;
  background: #ea6227;
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

