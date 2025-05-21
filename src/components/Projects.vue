<script setup lang="ts">
</script>

<template>
    <section class="container">
        <h1 class="title">Projetos</h1>
        <div class="projects-container">
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
    color: #2c3e50;
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