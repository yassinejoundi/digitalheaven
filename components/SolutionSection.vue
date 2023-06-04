<template>
  <section class="solution-section">
    <div class="content-container">
      <h2 class="section-title">Turn the Tables with Digital Heaven</h2>
      <p class="section-description">
        We're here to transform your online reputation. With our unique
        solution, we can increase your Google Maps reviews, skyrocketing your
        business to the top of Google search results. Our promise? Genuine,
        five-star ratings tailor-made to your preferences, with a lifetime
        money-back guarantee.
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.section-title {
  color: var(--secondary);
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

.solution-section {
  background-color: var(--background);
  padding: 2em 0;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5em;
  }

  .section-description {
    font-size: 1.5em;
  }

  .solution-section {
    padding: 4em 0;
  }
}
</style>
