<template>
  <nav class="main-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-nav {
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.main-nav a {
  font-weight: 500;
  color: #4a5568;
  text-decoration: none;
  margin: 0 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.main-nav a:hover {
  color: #2c3e50;
  background: rgba(66, 185, 131, 0.1);
}

.main-nav a.router-link-exact-active {
  color: #2c3e50;
  background: rgba(66, 185, 131, 0.15);
}

.main-nav a.router-link-exact-active::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 3px;
  background: #42b983;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .main-nav {
    padding: 1rem;
  }

  .main-nav a {
    margin: 0 0.5rem;
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
</style>
