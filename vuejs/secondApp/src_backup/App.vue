<script setup>
import SubOne from './components/SubOne.vue';
import SubSecond from './components/SubSecond.vue';
import ComputedProp from './components/ComputedProp.vue';
import TableCompo from './components/TableCompo.vue';
</script>

<template>
    <header>
    </header>
    <main>
        <div>
            <TableCompo />
        </div>
        <div>
            <SubOne @oneMsg="firstEvent" :msg=secondMsg />
            <SubSecond @secondMsg="secondEvent" :msg=oneMsg />
        </div>
        <div>
            <ComputedProp :fname="fname" :lname="lname" />
        </div>
    </main>
</template>

<script>
export default {
    name: "App",
    components: {
        SubOne,
        SubSecond,
        ComputedProp,
        TableCompo
    },
    data() {
        return {
            oneMsg: "",
            secondMsg: ""
        }
    },
    methods: {
        firstEvent(msg, data) {
            this.oneMsg = data;
        },
        secondEvent(msg) {
            this.secondMsg = msg;
        },
    }
}
</script>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
