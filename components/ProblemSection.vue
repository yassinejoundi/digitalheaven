<template>
  <section class="problem-section">
    <div class="content-container">
      <h2 class="section-title">Less Reviews, Less Business</h2>
      <p class="section-description">
        In today's digital age, positive reviews are the lifeblood of any
        business. Yet, it's a struggle for many to acquire these vital assets. A
        lack of reviews can make it challenging for your business to stand out
        and attract new customers.
      </p>
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

.problem-section {
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

  .problem-section {
    padding: 4em 0;
  }
}
</style>
