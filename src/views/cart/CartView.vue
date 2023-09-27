<template>
    <div>
        <b-row>
            <b-col cols="7">
                <CartTable :items="cartItems" />
            </b-col>
            <b-col cols="1">2</b-col>
            <b-col cols="4">3</b-col>
        </b-row>
    </div>
</template>

<script>
import CartTable from '@/components/carts/CartTable.vue'

export default {
    components: {
        CartTable,
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
