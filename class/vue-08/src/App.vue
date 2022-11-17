<script setup>
import MainMenu from './components/MainMenu.vue';
import HomePage from './components/HomePage.vue';
import ProductPage from './components/ProductPage.vue';
</script>

<template>
  <header>
    <MainMenu />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App',
  components: {
    MainMenu,
    HomePage,
    ProductPage,
  },
};
</script>
