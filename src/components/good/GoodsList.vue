<template>
	<div id="scroller">
	  <scroller :on-refresh="refresh"
              :on-infinite="infinite"
              ref="my_scroller">
      <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}">
        {{ item.img }}
      </div>
    </scroller>
	</div>
</template>

<script>

import scroller from 'vue-scroller'
import { getGoodsList } from 'utils/apiUtil'

export default {
  name: 'goodsList',
  data () {
    return {
      items:[{"img":"123"}]
    }
  },
  mounted:function(){
  		
  },
  methods:{
  	refresh:function(){
        
    },
    infinite:async function(){
      let rtn = await getGoodsList(); 
      if(rtn.code==10000){
        for (var i = 0; i < rtn.data.length; i++) {
            this.items.push(rtn.data[i]);
        }
        if(this.$refs.my_scroller){
          this.$refs.my_scroller.resize();
          console.log("infinite")
        }
      }
    }
  },
  components: {scroller}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html, body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  .row {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
  }
  .grey-bg {
    background-color: #eee;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color: #fff;
    z-index: 1000;
    color: #666;
  }
  .header > .title {
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
  }
</style>