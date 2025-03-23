<template>
  <div>
    <label>Filtrer par salaire minimum :</label>
    <input
      v-model.number="minSalary"
      @input="filterJobs"
      type="number"
      placeholder="Salaire min"
    />
  </div>
</template>

<script>
export default {
  data() {
    return { minSalary: 0 };
  },
  methods: {
    filterJobs() {
      this.$emit("filter", this.minSalary);
    },
  },
};
</script>
