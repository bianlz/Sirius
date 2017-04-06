<template>
  <div>
    <ul class="list-group" >
        <div v-for="item in items" class="goodsDiv col-xs-2 text-left"  >
            <img v-bind:src="item.img" alt="item" />
            <div class="detail">
              <h2>{{item.name}}</h2>
              ¥ {{item.price}}/份
            </div>
        </div>
    </ul>
    <div class="listBottom">
            
    </div>
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
      height: 400px;
      width: 50%;
      border-bottom: 3px outset; 
      padding: 0 0 0 0;
    }
    .goodsDiv:nth-of-type(odd){
      border-right: 2px outset;
    }
    .goodsDiv:nth-of-type(even){
      border-left: 2px outset; 
    }
    img {
      height: 75%;
      width: 100%;
    }
    .detail {
      text-align: center;
      font-size: 20px
    }
    .listBottom{
      height: 800px;
      width: 100%
    }
</style>