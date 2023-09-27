<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="6">Product Name</b-col>
            <b-col cols="2">Price</b-col>
            <b-col cols="2">Qty</b-col>
            <b-col cols="2">Subtotal</b-col>
        </b-row>

        <b-row v-for="item in items" :key="item.id">
            <b-col cols="2">{{ }}</b-col>
            <b-col cols="4">
                <div>{{ item.title }}</div>
                <div>{{ item.category }}</div>
            </b-col>
            <b-col cols="2">${{ item.price }}</b-col>
            <b-col cols="2">Qty</b-col>
            <b-col cols="2">Subtotal</b-col>
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

<style></style>