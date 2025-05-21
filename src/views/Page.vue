<script setup lang="ts">
import Header from "@/components/Header.vue";
import Home from "@/components/Home.vue";
</script>

<template>
  <main>
    <Header></Header>
    <Home></Home>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(var(--color-background-primary), var(--color-background-secondary));
}
</style>