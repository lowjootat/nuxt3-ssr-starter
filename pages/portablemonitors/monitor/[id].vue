<template>
  <h1>Monitor Details</h1>
  <h2>{{ monitor.title }}</h2>
  <img :src="monitor.img_url" alt="Monitor Image">
  <p>{{ monitor.brand }}</p>
  <p>{{ monitor.price }}</p>
  <p>{{ monitor.url }}</p>
</template>

<script setup>
const route = useRoute();
const { data: monitor } = await useFetch(`/api/getMonitorById/${route.params.id}`);
</script>