<template>
  <div id="app">
    <div class="nav-line">
        <div v-if="isLoggedIn">
          <div class="nav">
            <div class="el-1 logo"><div class="center"><b class="logo">ADAS</b></div></div>
            <router-link class="el-2 hov s-el" to="/"><div class="center">ПОИСК ОБОРУДОВАНИЯ</div></router-link>
            <div class="el-3 search-box s-el"><input type="search" class="search" placeholder="Поиск"></div>
            <router-link class="el-1 hov s-el" to="/"><div class="center">ЖУРНАЛ</div></router-link>
            <div class="el-2 hov-line s-el"><div class="center"><b>Личный кабинет</b></div></div>
          </div>
        </div>
        <div v-else>
          <div class="nav">
            <router-link class="el-2 logo" to="/"><div class="center">ADAS</div></router-link>
            <div class="el-4 xs-el"></div>
            <router-link class="el-2 hov-line s-el" to="/auth"><div class="center"><b>Войти в личный кабинет</b></div></router-link>
            <router-link class="el-2 hov-line s-el" to="/reg"><div class="center"><b>Создать личный кабинет</b></div></router-link>
          </div>
        </div>
      <div class="nav" v-if="isAdmin">
        <router-link class="el-2 hov s-el" to="/"><div class="center">РЕДАКТИРОВАНИЕ</div></router-link>
        <router-link class="el-2 hov s-el" to="/"><div class="center">ИНВЕНТАРИЗАЦИЯ</div></router-link>
        <router-link class="el-2 hov s-el" to="/"><div class="center">ПОЛЬЗОВАТЕЛИ</div></router-link>
      </div>
    </div>

    <div class="container">      
      <router-view/>
    </div>

    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="scss">
$screen-l: 1240px;
$screen-m: 960px;
$screen-s: 520px;
$screen-xs: 300px;
$screens: (all, 1250, 970, 540); 
@mixin media($property, $values){
    /*разбиваем введенные значения в цикле*/
    @for $i from 1 through length($values) { 
        /*Проверяем, если значение прописано как '' тогда пропускаем его*/
        @if nth($values, $i) != ''{ 
            @if nth($screens, $i) == 'all'{ 
                /*Если это первое значение, тогда значение пропишется без @media screen */
                #{$property}: unquote(#{nth($values, $i)});
            } @else {
                /*иначе помещаем свойство в @media screen с соответствующим индексом*/
                @media screen and (max-width: nth($screens, $i) + 'px') {
                    #{$property}: unquote(#{nth($values, $i)});
                }
            }
        }
    }
}

.nav-line {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgb(31, 30, 32);
}

.nav {
  display: grid;
  @include media(grid-template-columns, (repeat(10, 1fr), repeat(10, 1fr), repeat(6, 1fr), 1fr));
  color: white;
  height: 50px;
  @include media(width, ($screen-l, $screen-m, $screen-s, $screen-xs));
  margin: 0 auto;
}

.el-1 {
  grid-column: span 1;
  justify-self: center;
  align-self: center;
  display: block;
  height: 100%;
  @include media(width, ($screen-l/10, $screen-m/10, $screen-s/6, $screen-s/6));
  cursor: pointer;
}

.el-2 {
  grid-column: span 2;
  justify-self: center;
  align-self: center;
  display: block;
  height: 100%;
  @include media(width, ($screen-l/10*2, $screen-m/10*2, $screen-s/6*2, $screen-s/6*2));
  cursor: pointer;
}

.el-3 {
  grid-column: span 3;
  justify-self: center;
  align-self: center;
}

.el-4 {
  grid-column: span 4;
  justify-self: center;
  align-self: center;
}

.search {
  @include media(width, ($screen-l/11*3 - 10px, $screen-m/11*3 - 10px, $screen-s/7*3 - 10px, 0));
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 7px;
  padding-right: 7px;
  height: 30px;
  background-color: lightgray;
  outline: none;
}

.search:focus {
  background-color: white;
}

.search::placeholder {
  color: rgb(95, 95, 95);
}

.xs-el {
  @include media(display, ('block', 'block', 'none', 'none'));
}

.s-el {
  @include media(display, ('block', 'block', 'block', 'none'));
}

.hov-line:hover {
  b {
    color: white;
    border-bottom: 4px solid rgb(36, 36, 184);;
  } 
}

.logo {
  background-color: rgb(36, 36, 184) !important;
  font-size: 25px;
}

.container {
  @include media(width, ($screen-l - 50px, $screen-m - 50px, calc(100vw - 50px), calc(100vw - 50px)));
  background-color: transparent;
  min-height: calc(100vh - 150px);
  padding: 75px 25px;
  margin: 0 auto;
}

#app {
  margin: 0;
  padding: 0;
}

.hov {
  transition: all .2s ease-in-out;
  &:hover {
    color: white;
    background-color: rgb(36, 36, 184);
  }
}

.router-link-exact-active {
  color: white;
  background-color: rgb(29, 26, 26);
}

.center {  
  position: relative;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  margin-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: .5rem;
}

.card-header {
  display: block;
  height: 40px;
  font-size: 2rem;
  background-color: rgb(36, 35, 35);
  padding: 10px;
  border-bottom: 5px solid  rgb(36, 36, 184);
  border-radius: .5rem .5rem 0 0;
}

.card-body {  
  background-color: rgba(0, 0, 0, 0.181);
  max-height: 200vh;
  overflow: auto;
  padding: 20px;
  font-size: 1.5rem;
}

.card-footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  cursor: pointer;
  height: 50px;
  background-color: rgb(36, 35, 35);
}

.card-footer-button {
  grid-column: span 1;
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 100%;
  border-bottom: 5px solid rgba(173, 173, 173, 0.671);

  &:hover {
    border-bottom: 5px solid rgb(36, 36, 184);
  }
}

.card-footer-button {
  grid-column: span 1;
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 100%;
  border-bottom: 5px solid rgba(173, 173, 173, 0.671);

  &:hover {
    border-bottom: 5px solid rgb(36, 36, 184);
  }
}

.blue {
  color:rgb(85, 85, 192) !important;
}

</style>
