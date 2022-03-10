<template>
<section class="about">
    <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :initialSlide="3"
    :navigation="true"
    class="mySwiper"
    >
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
        <swiper-slide></swiper-slide>
    </swiper>
    <figure class="about-background"><img src="../assets/topslide-background.png" alt=""></figure>
    <figure class="about-bunner"><img src="../assets/topslide-banner.png" alt=""></figure>
    <p class="about-lead">我々こがねいさんぽは小金井市の観光を”<span class="about-lead-red">発展させる</span>”学生コミュニティです。<br>活動内容は小金井市内にある小さいお子様連れが楽しめるような自然豊かな公園などの<br>魅力的なスポットを巡る<span class="about-lead-red">パンフレットとサイトの作成</span>です。今まで知られていなかった<br>市内のスポットを散歩してもらい、魅力を発見してもらうことが狙いです。 </p>
</section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/scss/effect-cards";
import 'swiper/scss/navigation';

// import required modules
import { EffectCards, Navigation} from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards, Navigation],
    };
  },
};
</script>
<style lang="scss" scoped>

html,
body {
  position: relative;
  height: 100%;
}
* {
    box-sizing: border-box;
}
*::before,
*::after {
    box-sizing: inherit; /* 継承 */
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
.about{
    padding: 100px 0;
    box-sizing: border-box;
}
.about-background img{
    width:600px;
    height:auto;
    position: absolute;
    right: calc(50% - 300px);
    top: 500px;
    z-index: 9000;
}
.about-bunner img{
    width:500px;
    height:auto;
    position: absolute;
    right: calc(50% - 250px);
    top: 570px;
    z-index: 10000;
}
.about-lead{
    box-sizing: border-box;
    width:580px;
    margin: 0 auto;
    font-size: 12px;
    padding-top: 100px;
    line-height: 200%;
    color:#000;
    &::before{
        content: '';
        background-image: url("../assets/topslide-before.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 200px;
        height: 600px;
        position: absolute;
        top: 670px;
        left: 10%;
    }
    &::after{
        content: '';
        background-image: url("../assets/topslide-after.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 150px;
        height: 600px;
        position: absolute;
        top: 620px;
        right: 10%;
    }
}
.about-lead-red{
    color: #e87778;
}
.swiper {
  width: 500px;
  height: 500px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 250px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
.swiper ::v-deep .swiper-button-next{
    --swiper-navigation-color: #fff;
    position: absolute;
    right: -100px;
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
    left: -100px;
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
.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
  background-image: url("../assets/topslide-1.jpg");
  background-size: 100% 100%;
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
  background-image: url("../assets/topslide-2.jpg");
  background-size: 100% 100%;
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
  background-image: url("../assets/topslide-3.jpg");
  background-size: 100% 100%;
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
  background-image: url("../assets/topslide-4.jpg");
  background-size: 100% 100%;
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
  background-image: url("../assets/topslide-5.jpg");
  background-size: 100% 100%;
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
  background-image: url("../assets/topslide-6.jpg");
  background-size: 100% 100%;
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
  background-image: url("../assets/topslide-7.jpg");
  background-size: 100% 100%;
}
.swiper ::v-deep .swiper-3d {
    background: rgba(0,0,0,.15);
    border-radius: 120px;
}
.swiper ::v-deep .swiper-slide-shadow {
    background: rgba(0,0,0,.15);
    border-radius: 250px;
}
</style>