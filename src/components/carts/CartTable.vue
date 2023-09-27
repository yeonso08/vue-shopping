<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="6">Product Name</b-col>
            <b-col cols="2">Price</b-col>
            <b-col cols="2">Qty</b-col>
            <b-col cols="2">Subtotal</b-col>
        </b-row>
        <hr />
        <b-row v-for="item in items" :key="item.id">
            <b-col cols="2">
                <img :src="item.image" alt="Item Image" style="width: 100px; height: 100px;" />
            </b-col> <b-col cols="4">
                <div>{{ item.title }}</div>
                <div>{{ item.category }}</div>
            </b-col>
            <b-col cols="2">${{ item.price }}</b-col>
            <b-col cols="2">{{ item.qty }}</b-col>
            <b-col cols="2">${{ item.price * item.qty }}</b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            require: true
        }
    }
}
</script>