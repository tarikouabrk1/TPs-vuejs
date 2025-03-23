<template>
  <div class="home-container">
    <h1 class="page-title">📋 Offres d'emploi</h1>
    <div class="jobs-grid">
      <div v-for="job in jobs" :key="job.id" class="job-card">
        <h3 class="job-title">{{ job.title }}</h3>
        <p class="job-description">
          {{ truncateDescription(job.description) }}
        </p>
        <div class="job-meta">
          <span class="salary">💰 {{ job.salary }}€</span>
          <span class="experience">📅 {{ job.experience }}</span>
        </div>
        <div class="action-buttons">
          <router-link :to="`/jobs/${job.id}`" class="btn detail-btn"
            >Voir plus</router-link
          >
          <button @click="deleteJob(job.id)" class="btn delete-btn">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  async mounted() {
    const response = await fetch("http://localhost:3000/jobs");
    this.jobs = await response.json();
  },
  methods: {
    truncateDescription(text) {
      return text.length > 100 ? text.slice(0, 100) + "..." : text;
    },
    async deleteJob(id) {
      if (confirm("Supprimer cette offre ?")) {
        await fetch(`http://localhost:3000/jobs/${id}`, { method: "DELETE" });
        this.jobs = this.jobs.filter((job) => job.id !== id);
      }
    },
  },
};
</script>

<style scoped>
.home-container {
  padding: 20px;
}

.page-title {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.job-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.job-card:hover {
  transform: translateY(-3px);
}

.job-title {
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.job-description {
  color: #7f8c8d;
  font-size: 0.9rem;
  min-height: 60px;
  margin-bottom: 1rem;
}

.job-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s;
  font-size: 0.9rem;
}

.detail-btn {
  background: #3498db;
  color: white;
}

.delete-btn {
  background: #e74c3c;
  color: white;
}

.btn:hover {
  opacity: 0.9;
}
</style>
