<template>
    <div class="content">
        <NavBar/>
        <div class="page" size="A4">
            <div class="page-content" id="page">
            </div>
        </div>
        <div class="editBlocks">
            <div class="header">Изменить блоки</div>
            <div class="elements">
                <div class="element" v-for="device in devices" v-bind:key="device.id" v-on:click="update">
                    <div class="blocks">
                        <label>Код:</label>
                        <br>
                        <br>
                        <p>{{device.code}}</p>
                    </div>
                    <div class="blocks">
                        <label>Ориентация:</label>
                        <br>
                        <input type="radio" value="landscape" id="landscape" v-model="device.orientation">
                        <label for="landscape">Горизонтальная</label>
                        <br>
                        <input type="radio" value="portrait" id="portrait" v-model="device.orientation">
                        <label for="portrait">Вертикальная</label>
                    </div>
                    <div class="blocks">
                        <label>Название:</label>
                        <br>
                        <br>
                        <p>{{device.name}}</p>
                    </div>
                    <div class="blocks">
                        <label>Размер:</label>
                        <br>
                        <input type="radio" value="small" id="small" v-model="device.size">
                        <label for="small">Маленький</label>
                        <br>
                        <input type="radio" value="middle" id="middle" v-model="device.size">
                        <label for="middle">Средний</label>
                        <br>
                        <input type="radio" value="large" id="large" v-model="device.size">
                        <label for="large">Большой</label></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$gold: rgb(255, 212, 0);
$blood: rgb(180, 0, 0);
$grass: rgb(126, 200, 80);

