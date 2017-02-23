<template>
  <div id="app">
    <router-view></router-view>
    <div class="top_bar" style="-webkit-transform: translate3d(0,0,0)">
        <nav>
            <ul id="top_menu" class="top_menu">
                <li><a href="tel:88888888"><img src="/static/home.png"><label>主页</label></a></li>
                <li><a href="javascript:void(0)"><img src="/static/food.png"><label>菜品</label></a></li>    
                <li class="home"><a href="javascript:void(0)"></a></li>
                <li><a href="javascript:void(0)"><img src="/static/promotion.png"><label>活动</label></a></li>
                <li><a href="javascript:void(0)"><img src="/static/me.png"><label>我</label></a></li>   
            </ul>
        </nav>
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
}
body{
  margin-bottom: 60px !important;
}
a, button, input{
  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
}
.top_bar{
  position: fixed;
  z-index: 900;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-family: Helvetica, Tahoma, Arial, Microsoft YaHei, sans-serif;
}
.top_menu{
  display: -webkit-box;
  border-top: 1px solid #3D3D46;
  display: block;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  height: 144px;
  display: -webkit-box;
  display: box;
  margin: 0;
  padding: 0;
  -webkit-box-orient: horizontal;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#524945), to(#48403c), color-stop(60%, #524945));
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1) inset;
}
.top_bar .top_menu > li{
  -webkit-box-flex: 1;
  position: relative;
  text-align: center;
}
.top_menu li:first-child{
  background: none;
}
.top_bar .top_menu > li > a{
  height: 144px;
  margin-right: 1px;
  display: block;
  text-align: center;
  color: #FFF;
  text-decoration: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  -webkit-box-flex: 1;
}
.top_bar .top_menu > li.home{
    max-width: 100px;
}
.top_bar .top_menu > li.home a{
    height: 96px;
    width: 96px;
    margin: auto;
    border-radius: 60px;
    position: relative;
    top: -22px;
    left: 2px;
    background: url('/static/shoppingCart.png') no-repeat center center;
    background-size: 100% 100%;
}
.top_bar .top_menu > li > a label{
    overflow: hidden;
    margin: 0 0 0 0;
    font-size: 12px;
    display: block !important;
    line-height: 18px;
    text-align: center;
}
.top_bar .top_menu > li > a img{
    padding: 20px 0 0 0;
    height: 72px;
    width: 72px;
    color: #fff;
    line-height: 144px;
    vertical-align: middle;
}
.top_bar li:first-child a{
    display: block;
}
.menu_font{
    text-align: left;
    position: absolute;
    right: 10px;
    z-index: 500;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#524945), to(#48403c), color-stop(60%, #524945));
    border-radius: 5px;
    width: 120px;
    margin-top: 10px;
    padding: 0;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
}
.menu_font.hidden{
    display: none;
}
.menu_font{
    top: inherit !important;
    bottom: 60px;
}
.menu_font li a{
    height: 40px;
    margin-right: 1px;
    display: block;
    text-align: center;
    color: #FFF;
    text-decoration: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    -webkit-box-flex: 1;
}
.menu_font li a{
    text-align: left !important;
}
.top_menu li:last-of-type a{
    background: none;
    overflow: hidden;
}
.menu_font:after{
    top: inherit !important;
    bottom: -6px;
    border-color: #48403c rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    border-width: 6px 6px 0;
    position: absolute;
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    left: 80%;
}
.menu_font li{
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.menu_font li:first-of-type{
    border-top: 0;
}
.menu_font li:last-of-type{
    border-bottom: 0;
}
.menu_font li a{
    height: 40px;
    line-height: 40px !important;
    position: relative;
    color: #fff;
    display: block;
    width: 100%;
    text-indent: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.menu_font li a img{
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-top: -2px;
    color: #fff;
    line-height: 40px;
    vertical-align: middle;
}
.menu_font > li > a label{
    padding: 3px 0 0 3px;
    font-size: 14px;
    overflow: hidden;
    margin: 0;
}
#menu_list0{
    right: 0;
    left: 10px;
}
#menu_list0:after{
    left: 20%;
}
#sharemcover{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: none;
    z-index: 20000;
}
#sharemcover img{
    position: fixed;
    right: 18px;
    top: 5px;
    width: 260px;
    height: 180px;
    z-index: 20001;
    border: 0;
}
.top_bar .top_menu > li > a:hover, .top_bar .top_menu > li > a:active{
    background-color: #333;
}
.menu_font li a:hover, .menu_font li a:active{
    background-color: #333;
}
.menu_font li:first-of-type a{
    border-radius: 5px 5px 0 0;
}
.menu_font li:last-of-type a{
    border-radius: 0 0 5px 5px;
}
#plug-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    z-index: 800;
}
#cate18 .device{
    bottom: 49px;
}
#cate18 #indicator{
    bottom: 240px;
}
#cate19 .device{
    bottom: 49px;
}
#cate19 #indicator{
    bottom: 330px;
}
#cate19 .pagination{
    bottom: 60px;
}
</style>
