<template>
  <app-layout>
    <template v-slot:header>
      <app-header/>
    </template>


    <template v-slot:footer>
      <app-footer/>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from '../components/AppLayout'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default {
  name: "home",
  components: {
    AppLayout,
    AppHeader,
    AppFooter
  }
}
</script>

<style>

</style>