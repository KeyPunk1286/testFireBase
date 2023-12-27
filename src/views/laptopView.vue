<template>
    <div class="laptop-view">
        <div class="laptop-view__filter">
            <laptop-filter />
        </div>
        <div class="laptop-view__list">
            <laptop-list />
        </div>
    </div>
</template>

<script>
import LaptopList from '@/components/laptop/LaptopList.vue'
import LaptopFilter from '@/components/laptop/LaptopFilter.vue'
export default {
    name: 'laptopView',
    components: {
        LaptopFilter,
        LaptopList,
    },
}
</script>

<style lang="scss" scoped></style>
