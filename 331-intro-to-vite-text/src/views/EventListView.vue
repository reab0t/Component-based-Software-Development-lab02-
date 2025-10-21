<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventInfo from '@/components/EventInfo.vue'
import type { Event } from '@/types'

import { ref } from 'vue'

const events = ref<Event[]>([

   {

   id: 5928101,

   category: 'animal welfare',

   title: 'Cat Adoption Day',

   description: 'Find your new feline friend at this event.',

   location: 'Meow Town',

   date: 'January 28, 2022',

   time: '12:00',

   petsAllowed: true,

   organizer: 'Kat Laydee'

 },

 {

 id: 4582797,

   category: 'food',

   title: 'Community Gardening',

   description: 'Join us as we tend to the community edible plants.',

   location: 'Flora City',

   date: 'March 14, 2022',

   time: '10:00',

   petsAllowed: true,

   organizer: 'Fern Pollin'

 },

 {

 id: 8419988,

   category: 'sustainability',

   title: 'Beach Cleanup',

   description: 'Help pick up trash along the shore.',

   location: 'Playa Del Carmen',

   date: 'July 22, 2022',

   time: '11:00',

   petsAllowed: false,

   organizer: 'Carey Wales'

 },

 {

 id: 1234567,

   category: 'education',

   title: 'Coding Workshop',

   description: 'Learn the basics of web development in this hands-on workshop.',

   location: 'Tech Hub',

   date: 'September 15, 2022',

   time: '14:00',

   petsAllowed: false,

   organizer: 'Code Master'

 }

])
</script>

<template>

  <h1>Events For Good</h1>
  <h1>为善举而行动</h1>

  <!-- new element -->
  <!-- 新元素 -->

  <div class="events">
    <div v-for="event in events" :key="event.id" class="event-container">
      <EventCard :event="event" />
      <EventInfo :event="event" />
    </div>
  </div>
</template>



<style scoped>

.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

</style>

