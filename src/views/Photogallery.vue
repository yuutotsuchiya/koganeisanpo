<template>
  <div class="spot">
    <TitleBlue />
    <Loading v-if="entries.length === 0" />
    <Entryimage
      :entries="entries"
    />
  </div>
  
</template>
<script>
// @ is an alias to /src
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import About from '@/components/About.vue'
import ContentsItem from '@/components/ContentsItem.vue'
import Entryimage from '@/components/Entryimage.vue'
import Loading from '@/icons/Loading.vue'
import TitleBlue from '@/components/Titleblue.vue'
export default {
  name: 'Home',
  components: {
    About,
    Entryimage,
    ContentsItem,
    Loading,
    TitleBlue
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
.spot{
  background-repeat: no-repeat;
  background-image: url("../assets/background.png");
  background-size: 100% auto;
  background-position: bottom 0px right 50%;
}

</style>