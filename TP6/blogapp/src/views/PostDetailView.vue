<template>
  <div class="post-detail">
    <NavBar />

    <div v-if="loading" class="loading">Chargement...</div>

    <div v-else-if="post" class="content">
      <div class="main-content">
        <h1>{{ post.title }}</h1>
        <div class="meta">
          <span class="date">📅 {{ formatDate(post.createdAt) }}</span>
          <div class="tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </div>
        </div>
        <div class="body">{{ post.body }}</div>
      </div>

      <TagCloud :posts="relatedPosts" class="sidebar" />
    </div>

    <div v-else class="error">{{ error }}</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { watch } from "vue";
import { useRoute } from "vue-router";
import NavBar from "../components/NavBar.vue";
import TagCloud from "../components/TagCloud.vue";
import useGetPost from "../composables/getPost";
import useGetPosts from "../composables/getPosts";

export default {
  components: { NavBar, TagCloud },
  setup() {
    const route = useRoute();
    const { post, error, loading, getPost } = useGetPost();
    const { posts } = useGetPosts();

    // Charger le post au changement d'ID
    watch(
      () => route.params.id,
      (newId) => {
        getPost(newId);
      },
      { immediate: true }
    );

    // Formater la date
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    // Posts liés (tous sauf le courant)
    const relatedPosts = computed(() => {
      return posts.value.filter((p) => p.id !== post.value?.id);
    });

    return {
      post,
      error,
      loading,
      formatDate,
      relatedPosts,
    };
  },
};
</script>

<style scoped>
.post-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  margin-top: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.date {
  color: #7f8c8d;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: #3498db;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.body {
  line-height: 1.8;
  color: #2c3e50;
  white-space: pre-line;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #7f8c8d;
  padding: 2rem;
}

.error {
  color: #e74c3c;
  padding: 2rem;
  text-align: center;
}
</style>
