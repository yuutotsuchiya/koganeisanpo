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
  padding: 60px 12px 0px;
  margin: 0 auto;
  max-width: 896px;
  text-align: left;
}
.contents-item-title {
  margin: 0 auto 40px;
  padding:0 12px;
  font-size: 24px;
  position: relative;
  color: #333;
  &:after {
    content: '';
    display: block;
    border-bottom: 1px solid #ff6701;
    width: 200px;
  }
  @media screen and (max-width:896px) {
    padding:0px;
  }
}
</style>