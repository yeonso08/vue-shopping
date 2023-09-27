<template>
    <b-button @click="deleteFromCart">Delete</b-button>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    methods: {
        deleteFromCart() {
            // 로컬 스토리지에서 cartItems를 가져옵니다.
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

            // 해당 항목의 ID와 일치하지 않는 항목만 남겨서 새로운 배열을 생성합니다.
            const updatedCartItems = cartItems.filter(item => item.id !== this.id);

            // 수정된 cartItems를 로컬 스토리지에 다시 저장합니다.
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

            // 상위 컴포넌트에 변경을 알립니다.
            this.$emit('itemDeleted');
        }
    }
}
</script>
