<template>
<section class="topentry">
    <section class="mainentry entry-1">
      <p class="mainentry-category">小金井新橋ルート</p>
      <h2 class="mainentry-title color-1">ムジナ坂</h2>
      <p class="mainentry-link"><a href="https://koganeisanpo.netlify.app/#/entry/ai_-o9r5ezfx">記事を見る</a></p>
    </section>
    <section class="mainentry entry-2">
      <p class="mainentry-category">小金井新橋ルート</p>
      <h2 class="mainentry-title color-2">はけの森カフェ</h2>
      <p class="mainentry-link"><a href="https://koganeisanpo.netlify.app/#/entry/tfc7q4mrtct">記事を見る</a></p>
    </section>
    <section class="mainentry entry-3">
      <p class="mainentry-category">小金井新橋ルート</p>
      <h2 class="mainentry-title color-3">小金井新橋</h2>
      <p class="mainentry-link"><a href="https://koganeisanpo.netlify.app/#/entry/m3gzz_jpg5">記事を見る</a></p>
    </section>
    <section class="mainentry entry-4">
      <p class="mainentry-category">小金井公園ルート</p>
      <h2 class="mainentry-title color-4">東京たてもの園</h2>
      <p class="mainentry-link"><a href="https://koganeisanpo.netlify.app/#/entry/ai_-o9r5ezfx">記事を見る</a></p>
    </section>
</section>
</template>
<script>
export default {
  name: 'Home',
  components: {
  },
}
</script>
<style lang="scss" scoped>
.topentry {
    background-image: url("../assets/topentry-background.png");
    position: relative;
    background-repeat: repeat;
    background-size: 1200px auto;
    background-position: 0% 0%;
    height: 1200px;
    box-sizing: border-box;
    background-color:rgba(255,255,255,0.3);
    z-index: 8000;
}
.mainentry{
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    box-sizing: border-box;
    display: flex;
    flex-direction:column;

}
.entry-1{
    background-image: url("../assets/topentry-1.png");
    box-sizing: border-box;
    padding-top: 45px;
    width: 250px;
    height: 250px;
    position: absolute;
    top: 500px;
    left: 10%;
}
.entry-2{
    background-image: url("../assets/topentry-2.jpg");
    box-sizing: border-box;
    padding-top: 70px;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 700px;
    right: 10%;
}
.entry-3{
    background-image: url("../assets/topentry-3.jpg");
    box-sizing: border-box;
    padding-top: 60px;
    width: 275px;
    height: 275px;
    position: absolute;
    top: 100px;
    right: 35%;
    
}
.entry-4{
    background-image: url("../assets/topentry-4.jpg");
    box-sizing: border-box;
    padding-top: 60px;
    width: 275px;
    height: 275px;
    position: absolute;
    top: 800px;
    left: 20%;
}
.mainentry-category{
    display: inline-block;
    font-size: 12px;
    color:#fff;
    padding-bottom:10px;
    border-bottom:solid 1px #fff;
    width: 50%;
    margin: 0px auto 0;
}
.mainentry-title{
    font-size: 15px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    color:#000;
    width: 50%;
    margin: 20px auto 20px;
}
.color-1{
    color:#da5474;
}
.color-2{
    color:#de602a;
}
.color-3{
    color:#40bad5;
}
.color-4{
    color:#035aa6;
}
.mainentry-link{
    width:50%;
    margin:0 auto;
    padding: 10px;
    font-size: 12px;
    border-radius: 10px;
    border:solid 1px #fff;
    & a{
        color: #fff;
        text-decoration: none;
        
    }
    & :hover {
         opacity: 0.7;
         transition : all 0.3s ease 0s;
        }
}
</style>