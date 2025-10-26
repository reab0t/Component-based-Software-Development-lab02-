<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { type Event } from '@/types'

const props = defineProps<{
  event: Event
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)

const router = useRouter()

const register = () => {
  // If the registration API call successful
  // 如果注册 API 调用成功

  // Push back to the event details view
  // 返回到活动详情视图
  router.push({ name: 'event-detail-view' })
}
</script>

<template>
  <p>Register event here</p>
  <button @click="register">Register</button>
</template>