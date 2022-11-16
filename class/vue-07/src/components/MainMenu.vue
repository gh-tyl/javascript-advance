<template>
    <div>
        <h1>First Child</h1>
        <h1>message: {{parentmsg}}</h1>
        <h1>Second child Msg:{{secmsg}}</h1>
        <input v-model="firstmsg" />
        <button @click="something('hey','bye')">send</button>
    </div>
</template>

<script>
export default {
    name: 'MainMenu',
    props:['parentmsg','secmsg'],
    data(){
        return{
            firstmsg:''
        }
    },
    methods:{
        something(e,b){
            console.log(e,b);
            // this.$emit('childEmit',{fname:'Lucas',lname:'Marcelo'},'student Details');
            this.$emit('firstChild','firstchild',this.firstmsg);
        }
    }
}
</script>
<style scoped>

</style>
