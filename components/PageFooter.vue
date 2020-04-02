<template>
  <footer class="page-footer">
    <p>{{ $t('footer') }}</p>
  </footer>
</template>

<script>
export default {
  name: "PageFooter"
}
</script>

<style scoped>
.page-footer {
  background-color: #e3e9ec;
  color: #312f37;
  text-align: center;
  padding: 20px;
}
.page-footer p {
  margin-bottom: 0;
  font-family: neue-haas-grotesk-display, sans-serif;
}
</style>
