<template>
    <div class="login-page">
        <h2 class="login-page__title">{{ $t('loginPage.title') }}</h2>
        <div class="login-page__button">
            <button @click="onLogin">{{ $t('loginPage.button') }}</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'LoginPage',
    methods: {
        ...mapActions('auth', ['loginWithGoogle']),
        async onLogin() {
            try {
                await this.loginWithGoogle()
                this.$router.push({ name: 'basket' })
            } catch (error) {
                alert(error.message)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.login-page {
    padding-top: 20px;
    &__title {
        font-size: 25px;
        margin-bottom: 30px;
    }

    &__button {
        button {
            border: 1px rgba(0, 0, 0, 0.572) solid;
            border-radius: 3px;
            padding: 5px;
        }
    }
}
</style>
