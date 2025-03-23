<!-- src/components/NavBar.vue -->
<template>
  <nav class="navbar">
    <router-link to="/">🏠 Accueil</router-link>
    <router-link to="/create">✍️ Nouvel Article</router-link>
    <router-link to="/about">ℹ️ À propos</router-link>
  </nav>
</template>

<style>
.navbar {
  padding: 1rem;
  background: #2c3e50;
}
.navbar a {
  color: white;
  margin-right: 1rem;
  text-decoration: none;
}
</style>
