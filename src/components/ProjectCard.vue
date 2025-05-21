<script lang="ts">

interface TechItem {
  name: string;
  bgColor?: string;
}

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array as () => TechItem[],
      required: true,
    },
  }

};
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img class="project-image" :src="image" alt="Project Image">
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      <div class="card-tech">
        <span 
          v-for="tech in technologies" 
          :key="tech.name"
          class="tech-tag"
          :style="{ backgroundColor: tech.bgColor || '#eee' }"
        >
          {{ tech.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 300px; 
  border-radius: 8px;
  overflow: hidden;
  background: var(--color-background-card);
  border: 2px solid var(--color-border);
  
}

.card-image img {
  width: 100%;
  height: 180px;
  object-fit: contain;
}

.card-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-title {
  margin: 0 0 0.5rem 0;
  color: var(--color-text-title-card);
}

.card-description {
  margin: 0 0 1rem 0;
  color: var(--color-text-about-card);
  font-size: 0.9rem;
}

.card-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tech-tag {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #333;
}
</style>