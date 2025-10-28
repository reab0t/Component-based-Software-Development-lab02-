<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventInfo from '@/components/EventInfo.vue'
import { type Event } from '@/types'

import { ref, onMounted, computed, watchEffect } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import EventService from '@/services/EventService'

import {useRoute} from "vue-router";


const router = useRouter()

const updatePageSize = (event: globalThis.Event) => {
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
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 3)
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
    EventService.getEvents(3, page.value)
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
  <div class="text-center my-[10px]">
    <label>每页显示: </label>
    <select @change="updatePageSize($event)" class="p-[5px] rounded border border-gray-300">
      <option value="2">2 条</option>
      <option value="3">3 条</option>
      <option value="5">5 条</option>
    </select>
  </div>

  <div class="flex flex-col items-center">
    <div v-for="event in events" :key="event.id" class="event-container">
      <EventCard :event="event" />
      <EventInfo :event="event" />
    </div>
  </div>

  <div class="flex w-[290px] mx-auto justify-center mt-[20px]">
    <RouterLink
      v-if="page != 1"
      :to="{ name: 'event-list-view', query: { page: page - 1 } }"
      rel="prev"
      class="flex-1 text-left text-gray-700 px-4 py-2 border border-gray-300 rounded transition-colors hover:bg-gray-100"
    >
      &#60; 上一页
    </RouterLink>

    <RouterLink
      v-if="hasNextPage"
      :to="{ name: 'event-list-view', query: { page: page + 1 } }"
      rel="next"
      class="flex-1 text-right text-gray-700 px-4 py-2 border border-gray-300 rounded transition-colors hover:bg-gray-100"
    >
      下一页 &#62;
    </RouterLink>
  </div>
</template>



<style scoped>
/* 所有样式已转换为Tailwind CSS类 */
</style>

