<template>
    <section class="title-red">
      <figure class="title-red-icon"><img src="../assets/Pamphlet-white.png" alt=""></figure>
      <h2 class="title-red-title">パンフレット版紹介</h2>
    </section>
</template>
<script>
export default {
  name: 'Home',
  components: {
  },
}
</script>
<style lang="scss" scoped>
.title-red{
  box-sizing: border-box;
  width: 600px;
  height: 200px;
  background-image: url("../assets/title-orange.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 50% 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0 auto;
  @media screen and (max-width:700px) {
        width: 80%;
        height: 100px;
        background-position: 50% 48px;
    }
}
.title-red-icon {
  font-size: 0px;
  & img{
  width: 30px;
  padding:0 10px;
}
}

.title-red-title{
  color: #fff;
  font-size: 18px;
  padding:0 10px;
  font-family: 'Kaisei Opti', serif;
}
</style>