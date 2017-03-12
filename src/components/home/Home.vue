<template>
  <div class="Home">   
    <focus></focus>
    <notice></notice>
    <goods-list></goods-list>
  </div>
</template>

<script>
import focus from 'components/common/Focus'
import notice from 'components/common/Notice'
import goodsList from 'components/good/GoodsList'
export default {
  name: 'Home',
  data () {
    return {
      msg: '主页'
    }
  },
  components: {focus,notice,goodsList}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
