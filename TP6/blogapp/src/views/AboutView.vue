<!-- src/views/AboutView.vue -->
<template>
  <div class="about-container">
    <NavBar />
    <div class="content">
      <h1>À propos</h1>
      <p>
        Ce blog a été créé pour partager des connaissances sur le développement
        web moderne.
      </p>
      <p>Version: 1.0.0</p>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

p {
  line-height: 1.6;
  color: #7f8c8d;
  margin-bottom: 1rem;
}
</style>
