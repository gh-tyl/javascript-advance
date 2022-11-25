<template>
  <div class="table-responsive">
    <table class="table table-striped
        table-hover
        table-borderless
        table-primary
        align-middle">
      <thead class="table-light">
        <tr>
          <th v-for="(header, idx) in theaders" :key="idx">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="table-group-divider" v-if="patTable">
        <tr class="table-primary">
          <td scope="row">{{ users.first_name }} {{ users.last_name }}</td>
          <td>{{ users.specialty }}</td>
          <td>{{ users.phone }}</td>
          <td>{{ users.email }}</td>
        </tr>
      </tbody>
      <tbody class="table-group-divider" v-else>
        <tr class="table-primary" v-for="(user, idx) in users" :key="idx">
          <td scope="row">{{ user.first_name }} {{ user.last_name }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <button type="button" class="btn btn-outline-primary" @click="patSelect(user.pid)">Prescription</button>
          </td>
        </tr>
      </tbody>
      <tbody class="table-group-divider" v-if='drugTb'>
        <tr class="table-primary" v-for="(drug, idx) in drugs" :key="idx">
          <td scope="row">{{ drug[1].drugname }}</td>
          <td>{{ drug[1].drugbrand }}</td>
          <td>{{ drug[1].price }}</td>
          <td>
            <button type="button" class="btn btn-outline-primary" @click="drugSelect(drug[1].drug_id)">Add</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
export default {
  name: 'TableCompo',
  props: ['theaders', 'users', 'patTable', 'drugTb', 'drugs'],
  data() {
    return {
      docDrugs: new Array(),
    }
  },
  methods: {
    patSelect(pid) {
      this.$emit('pres', pid);
    },
    drugSelect(did) {
      this.$emit('drugSl', did);
    },
  }
}
</script>
