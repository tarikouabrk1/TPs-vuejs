<template>
  <div class="post-list">
    <SinglePost
      v-for="post in internalPosts"
      :key="post.id"
      :post="post"
      @post-deleted="handlePostDeleted"
    />
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";

export default {
  components: { SinglePost },
  props: ["posts"],
  data() {
    return {
      internalPosts: [...this.posts], // Crée une copie locale
    };
  },
  watch: {
    posts(newPosts) {
      this.internalPosts = [...newPosts]; // Met à jour la copie locale quand les props changent
    },
  },
  methods: {
    handlePostDeleted(deletedId) {
      this.internalPosts = this.internalPosts.filter(
        (post) => post.id !== deletedId
      );
      this.$emit("post-deleted", deletedId); // Émet l'événement vers le parent
    },
  },
};
</script>

<style scoped>
/* Les styles restent identiques */
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .post-list {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1.5rem;
  }
}

.post-list ::v-deep(.post-card) {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-list ::v-deep(.post-card:hover) {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}
</style>
