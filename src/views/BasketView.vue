<template>
    <div class="basket-vuew">
        <h2 class="basket-vuew__title">{{ $t('basketPage.title') }}</h2>
        <div class="basket-vuew__product-list">
            <div v-if="isSelect" class="product-list__selected-box">
                <div v-for="product in getBasketProductList" :key="product.id" class="selected-box__item">
                    <p>{{ product.info }}</p>
                    <p>{{ product.price }}</p>
                    <button @click="onDeleteItem(product.id)">{{ $t('basketPage.deleteButton') }}</button>
                </div>
                <div class="selected-box__all-sum">
                    <span>{{ $t('basketPage.allSum') }}</span> {{ getSumBasketProductList }}
                </div>
            </div>
            <div v-else class="product-list__not-selected">
                <h3 class="not-selected__title">{{ $t('basketPage.titleNotSelected') }}</h3>
                <div class="not-selected__button">
                    <button @click="onSelectButton">{{ $t('basketPage.buttonOnSelect') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'BasketView',
    computed: {
        ...mapGetters('basket', ['getBasketProductList', 'getSumBasketProductList']),
        isSelect() {
            return this.getBasketProductList.length
        },
    },
    methods: {
        ...mapActions('basket', ['deleteLaptopObj']),
        onSelectButton() {
            this.$router.push({ name: 'Laptop' })
        },
        onDeleteItem(laptopId) {
            this.deleteLaptopObj(laptopId)
        },
    },
}
</script>

<style lang="scss" scoped></style>
