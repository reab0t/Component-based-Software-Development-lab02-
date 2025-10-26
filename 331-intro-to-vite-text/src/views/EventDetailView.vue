<script setup lang="ts">

import { ref, onMounted, defineProps } from 'vue'
import { type Event } from '@/types'
import EventService from "@/services/EventService"
const event = ref<Event | null>(null)
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
onMounted(() =>{
  EventService.getEvent(parseInt(props.id))
    .then((response)=>{
      event.value = response.data
})
  .catch(error => {
    console.log('There was an error!', error)
  } )
})

</script>

<template>

  <div v-if="event">

     <h1>{{ event.title }}</h1>

     <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
     <p>{{ event.time }} 于 {{ event.date }} 在 {{ event.location }}</p>

     <p>{{ event.description }}</p>

     </div>


</template>

<style scoped>

</style>
