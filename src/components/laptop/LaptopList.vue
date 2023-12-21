<template>
    <div>
        <div>
            <div v-for="laptop in getLaptopProductList" :key="laptop.id">
                <img :src="laptop.url" />
                <p>{{ laptop.info }}</p>
                <p>{{ laptop.price }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'LaptopList',
    computed: {
        ...mapGetters('laptop', ['getLaptopProductList']),
    },
    methods: {
        ...mapActions('laptop', ['loadList']),
    },
    created() {
        this.loadList()
    },
}
</script>

<style lang="scss" scoped></style>
