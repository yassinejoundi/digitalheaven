<template>
  <section class="final-cta-section">
    <div class="content-container">
      <h2 class="section-title">Start Your Digital Transformation Today</h2>
      <p class="section-description">
        Don't wait any longer. Boost your Google Maps reviews and start
        attracting new customers with our top-tier services. Contact us and
        let's discuss how Digital Heaven can help your business soar.
      </p>
      <div class="cta-button-container">
        <button class="cta-button">Get Started</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.section-title {
  color: var(--accent);
  font-size: 2em;
  margin-bottom: 0.5em;
  text-align: center;
}

.section-description {
  color: var(--text);
  font-size: 1.2em;
  line-height: 1.6em;
  margin: 0 auto;
  max-width: 800px;
  padding: 0 1em;
  text-align: center;
}

.final-cta-section {
  background-color: var(--background);
  padding: 2em 0;
}

.cta-button-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
}

.cta-button {
  background-color: var(--primary);
  border: none;
  border-radius: 2em;
  color: var(--background);
  font-size: 1.2em;
  padding: 1em 2em;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: var(--primary-light);
}

.cta-button:active {
  background-color: var(--primary-dark);
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5em;
  }

  .section-description {
    font-size: 1.5em;
  }

  .final-cta-section {
    padding: 4em 0;
  }

  .cta-button {
    font-size: 1.5em;
  }
}
</style>
