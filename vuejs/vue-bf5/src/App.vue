<script setup>
import HarukaPage from './components/HarukaPage.vue';
import JunPage from './components/JunPage.vue';
import LucasPage from './components/LucasPage.vue';
import MateusPage from './components/MateusPage.vue';
import TinaPage from './components/TinaPage.vue';
</script>

<template>
  <header>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <router-link to="/">Haruka</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/jun">Jun</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/lucas">Lucas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/mateus">Mateus</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tina">Tina</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App',
  components: {
    HarukaPage,
    JunPage,
    LucasPage,
    MateusPage,
    TinaPage,
  },
};
</script>
