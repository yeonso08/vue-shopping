<template>
    <b-button @click="setCart">장바구니</b-button>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        setCart() {
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
            cartItems.push(this.item);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            this.$bvToast.toast(`장바구니에 추가 됐습니다. `, {
                title: 'cart',
                autoHideDelay: 3000,
            })
        }
    }
}
</script>

