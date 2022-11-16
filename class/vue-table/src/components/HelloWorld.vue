<script setup>
import { productClass } from '../class/productClass.js'
</script>

<template>
    <div>
        <div>
            <input type="text" v-model="pname" placeholder="pname" />
            <input type="number" v-model="price" placeholder="price" />
            <input v-if="isAdd" type="number" v-model="amount" placeholder="amount" v-on:keyup.enter="add" />
            <input v-else type="number" v-model="amount" placeholder="amount" v-on:keyup.enter="save" />
            <!-- <button @click="add">Add</button> -->
            <!-- default add but if push edit, change to save -->
            <!-- <button v-if="isAdd" @click="add">Add</button> -->
            <!-- <button v-else @click="save">Save</button> -->
        </div>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>amount</th>
                    <th>Before Tax</th>
                    <th>Total After Tax</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <!-- display map -->
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item[1].pname }}</td>
                    <td>{{ item[1].price }}</td>
                    <td>{{ item[1].amount }}</td>
                    <td>{{ item[1].beforeTax }}</td>
                    <td>{{ item[1].afterTax }}</td>
                    <td>
                        <button @click="edit(item[0])">Edit</button>
                    </td>
                    <td><button @click="del(item[0])">Delete</button></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">Total</td>
                    <td>{{ all_total_before_tax }}</td>
                    <td>{{ all_total_after_tax }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    name: "TheWelcome",
    data() {
        return {
            id: 0,
            pname: "",
            price: 0,
            amount: 0,
            total_before_tax: 0,
            total_after_tax: 0,
            items: new Map(),
            isAdd: true,
            tmp_idx: 0,
        };
    },
    computed: {
        all_total_before_tax() {
            let total = 0;
            this.items.forEach((item) => {
                total += item.price * item.amount;
            });
            return total;
        },
        all_total_after_tax() {
            let total = 0;
            this.items.forEach((item) => {
                total += item.price * item.amount * 1.1;
            });
            // round to 2 decimal
            return Math.round(total * 100) / 100;
        },
    },
    methods: {
        add() {
            let item = new productClass(this.id, this.pname, this.price, this.amount);
            console.log(item);
            this.items.set(this.id, item.toObject());
            console.log(this.items);
            this.id++;
            // reset
            this.pname = "";
            this.price = 0;
            this.amount = 0;
        },
        del(index) {
            this.items.delete(index);
        },
        edit(index) {
            this.isAdd = false;
            this.pname = this.items.get(index).pname;
            this.price = this.items.get(index).price;
            this.amount = this.items.get(index).amount;
            // this.del(index);
            this.tmp_idx = index;
        },
        save() {
            let item = new productClass(this.tmp_idx, this.pname, this.price, this.amount);
            this.items.set(this.tmp_idx, item.toObject());
            this.isAdd = true;
            // reset
            this.pname = "";
            this.price = 0;
            this.amount = 0;
        },
    },
};
</script>
