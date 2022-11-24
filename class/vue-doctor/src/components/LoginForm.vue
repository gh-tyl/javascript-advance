<template>
  <form @submit.prevent="login">
    <div class="mb-3">
      <select class="form-select form-select-lg" v-model="logtype">
        <option value="" selected>Select one</option>
        <option value="doc">Doctors</option>
        <option value="pat">Patients</option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="email" v-model="logUser.email" class="form-control" aria-describedby="helpId" />
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="password" v-model="logUser.pass" @keyup.enter="login" class="form-control"
        aria-describedby="helpId" />
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
    <div v-if="err" class="alert alert-danger alert-dismissible fade show" role="alert">
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      <strong>Login Error</strong> {{ msg }}
    </div>
  </form>


</template>
<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      logUser: { email: '', pass: '' },
      logtype: '',
      msg: '',
      err: false
    }
  },
  methods: {
    login() {
      if (this.logtype != '') {
        this.$emit('login', this.logUser, this.logtype);
      } else {
        this.msg = "Please select the login type.";
        this.err = true;
      }
    }
  }
}
</script>
