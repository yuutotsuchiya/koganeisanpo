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
      <h2 class="entry-title"><router-link :to="`/entry/${entry.id}`">{{entry.title}}</router-link></h2>
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
  justify-content: center;
  @media screen and (max-width:700px) {
    margin: 0 auto;
  }
}
.entry-title {
  font-size: 16px;
  line-height: 1.6;
  font-weight: normal;
  height: 50px;
  & a {
    position: absolute;
    bottom:50px;
    right: calc(50% - 85px);
    width:150px;
    padding:5px 10px;
    color: #fff;
    background: #333;
    border-radius: 25px;
    text-decoration: none;
    font-size: 14px;
  }
}
.entry-image {
  & img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin: 0 auto;
  }
}
.entry {
  margin: 0 50px 64px;
  width: calc(33% - 98px);
  position: relative;
  &:nth-child(4n){
    & h2{
      & a{
      background-color: #da5474;
      }
    }
  }
  &:nth-child(4n+1){
    & h2{
      & a{
      background-color: #de602a;
      }
    }
  }
  &:nth-child(4n+2){
    & h2{
      & a{
      background-color: #40bad5;
      }
    }
  }
  &:nth-child(4n+3){
    & h2{
      & a{
      background-color: #13569c;
      }
    }
  }
  &:hover a {
  opacity: 0.8;
  transition : all 0.3s ease 0s;
  }
  & a {
    display: block;
  }
  @media screen and (max-width:700px) {
    width: calc(40% - 85px);
  }
  @media screen and (max-width:500px) {
    width: calc(70% - 85px);
  }
}
</style>