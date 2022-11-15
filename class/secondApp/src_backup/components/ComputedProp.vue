<template>
    <div>
        <input type="text" v-model="fname" />
        <input type="text" v-model="lname" />
        <h1>without computed prop: {{ fname }} {{ lname }}</h1>
        <h1>with computed prop: {{ getFullName }}</h1>
    </div>

</template>

<script>
export default {
    name: "ComputedProp",
    props: {
        fname: String,
        lname: String
    },
    data() {
        return {
            fname: "",
            lname: ""
        }
    },
    computed: {
        getFullName() {
            return this.fname + " " + this.lname;
        }
    },
}
</script>
