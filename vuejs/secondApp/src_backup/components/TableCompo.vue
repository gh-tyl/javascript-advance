<template>
    <div>
        <input type="text" v-model="name" />
        <input type="text" v-model="family">
        <input type="text" v-model="grade">
        <button @click="addStudent()">Add</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Family</th>
                <th>Grade</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student.id">
                <td>{{ student.name }}</td>
                <td>{{ student.family }}</td>
                <td>{{ student.grade }}</td>
                <td><button @click="deleteStudent(student.id)">Delete</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "TableCompo",
    props: {
        // name: String,
        // family: String,
        // grade: String
    },
    data() {
        return {
            id: 0,
            name: "",
            family: "",
            grade: "",
            students: []
        }
    },
    methods: {
        addStudent() {
            this.students.push({
                id: this.id,
                name: this.name,
                family: this.family,
                grade: this.grade
            });
            console.log(this.id, this.name, this.family, this.grade);
            this.id++;
            this.name = "";
            this.family = "";
            this.grade = "";
        },
        deleteStudent(id) {
            this.students = this.students.filter(student => student.id !== id);
        }
    }
}
</script>
