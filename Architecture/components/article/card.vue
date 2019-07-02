<template>
  <ul class="container">
    <li class="item" v-for="(item, index) in list" :key="item.index">
      <a href="">
        <figure>
          <img :src="item.imgUrl" style="width: 100%; height: 5rem;"/>
          <figcaption>
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
          </figcaption>
        </figure>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      list: Array
    } 
  }
</script>

<style>
  .container {
    text-align: center;
  }

  .item {
    display: inline-block;
    width: 5rem;
    margin: 1rem;
  }
</style>