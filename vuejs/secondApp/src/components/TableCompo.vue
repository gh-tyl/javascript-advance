<template>
    <div>
        <h1>LOVELY TABLE</h1>
        <input v-model="name" />
        <input v-model="family" />
        <input v-model="grade" />
        <button @click="add">Add</button>
        <table border='1'>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student,idx) in students" :key="idx">
                    <td>{{student[1].name}} {{student[1].family}}</td>
                    <td>{{student[1].grade}}</td>
                    <td><button @click="deletebtn(student[0])">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name:'TableCompo',
    data(){
        return{
            students:new Map(),
            name:'',
            family:'',
            grade:''
        }
    },
    methods:{
        add(){
            let student = {name:this.name,family:this.family,grade:this.grade};
            let key = this.students.size+1;
            this.students.set(key,student);
            this.name = '';
            this.family = '';
            this.grade = '';
        },
        deletebtn(key){
            this.students.delete(key);
        },
        defaultStudent(){
            let students = [
                {name:'Marcelo',family:'Ogata',grade:'F'},
                {name:'Jun',family:'Haruka',grade:'C+'}
            ]
            for(let idx in students){
                this.students.set(idx,students[idx]);
            }
        }
    },
    mounted(){
        this.defaultStudent();
        console.log(this.students);
    }
}
</script>
