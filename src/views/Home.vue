<template>
  <app-layout>
    <template v-slot:header>
      <app-header/>
    </template>
    <template>
      <div class="dev">
        <h1>项目正在施工~( •̀ ω •́ )y</h1>
      </div>
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

<style scoped>
.dev {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #aeb1b6;
}
</style>