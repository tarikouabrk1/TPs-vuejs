import { ref } from "vue";

export default function useGetPost() {
  const post = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const getPost = async (id) => {
    loading.value = true;
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`);
      if (!response.ok) throw Error("Post non trouvé");
      post.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { post, error, loading, getPost };
}
