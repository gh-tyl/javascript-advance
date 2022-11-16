<script setup>
</script>

<template>
    <div>

    </div>
</template>

<script>
export default {
    setup() {
        const { data, error } = useAxios('https://jsonplaceholder.typicode.com/todos/1')
        return { data, error }
    }
}
</script>