.content {
    position: relative;   
    width: calc(100% - 130px);
    padding-left: 100px;
    padding-right: 20px;
    font-family: 'Exo 2', sans-serif;
    display: grid;
    min-height: fit-content;
    grid-template-columns: 1fr 500px;

    .editBlocks {
        margin: 20px;

        .header {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        .elements {

            > .element {
                padding: 10px 20px;
                background: rgba(0, 0, 0, 0.199);
                margin-bottom: 10px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                
                > .blocks {
                    grid-column: span 1;
                    grid-row: span 1;
                    display: block;

                    > p {
                        font-size: 1.2rem ;
                    }

                }
            }
        }
    }

    .page {
        background: white;
        display: block;
        margin: 20px auto;
        margin-bottom: 0.5cm;
        box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
        color: black;

        .page-content {
            margin: 2.5cm 1.5cm;
            display: grid;
            grid-template-columns: repeat(18, 1cm);
            grid-template-rows: repeat(25, 1cm);
        }
    }

    .page[size="A4"] {  
        width: 21cm;
        height: 29.7cm; 
    }
}
</style>

<script>
import NavBar from '../components/NavBar.vue'
// import { http } from '../scripts/http'

export default {
    title: 'ADAS | Настройка пользователей',
    data() {
        return {
            devices: [{}]
        }
    },
    methods: {
        update() {
            setTimeout(this.updateE, 300)
        },
        updateE() {
            localStorage.devices = JSON.stringify(this.devices)
            let page = document.getElementById('page')
            page.innerHTML = ''

            for (let i = 0; i < this.devices.length; i++) {
                let g = document.createElement('div')
                let c = document.createElement('img')
                let t = document.createElement('div')  

                g.id = this.devices[i]._id
                g.style.outline = '1px solid black'
                
                if (this.devices[i].orientation == 'landscape' && this.devices[i].size == 'small') {
                    g.classList.add('column-6')
                    g.classList.add('row-3')
                    g.style.display = 'grid'
                    g.style.gridTemplateColumns = '2fr 3fr'
                    
                    c.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + this.devices[i].code
                    c.style.display = 'block'
                    c.style.margin = 'auto'
                    c.style.width = '2cm'

                    t.innerHTML = '<p style="font-size: .7rem;">Название: </p><p style="font-size: .7rem;">' + this.devices[i].name + '</p><br><p style="font-size: .7rem;">Код: </p><p style="font-size: .7rem;">' + this.devices[i].code + '</p>'
                    t.style.margin = '20px 10px'                    
                    t.style.wordWrap = 'break-word'
                } else if (this.devices[i].orientation == 'landscape' && this.devices[i].size == 'middle') {
                    g.classList.add('column-9')
                    g.classList.add('row-4')
                    g.style.display = 'grid'
                    g.style.gridTemplateColumns = '2fr 3fr'
                    
                    c.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + this.devices[i].code
                    c.style.display = 'block'
                    c.style.margin = 'auto'
                    c.style.width = '3cm'

                    t.innerHTML = '<p style="font-size: .7rem;">Название: </p><p style="font-size: 1.3rem;">' + this.devices[i].name + '</p><br><p style="font-size: .7rem;">Код: </p><p style="font-size: 1.3rem;">' + this.devices[i].code + '</p>'
                    t.style.margin = '20px 10px'                    
                    t.style.wordWrap = 'break-word'
                } else if (this.devices[i].orientation == 'landscape' && this.devices[i].size == 'large') {
                    g.classList.add('column-18')
                    g.classList.add('row-6')
                    g.style.display = 'grid'
                    g.style.gridTemplateColumns = '2fr 3fr'
                    
                    c.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + this.devices[i].code
                    c.style.display = 'block'
                    c.style.margin = 'auto'
                    c.style.width = '5cm'

                    t.innerHTML = '<p style="font-size: 1.2rem;">Название: </p><p style="font-size: 2rem;">' + this.devices[i].name + '</p><br><p style="font-size: 1.2rem;">Код: </p><p style="font-size: 2rem;">' + this.devices[i].code + '</p>'
                    t.style.margin = '20px 10px'                    
                    t.style.wordWrap = 'break-word'
                } else if (this.devices[i].orientation == 'portrait' && this.devices[i].size == 'small') {
                    g.classList.add('column-4')
                    g.classList.add('row-4')
                    
                    c.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + this.devices[i].code
                    c.style.display = 'block'
                    c.style.margin = '10px auto'
                    c.style.width = '2cm'

                    t.innerHTML = '<p style="font-size: .5rem;">Название: </p><p style="font-size: .7rem;">' + this.devices[i].name + '</p><p style="font-size: .5rem;">Код: </p><p style="font-size: .7rem;">' + this.devices[i].code + '</p>'
                    t.style.margin = '10px 20px'                    
                    t.style.wordWrap = 'break-word'
                } else if (this.devices[i].orientation == 'portrait' && this.devices[i].size == 'middle') {
                    g.classList.add('column-6')
                    g.classList.add('row-6')
                    
                    c.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + this.devices[i].code
                    c.style.display = 'block'
                    c.style.margin = '10px auto'
                    c.style.width = '3cm'

                    t.innerHTML = '<p style="font-size: .7rem;">Название: </p><p style="font-size: 1rem;">' + this.devices[i].name + '</p><p style="font-size: .7rem;">Код: </p><p style="font-size: 1rem;">' + this.devices[i].code + '</p>'
                    t.style.margin = '10px 20px'                    
                    t.style.wordWrap = 'break-word'
                } else if (this.devices[i].orientation == 'portrait' && this.devices[i].size == 'large') {
                    g.classList.add('column-8')
                    g.classList.add('row-8')
                    
                    c.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + this.devices[i].code
                    c.style.display = 'block'
                    c.style.margin = '10px auto'
                    c.style.width = '5cm'

                    t.innerHTML = '<p style="font-size: .7rem;">Название: </p><p style="font-size: 1rem;">' + this.devices[i].name + '</p><p style="font-size: .7rem;">Код: </p><p style="font-size: 1rem;">' + this.devices[i].code + '</p>'
                    t.style.margin = '10px 20px'                    
                    t.style.wordWrap = 'break-word'
                }


                page.append(g)
                g.prepend(c)          
                c.after(t)
            }
        }
    },
    mounted: function() {
        if (localStorage.devices) {
            try {
                this.devices = JSON.parse(localStorage.devices + ']') 
            } catch {
                this.devices = JSON.parse(localStorage.devices)
            }

            this.update()
        }
    },
    components: {
        NavBar
    }
}

</script>