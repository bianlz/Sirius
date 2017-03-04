<template>
  	<div id="container" v-on:mouseover="containerMouseover()" v-on:mouseout="containerMouseout()" >
  		<div id="content" :style="{left:leftLength+'px'}" >{{message}}</div>
	</div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      leftLength:0,
      time:0,
      message:"今日公告:说鸡不带吧 文明你我他",
      speed:1
    }
  },
  mounted:function(){
  	this.$nextTick(function () {
    	// 代码保证 this.$el 在 document 中
  		this.roll();
  	})
  },
  methods:{
  	roll:function(){
  		let self = this;
		var speed=(document.all)?self.speed:Math.max(1,self.speed-1);
	    var $container=self.$el.querySelector("#container");
	    var $content=self.$el.querySelector("#content");
	    var init_left=self.$el.scrollWidth;
	    this.leftLength = init_left;
	    this.time=setInterval(function(){self.move();},20);
    },
    move:function(){
      	var container_width = this.$el.scrollWidth;
      	var content_width = this.$el.querySelector("#content").scrollWidth;
      	if(parseInt(this.leftLength) + content_width > 0){
        	this.leftLength = parseInt(this.leftLength) - this.speed;
      	}
      	else{
      		this.leftLength = parseInt(container_width);
      	}
    },
    containerMouseover:function(){
    	clearInterval(this.time);
    },
    containerMouseout:function(){
    	let $container=this
    	this.time=setInterval(function(){
    		$container.move();	
    	},20);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content{
  position:absolute;
  left:0;
  top:0;
  white-space:nowrap;
  font-size: 20px;
}
#container{
  background:#CCCCCC;
  position:relative;
  overflow:hidden;  
  width:100%;
  height:40px;
  line-height:40px;
  margin:0px;
}
</style>
