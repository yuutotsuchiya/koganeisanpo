<template>
  <section class="entry" v-for="entry in entries">
    <h2 class="title"><router-link :to="`/entry/${entry.id}`">{{entry.title}}</router-link></h2>
    <figure class="image">
      <img :src="image.url" :width="image.width" :height="image.height" />
    </figure>
    <div class="body" v-html="body">
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: String,
    image: Object,
    body: String
  }
}
</script>
<style lang="scss" scoped>
.entry {
  padding-top: 8px;
  margin: 0 16px 16px;
  background-color: #f5f5f5;
}
.title {
  margin: 0 8px;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.02);
  border-bottom: 2px solid #eee;
}
.body{
  padding: 16px;
  box-sizing: border-box;
  ::v-deep img {
    width: 100%;
    height: auto;
  }
}
.image{
  margin: 0 8px;
  padding: 8px 16px;
  > img {
    width: 100%;
    height: auto;
  }
}
</style>