<template>
    <div>
        <div>
            Order Summary
        </div>
        <hr />
        <b-row align-h="between">
            <b-col cols="4">Sub Total</b-col>
            <b-col cols="4">${{ total }}</b-col>
        </b-row>
        <b-row align-h="between">
            <b-col cols="4">Discount</b-col>
            <b-col cols="4">-$0.00</b-col>
        </b-row>
        <b-row align-h="between">
            <b-col cols="4">Delivery Free</b-col>
            <b-col cols="4">-$0.00</b-col>
        </b-row>
        <b-row align-h="between">
            <b-col cols="4">Grand Total</b-col>
            <b-col cols="4">${{ total }}</b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            require: true
        }
    },
    computed: {
        total() {
            return this.items.reduce(
                (sum, item) => sum + item.price * item.qty,
                0
            );
        }
    }
}
</script>