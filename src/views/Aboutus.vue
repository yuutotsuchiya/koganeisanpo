<template>
  <div class="aboutus">
    <About />
    <Titlecosmo />
    <section class="creator">
      <section class="menber gra">
        <h3 class="menber-category">グラフィックデザイン学科</h3>
        <dl class="menber-person">
          <dd class="menber-person-lead">プロジェクトリーダー</dd>
          <dt class="menber-person-title">鈴木 結理</dt>
        </dl>
        <dl class="menber-person">
          <dd class="menber-person-lead">書記</dd>
          <dt class="menber-person-title">諸野脇 唯</dt>
        </dl>
        <dl class="menber-person">
          <dd class="menber-person-lead">制作班</dd>
          <dt class="menber-person-title">遠藤 花梨</dt>
        </dl>
        <dl class="menber-person">
          <dd class="menber-person-lead">制作班</dd>
          <dt class="menber-person-title">山本 大智</dt>
        </dl>
        <dl class="menber-person">
          <dd class="menber-person-lead">制作班</dd>
          <dt class="menber-person-title">渡邉 紗矢香</dt>
        </dl>
        <dl class="menber-person">
          <dd class="menber-person-lead">制作班</dd>
          <dt class="menber-person-title">朱 励</dt>
        </dl>
        <dl class="menber-person">
          <dd class="menber-person-lead">情報班</dd>
          <dt class="menber-person-title">長嶋 佑太</dt>
        </dl>
        <dl class="menber-person">
          <dd class="menber-person-lead">情報班</dd>
          <dt class="menber-person-title">小林 和弘</dt>
        </dl>
      </section>
      <section class="menber web">
        <h3 class="menber-category">webデザイン学科</h3>
        <dl class="menber-person">
          <dd class="menber-person-lead">情報班リーダー</dd>
          <dt class="menber-person-title">土屋 優斗</dt>
        </dl>
        <dl class="menber-person">
          <dd class="menber-person-lead">制作班</dd>
          <dt class="menber-person-title">関口 智大</dt>
        </dl>
        <dl class="menber-person">
          <dd class="menber-person-lead">制作班</dd>
          <dt class="menber-person-title">Enkhbaatar Maral</dt>
        </dl>
        <dl class="menber-person">
          <dd class="menber-person-lead">情報班</dd>
          <dt class="menber-person-title">蒲生 博崇</dt>
        </dl>
      </section>
    </section>
  </div>
  
</template>
<script>
// @ is an alias to /src
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import About from '@/components/About.vue'
import ContentsItem from '@/components/ContentsItem.vue'
import EntryThumbnail from '@/components/EntryThumbnail.vue'
import Titlecosmo from '@/components/Titlecosmo.vue'
import Loading from '@/icons/Loading.vue'
export default {
  name: 'Home',
  components: {
    About,
    EntryThumbnail,
    ContentsItem,
    Loading,
    Titlecosmo
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
.aboutus{
  background-repeat: no-repeat;
  background-image: url("../assets/background.png");
  background-size: 100% auto;
  background-position: bottom 0px right 50%;
}
.creator{
  display: flex;
  justify-content: space-around;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
}
.menber{
  display: block;
  padding: 30px;
  border-radius: 15px;
  width: 300px;
  margin: 0 50px;
}
.menber-category{
  color: #fff;
  font-size: 18px;
  padding-bottom: 30px;
  text-align: center;
  border-bottom: solid 1px #fff;
  font-family: 'Kaisei Opti', serif;
}
.gra{
  background-color:#e95679;
}
.web{
  background-color:#02569c;
}
.menber-person{
  padding-bottom: 5px;
  border-bottom: solid 1px #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.menber-person-lead{
  color: #fff;
  font-size: 10px;
  width: 50%;
  text-align: left;
}
.menber-person-title{
  color: #fff;
  font-size: 18px;
  width: 50%;
  text-align: left;
}
</style>