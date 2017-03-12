<template>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488454692251&di=3339bcf6e3bddc1f0b55f1fadbd17217&imgtype=0&src=http%3A%2F%2Fimg1.xcarimg.com%2Fbbs%2F1364%2Fm_201211280943081076991.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488454713896&di=0b85431d42dd4b5e8f0bf08714197a34&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffilebroker%2Fcdn%2Fonline%2F9a%2Fd9%2F9ad998b6_w640_h320_c1_t0.jpg" alt=""/></swiper-slide>
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489049551&di=fb8ed1efa4ed66aab27a92c03386522c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.xcarimg.com%2Fbbs%2F1364%2Fm_20130605183832710183.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488454858156&di=6ab0828ce50bbdcb60bfa35691a42075&imgtype=0&src=http%3A%2F%2Fwww.yiwu.cn%2Fdata%2Fattachment%2Fforum%2F201504%2F17%2F132910y5lag5a3paq5ygxq.jpg" alt=""/></swiper-slide>
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488454949239&di=e641d919c3a71d68fdba9af931015d99&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffilebroker%2Fcdn%2Fsnc%2Fc5%2F4c%2Fc54cd4eda263e503d40967235e12b5f2_w640_h320_c1_t0.jpg" alt="" /></swiper-slide>
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488454994047&di=22ab157427ebeed17c7c0a7a4f3e997d&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffilebroker%2Fcdn%2Folb%2F6d%2F0a%2F6d0ac21891b4b0483101f90484980121_w640_h320_c1_t0.jpg" alt="" /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getGoodsList } from 'utils/apiUtil'
require('swiper/dist/css/swiper.css')

export default {
  name: 'Goods',
  data () {
    return {
      swiperOption: {
          autoplay: 5000,
          pagination: '.swiper-pagination',
          paginationClickable: true,
      }
    }
  },
  mounted:function(){
    //this.getList();
  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{
    getList:function() {
        //let data = await getGoodsList();
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 100%;
}
</style>
