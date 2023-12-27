<template>
    <div class="laptop-edit">
        <div class="laptop-edit__input-box">
            <div class="input-box__item">
                <label for="inputIgmg">{{ $t('laptopEdit.inputIgmg') }}</label>
                <input v-model="ObjectLaptop.url" id="inputIgmg" type="text" />
            </div>
            <div class="input-box__item">
                <label for="inputInfo">{{ $t('laptopEdit.inputInfo') }}</label>
                <input v-model="ObjectLaptop.info" id="inputInfo" type="text" />
            </div>
            <div class="input-box__item">
                <label for="inputPrice">{{ $t('laptopEdit.inputPrice') }}</label>
                <input v-model="ObjectLaptop.price" id="inputPrice" type="number" />
            </div>
            <div class="input-box__item">
                <label for="inputSellers">{{ $t('laptopEdit.inputSellers') }}</label>
                <input v-model="ObjectLaptop.sellers" id="inputSellers" type="text" />
            </div>
            <div class="input-box__item">
                <label for="inputBrand">{{ $t('laptopEdit.inputBrand') }}</label>
                <input v-model="ObjectLaptop.brand" id="inputBrand" type="text" />
            </div>
        </div>
        <div class="laptop-edit__button">
            <button @click="onAction">{{ actionButtonTitle }}</button>
            <button @click="onCancel">{{ $t('laptopEdit.cancelButton') }}</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getUpdateFilter } from '@/store/helpers/filter.js'
export default {
    name: 'LaptopEdit',
    data() {
        return {
            ObjectLaptop: {},
        }
    },
    computed: {
        ...mapGetters('laptop', ['getItemById']),
        receivedIdLaptop() {
            return this.$route.params.id
        },
        isIdentifylanguage() {
            return this.$i18n.locale
        },
        actionButtonTitle() {
            if (this.isIdentifylanguage == 'ua') {
                return this.receivedIdLaptop ? 'оновити' : 'зберегти'
            } else {
                return this.receivedIdLaptop ? 'update' : 'add'
            }
        },
    },
    methods: {
        ...mapActions('laptop', ['updateItem', 'addItem']),
        onAction() {
            if (!this.receivedIdLaptop) {
                this.addItem(this.ObjectLaptop)
                this.$router.push({ name: 'Laptop' })
            } else {
                const copyItemLaptop = this.getItemById(this.receivedIdLaptop)
                const data = getUpdateFilter(this.ObjectLaptop, copyItemLaptop)
                this.updateItem({
                    itemId: this.ObjectLaptop.id,
                    data,
                })
                this.ObjectLaptop = {}
                this.$router.push({ name: 'Laptop' })
            }
        },
        onCancel() {
            this.ObjectLaptop = {}
            this.$router.push({ name: 'Laptop' })
        },
    },
    created() {
        this.ObjectLaptop = { ...this.getItemById(this.receivedIdLaptop) }
    },
}
</script>

<style lang="scss" scoped></style>
