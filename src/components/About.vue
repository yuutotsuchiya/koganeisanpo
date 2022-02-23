<template>
    <section class="about">
        <section class="about-section">
            <h2 class="about-title">About</h2>
            <p class="about-name">yuto tsuchiya</p>
            <p class="about-birthday">2001 / 11 / 21</p>
            <p class="about-skill">HTML / CSS / Javascript / Vue / photoshop / illistrator</p>
        </section>
        <p class="about-img"></p>
    </section>
</template>
<style lang="scss" scoped>
.about {
    padding: 16px 0;
    background-color: #ff6701;
    color: #fff;
    position: relative;
    min-height: 300px;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    & > * {
        margin: 0 auto;
        width: 100%;
        max-width: 896px;
    }
    &:after {
        margin: 0 auto;
        position: absolute;
        display: block;
        content: '';
        width: 2000px;
        height: 2000px;
        background-color: rgba(0, 0, 0, 0.1);
        transform: rotate(15deg);
        left: -1900px;
        right: 0;
    }
}
.about-title{
    padding: 0 16px;
    margin: 0 auto 8px;
    font-size: 24px;
    &:after{
        content: '';
        display: block;
        width: 200px;
    }
    @media screen and (max-width:896px){
        padding: 0 12px;
    }
}
.about-img{
    background-image: url('../assets/aboutme.jpg');
    background-size:100% auto;
    margin: auto;
    width: 130px;
    height: 130px;
    background-color: #fff;
    border-radius: 6px;
    position: absolute;
    top: 0;
    right: 30px;
    left: 860px;
    bottom: 0;
    @media screen and (max-width:600px){
        margin:10px auto;
        position: static;
    }
    @media screen and (max-width:896px){
        right: 16px;
    }
    @media screen and (max-width:1024px){
        left: auto;
    }
}
.about-name{
    padding: 0 16px;
    font-size:28px;
    @media screen and (max-width:896px){
        padding: 0 12px;
    }
}
.about-birthday{
    padding: 0 16px;
    font-size:14px;
    margin-bottom: 16px;
    @media screen and (max-width:896px){
        padding: 0 12px;
    }
}
.about-skill{
    padding: 0 16px;
    font-size:16px;
    @media screen and (max-width:896px){
        padding: 0 12px;
    }
}
</style>