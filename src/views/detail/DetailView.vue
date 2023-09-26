<template>
    <b-container>
        <b-row>
            <b-col>
                <DetailImgCard :image="ProductsDetail.image" />
            </b-col>
            <b-col>
                <DetailInforCard :item="ProductsDetail" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { Api } from '@/api/Api';
import DetailImgCard from '@/components/details/DetailImgCard.vue';
import DetailInforCard from '@/components/details/DetailInforCard.vue';

export default {
    components: {
        DetailImgCard,
        DetailInforCard
    },
    data() {
        return {
            ProductsDetail: []
        }
    },
    methods: {
        fetchProductsDetail(productId) {
            Api.getProductsDetail(productId).then(res => {
                console.log("Received :", res.data);
                this.ProductsDetail = res.data;
            }).catch(error => {
                console.error("API 호출 중 에러 발생:", error);
            });
        }
    },
    mounted() {
        const productId = this.$route.params.id;
        this.fetchProductsDetail(productId);
    }
}
</script>

<style></style>