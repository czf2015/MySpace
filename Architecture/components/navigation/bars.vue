<template>
  <div class="wrapper">
    <button @click="show = !show"  id="switch">
      <img src="/img/icons/open.png" v-show="!show" class="icon"/>
      <img src="/img/icons/close.png" v-show="show" class="icon"/>
    </button>
    <ul v-show="show" class="container">
      <li v-for="(item, index) in list" :key="item.index"  class="item">
        <nuxt-link :to="item.link">
          <img :src="item.imgUrl" :alt="item.title" class="icon" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bars',
  data () {
    return {
      show: false,
      list: [{
        title: '',
        imgrUrl: '',
        link: ''
      }]
    }
  }
}
</script>

<style scoped>
  #switch {
    position: fixed;
    bottom: 5px;
    right: 5px;
    background: #fff;
  }

  .container {
    position: fixed;
    bottom: 1px;
    right: 0;
    width: 16px;
    background: #fff;
  }

  .item {
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
</style>
