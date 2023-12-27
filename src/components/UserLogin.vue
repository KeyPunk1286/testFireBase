<template>
    <div class="user-login">
        <div v-if="getUser" class="user-login__email">
            <span>{{ getUser.email }}</span>
            <button @click="onLogout">{{ $t('header.logout') }}</button>
        </div>
        <div v-else class="user-login__button-in">
            <button @click="loginWithGoogle">{{ $t('header.login') }}</button>
        </div>
        <div class="user-login__language-button">
            <button @click="changeLanguage('ua')">ua</button> |
            <button @click="changeLanguage('en')">en</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'UserLogin',
    computed: {
        ...mapGetters('auth', ['getUser']),
    },
    methods: {
        ...mapActions('auth', ['loginWithGoogle', 'logout']),
        onLogout() {
            this.logout()
            this.$router.push({ name: 'home' })
        },
        changeLanguage(lang) {
            this.$i18n.locale = lang
            localStorage.setItem('lastLocale', lang)
        },
    },
}
</script>

<style lang="scss" scoped></style>
