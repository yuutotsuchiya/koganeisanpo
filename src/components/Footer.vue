<template>
    <footer>
      <section class="footer">
        <section class="footer-title">
            <p class="footer-subtitle">小金井市観光スポット紹介サイト</p>
            <h1 class="footer-img"><router-link to="/"><img src="../assets/logo-orange.png" alt=""></router-link></h1>
        </section>
        <nav class="footer-nav">
            <dl class="footer-nav-content">
                <dt class="footer-nav-img"><router-link to="/Spotsearch"><img src="../assets/routesearch-orange.png" alt=""></router-link></dt>
                <dd class="footer-nav-title"><router-link to="/Spotsearch">ルート検索</router-link></dd>
            </dl>
            <dl class="footer-nav-content">
                <dt class="footer-nav-img"><router-link to="/Pamphlet"><img src="../assets/Pamphlet.png" alt=""></router-link></dt>
                <dd class="footer-nav-title"><router-link to="/Pamphlet">パンフレット版を見る</router-link></dd>
            </dl>
            <dl class="footer-nav-content">
                <dt class="footer-nav-img"><router-link to="/Aboutus"><img src="../assets/aboutus-orange.png" alt=""></router-link></dt>
                <dd class="footer-nav-title"><router-link to="/Aboutus">こがねいさんぽとは？</router-link></dd>
            </dl>
            <dl class="footer-nav-content">
                <dt class="footer-nav-img"><router-link to="/Photogallery"><img src="../assets/photogallery-orange.png" alt=""></router-link></dt>
                <dd class="footer-nav-title"><router-link to="/Photogallery">こがねいさんぽとは？</router-link></dd>
            </dl>
        </nav>
      </section>
      <p class="footer-copy"><a href="/">&copy; copyright koganeisanpo</a></p>
    </footer>

</template>
<script>
export default {
  name: 'Home',
  components: {
    
  },
}
</script>

<style lang="scss" scoped>
footer{
  background-color: #fad4af;
}
.footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction:row;
    margin: 0 30px;
    box-sizing: border-box;
    height: 120px;
    @media screen and (max-width:1024px) {
        flex-direction:column;
        height: auto;
        padding: 30px 0;
    }
}
.footer-title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:Column;
    height: 100px;
    font-family: 'Kiwi Maru', serif;
}
.footer-img{
    & img {
    width: 200px;
    height: auto;
    }
    & router-link {
    color: #fff; 
    }
    & :hover {
         opacity: 0.8;
         transition : all 0.3s ease 0s;
     }
}
.footer-subtitle{
    color: #de602a;
    font-size: 5px;
    padding-bottom:5px;
    text-decoration: none;  
}
.footer-nav{
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:700px) {
        display: block;
    }
}
.footer-nav-content{
    margin : 0 20px;
    @media screen and (max-width:700px) {
        margin : 50px 0px;
        &:nth-child(1){
            margin-top:0
        }
        &:nth-child(4){
            margin-bottom:0
        }
    }
}
.footer-nav-img{
    & img {
        width: 30px;
        height: auto;
        padding-bottom: 5px;
    }
    & :hover {
         opacity: 0.8;
         transition : all 0.3s ease 0s;
    }
}
.footer-nav-title{   
        font-size: 12px;
        & :hover {
            opacity: 0.5;
            transition : all 0.3s ease 0s;
        }
        & a {
        color: #de602a;
        text-decoration: none;
        }
}
.footer-copy{
    padding:16px;
    font-size:1px;
    color:#de602a;
    margin:0 auto;
    & a {
      color: #de602a; 
      text-decoration: none;
    }
    & :hover {
        opacity: 0.8;
     }
}
</style>