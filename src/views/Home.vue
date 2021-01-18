<template>
  <app-layout>
    <template v-slot:header>
      <app-header/>
    </template>
    <template>
      <div class="page">
        <div class="left-container">
          <content-card/>
        </div>
        <div class="right-container hidden-xs-only">
          <hot-card/>
          <new-card/>
        </div>
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
import ContentCard from '../components/ContentCard'
import HotCard from '../components/HotCard'
import NewCard from '../components/NewCard'

export default {
  name: "home",
  components: {
    AppLayout,
    AppHeader,
    AppFooter,
    ContentCard,
    HotCard,
    NewCard
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  color: #aeb1b6;
}

.left-container {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
}

.right-container {
  padding-left: 20px;
  width: 360px;
}

.box-card {
  margin-bottom: 20px;
}
</style>
