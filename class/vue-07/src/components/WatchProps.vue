<template>
    <div>
        <input v-model.number="km" placeholder="Enter Kilometers"/>
        <select>
            <option>kilometeres</option>
        </select>
        <input v-model.number="m" placeholder="Enter Meteres"/>
        <select>
            <option>Meters</option>
        </select>
    </div>
</template>
<script>
export default {
    name:'WatchProps',
    data(){
        return{
            km:0,
            m:0
        }
    },
    watch:{
        km:function(val){
            this.km = val;
            this.m = val * 1000;
        },
        m:function(val){
            this.m = val;
            this.km = val / 1000;
        }
    }
}
</script>
