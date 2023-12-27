<template>
    <div class="container">
        <nav class="navigator">
            <div class="navigator__router">
                <router-link to="/">{{ $t('header.home') }}</router-link> |
                <router-link to="/laptop">{{ $t('header.laptop') }}</router-link> |
                <router-link to="/basket">{{ $t('header.basket') }}</router-link>
            </div>
            <div class="navigator__auth">
                <user-login />
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
import UserLogin from '@/components/UserLogin.vue'
export default {
    components: {
        UserLogin,
    },
    created() {
        this.$i18n.locale = localStorage.getItem('lastLocale') ?? process.env.VUE_APP_I18N_LOCALE

        const self = this
        window.addEventListener('storage', function () {
            if (self.$i18n.locale !== localStorage.getItem('lastLocale')) {
                self.$i18n.locale = localStorage.getItem('lastLocale')
                self.$router.go()
            }
        })
    },
}
</script>

<style lang="scss">
@import '@/assets/scss';
</style>
