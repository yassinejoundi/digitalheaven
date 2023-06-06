<template>
  <section class="contact-section" id="contact-section">
    <h2 class="contact-title">Let's Start Your Next Project Together</h2>
    <p class="contact-subtitle">Reach out and let us know how we can help.</p>
    <div class="contact-links">
      <a href="mailto:contact@digitalheaven.agency" class="contact-link"
        >Email Us</a
      >
      <a
        href="https://www.instagram.com/digitalheaven.agency/"
        class="contact-link"
        target="_blank"
        >Instagram</a
      >
      <a
        href="https://api.whatsapp.com/send?phone=yourphonenumber"
        class="contact-link"
        target="_blank"
        >WhatsApp</a
      >
    </div>
  </section>
</template>

<style>
.contact-section {
  text-align: center;
  background-color: var(--secondary);
  padding: 2em 0;
  color: white;
  max-width: 100vw;
}

.contact-title {
  font-size: 2em;
  margin-bottom: 1em;
  color: white;
}

.contact-subtitle {
  font-size: 1.2em;
  margin-bottom: 2em;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.contact-link {
  background-color: var(--primary);
  padding: 1em 2em;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.contact-link:hover {
  background-color: var(--primary-light);
}
</style>
