<template>
  <div class="post-card">
    <div class="post-header">
      <h3 class="post-title">{{ post.title }}</h3>
      <span class="post-date">📅 {{ formattedDate }}</span>
    </div>

    <div class="tags" v-if="post.tags && post.tags.length">
      <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>

    <div class="content-body">
      <p>{{ snippet }}</p>
    </div>

    <div class="actions">
      <router-link :to="`/posts/${post.id}`" class="read-more"
        >Lire la suite →</router-link
      >
      <button @click="confirmDelete" class="delete-btn">Supprimer</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    snippet() {
      return this.post.body.substring(0, 50) + "...";
    },
    formattedDate() {
      return new Date(this.post.createdAt).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
  methods: {
    confirmDelete() {
      if (confirm("Confirmer la suppression ?")) {
        this.$emit("post-deleted", this.post.id);
      }
    },
  },
};
</script>

<style scoped>
.post-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease;
  margin-bottom: 1.5rem;
}

.post-card:hover {
  transform: translateY(-3px);
}

.post-header {
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.post-title {
  color: #2c3e50;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.post-date {
  color: #718096;
  font-size: 0.9rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.tag {
  background: #f0f4f8;
  color: #2c3e50;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

.content-body {
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.read-more {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.read-more:hover {
  color: #2c3e50;
}

.delete-btn {
  background: #e53e3e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.delete-btn:hover {
  background: #c53030;
}
</style>
