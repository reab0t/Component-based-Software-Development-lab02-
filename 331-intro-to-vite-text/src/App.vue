<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import EventCard from './components/EventCard.vue'
</script>

<template>

    <div id="layout">
      <header>
        <div class="wapper">
          <nav>
            <RouterLink to="/">Event</RouterLink> |
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
      </header>


      <RouterView />
    </div>
</template>

<style >

 #layout{
   front-family:Avenir,Helvetica,Arial,sans-serif;
   -webkit-font-sommthing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#2c3e50;
}
 h2{
   front-size:20px;
 }
nav{
  padding:30px;
}

nav a {
  font-weight:bold;
  color:#2c3e50;
}

nav a.router-link-exact-active{
  color:#42b983;
 }
</style>
