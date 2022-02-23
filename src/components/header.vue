<template>
    <header class="main-header">
       <h1 class="main-title"><a href="">tsuchiya`s portfolio</a></h1> 
       <figure class="main-title-img"><img src="../assets/logo.png" alt=""></figure>
    </header>
</template>
<style lang="scss" scoped>
.main-header{
    background: #fea82f;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:row-reverse;
    height: 80px;
}
.main-title{
    padding:16px;
    font-size:18px;
    color:#fff;
    & a {
        color: #fff; 
        text-decoration: none; 
    }
    & :hover {
         opacity: 0.8;
         transition : all 0.3s ease 0s;
     }
}
.main-title-img img{
    padding-top: 5px;
    width: 40px;
    height: auto;
}
</style>
