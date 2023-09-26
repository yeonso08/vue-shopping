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
                장바구니
            </span>
            <span>
                <WishlistButton :productId="item.id" />
            </span>
        </div>
    </div>
</template>

<script>
import WishlistButton from '../common/WishlistButton.vue'
export default {
    components: {
        WishlistButton,
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