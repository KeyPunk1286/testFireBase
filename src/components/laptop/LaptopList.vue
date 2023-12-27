<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="hasError">Error</div>
    <template v-else>
        <div class="laptop-list">
            <div v-for="laptop in getLaptopProductList" :key="laptop.id" class="laptop-list__item">
                <img :src="laptop.url" class="item__img" />
                <p class="item__info">{{ laptop.info }}</p>
                <p class="item__price">{{ laptop.price }}</p>
                <div class="item__button">
                    <button @click="addToBasket(laptop)">{{ $t('laptopPage.buttonBasket') }}</button>
                    <button v-if="userPermissions.update" @click="onEdit(laptop.id)">
                        {{ $t('iaptopItem.buttonEdit') }}
                    </button>
                    <button v-if="userPermissions.delete" @click="deleteItem(laptop.id)">
                        {{ $t('iaptopItem.buttonDelete') }}
                    </button>
                </div>
            </div>
        </div>
    </template>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'LaptopList',
    computed: {
        ...mapGetters('laptop', ['getLaptopProductList', 'isLoading', 'hasError']),
        ...mapGetters('users', ['userPermissions']),
        ...mapGetters('auth', ['getUser']),
    },
    methods: {
        ...mapActions('laptop', ['loadList', 'deleteItem']),
        ...mapActions('basket', ['addNewLaptop']),
        onEdit(idLaptop) {
            this.$router.push({
                name: 'edit-card',
                params: {
                    id: idLaptop,
                },
            })
        },
        addToBasket(laptop) {
            if (this.getUser) {
                this.addNewLaptop(laptop)
            } else this.$router.push({ name: 'login' })
        },
    },
    created() {
        this.loadList()
    },
}
</script>

<style lang="scss" scoped></style>
