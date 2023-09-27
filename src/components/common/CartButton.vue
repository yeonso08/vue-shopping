<template>
    <b-button @click="setCart">장바구니</b-button>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        qty: {
            type: Number,
            required: true
        }
    },
    methods: {
        setCart() {
            console.log("Current qty:", this.qty);  // This should print the updated quantity
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
            const itemWithQty = {
                ...this.item,
                qty: this.qty
            };
            cartItems.push(itemWithQty);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            this.$bvToast.toast(`Added to shopping cart. `, {
                title: 'cart',
                autoHideDelay: 3000
            })
        }

    }
}
</script>

