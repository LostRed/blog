<template>
    <app-layout>
        <template v-slot:header>
            <app-header/>
        </template>
        <template>
            <register-card/>
        </template>
        <template v-slot:footer>
            <app-footer/>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from '../../components/AppLayout'
import AppHeader from '../../components/AppHeader'
import AppFooter from '../../components/AppFooter'
import RegisterCard from './RegisterCard'

export default {
    name: "Register",
    components: {
        RegisterCard,
        AppLayout,
        AppHeader,
        AppFooter
    }
}
</script>

<style scoped>

</style>