<template>
  <div class="home-page">
    <hero-section />
    <problem-section />
    <solution-section />
    <call-to-action-section />
    <testimonials-section />
    <final-call-to-action-section />
    <contact-section />
  </div>
</template>

<script>
import CallToActionSection from '~/components/CallToActionSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import FinalCallToActionSection from '~/components/FinalCallToActionSection.vue'
import HeroSection from '~/components/HeroSection.vue'
import ProblemSection from '~/components/ProblemSection.vue'
import SolutionSection from '~/components/SolutionSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    ProblemSection,
    SolutionSection,
    CallToActionSection,
    TestimonialsSection,
    FinalCallToActionSection,
    ContactSection,
  },
}
</script>
