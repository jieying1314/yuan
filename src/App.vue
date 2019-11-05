<template>
  <div id="app">
    <div class="content-div">
      <!--<transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">-->
        <router-view/>
      <!--</transition>-->
    </div>
  <Navbar class="footer"></Navbar>
  </div>
</template>

<script>
import Navbar from '@/components/footer'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content-div{
  margin-bottom:60px;
}
</style>
