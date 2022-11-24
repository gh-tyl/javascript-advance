<template>
  <div>
      <main-menu :logFlag="logFlag"></main-menu>
      <router-view @logged="logged" @pres="pres"  :selectedPat="selectedPat" :loggedUser="loggedUser" :srcData=loadedObj class="container"></router-view>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import getJson from './services/getJson.js'
export default {
  name: 'App',
  components: {
    MainMenu
  },
  data(){
    return{
      doctors: new Map(),
      patients: new Map(),
      drugs: new Map(),
      loadedObj:{},
      logFlag:'',
      loggedUser:null,
      selectedPat:''
    }
  },
  methods:{
    pres(selectedPat){
      this.selectedPat = selectedPat;
    },
    loadDoc(){
      getJson.load('doctors')
      .then((res)=>{
        let thisObj = this;
        res.data.forEach((doctor)=>{
          thisObj.doctors.set(doctor.doc_id,doctor);
        })
      })
      .catch((e)=>console.log(e))
    },
    loadPat(){
      getJson.load('patients')
      .then((res)=>{
        let thisObj = this;
        res.data.forEach((pat)=>{
          thisObj.patients.set(pat.pid,pat);
        })
      })
      .catch((e)=>console.log(e))
    },
    loadDrugs(){
      getJson.load('drugs')
      .then((res)=>{
        let thisObj = this;
        res.data.forEach((drug)=>{
          thisObj.drugs.set(drug.drug_id,drug);
        });
        this.loadedObj = {
          docData:thisObj.doctors,
          patData:thisObj.patients,
          drugData:thisObj.drugs
        }
      })
      .catch((e)=>console.log(e))
    },
    logged(loggedUser,logFlag){
      this.logFlag = logFlag;
      this.loggedUser = loggedUser;
    }
  },
  mounted(){
    this.loadDoc();
    this.loadPat();
    this.loadDrugs();
  }
}
</script>

<style>

</style>
