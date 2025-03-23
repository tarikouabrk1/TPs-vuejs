<template>
  <div class="app-container">
    <nav class="main-nav">
      <router-link to="/home" class="nav-link">🏠 Accueil</router-link>
      <router-link to="/add" class="nav-link">➕ Ajouter un emploi</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.main-nav {
  background: #2c3e50;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.nav-link {
  color: #ecf0f1 !important;
  text-decoration: none;
  margin: 0 15px;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #3498db !important;
}
</style>
