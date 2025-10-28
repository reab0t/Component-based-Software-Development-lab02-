<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import {storeToRefs} from "pinia";

const store = useMessageStore()
const {message} = storeToRefs(store)

//import EventCard from './components/EventCard.vue'
</script>

<template>

    <div class="text-center font-sans text-gray-700 antialias">
      <header>
        <div id="flashMessage" class="animate-fade" v-if="message">
          <h4>{{message}}</h4>
        </div>
        <div class="wrapper">
          <nav class="py-6">
            <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view' }">Event</RouterLink> |
            <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink> |
            <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'student-list-view' }">Students</RouterLink>
          </nav>
        </div>
      </header>

      <main class="flex-1 flex flex-col items-center w-full max-w-[1200px] mx-auto p-[20px]">
        <RouterView />
      </main>
    </div>
</template>

<style scoped>
h2{
  @apply text-lg
}
</style>
