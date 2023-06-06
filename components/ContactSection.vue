<template>
  <section class="cta-section">
    <h2 class="cta-title" data-aos="fade-up">Get In Touch</h2>
    <p class="cta-text" data-aos="fade-up">
      Interested in improving your online presence? Let's talk!
    </p>
    <div class="cta-contacts" data-aos="fade-up">
      <a
        class="cta-contact"
        href="mailto:contact@digitalheaven.agency"
        target="_blank"
      >
        <i class="fas fa-envelope"></i>
        Email
      </a>
      <a
        class="cta-contact"
        href="https://www.instagram.com/digitalheaven.agency/"
        target="_blank"
      >
        <i class="fab fa-instagram"></i>
        Instagram
      </a>
      <a
        class="cta-contact"
        href="https://api.whatsapp.com/send?phone=yourphonenumber"
        target="_blank"
      >
        <i class="fab fa-whatsapp"></i>
        WhatsApp
      </a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.cta-section {
  background-color: var(--background);
  padding: 2em 1em;
  text-align: center;
}

.cta-title {
  color: var(--primary-light);
  font-size: 2em;
  margin-bottom: 1em;
}

.cta-text {
  font-size: 1.2em;
  line-height: 1.6em;
  margin-bottom: 2em;
}

.cta-contacts {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.cta-contact {
  background-color: var(--secondary);
  color: var(--background);
  padding: 1em;
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
  width: 130px;
}

.cta-contact:hover {
  transform: scale(1.1);
}

.cta-contact i {
  margin-right: 0.5em;
  font-size: 1em;
}
</style>
