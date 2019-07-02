<template>
  <div class="wrapper">
    <ul class="container">
      <li v-for="item in list" :key="item.id" class="item">
        <figure>
          <imgr :src="item.imgUrl" style="width: 100%; height: 2rem" />
          <figcaption>
            <h3>{{ item.title }}</h3>
          </figcaption>
        </figure>
      </li>
    </ul>
    <menu class="play">
      <button @click="prev" class="left">
        <img src="/img/icons/prev.png" class="icon" />
      </button>
      <button @click="next" class="right">
        <img src="/img/icons/next.png" class="icon" />
      </button>
    </menu>
  </div>
</template>


<script>
  export default {
    name: 'Carousel',
    props: {
      list: Array
    },
    method: {
      prev() {
        
      }
    }
  }
</script>


<style scoped>
</style>