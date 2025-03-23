<template>
  <div class="create-post">
    <NavBar />
    <div class="form-container">
      <h1>Créer un nouvel article</h1>
      <form @submit.prevent="handleSubmit" class="post-form">
        <div class="form-group">
          <label>Titre :</label>
          <input
            v-model="title"
            type="text"
            class="form-input"
            placeholder="Entrez un titre percutant"
            required
          />
        </div>

        <div class="form-group">
          <label>Contenu :</label>
          <textarea
            v-model="body"
            class="form-input textarea"
            placeholder="Rédigez votre contenu ici..."
            rows="8"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <label>Tags :</label>
          <input
            v-model="tagsInput"
            type="text"
            class="form-input"
            placeholder="Séparer les tags par des virgules (ex: vue, javascript)"
            required
          />
        </div>

        <button type="submit" class="submit-btn">Publier l'article</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
  setup() {
    const router = useRouter();
    const title = ref("");
    const body = ref("");
    const tagsInput = ref("");

    const handleSubmit = async () => {
      const tags = tagsInput.value.split(",").map((tag) => tag.trim());

      const post = {
        title: title.value,
        body: body.value,
        tags: tags,
        createdAt: new Date().toISOString(),
      };

      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      router.push("/");
    };

    return { title, body, tagsInput, handleSubmit };
  },
};
</script>

<style scoped>
.create-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.post-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #34495e;
  font-weight: 500;
  font-size: 1.1rem;
}

.form-input {
  padding: 0.8rem;
  border: 2px solid #bdc3c7;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: #3498db;
}

.textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  background: #2ecc71;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 1rem;
}

.submit-btn:hover {
  background: #27ae60;
}

@media (max-width: 768px) {
  .create-post {
    padding: 1rem;
  }

  .form-container {
    padding: 1.5rem;
  }
}
</style>
