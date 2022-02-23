<template>
  <Loading v-if="!entry" />
  <article class="entry-container" v-if="entry">
    <h1 class="entry-title">{{entry.title}}</h1>

    <div class="body" v-html="entry.body">
    </div>
  </article>
</template>
<script>
// @ is an alias to /src
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Entry from '../components/Entry.vue'
import Loading from '@/icons/Loading.vue'
export default {
  name: 'Home',
  components: {
    Entry,
    Loading
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const getEntry = () => store.dispatch('getEntry',route.params.id)
    onMounted(() => {
      console.log(1)
      getEntry()
    })

    return {
        getEntry,
        entry: computed(() => store.state.entry),
    }
  }
}
</script>
<style scoped lang="scss">
.entry-container {
  padding: 64px 12px;
  margin: 0 auto;
  max-width: 896px;
  &:before {
    margin: 0 auto;
    position: absolute;
    display: block;
    content: '';
    width: 80%;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.05);
    top: 0;
    right: 0;
    z-index: -2;
  }
  &::after {
    margin: 0 auto;
    position: absolute;
    display: block;
    content: '';
    width: 2000px;
    height: 1000px;
    background-color: #fff;
    transform: rotate(15deg) translateX(-1900px);
    top: -300px;
    left: 50%;
    right: 0;
    z-index: -1;
  }
}
.entry-title {
  margin: 0 auto 40px;
  padding: 4px 8px;
  font-size: 24px;
  position: relative;
  color: #333;
  text-align: left;
  border-left: 8px solid #ff6701;
  &:after {
    content: '';
    display: block;
    border-bottom: 1px solid #ff6701;
    width: 200px;
  }
}
.body {
 ::v-deep  img {
    width: 100%;
    max-width: 896px;
    height: auto;
    margin: 0 auto;
    margin: 16px 0;
  }
  ::v-deep h2 {
    padding: 4px 8px;
    font-size: 20px;
    border-left: 8px solid #fea82f;
    text-align: left;
    &:after {
      content: '';
      display: block;
      border-bottom: 1px solid #fea82f;
      width: 300px;
    }
  }
  ::v-deep h3 {
    padding: 8px 0;
    font-size: 18px;
  }
  ::v-deep h4 {
    padding: 8px 0;
    font-size: 16px;
  }
  ::v-deep p {
    font-size: 16px;
    margin: 16px 0;
    line-height: 170%;
  }
  ::v-deep ul,
  ::v-deep ol {
    font-size: 16px;
    margin: 16px;
  }
  ::v-deep a{
    display: inline-block;
    position: relative;
    overflow: hidden;
    color: #ff6701;
    text-decoration: none;
    line-height: 110%;
      &:after {
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #ff6701;
      transform: translate(-100%, 0);
      transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
      content: "";
      }
      &:hover{
        &:after {
        transform: translate(0, 0);
      }
    }
  }
}
</style>