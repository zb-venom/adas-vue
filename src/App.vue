<template>
  <div id="app">
    <div v-if="connect">      
      <router-view/>
    </div>    
    <div class="loaders" v-else>
      <div class="loader-text" >Соединение с сервером...</div>
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    </div>

    
  </div>
</template>

<script>
import { http } from './scripts/http'

export default {
  name: 'App',
  data() {
    return {
      connect: false,
      error: '',
    }
  }, 
  mounted: function() {
    http.post('/connect')
    .then(response => {
      this.connect = response.data.connect
    })
    .catch(e => {
      this.error = e
    })
    let con = setInterval(() => {
      http.post('/connect')
      .then(response => {
        this.connect = response.data.connect
        if(this.connect) clearInterval(con)
      })
      .catch(e => {
        this.error = e
      })
    }, 5000)
  },
} 
</script>

<style lang="scss">

</style>
