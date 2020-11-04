<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <VillButton></VillButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VillButton from '../../src/components/button/index';

@Component({
  name: 'Home',
  components: {
    VillButton,
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.home {
  // height: 100vh;
  // overflow-y: auto;
}
</style>
