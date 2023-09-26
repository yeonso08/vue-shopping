<template>
    <div>
        <b-card :title="item.title" :img-src="item.image" img-alt="Image" img-top tag="article" style="max-width: 20rem;"
            class="mb-2">
            <b-card-sub-title class="mb-2">{{ item.category }}</b-card-sub-title>
            <b-card-text>
                <span>****</span>
                <span>{{ item.rating.count }}ratings</span>
            </b-card-text>
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
    }
}
</script>
