<template>
    <div>
        <b-img :src="image" fluid alt="Fluid image"></b-img>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            required: true
        }
    },
}
</script>

<style></style>