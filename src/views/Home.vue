<template>
  <div class="home">
    <About />
    <ContentsItem title="こんなおすすめスポットを巡りませんか？" />
    <Loading v-if="entries.length === 0" />
    <Topentry />
  </div>
</template>
<script>
// @ is an alias to /src
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import About from '@/components/About.vue'
import ContentsItem from '@/components/ContentsItem.vue'
import Topentry from '@/components/Topentry.vue'
import Loading from '@/icons/Loading.vue'
export default {
  name: 'Home',
  components: {
    About,
    Topentry,
    ContentsItem,
    Loading
  },
  setup() {
    const store = useStore();
    const getEntries = () => store.dispatch('getEntries')
    onMounted(() => {
      getEntries()
    })
    return {
      entries: computed(() => store.state.entries),
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  background-repeat: no-repeat;
  background-image: url("../assets/background.png");
  background-size: 100% auto;
  background-position: bottom 0px right 50%;
  position: relative;
  z-index: 9500;
}

</style>