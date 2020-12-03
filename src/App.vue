<template>
  <div id="app">
    <div v-if="connect">      
      <div class="block" v-if="isBlock">
        <span>Ваш аккаунт еще неподтвержден или заблокированн.</span>
        <br>
        <p>Пожалуйста обратитесь к Администратору.</p>
        <button @click="logout">Выйти</button>
      </div>
      <router-view v-else/>
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
      isBlock: false
    }
  }, 
  methods: {
    logout() {
        this.$store.dispatch('logout')  
        this.$router.push('/')
        location.reload()
    },
  },
  mounted: function() {
    try {
      if (JSON.parse(localStorage.getItem('user')).isBlock) {
        this.isBlock = true      
      } else {
        this.isBlock = false
      }
    } catch {
        this.isBlock = false
    }
    http.post('/connect')
    .then(response => {
      if (response.data.logout) {
        this.logout()
        this.connect = response.data.connect
      }
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
#app {
    min-width: 900px;
}

.block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  > span {
    display: block;
    font-size: 22px;
    color:  rgb(255, 134, 134);
  }

  > p {
    display: block;
    font-size: 18px;
    font-weight: lighter;
    color:  rgba(145, 76, 76, 0.575);
  }

  > button {    
    outline: none;
    width: 492px;
    height: 52px;
    margin-top: 10px;
    border: 1px solid rgb(104, 16, 0);
    border-radius: .2rem;
    background: rgb(199, 0, 0);
    font-size: 1.2rem;
    color: whitesmoke;
    cursor: pointer;
  }
}

</style>
