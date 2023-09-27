<template>
    <div>
        <div>{{ item.title }}</div>
        <div>{{ item.category }}</div>
        <div>
            <span>{{ item.rating.rate }}</span>
            <span>{{ item.rating.count }}ratings</span>
        </div>
        <div>
            ${{ item.price }}
        </div>
        <hr />
        <div>
            수량
        </div>
        <div>
            <span>
                <CartButton :item="item" />
            </span>
            <span>
                <WishlistButton :productId="item.id" :productName="item.title" :productImage="item.image"
                    :productPrice="item.price" />
            </span>
        </div>
    </div>
</template>

<script>
import CartButton from '../common/CartButton.vue'
import WishlistButton from '../common/WishlistButton.vue'

export default {
    components: {
        WishlistButton,
        CartButton,
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
}
</script>

<style></style>