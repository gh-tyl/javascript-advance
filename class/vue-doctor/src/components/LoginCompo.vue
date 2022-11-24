<template>
  <div class="row justify-content-center align-items-center mt-4 g-2">
    <div class="col-4">
      <login-form @login="login"></login-form>
    </div>
  </div>
</template>
<script>
import LoginForm from './LoginForm.vue'
export default {
  name: 'LoginCompo',
  props: ['srcData'],
  components: {
    LoginForm
  },
  methods: {
    login(logUser, logtype) {
      let thisObj = this;
      switch (logtype) {
        case "doc":
          logUser.email = 'hbeaty0@about.me';
          logUser.pass = 'pppYLIBhsU'
          this.srcData.docData.forEach((doctor) => {
            if (doctor.email == logUser.email && doctor.password == logUser.pass) {
              thisObj.$emit('logged', doctor, "docFlag");
              thisObj.$router.push({ name: 'doctor-compo' });
              return false;
            }
          })
          break;
        case "pat":
          logUser.email = 'edinsey8@springer.com';
          logUser.pass = 'v0R5zBGf7r'
          this.srcData.patData.forEach((pat) => {
            if (pat.email == logUser.email && pat.password == logUser.pass) {
              thisObj.$emit('logged', pat, "patFlag");
              thisObj.$router.push({ name: 'pat-home' });
              return false;
            }
          })
          break;
      }
    }
  }
}
</script>
