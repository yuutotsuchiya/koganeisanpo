<template>
  <div class="entries">
    <section class="entry" v-for="entry in entries" :key="entry.id">
      <router-link :to="`/entry/${entry.id}`">
      <figure class="entry-image">
          <img
            :src="entry.image.url"
            :width="entry.image.width" 
            :height="entry.image.height"
          />
        </figure>
      </router-link>
    </section>
  </div>

</template>

<script>
export default {
  props: {
    entries: Object,
  },
}
</script>

<style lang="scss" scoped>
.entries {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  justify-content: space-between;
  padding-bottom: 100px;
  @media screen and (max-width:700px) {
    margin: 0 auto;
  }
}
.entry-image {
    width: 150px;
    box-sizing: border-box;
    font-size:0px ;
  & img {
    width: 100%;
    height: auto;
    border-radius: 30px;
    margin: 0 auto;
  }
}
.entry {
  margin: 0 50px 64px;
  position: relative;
  @media screen and (max-width:700px) {
    width: calc(40% - 85px);
  }
  @media screen and (max-width:500px) {
    width: calc(70% - 85px);
  }
}
</style>