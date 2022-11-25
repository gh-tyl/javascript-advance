<template>
    <div>
        <h1>Conditional Rendeing</h1>
        <h3 v-if="show">This element is using the v-if</h3>
        <h3 v-else>This is the else part</h3>
        <h3 v-show="show">This element is using the v-show</h3>
        <ul>
            <li v-for="(student,idx) in students" :key="idx">{{student}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'ConditionalRender',
    data(){
        return{
            show:false,
            students:['Angel','Damrok','Sam','Haruka','Luke']
        }
    }
}
</script>
