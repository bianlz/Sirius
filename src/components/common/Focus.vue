<template>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in items"  >
          <img v-bind:src="item.img" alt="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" ></div>
      </swiper>
</template>

<script>
import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getFocusList } from 'utils/apiUtil'
require('swiper/dist/css/swiper.css')

export default {
  name: 'Focus',
  data () {
    return {
      items:[],
      swiperOption: {
          autoplay: 5000,
          pagination: '.swiper-pagination',
          paginationClickable: true,
      }
    }
  },
  mounted:function(){
    this.getList();
  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{
    getList:function() {
      getFocusList(this);
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
