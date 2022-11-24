<template>
  <div class="row justify-content-start align-items-start g-2">
    <div class="col">
      <h1>{{ loggedUser.first_name }} {{ loggedUser.last_name }}</h1>
      <table-compo :theaders="theaders" :users="desDoc" :patTable="true" :deDoc="desDoc"></table-compo>
    </div>
  </div>
</template>

<script>
import TableCompo from './TableCompo.vue'
export default {
  name: 'PatHome',
  components: {
    TableCompo
  },
  props: ['loggedUser', 'srcData'],
  data() {
    return {
      theaders: ['Doctor name', 'specialty', 'Phone', 'Email', 'drugs'],
      desDoc: ''
    }
  },
  methods: {
    // // get drugs from local storage, and add to desDoc if doc_id matches
    // getDrugs() {
    //   let thisObj = this;
    //   let drugs = JSON.parse(localStorage.getItem('drugs'));
    //   thisObj.desDoc = thisObj.srcData.docData;
    //   thisObj.desDoc.forEach((doc) => {
    //     doc.drugs = [];
    //     drugs.forEach((drug) => {
    //       if (doc.id == drug.doc_id) {
    //         doc.drugs.push(drug);
    //       }
    //     })
    //   })
    //   console.log(thisObj.desDoc);
    // }
  },
  mounted() {
    this.desDoc = this.srcData.docData.get(this.loggedUser.doc_id);
    console.log(this.desDoc);
  }
}
</script>
