<template>
    <div>
        <h1>message: {{ msg }}</h1>
        <input v-model="sendMsg" />
        <button @click="sendMsgFunc()">Send</button>
    </div>

</template>

<script>
export default {
    name: "SubSecond",
    props: {
        msg: String
    },
    // props: ['msg'],
    data() {
        return {
            // msg: "",
            sendMsg: "second",
        }
    },
    methods: {
        sendMsgFunc() {
            console.log("sendData");
            console.log(this.sendMsg);
            this.$emit("secondMsg", this.sendMsg);
        }
    }
}
</script>
