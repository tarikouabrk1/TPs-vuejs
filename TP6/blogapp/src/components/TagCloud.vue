<template>
  <div class="tag-cloud">
    <h3>Tags populaires</h3>
    <div class="tags-container">
      <router-link
        v-for="tag in uniqueTags"
        :key="tag"
        :to="`/tags/${tag}`"
        class="tag"
      >
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  setup(props) {
    const uniqueTags = computed(() => {
      // Extraire tous les tags et les dédoublonner
      return [
        ...new Set(props.posts.flatMap((post) => post.tags || [])),
      ].sort();
    });

    return { uniqueTags };
  },
};
</script>

<style scoped>
.tag-cloud {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-left: 2rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f0f4f8;
  color: #2c3e50;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  margin-right: 0.5rem;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.tag:hover {
  background: #4299e1;
  color: white;
}

h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}
</style>
