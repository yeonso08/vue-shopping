<template>
    <div>
        <button @click="increment" style="border: none;">+</button>
        <span>{{ localQty }}</span>
        <button @click="decrement" style="border: none;">-</button>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            localQty: this.value
        };
    },
    watch: {
        localQty(newVal) {
            this.$emit('input', newVal);
        }
    },
    methods: {
        increment() {
            this.localQty++;
        },
        decrement() {
            if (this.localQty > 1) {
                this.localQty--;
            }
        }
    }
}
</script>
