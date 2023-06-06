<template>
  <section class="hero-section">
    <div class="content-container" data-aos="fade-up">
      <h1 class="hero-title">Boost Your Google Maps Reviews</h1>
      <p class="hero-subtitle">Start Getting More Customers Today</p>
      <p class="hero-description">
        Improve your visibility, gain new customers, and boost your online
        reputation with our reliable review enhancement service. More positive
        reviews, more new customers.
      </p>
      <div class="cta-button-container">
        <a class="cta-button" href="#contact-section">
          <i class="fas fa-rocket"></i> Get Started
        </a>
      </div>
    </div>
    <div class="hero-image-container" data-aos="fade-up">
      <img
        src="@/assets/images/hero-image.png"
        alt="Digital Heaven - Boost Your Reviews"
      />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 0;
}

.hero-title {
  color: var(--background);
  font-size: 2em;
  text-align: center;
}

.hero-subtitle {
  color: var(--background);
  font-size: 1.5em;
  margin-top: 0.5em;
  text-align: center;
}

.hero-description {
  color: var(--background);
  font-size: 1.2em;
  line-height: 1.6em;
  margin-top: 1em;
  text-align: center;
  max-width: 600px; /* To keep the line length comfortable to read */
}

.cta-button-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
}

.cta-button {
  background-color: var(--background);
  border: none;
  border-radius: 2em;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  padding: 1em 2em;
  text-decoration: none; /* Since it's a link now, not a button */
  transition: all 0.3s ease;
}

.cta-button i {
  margin-right: 0.5em;
}

.cta-button:hover {
  /*background-color: var(--primary-light);*/
  transform: scale(1.05); /* Added scale effect on hover */
}

.cta-button:active {
  background-color: var(--primary-dark);
  color: var(--background);
}

.hero-image-container img {
  width: 100%;
  height: auto;
}

.content-container {
  margin-bottom: 2em;
}

@media (min-width: 768px) {
  .hero-section {
    flex-direction: row;
    justify-content: space-around;
  }
  .content-container {
    margin-bottom: 0;
    width: 45%;
  }
  .hero-image-container {
    width: 45%;
  }
}
</style>
