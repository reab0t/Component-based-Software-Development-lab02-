<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import {storeToRefs} from "pinia";

const store = useMessageStore()
const {message} = storeToRefs(store)

//import EventCard from './components/EventCard.vue'
</script>

<template>

    <div id="layout">
      <header>
        <div id="flashMessage" v-if="message">
          <h4>{{message}}</h4>
        </div>
        <div class="wapper">
          <nav>
            <RouterLink :to="{ name: 'event-list-view' }">Event</RouterLink> |
            <RouterLink :to="{ name: 'about' }">About</RouterLink> |
            <RouterLink :to="{ name: 'student-list-view' }">Students</RouterLink>
          </nav>
        </div>
      </header>


      <RouterView />
    </div>
</template>

<style >

 #layout{
   font-family:Avenir,Helvetica,Arial,sans-serif;
   -webkit-font-sommthing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#2c3e50;
}
 h2{
   font-size:20px;
 }
 @keyframes yellowfade {
   from {
     background-color: yellow;
   }
   to {
     background-color: transparent;
   }
 }
 #flashMessage{
   animation:yellowfade 3s ease-in-out;
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
