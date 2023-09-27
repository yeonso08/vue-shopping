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
            </b-col>
            <b-col cols="4">
                <div>{{ item.title }}</div>
                <div>{{ item.category }}</div>
            </b-col>
            <b-col cols="2">${{ item.price }}</b-col>
            <b-col cols="2">{{ item.qty }}</b-col>
            <b-col cols="2">
                <div>${{ item.price * item.qty }}</div>
                <div>
                    <CartDelete :id="item.id" @itemDeleted="refreshCart" />
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import CartDelete from '../common/CartDelete.vue'

export default {
    components: {
        CartDelete,
    },
    props: {
        items: {
            type: Array,
            require: true
        }
    },
    methods: {
        refreshCart() {
            this.$emit('cartUpdated');
        }
    }
}
</script>