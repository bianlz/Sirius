<template>
  <div class="Home">   
    <goods-show></goods-show>
    <notice></notice>
  </div>
</template>

<script>
import goodsShow from 'components/common/GoodsShow'
import notice from 'components/common/Notice'
export default {
  name: 'Home',
  data () {
    return {
      msg: '主页'
    }
  },
  components: {goodsShow,notice}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
