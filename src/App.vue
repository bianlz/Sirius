<template>
  <div id="app" class="container-fluid" >
    <router-view></router-view>
    <div id="nav" class="navbar-fixed-bottom" >
      <ul class="nav nav-tabs ">
        <li><a href="javascript:void(0)"><img src="/static/home.png"><label>主页</label></a></li>
        <li><a href="javascript:void(0)"><img src="/static/food.png"><label>菜品</label></a></li>    
        <li><a href="javascript:void(0)"><img src="/static/promotion.png"><label>活动</label></a></li>
        <li><a href="javascript:void(0)"><img src="/static/me.png"><label>我</label></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom:100%
}

#nav {
  -webkit-transform: translate3d(0,0,0);
  background-color: #d9d9d9;
}

#nav div {
  margin-bottom: 0px;
  width: 25%;
}
#nav li {
  margin-bottom: 0px;
  width: 25%;
}
</style>