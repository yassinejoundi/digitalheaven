<template>
  <section class="cta-section">
    <div class="content-container">
      <h2 class="section-title">Ready to Boost Your Online Reputation?</h2>
      <p class="section-description">
        Join us at Digital Heaven and give your business the online boost it
        deserves. Don't let the lack of reviews hold you back. Let's start the
        transformation today!
      </p>
      <div class="cta-button-container">
        <button class="cta-button">Contact Us</button>
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

.cta-section {
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

  .cta-section {
    padding: 4em 0;
  }

  .cta-button {
    font-size: 1.5em;
  }
}
</style>
