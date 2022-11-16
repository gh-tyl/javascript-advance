<template>
    <div>
        <h1>Second Child</h1>
        <h1>First child Msg:{{mainmsg}}</h1>
        <input v-model="secmsg"/>
        <button @click="sendMsg">Send</button>

    </div>
</template>
<script>
export default {
    name:'SecondChild',
    props:['mainmsg'],
    data(){
        return{
            secmsg:''
        }
    },
    methods:{
        sendMsg(){
            this.$emit('sendmsg','secchild',this.secmsg);
        }
    }
}
</script>
<style scoped>

</style>
