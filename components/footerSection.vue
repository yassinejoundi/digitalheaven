<template>
  <footer class="footer-section">
    <div class="content-container">
      <p class="copyright-statement">
        © {{ new Date().getFullYear() }} Digital Heaven Agency. All rights
        reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer-section {
  background: var(--primary);
  padding: 1em;
}

.content-container {
  margin: auto;
  padding: 0 1em;
  text-align: center;
}

.copyright-statement {
  color: var(--background);
  font-size: 0.875em;
}
</style>
