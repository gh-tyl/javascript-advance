<template>
    <div>
        <h1>message: {{ parentMsg }}</h1>
        <input v-model="dummyData" />
        <button @click="changeData()">Change</button>
        <h3>{{ dummyData }}</h3>
        <button @click="childEvent()">Call Child</button>
    </div>

</template>

<script>
export default {
    name: "MainMenu",
    props: {
        parentMsg: String
    },
    // props: ['parentMsg'],
    data() {
        return {
            dummyData: "Hello World",
            // parentMsg: "Hello from parent"
        }
    },
    methods: {
        changeData() {
            this.dummyData = "clicked";
        },
        childEvent() {
            console.log("childEvent");
            this.$emit("childEmit", this.dummyData);
        }
    }
}
</script>
<!-- <style>
h3 {
    color: #FFF;
}
</style> -->
