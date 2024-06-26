<template>
  <h1>Portable Monitors</h1>
  <p>Click to view more details</p>
  <div v-for="monitor in monitors" :key="monitor.id">
    <NuxtLink :to="`/portablemonitors/monitor/${monitor.id}`">
      <div class="monitor">
        <h2>{{ monitor.title }}</h2>
        <p>${{ monitor.price }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { data: monitors } = await useFetch('/api/getMonitorData')
</script>

<style scoped>
.monitor {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>