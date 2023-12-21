<template>
    <div class="container">
        <nav class="navigator">
            <div class="navigator__router">
                <router-link to="/">Home</router-link> | <router-link to="/laptop">Laptop</router-link> |
            </div>
            <div class="navigator__auth">
                <user-login />
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import UserLogin from '@/components/UserLogin.vue'
export default {
    components: {
        UserLogin,
    },
    // computed: {
    //     ...mapGetters('auth', ['getUser']),
    // },
    // methods: {
    //     ...mapActions('auth', ['loginWithGoogle', 'logout']),
    // },
}
</script>

<style lang="scss">
@import '@/assets/scss';
</style>
