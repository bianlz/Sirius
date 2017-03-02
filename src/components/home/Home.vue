<template>
  <div class="Home">   
    <goods-show></goods-show>
  </div>
</template>

<script>
import goodsShow from 'components/common/GoodsShow'
export default {
  name: 'Home',
  data () {
    return {
      msg: '主页'
    }
  },
  components: {goodsShow}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
