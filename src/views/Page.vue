<script setup lang="ts">
import Header from "@/components/Header.vue";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";
import Habilidades from "@/components/Skills.vue";
</script>

<template>
  <main>
    <Header></Header>
    <Home></Home>
    <Projects></Projects>
    <Habilidades></Habilidades>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  background: linear-gradient(var(--color-background-primary), var(--color-background-secondary));
  overflow: hidden;
}
</style>