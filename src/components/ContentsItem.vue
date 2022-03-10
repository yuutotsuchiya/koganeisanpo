<template>
  <section class="contents-item">
    <h2 class="contents-item-title">{{title}}</h2>
    <slot />
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.contents-item {
  box-sizing: border-box;
  width: 600px;
  height: 200px;
  background-image: url("../assets/title-red.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 50% 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0 auto;
  @media screen and (max-width:700px) {
        width: 80%;
    }
}
.contents-item-title {
  color: #fff;
  font-size: 18px;
  padding:0 10px;
  font-family: 'Kaisei Opti', serif;
}
</style>