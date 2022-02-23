<template>
    <header class="header">
        <section class="header-title">
            <p class="header-subtitle">小金井市観光スポット紹介サイト</p>
            <h1 class="header-img"><router-link to="/"><img src="../assets/logo.png" alt=""></router-link></h1>
        </section>
        <nav class="header-nav">
            <dl class="header-nav-content">
                <dt class="header-nav-img"><router-link to="/Spotsearch"><img src="../assets/routesearch.png" alt=""></router-link></dt>
                <dd class="header-nav-title"><router-link to="/Spotsearch">ルート検索</router-link></dd>
            </dl>
            <dl class="header-nav-content">
                <dt class="header-nav-img"><router-link to="/Pamphlet"><img src="../assets/Pamphlet.png" alt=""></router-link></dt>
                <dd class="header-nav-title"><router-link to="/Pamphlet">パンフレット版を見る</router-link></dd>
            </dl>
            <dl class="header-nav-content">
                <dt class="header-nav-img"><router-link to="/Aboutus"><img src="../assets/aboutus.png" alt=""></router-link></dt>
                <dd class="header-nav-title"><router-link to="/Aboutus">こがねいさんぽとは？</router-link></dd>
            </dl>
            <dl class="header-nav-content">
                <dt class="header-nav-img"><router-link to="/Photogallery"><img src="../assets/photogallery.png" alt=""></router-link></dt>
                <dd class="header-nav-title"><router-link to="/Photogallery">こがねいさんぽとは？</router-link></dd>
            </dl>
        </nav>
        <div id="nav-wrapper" class="header-responsive">
        <div class="hamburger" id="js-hamburger">
            <span class="hamburger__line hamburger__line--1"></span>
            <span class="hamburger__line hamburger__line--2"></span>
            <span class="hamburger__line hamburger__line--3"></span>
        </div>
        <nav class="header-nav-responsive">
            <dl class="header-nav-content-responsive">
                <dt class="header-nav-img"><router-link to="/Spotsearch"><img src="../assets/routesearch.png" alt=""></router-link></dt>
                <dd class="header-nav-title"><router-link to="/Spotsearch">ルート検索</router-link></dd>
            </dl>
            <dl class="header-nav-content-responsive">
                <dt class="header-nav-img"><router-link to="/Pamphlet"><img src="../assets/Pamphlet.png" alt=""></router-link></dt>
                <dd class="header-nav-title"><router-link to="/Pamphlet">パンフレット版を見る</router-link></dd>
            </dl>
            <dl class="header-nav-content-responsive">
                <dt class="header-nav-img"><router-link to="/Aboutus"><img src="../assets/aboutus.png" alt=""></router-link></dt>
                <dd class="header-nav-title"><router-link to="/Aboutus">こがねいさんぽとは？</router-link></dd>
            </dl>
            <dl class="header-nav-content-responsive">
                <dt class="header-nav-img"><router-link to="/Photogallery"><img src="../assets/photogallery.png" alt=""></router-link></dt>
                <dd class="header-nav-title"><router-link to="/Photogallery">こがねいさんぽとは？</router-link></dd>
            </dl>
        </nav>
        <div class="black-bg" id="js-black-bg"></div>
        </div>
    </header>
    
</template>
<style lang="scss" scoped>
.header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 30px;
    box-sizing: border-box;
}
.header-title{
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:Column;
    height: 100px;
    font-family: 'Kiwi Maru', serif;
}
.header-img{
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
.header-subtitle{
    color: #000;
    font-size: 5px;
    padding-bottom:5px;
    text-decoration: none;  
}
.header-nav{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.header-nav-content{
    margin : 0 20px;
}
.header-nav-img{
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
.header-nav-title{   
        font-size: 12px;
        & :hover {
            opacity: 0.5;
            transition : all 0.3s ease 0s;
        }
        & a {
        color: #000;
        text-decoration: none;
        }
}
/* 
hamburger(ハンバーガーアイコン)
=================================== */
.hamburger {
  position: absolute;
  right: 20px;
  top: calc(50px - 25px);
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 300;
  border-radius: 10%;
  background-color: #ea6227;
  box-sizing: border-box;
}

.hamburger__line {
  position: absolute;
  width: 20px;
  height: 4px;
  border-radius: 2px;
  right: calc(50% - 10px);
  background-color: #fff;
  transition: all 0.5s;
}

.hamburger__line--1 {
  top: 15px;
}

.hamburger__line--2 {
  top: calc(50% - 2px);
}

.hamburger__line--3 {
  bottom: 15px;
}

/*ハンバーガーがクリックされたら*/
.open .hamburger__line--1 {
  transform: rotate(-45deg);
  top: calc(50% - 2px)
}

.open .hamburger__line--2 {
  opacity: 0;
}

.open .hamburger__line--3 {
  transform: rotate(45deg);
  top: calc(50% - 2px)
}

/* 
sp-nav(ナビ)
=================================== */
.header-responsive{
    display: none;
    @media screen and (max-width:1024px) {
        display: block;
    }
}
.header-nav-responsive {
        position: fixed;
        right: -100%; /*ハンバーガーがクリックされる前はWindow右側に隠す*/
        top: 0;
        width: 50%; /* 出てくるスライドメニューの幅 */
        height: 100vh;
        background-color: #fff;
        transition: all 0.5s;
        z-index: 200;
        overflow-y: auto; /* メニューが多くなったらスクロールできるように */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
}
.header-nav-content-responsive{
    width: 50%;
}
/*ハンバーガーがクリックされたら右からスライド*/
.open .header-nav-responsive {
  right: 0;
}


/* 
black-bg(ハンバーガーメニュー解除用bg)
=================================== */
.black-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: #ea6227;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 100;
}

/*ハンバーガーメニューが開いたら表示*/
.open .black-bg {
  opacity: 0.3;
  visibility: visible;
}

</style>
<script language="javascript" type="text/javascript">

    window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};


</script>