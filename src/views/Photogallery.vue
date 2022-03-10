<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>スライダー１</swiper-slide>
      <swiper-slide>スライダー２</swiper-slide>
      <swiper-slide>スライダー３</swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1, // 1枚に表示するスライド数
        loop: true // 最終ページの次にまた1枚目が表示される
      }
    };
  }
};
</script>