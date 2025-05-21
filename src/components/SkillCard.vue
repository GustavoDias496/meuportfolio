<script lang="ts">

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  }

};
</script>

<template>
  <div class="card" v-if="image">
    <h3 class="card-title">{{ title }}</h3>
    <div class="card-image">
      <img class="tech-image" :src="image" alt="Tech Image">
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 300px; 
  min-height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--color-background-card);
  border: 2px solid var(--color-border);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
}

.card-image img {
  width: 100%;
  height: 50px;
  object-fit: contain;
}

.card-title {
  margin: 0 0 0.5rem 0;
  color: var(--color-text-title-card);
}

.card-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

</style>