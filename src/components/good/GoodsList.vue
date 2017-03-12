<template>
  <div>
    <ul class="list-group" >
      <li v-for="item in items" class="list-group-item" >
        <div class="goodsDiv">
          {{ item.img }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getGoodsList } from 'utils/apiUtil'
export default {
  name: 'goodsList',
  data () {
    return {
      items:[]
    }
  },
  mounted:function(){
  		this.getList();
  },
  methods:{
    getList:function(){
      getGoodsList(this); 
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .goodsDiv {
      height: 300px;
    }
</style>