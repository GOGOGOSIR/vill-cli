<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <slot name="desc"></slot>
    </div>
    <div class="device-wrapper" v-show="deviceVisible">
      <div class="display-wrapper" :style="wrapperStyle">
        <slot name="display">
          <iframe :src="iframeSrc" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { IFRAME_SRC } from '../config/config.js'

export default {
  name: 'DocsWrapper',
  props: {
    deviceVisible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      wrapperStyle: {},
      iframeSrc: IFRAME_SRC
    }
  },
  mounted() {
    this.initDocs()
  },
  methods: {
    initDocs () {
      this.wrapperStyle = {
        backgroundImage: `url(${this.$withBase('/imgs/iphoneX.png')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
      console.log(this.iframeSrc)
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  .content-wrapper{
    display: block;
    flex: 1;
    min-width: 345px;
    padding: 20px 30px 30px;
    box-sizing: border-box;
    overflow: auto;
  }
  .device-wrapper{
    flex: none;
    height: 100%;
    overflow-y: auto;
    position: sticky;
    top: 3.8em;
    display: flex;
    justify-content: center;
    margin: 0 56px 0 25px;
    .display-wrapper{
      position: relative;
      width: 330px;
      height: 645px;
      box-sizing: border-box;
      padding: 64px 23px 22px 21px;
    }
  }
  @media (max-width: 720px){
    .wrapper {
      flex-direction: column;
    }
    .device-wrapper {
      margin: 0 auto;
    }
  }
}
</style>
