<template>
     <div class="row justify-content-start align-items-start g-2">
        <div class="col">
            <h1>{{loggedUser.first_name}} {{loggedUser.last_name}}</h1>
            <table-compo @pres="pres" :users="docPat" :theaders="theaders"></table-compo>
        </div>
    </div>
</template>
<script>
import TableCompo from './TableCompo.vue'
export default {
    name:'DoctorHome',
    props:['loggedUser','srcData'],
    components:{
        TableCompo
    },
    data(){
       return{
            docPat:[],
            theaders:['Full Name','Gender','Email','Phone']
       }
    },
    methods:{
        loadPatients(){
            let doc_id = this.loggedUser.doc_id;
            let patients = this.srcData.patData;
            let thisObj = this;
            patients.forEach((patient)=>{
                if(patient.doc_id == doc_id){
                    thisObj.docPat.push(patient);
                }
            })
        },
        pres(pid){
            let selectedPat = this.srcData.patData.get(pid);
            this.$emit('pres',selectedPat);
            this.$router.push({name:'pres-compo'});
        }
    },
    mounted(){
        this.loadPatients();

    }
}
</script>
