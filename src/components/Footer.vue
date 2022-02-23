<template>
    <header class="main-header">
        <SNS />
       <p class="main-title"><a href="">&copy; copyright tsuchiya</a></p> 
    </header>
</template>
<script>
import SNS from '@/components/Sns.vue'
export default {
  name: 'Home',
  components: {
    SNS
  },
}
</script>

<style lang="scss" scoped>
.main-header{
    background: #fea82f;
}
.main-title{
    padding:16px;
    font-size:1px;
    color:#fff;
    margin:0 auto;
    & a {
     color: #fff; 
     text-decoration: none;
    }
    & :hover {
         opacity: 0.8;
     }
}
</style>