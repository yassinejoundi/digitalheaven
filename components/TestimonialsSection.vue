<template>
  <section class="testimonials-section">
    <div class="content-container">
      <h2 class="section-title">Hear from Our Happy Clients</h2>
      <div class="testimonial-container">
        <div class="testimonial">
          <p class="testimonial-text">
            "Digital Heaven transformed our online reputation. Our Google Maps
            reviews have tripled in number, and we've seen a noticeable increase
            in new customers. The results speak for themselves!"
          </p>
          <p class="testimonial-author">- Happy Client 1</p>
        </div>
        <div class="testimonial">
          <p class="testimonial-text">
            "The team at Digital Heaven is incredible. They delivered as
            promised, boosting our Google Maps reviews and helping us stand out
            in search results. Highly recommended!"
          </p>
          <p class="testimonial-author">- Satisfied Client 2</p>
        </div>
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

.testimonials-section {
  background-color: var(--background);
  padding: 2em 0;
}

.testimonial-container {
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: 0 auto;
  max-width: 800px;
  padding: 0 1em;
}

.testimonial-text {
  color: var(--text);
  font-size: 1.2em;
  line-height: 1.6em;
  text-align: center;
}

.testimonial-author {
  color: var(--secondary);
  font-weight: bold;
  text-align: right;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5em;
  }

  .testimonial-text {
    font-size: 1.5em;
  }

  .testimonials-section {
    padding: 4em 0;
  }

  .testimonial-container {
    flex-direction: row;
  }
}
</style>
