<template>
    <div>
        <div v-for="seller in getUniqueSellers" :key="seller">
            <input v-model="fiterObj.sellersList" id="sellerFilter" type="checkbox" :value="seller" />
            <label for="sellerFilter">{{ seller }}</label>
        </div>
    </div>
    <div>
        <label for="searchInfo">по моделі</label>
        <input v-model="filterInfo" id="searchInfo" type="text" />
    </div>
    <div>
        <div v-for="brand in getUniqueBrand" :key="brand">
            <input v-model="fiterObj.brandList" id="brandFilter" type="checkbox" :value="brand" />
            <label for="brandFilter">{{ brand }}</label>
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
            filterInfo: null,
        }
    },
    computed: {
        ...mapGetters('laptop', ['getUniqueSellers', 'getUniqueBrand']),
    },
    watch: {
        fiterObj: {
            handler(newVal) {
                if (newVal) {
                    this.filteredLaptopList(this.fiterObj)
                }
            },
            deep: true,
        },
        filterInfo(newVal) {
            if (newVal) {
                this.filteredInfo(newVal)
            }
        },
    },
    methods: {
        ...mapActions('laptop', ['filteredLaptopList', 'filteredInfo']),
    },
}
</script>

<style lang="scss" scoped></style>
