<template>
  <section class="search">
    <HeaderTop title="搜索"/>
    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" name="submit" class="search_submit">
    </form>
  </section>

</template>

<script>
  //导入分组件
  import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
  export default {
    components:{
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/Search.styl";
</style>
