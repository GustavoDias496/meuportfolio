<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  name: 'ResponsiveMenu',
  setup() {
    const menuOpen = ref(false);
    const isMobile = ref(false);
    
    const menuItems = [
      { text: 'Início', href: '#inicio' },
      { text: 'Projetos', href: '#projetos' },
      { text: 'Habilidades', href: '#habilidades' }
    ];
    
    const checkScreenSize = () => {
      isMobile.value = window.innerWidth < 768;
      if (!isMobile.value) {
        menuOpen.value = false;
      }
    };

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    onMounted(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkScreenSize);
    });

    return {
      menuOpen,
      isMobile,
      menuItems,
      toggleMenu
    };
  }
});
</script>

<template>
  <div class="responsive-menu-container">
    <button
      v-if="isMobile"
      class="hamburger-menu"
      :class="{ 'is-active': menuOpen }"
      @click="toggleMenu"
      aria-label="Menu"
      :aria-expanded="menuOpen"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <img v-if="!isMobile" src="../assets/logo.svg" alt="logo" class="menu-logo"/>
    <nav 
      class="menu"
      :class="{ 
        'menu-mobile': isMobile, 
        'menu-mobile-open': menuOpen && isMobile 
      }"
    >
      
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.href" @click="isMobile && (menuOpen = false)">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.responsive-menu-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: transparent;
  box-sizing: border-box;
  border-bottom: 2px solid var(--color-border);
}

.menu-logo {
  width: 35px;
  height: 35px;
}

.hamburger-menu {
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  transition: transform 0.15s linear;
  z-index: 1001;
  position: relative;
}

.hamburger-box {
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 24px;
  height: 3px;
  background-color: var(--color-menu-bar);
  border-radius: 3px;
  position: absolute;
  transition-property: transform, opacity;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -8px;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.15s;
}

.hamburger-inner::after {
  bottom: -8px;
}

.hamburger-menu.is-active .hamburger-inner {
  transform: rotate(45deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hamburger-menu.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}

.hamburger-menu.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.menu {
  display: block;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.menu li {
  padding: 10px 0;
}

.menu a {
  text-decoration: none;
  color: var(--color-text-primary);
  
}

.menu a:hover {
  color: var(--color-text-secondary);
}

.menu-mobile {
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: var(--color-background-primary);
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 1000;
  border-bottom: 2px solid var(--color-border);
}

.menu-mobile ul {
  flex-direction: column;
  gap: 0;
}

.menu-mobile-open {
  display: block;
}

@media (min-width: 768px) {
  .menu-mobile {
    display: none !important;
  }

}

</style>