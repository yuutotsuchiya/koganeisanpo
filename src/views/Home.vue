<template>
  <div class="home">
    <About />
    <ContentsItem title="Web Works" />
    <Loading v-if="entries.length === 0" />
    <EntryThumbnail
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
import EntryThumbnail from '@/components/EntryThumbnail.vue'
import Loading from '@/icons/Loading.vue'
export default {
  name: 'Home',
  components: {
    About,
    EntryThumbnail,
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