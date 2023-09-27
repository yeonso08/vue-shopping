<template>
    <div>
        <b-row>
            <b-col cols="7">
                <CartTable :items="cartItems" />
            </b-col>
            <b-col cols="1"></b-col>
            <b-col cols="4">
                <CartBill :items="cartItems" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import CartTable from '@/components/carts/CartTable.vue'
import CartBill from '@/components/carts/CartBill.vue';

export default {
    components: {
        CartTable,
        CartBill,
    },
    data() {
        return {
            cartItems: []
        };
    },
    mounted() {
        this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    }
}
</script>

<style></style>
