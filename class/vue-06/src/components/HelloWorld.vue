<!-- <script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script> -->

<template>
    <div class="greetings">
        <h1 :class="{ green: checked }">{{ fname }} {{ lname }}</h1>
        <h3>
            <input type="text" v-model="fname">
            <input type="text" v-model="lname">
            <h2>{{ checked ? 'Like' : 'Dislike' }}</h2>
        </h3>
        <h3>
            <h2>{{ checked ? 'Ramen' : 'Pizza' }}</h2>
            <input type="checkbox" v-model="checked">
        </h3>
        <div>

        </div>
        <h3>
            <input type="password">
        </h3>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        },
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        },
        checked: {
            type: Boolean,
            required: true
        },
        num1: {
            type: Number,
            required: true
        },
        num2: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            msg: 'Tyler Inari',
            fname: 'Tyler',
            lname: 'Inari',
            checked: false,
            num1: 0,
            num2: 0
        }
    }
}
</script>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
