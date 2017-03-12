<template>
  <goods-list></goods-list>
</template>

<script>
import goodsList from 'components/good/GoodsList'
export default {
  name: 'Me',
  data () {
    return {
      msg: '我'
    }
  },
  components: {goodsList}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
