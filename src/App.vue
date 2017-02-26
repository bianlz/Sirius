<template>
  <div id="app" class="container-fluid" >
    <router-view></router-view>
    <div id="nav" class="navbar-fixed-bottom" >
      <ul class="nav nav-tabs ">
        <li><router-link to="/"><img src="/static/home.png"></br></br><label>主 页</label></router-link></li>
        <li><router-link to="/goods"><img src="/static/food.png"></br></br><label>菜 品</label></router-link></li>    
        <li><router-link to="/promotion"><img src="/static/promotion.png"></br></br><label>活 动</label></router-link></li>
        <li><router-link to="/me"><img src="/static/me.png"></br></br><label>我</label></router-link></li>
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

label{
  font-size: 25px;
}

#nav {
  -webkit-transform: translate3d(0,0,0);
  background-color: #d9d9d9;
}
#nav li {
  margin-bottom: 0px;
  width: 25%;
}
#nav img{
  display:inline-block;
}
</style>