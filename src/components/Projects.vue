<script setup lang="ts">
import { projects } from "../data/ProjectData";
import ProjectCard from "./ProjectCard.vue";
console.log(projects)
</script>

<template>
    <section class="container" id="projetos">
        <h1 class="title">Projetos</h1>
        <div class="projects-container">
            <ProjectCard 
                v-for="project in projects" 
                :key="project.id" 
                :title="project.title"
                :description="project.describe" 
                :image="project.image" 
                :technologies="project.technologies" 
            />
        </div>
    </section>
</template>

<style scoped>
.container {
    margin-top: 2em;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-text-primary);
}

.projects-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    gap: 30px;
    padding: 20px;
}
</style>