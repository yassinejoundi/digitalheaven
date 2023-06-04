<template>
  <section class="contact-section">
    <div class="content-container">
      <h2 class="section-title">Get In Touch With Us</h2>
      <div class="contact-info">
        <p>Email: contact@digitalheaven.agency</p>
        <p>Instagram: @digitalheaven.agency</p>
      </div>
      <div class="social-links">
        <a href="#" class="social-link">Facebook</a>
        <a href="#" class="social-link">Twitter</a>
        <a href="#" class="social-link">LinkedIn</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.section-title {
  color: var(--primary);
  font-size: 2em;
  margin-bottom: 1em;
  text-align: center;
}

.contact-section {
  background-color: var(--background);
  padding: 2em 0;
}

.contact-info,
.social-links {
  color: var(--text);
  font-size: 1.2em;
  line-height: 1.6em;
  text-align: center;
}

.social-link {
  color: var(--secondary);
  margin: 0 1em;
  text-decoration: none;
}

.social-link:hover {
  color: var(--primary);
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5em;
  }

  .contact-info,
  .social-links {
    font-size: 1.5em;
  }

  .contact-section {
    padding: 4em 0;
  }
}
</style>
