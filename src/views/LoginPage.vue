<!-- <template>
    <div>
        <h2>Авторизуйтесь для подальших дій</h2>
        <div><button @click="onLogin">Авторизуватись</button></div>
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
                this.$router.push({ name: 'about' })
            } catch (error) {
                alert(error.message)
            }
        },
    },
}
</script>

<style lang="scss" scoped></style> -->
