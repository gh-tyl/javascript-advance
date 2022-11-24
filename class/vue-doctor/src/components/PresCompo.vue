<template>
    <div class="row justify-content-start align-items-start g-2">
        <div class="col">
            <h1>{{loggedUser.first_name}} {{loggedUser.last_name}}</h1>
            <h3>Prescription for: {{selectedPat.first_name}} {{selectedPat.last_name}}</h3>
            <button type="button" class="btn btn-primary" @click="presSubmit">Submit</button>
            <table-compo @drugSl="drugSl" :theaders="theaders" :drugTb="true" :drugs="drugs"></table-compo>
        </div>
    </div>
</template>
<script>
import TableCompo from './TableCompo.vue'
export default {
    name:'PresCompo',
    props:['loggedUser','srcData','selectedPat'],
    components:{
        TableCompo
    },
    data(){
        return{
            theaders:['Drug Name','Drug Brand','Price'],
            drugs:null,
            presList:{}
        }
    },
    methods:{
        drugSl(did){
            this.presList.drugsCode.push(did);
        },
        presSubmit(){
            localStorage.setItem(this.selectedPat.pid,JSON.stringify(this.presList));
            this.$router.push({name:'doctor-compo'});
        }
    },
    mounted(){
        this.drugs = this.srcData.drugData;
        this.presList = {
            docid:this.loggedUser.doc_id,
            drugsCode:[]
        }
    }
}
</script>
