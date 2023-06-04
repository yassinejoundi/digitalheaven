<template>
  <section class="hero-section">
    <div class="content-container">
      <h1 class="hero-title">
        Boost Your Online Presence with Five-Star Google Maps Reviews
      </h1>
      <img
        class="hero-image"
        src="@/assets/images/hero_image.jpg"
        alt="Hero Image"
      />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.hero-section {
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-title {
  color: var(--background);
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  margin-bottom: 1em;
}

.hero-image {
  max-width: 90%;
  height: auto;
}

/* Styles for larger screens */
@media (min-width: 768px) {
  .hero-section {
    padding: 4em 0;
  }

  .content-container {
    flex-direction: row;
    text-align: left;
  }

  .hero-title {
    font-size: 3em;
    margin-right: 2em;
  }

  .hero-image {
    max-width: 50%;
  }
}
</style>
