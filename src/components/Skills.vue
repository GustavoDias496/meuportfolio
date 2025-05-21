<script setup lang="ts">
import { skills } from "../data/SkillsData.ts";
import SkillCard from "./SkillCard.vue";
console.log(skills)
</script>

<template>
    <section class="container">
        <h1 class="title">Habilidades</h1>
        <div class="skills-container">
            <SkillCard v-for="skill in skills" :key="skill.id" :title="skill.title" :image="skill.image" />
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

.skills-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    justify-items: center;
    gap: 30px;
    padding: 20px;
}

@media (max-width: 768px) {
    .skills-container {

        grid-template-columns: repeat(1, minmax(300px, 1fr));
    }


}

@media (max-width: 1024px) {
    .skills-container {

        grid-template-columns: repeat(2, minmax(300px, 1fr));
    }


}
</style>