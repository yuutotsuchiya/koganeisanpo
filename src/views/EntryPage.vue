<template>
  <section class="background">
    <Loading v-if="!entry" />
    <article class="entry-container" v-if="entry">
    <h1 class="entry-title">{{entry.title}}</h1>

    <div class="body" v-html="entry.body">
    </div>
    </article>
  </section>
  
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
.background{
  background-repeat: no-repeat;
  background-image: url("../assets/background.png");
  background-size: 100% auto;
  background-position: bottom 0px right 50%;
  padding-bottom:100px;
}
.entry-container {
  padding: 0px 12px;
  margin: 0 auto;
  max-width: 896px;
}
.entry-title {
  font-size: 18px;
  box-sizing: border-box;
  width: 600px;
  height: 100px;
  background-image: url("../assets/title-red.png");
  font-family: 'Kaisei Opti', serif;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 40% 0px;
  color:#fff;
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
    font-size: 12px;
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