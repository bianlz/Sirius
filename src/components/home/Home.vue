<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
    <goodsShow></goodsShow>
  </div>
</template>

<script>
import Vue from 'vue'
import goodsShow from 'components/common/GoodsShow'
export default {
  name: 'Home',
  data () {
    return {
      msg: '主页'
    }
    components: {
	    goodsShow
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
