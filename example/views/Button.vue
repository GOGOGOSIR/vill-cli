<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <!-- <vill-button></vill-button> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import VillButton from 'components/base/Button/Button.jsx'

const VIEWS_NAME = 'ButtonPage'

@Component({
  name: VIEWS_NAME,
  components: {
    // VillButton
  }
})

export default class extends Vue {
  private msg = 'This is an Botton page'
}
</script>
