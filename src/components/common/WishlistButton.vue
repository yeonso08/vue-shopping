<template>
    <div @click="onToggleLike">
        <div v-if="isProductLiked(productId)" variant="danger">
            ♥
        </div>
        <div v-else variant="danger">
            ♡
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    props: {
        productId: {
            type: [String, Number],
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        productImage: {
            type: String,
            required: true
        },
        productPrice: {
            type: [String, Number],
            required: true
        }
    },
    computed: {
        ...mapGetters(['isProductLiked'])
    },
    methods: {
        ...mapActions(['toggleLike']),
        onToggleLike() {
            this.toggleLike(this.productId);
            this.$bvToast.toast(`${this.productName} ${this.productPrice} `, {
                title: 'Wish',
                src: `${this.productImage}`,
                autoHideDelay: 5000,
            })
        }
    }
}
</script>
