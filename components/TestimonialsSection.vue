<template>
  <section class="testimonials-section">
    <h2 class="testimonials-title" data-aos="fade-up">What Our Clients Say</h2>
    <div class="testimonials-container" data-aos="fade-up">
      <div class="testimonial-item">
        <p class="testimonial-text">
          Digital Heaven helped us increase our Google Maps reviews
          significantly. Our online visibility has improved, and we are
          attracting more new customers. Highly recommended!
        </p>
        <p class="testimonial-author">- John Doe, Business Owner</p>
      </div>
      <div class="testimonial-item">
        <p class="testimonial-text">
          Their service is excellent, and the results are impressive. Our online
          reputation has never been better. Thanks, Digital Heaven!
        </p>
        <p class="testimonial-author">- Jane Smith, Entrepreneur</p>
      </div>
      <div class="testimonial-item">
        <p class="testimonial-text">
          I was skeptical at first, but Digital Heaven delivered. Our Google
          Maps ratings are up and we've seen a noticeable increase in customer
          inquiries.
        </p>
        <p class="testimonial-author">- Mark Williams, Restaurant Owner</p>
      </div>
      <div class="testimonial-item">
        <p class="testimonial-text">
          Digital Heaven's review service is top-notch. Our company's online
          presence has never been stronger and we've seen a significant uptick
          in new business.
        </p>
        <p class="testimonial-author">- Sarah Thompson, CEO</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.testimonials-section {
  background-color: var(--background);
  padding: 2em 0;
  text-align: center;
}

.testimonials-title {
  color: var(--primary-light);
  font-size: 2em;
  margin-bottom: 1em;
}

.testimonials-container {
  display: grid;
  gap: 2em;
  justify-items: center;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-item {
  background-image: linear-gradient(
    to right,
    var(--primary-light),
    var(--primary)
  );
  color: var(--background);
  padding: 2em;
  border-radius: 1em;
  max-width: 600px;
}

.testimonial-text {
  font-size: 1.2em;
  line-height: 1.6em;
  margin-bottom: 1em;
}

.testimonial-text::before {
  content: '“';
  color: var(--background);
  font-size: 2em;
}

.testimonial-text::after {
  content: '”';
  color: var(--background);
  font-size: 2em;
}

.testimonial-author {
  font-size: 1em;
  font-style: italic;
}

@media (min-width: 768px) {
  .testimonials-container {
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
  }
}
</style>
