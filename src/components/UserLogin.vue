<template>
    <div v-if="getUser" class="user">
        <span>{{ getUser.email }}</span>
        <button @click="onLogout">logout</button>
    </div>
    <div v-else class="user-out">
        <button @click="loginWithGoogle">login</button>
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
    },
}
</script>

<style lang="scss" scoped></style>
