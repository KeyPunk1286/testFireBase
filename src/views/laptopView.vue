<template>
    <div>
        <laptop-filter />
    </div>
    <div>
        <laptop-list />
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
