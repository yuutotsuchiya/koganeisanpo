<template>
    <ul class="sns">
        <li class="sns-item"><a href="https://github.com/yuutotsuchiya" target="_blank"><Github />github</a></li>
    </ul>
</template>
<script>
import Github from '@/icons/github.vue'
export default {
  name: 'Home',
  components: {
    Github
  },
}
</script>
<style lang="scss" scoped>
.sns{
    padding: 16px 0;
    background-color: #ff6701;
    color: #fff;
    position: relative;
    overflow: hidden;
    text-align: center;
    &:after{
        margin: 0 auto;
        position: absolute;
        display: block;
        content: '';
        width: 2000px;
        height: 2000px;
        background-color: rgba(0,0,0,0.1);
        transform: rotate(15deg);
        top: -1000px;
        left:-2300px;
        right:0;
    }
}
.sns-item{
    display: block;
    margin: 16px 24px;
    font-size: 18px;
    & svg{
        vertical-align: middle;
        margin-right: 8px;
    }
    & a{
        color:#fff;
        text-decoration: none;
        &:hover{
            opacity: 0.8;
        }
    }
    @media screen and (max-width:600px){
    display:block
}
}

</style>