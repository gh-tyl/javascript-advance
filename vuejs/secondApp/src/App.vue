<template>
  <div>
    <main-menu @firstChild="childEvent" :secmsg="firstChild" parentmsg="message from the parent"></main-menu>
    <second-child @sendmsg="childEvent" :mainmsg="secChild"></second-child>
    <computed-pro></computed-pro>
    <watch-props></watch-props>
    <conditional-render></conditional-render>
    <table-compo></table-compo>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import SecondChild from './components/SecondChild.vue'
import ComputedPro from './components/ComputedPro.vue'
import WatchProps from './components/WatchProps.vue'
import ConditionalRender from './components/ConditionalRender.vue'
import TableCompo from './components/TableCompo.vue'
export default {
  name: 'App',
  components: {
    MainMenu,
    SecondChild,
    ComputedPro,
    WatchProps,
    ConditionalRender,
    TableCompo
  },
  data(){
    return{
      firstChild:'',
      secChild:''
    }
  },
  methods:{
    childEvent(child,msg){
      switch(child){
        case "firstchild":
          this.secChild = msg;
          break;
        case "secchild":
          this.firstChild = msg;
          break;
      }

    }
  }
}
</script>

<style>
div{
  border: 1px solid;
}
</style>
