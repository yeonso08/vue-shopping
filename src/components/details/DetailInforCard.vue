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
            <QtyButton :value="qty" @input="updateQty" />
        </div>
        <div>
            <span>
                <CartButton :item="item" :qty="qty" />
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
import QtyButton from '../common/QtyButton.vue'
import WishlistButton from '../common/WishlistButton.vue'

export default {
    data() {
        return {
            qty: 1
        };
    },
    components: {
        WishlistButton,
        CartButton,
        QtyButton,
    },
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    methods: {
        updateQty(value) {
            this.qty = value;
        }
    }
}
</script>