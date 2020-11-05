<template>
    <div class="content">
        <NavBar/>
        <div class="text">Учёт</div>
        
    </div>
</template>

<style lang="scss" scoped>
$gold: rgb(255, 212, 0);
$blood: rgb(180, 0, 0);

.content {
    position: relative;   
    width: calc(100vw - 130px);
    padding-left: 100px;
    padding-right: 20px;
    font-family: 'Exo 2', sans-serif;
    display: grid;
    min-height: fit-content;
    grid-template-columns: repeat(auto-fit, 1fr);

    .text {
        grid-column: span 2;
        margin-top: 20px;
        font-size: 40px;
        font-weight: 800;
        margin-bottom: 20px;
    }

    
}
</style>

<script>
import NavBar from '../components/NavBar.vue'
import { http } from '../scripts/http'

export default {
    title: 'ADAS | Оборудование',
    data() {
        return {
            logs: null
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')  
            this.$router.push('/')
        }
    },
    mounted: async function() {     
        http.post('/logs').then(response => {
            this.logs = response.data.logs
            if (response.data.logout) {
                this.logout()
            }
        })   
    }, 
    components: {
        NavBar
    }
}
</script>