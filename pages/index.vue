<template>
  <div class="home-page">
    <hero-section />
    <about-section />
    <testimonials-section />
    <contact-section />
    <footer-section />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/aboutSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import FooterSection from '~/components/footerSection.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    AboutSection,
    TestimonialsSection,
    ContactSection,
    FooterSection,
  },
  head: {
    title: 'Digital Heaven Agency',
    titleTemplate: '%s | Boost Your Google Maps Reviews',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Improve your visibility, gain new customers, and boost your online reputation with our reliable review enhancement service. More positive reviews, more new customers.',
      },
      // Open Graph
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Digital Heaven Agency',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Improve your visibility, gain new customers, and boost your online reputation with our reliable review enhancement service. More positive reviews, more new customers.',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.digitalheaven.agency/',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Digital Heaven Agency',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Improve your visibility, gain new customers, and boost your online reputation with our reliable review enhancement service. More positive reviews, more new customers.',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@DigitalHeaven' },
    ],
    link: [{ rel: 'canonical', href: 'https://www.digitalheaven.agency/' }],
  },
}
</script>
