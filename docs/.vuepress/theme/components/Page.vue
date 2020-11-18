<template>
  <div class="docs-app-wrapper">
    <div class="wrapper">
      <div class="content-wrapper">
        <Content/>
      </div>
      <div class="device-wrapper" v-show="deviceVisible">
        <div class="display-wrapper" :style="wrapperStyle">
          <div v-show="renderIframe" class="display-wrapper-loading">wating...</div>
          <iframe :src="iframeSrc" frameborder="0" width="100%" height="100%" scrolling="no" @load.once="triggerRendeIframe"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IFRAME_SRC } from '@vuepress/utils/config.js'
import { baseRoutes } from '@example/router/baseRouter.ts'

export default {
  name: 'DocsWrapper',
  data () {
    return {
      wrapperStyle: {},
      iframeSrc: IFRAME_SRC,
      deviceVisible: false,
      renderIframe: true
    }
  },
  mounted() {
    this.initDocs()
  },
  watch: {
    $route: {
      handler (route) {
        console.log(route, '=====', baseRoutes)
        if (route.fullPath.indexOf('/components/') > -1) {
          this.deviceVisible = true
          console.log(this.deviceVisible)
          if (route.fullPath.indexOf('theme') > 0) {
            this.iframeSrc = IFRAME_SRC +  'about'
          } else {
            this.iframeSrc = IFRAME_SRC
          }
        } else {
          this.deviceVisible = false
        }
      },
      immediate: true
    }
  },
  methods: {
    triggerRendeIframe () {
      this.renderIframe = false
    },
    initDocs () {
      this.wrapperStyle = {
        backgroundImage: `url(${this.$withBase('/imgs/iphoneX.png')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.docs-app-wrapper{
  font-size: 16px;
  margin-left: 14em;
  margin-top: 3.6em;
  box-sizing: border-box;
  padding: 1em;
  @media (max-width: 959px){
    font-size: 15px;
    margin-top: 3.83em;
  }
  @media (max-width: 719px) {
    font-size: 14px;
    margin-top: 4.1em;
    width: 100%;
    margin-left: 0;
    padding: 10px;
  }
}
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
    .display-wrapper-loading {
      position: absolute;
      top: 64px;
      left: 21px;
      right: 23px;
      bottom: 22px;
      background: rgba(0, 0, 0, .5);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
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
