<template>
    <div class="conteiner">
        <NavBar/>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    title: 'ADAS | Поиск оборудования',
    data() {
        return {

        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')  
            this.$router.push('/')
        }
    },
    mounted: function() {        
    }, 
    components: {
        NavBar
    }
}
</script>