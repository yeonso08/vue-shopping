<template>
    <div>
        <b-card :title="item.title" :img-src="item.image" img-alt="Image" img-top tag="article" style="max-width: 20rem;"
            class="mb-2">
            <router-link :to="`/products/${item.id}`" style="text-decoration: none; color: inherit;">
                <b-card-sub-title class="mb-2">{{ item.category }}</b-card-sub-title>
                <b-card-text>
                    <span>{{ stars }}</span>
                    <span>{{ item.rating.count }}ratings</span>
                </b-card-text>
            </router-link>
            <b-card-text class="d-flex justify-content-between">
                <span>${{ item.price }}</span>
                <span>HEART</span>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Array,
            required: true
        }
    },
    computed: {
        stars() {
            const roundedRate = Math.round(this.item.rating.rate); // Round the rate
            return '*'.repeat(roundedRate); // Return a string with that number of '*' characters
        }
    }
}
</script>
