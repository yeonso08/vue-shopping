<template>
    <div>
        <CategoryCard v-for="product in CategoryProducts" :key="product.id" :item="product" />
    </div>
</template>

<script>
import CategoryCard from '@/components/categorys/CategoryCard.vue'
import { Api } from '@/api/Api';
export default {
    components: {
        CategoryCard,
    },
    data() {
        return {
            CategoryProducts: []
        }
    },
    methods: {
        fetchCategoryProducts(categoryId) {
            Api.getCategoryProducts(categoryId).then(res => {
                console.log("Received categories:", res.data);
                this.CategoryProducts = res.data;
            }).catch(error => {
                console.error("API 호출 중 에러 발생:", error);
            });
        }
    },
    mounted() {
        const categoryId = this.$route.params.id;
        this.fetchCategoryProducts(categoryId);
    }

}
</script>