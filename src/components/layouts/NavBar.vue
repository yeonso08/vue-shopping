<template>
    <div>
        <b-navbar toggleable="lg" variant="white" style="color: var(--primary);">
            <b-navbar-brand href="/" style="color: var(--primary);">CORA'L</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item v-for="category in categories" :key="category" :href="`/category/${category}`"
                        style="color: var(--primary);">{{ category }}</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size=" sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    </b-nav-form>
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { Api } from "@/api/Api";

export default {
    data() {
        return {
            categories: []
        }
    },
    methods: {
        fetchCategories() {
            Api.getAllCategories().then(res => {
                console.log("Received categories:", res.data);
                this.categories = res.data;
            }).catch(error => {
                console.error("API 호출 중 에러 발생:", error);
            });
        }
    },
    mounted() {
        this.fetchCategories();
    }
}
</script>