<template>
  <div class="form-container">
    <h1 class="form-title">➕ Ajouter un emploi</h1>
    <form @submit.prevent="submitForm" class="job-form">
      <div class="form-group">
        <label>Titre :</label>
        <input v-model="newJob.title" required class="form-input" />
      </div>

      <div class="form-group">
        <label>Description :</label>
        <textarea
          v-model="newJob.description"
          required
          class="form-input"
        ></textarea>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Salaire (€) :</label>
          <input
            v-model="newJob.salary"
            type="number"
            required
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label>Expérience :</label>
          <input v-model="newJob.experience" required class="form-input" />
        </div>
      </div>

      <button type="submit" class="submit-btn">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newJob: {
        id: Date.now(),
        title: "",
        description: "",
        salary: "",
        experience: "",
        createdAt: new Date().toISOString().split("T")[0],
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await fetch("http://localhost:3000/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.newJob),
        });
        this.$router.push("/home");
      } catch (error) {
        console.error("Erreur d'ajout :", error);
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.job-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #34495e;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #3498db;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.submit-btn {
  background: #2ecc71;
  color: white;
  padding: 12px 25px;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #27ae60;
}
</style>
