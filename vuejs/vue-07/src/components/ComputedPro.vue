<template>
    <div>
        <input v-model.trim="fullName" />
        <h1>without computed props: {{fname}} {{lname}}</h1>
        <h2>With computed props:{{fullName}}</h2>
    </div>
</template>
<script>
export default {
    name:'ComputedPro',
    data(){
        return{
            fname:'',
            lname:''
        }
    },
    computed:{
        fullName:{
            get:function(){
                if(this.lname=='')
                    return this.fname;
                return `${this.fname} ${this.lname}`;
            },
            set:function(name){
                let fullname = name.split(" ");
                this.fname = fullname[0];
                (fullname[1]==undefined) ? this.lname = '':this.lname = fullname[1];
            }
        }
    }
}
</script>
