<template>
  <div id="app">
    <SiteHead/>
    <SiteMain/>
    <SiteFoot/>
  </div>
</template>

<script>
import SiteHead from './components/HeadComponent.vue'
import SiteMain from './components/MainComponent.vue'
import SiteFoot from './components/FootComponent.vue'

export default {
  name: 'App',
  components: {
    SiteHead,
    SiteMain,
    SiteFoot
  }
}
</script>

<style lang="scss">
:root{
  --bg-first: #1d2d3c;
  --bg-two: #2e3a46;

  --text-first: #ffffff;
  --text-two: #687079;
}

#app {
  color: black;
}
</style>
