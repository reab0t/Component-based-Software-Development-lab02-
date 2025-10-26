<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventInfo from '@/components/EventInfo.vue'
import { type Event } from '@/types'

import { ref, onMounted, computed, defineProps, watchEffect } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import EventService from '@/services/EventService'

const router = useRouter()

const updatePageSize = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const newSize = parseInt(target.value)
  // 重置到第一页并更新页面大小
  router.push({
    name: 'event-list-view',
    query: { page: '1', pageSize: newSize.toString() }
  })
}

// 初始化为空数组
const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const hasNexPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / pageSize.value)
  return page.value < totalPages
})

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    default: 2
  }
})
const page = computed(() => props.page)
const pageSize = computed(() => props.pageSize)

onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(pageSize.value, page.value)
      .then((response) => {
        console.log(response.data)
        events.value = response.data
        // 从响应头获取总事件数
        totalEvents.value = Number(response.headers['x-total-count']) || 0
        console.log('Total events:', totalEvents.value)
      })
      .catch((error) => {
        console.error('There was an error!', error)
        console.error('出现错误了！', error)
      })
  })
})
</script>

<template>

  <h1>Events For Good</h1>
  <h1>为善举而行动</h1>

  <!-- 每页大小选择器 -->
  <div class="page-size-selector">
    <label>每页显示: </label>
    <select @change="updatePageSize($event)">
      <option value="2">2 条</option>
      <option value="3">3 条</option>
      <option value="5">5 条</option>
    </select>
  </div>

  <div class="events">
    <div v-for="event in events" :key="event.id" class="event-container">
      <EventCard :event="event" />
      <EventInfo :event="event" />
    </div>
  </div>
  
  <div class="pagination">
    <RouterLink 
      id="page-prev"
      v-if="page != 1" 
      :to="{ name: 'event-list-view', query: { page: page - 1 } }" 
      rel="prev"
    >
      &#60; 上一页
    </RouterLink>
    
    <RouterLink 
      id="page-next"
      v-if="hasNexPage" 
      :to="{ name: 'event-list-view', query: { page: page + 1 } }" 
      rel="next"
    >
      下一页 &#62;
    </RouterLink>
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

.pagination {
  display: flex;
  width: 290px;
  margin: 20px auto 0;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.pagination a:hover {
  background-color: #f5f5f5;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

.page-size-selector {
  text-align: center;
  margin: 10px 0;
}

.page-size-selector select {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

</style>

