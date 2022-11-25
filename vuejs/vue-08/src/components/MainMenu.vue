<template>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="navId" role="tablist">
        <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item dropdown">
            <router-link class="nav-link active" to="/product">Product</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'MainMenu',
};
</script>
