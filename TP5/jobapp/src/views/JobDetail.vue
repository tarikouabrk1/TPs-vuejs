<template>
  <div class="detail-container" v-if="job">
    <h1 class="detail-title">{{ job.title }}</h1>

    <div class="detail-content">
      <div class="detail-section">
        <h3>📝 Description</h3>
        <p class="description-text">{{ job.description }}</p>
      </div>

      <div class="detail-info">
        <div class="info-item">
          <span class="info-label">💶 Salaire :</span>
          <span class="info-value">{{ job.salary }}€</span>
        </div>

        <div class="info-item">
          <span class="info-label">📅 Expérience :</span>
          <span class="info-value">{{ job.experience }}</span>
        </div>

        <div class="info-item">
          <span class="info-label">🗓️ Date création :</span>
          <span class="info-value">{{ job.createdAt }}</span>
        </div>
      </div>

      <div class="action-buttons">
        <router-link to="/home" class="btn back-btn">← Retour</router-link>
        <router-link :to="`/edit/${job.id}`" class="btn edit-btn"
          >Modifier</router-link
        >
        <button @click="deleteJob" class="btn delete-btn">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  async mounted() {
    const response = await fetch(`http://localhost:3000/jobs/${this.id}`);
    this.job = await response.json();
  },
  methods: {
    async deleteJob() {
      if (confirm("Confirmer la suppression ?")) {
        await fetch(`http://localhost:3000/jobs/${this.id}`, {
          method: "DELETE",
        });
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.detail-title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.detail-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.detail-section {
  margin-bottom: 2rem;
}

.description-text {
  color: #7f8c8d;
  line-height: 1.6;
}

.detail-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
}

.info-label {
  color: #3498db;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
}

.info-value {
  color: #2c3e50;
  font-size: 1.1rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s;
  color: white;
}

.back-btn {
  background: #95a5a6;
}

.edit-btn {
  background: #f1c40f;
}

.delete-btn {
  background: #e74c3c;
}

.btn:hover {
  opacity: 0.9;
}
</style>
