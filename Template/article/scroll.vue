<template>
  <ul class="container">
    <li class="item" v-for="(item, index) in list" :key="item.index">
      <nuxt-link :to="item.link">
        <figure>
          <img :src="item.imgUrl" style="width: 100%; height: 2rem;"/>
          <figcaption>
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
          </figcaption>
        </figure>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Scroll',
    props: {
      list: Array
    } 
  }
</script>

<style>
  .container {
    white-space: nowrap;
    margin: .5rem 0;
  }

  .item {
    display: inline-block;
    position: relative;
    width: 2rem;
    margin-right: .5rem;
    list-style: none;
    text-align: center;
  }
</style>