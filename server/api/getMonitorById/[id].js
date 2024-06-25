export default defineEventHandler(async (event) => {
  const data = await $fetch('/api/getMonitorData');
  const { id } = event.context.params;
  const monitorData = data.find(monitor => monitor.id === parseInt(id));
  const monitor = {
    id: monitorData.id,
    title: monitorData.title,
    url: monitorData.url,
    brand: monitorData.brand,
    img_url: monitorData.img_url,
    price: monitorData.price,
  };
  return monitor;
})