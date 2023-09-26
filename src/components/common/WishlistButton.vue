<template>
    <div @click="toggleLike">
        <div v-if="isProductLiked" variant="danger">
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
        }
    },
    computed: {
        ...mapGetters(['isProductLiked'])
    },
    methods: {
        ...mapActions(['toggleLike']),
        toggleLike() {
            this.toggleLike(this.productId);
        }
    }
}
</script>
