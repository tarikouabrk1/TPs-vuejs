<template>
  <div class="home">
    <PostList :posts="filteredPosts" @post-deleted="handlePostDeleted" />
    <TagCloud :posts="posts" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import useGetPosts from "../composables/getPosts";

export default {
  components: { PostList, TagCloud },
  setup() {
    const route = useRoute();
    const { posts, load } = useGetPosts();
    load();

    const filteredPosts = computed(() => {
      // Filtrage par tag si présent dans l'URL
      if (route.params.tag) {
        return posts.value.filter((post) =>
          post.tags?.some(
            (tag) => tag.toLowerCase() === route.params.tag.toLowerCase()
          )
        );
      }
      return posts.value;
    });

    const handlePostDeleted = async (deletedId) => {
      try {
        await fetch(`http://localhost:3000/posts/${deletedId}`, {
          method: "DELETE",
        });
        await load();
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      }
    };

    return {
      posts,
      filteredPosts,
      handlePostDeleted,
    };
  },
};
</script>
