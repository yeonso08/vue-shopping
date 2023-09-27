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
            console.log("Current qty:", this.qty);
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
            const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === this.item.id);

            if (existingItemIndex !== -1) {
                // 상품이 이미 장바구니에 있으면 수량만 증가시킨다.
                cartItems[existingItemIndex].qty += this.qty;
            } else {
                // 상품이 장바구니에 없으면 새로 추가한다.
                const itemWithQty = {
                    ...this.item,
                    qty: this.qty
                };
                cartItems.push(itemWithQty);
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            this.$bvToast.toast(`Added to shopping cart. `, {
                title: 'cart',
                autoHideDelay: 3000
            })
        }

    }
}
</script>

