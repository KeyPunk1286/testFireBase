<template>
    <div class="laptop-filter">
        <div class="laptop-filter__sellers">
            <div v-for="seller in getSellersList" :key="seller.id" class="sellers__item">
                <input v-model="fiterObj.sellersList" :id="seller.id" type="checkbox" :value="seller.firm" />
                <label :for="seller.id">{{ seller.firm }}</label>
            </div>
        </div>
        <div class="laptop-filter__brand-filter">
            <input v-model="filterBrandName" type="text" :placeholder="$t('laptopPage.placeholder')" />
        </div>
        <div class="laptop-filter__brand">
            <div v-for="brand in getBrandList" :key="brand.id" class="brand__item">
                <input v-model="fiterObj.brandList" :id="brand.id" type="checkbox" :value="brand.name" />
                <label :for="brand.id">{{ brand.name }}</label>
            </div>
        </div>
        <div @click="onResetFilter" class="laptop-filter__button-reset">
            <button>{{ $t('laptopPage.buttonRset') }}</button>
            <button v-if="userPermissions.create" @click="onAddNewLaptop">{{ $t('laptopPage.buttonAdd') }}</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'LaptopFilter',
    data() {
        return {
            fiterObj: {
                sellersList: [],
                brandList: [],
            },
            filterBrandName: null,
        }
    },
    computed: {
        // ...mapGetters('laptop', ['getUniqueSellers', 'getUniqueBrand']),
        ...mapGetters('sellers', ['getSellersList']),
        ...mapGetters('brand', ['getBrandList']),
        ...mapGetters('users', ['userPermissions']),
    },
    watch: {
        fiterObj: {
            handler(newVal) {
                // if (newVal) {
                // }
                this.loadFilteredNotebooksList(newVal)
            },
            deep: true,
        },
        filterBrandName(newVal) {
            this.filteredBrandName(newVal)
        },
    },

    methods: {
        ...mapActions('laptop', ['loadFilteredNotebooksList']),
        ...mapActions('sellers', ['loadSellersList']),
        ...mapActions('brand', ['loadBrandList', 'filteredBrandName']),
        onResetFilter() {
            this.filterBrandName = null
            this.fiterObj.sellersList = []
            this.fiterObj.brandList = []
        },
        onAddNewLaptop() {
            this.$router.push({ name: 'edit-card' })
        },
    },
    created() {
        this.loadSellersList()
        this.loadBrandList()
    },
}
</script>

<style lang="scss" scoped></style>
