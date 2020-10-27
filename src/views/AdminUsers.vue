<template>
    <div class="conteiner">
        <NavBar/>
        <div class="content">
            <div class="text">Пользователи</div>
            <div class="card-user" v-for="user in users" v-bind:key="user.id">
                <div class="card-over">
                    <div class="center">
                        <form><button class="edit"><i class="fas fa-user-edit"></i>Изменить</button></form>
                        <form><button class="delete"><i class="fas fa-user-slash"></i>Удалить</button></form>
                    </div>
                </div>
                <div class="card-header">ADAS profile</div>
                <div class="card-header"><i class="fas fa-user-circle"></i></div>
                <div class="card-header">Профиль ADAS</div>
                <img class="avatar" src="/images/avatar.jpg">
                <div class="info">
                    <label>Логин</label>
                    <p>{{user.login}}</p>
                    <label>О пользователе</label>
                    <p>{{user.about}}</p>
                    <label>E-mail</label>
                    <p>{{user.eMail}}</p>
                    <label>Телефон</label>
                    <p>{{user.phone}}</p>
                    <label>Тип</label>
                    <p>{{user.type}}</p>
                </div>
                <div class="id">
                    <div id="id" @click="notification('ID')" onclick="navigator.clipboard.writeText(this.childNodes[0].childNodes[1].innerHTML)">
                        <span><i class="fas fa-id-card"></i><span id="copyId">{{user._id}}</span></span>                   
                        <span class="tooltip"><i class="far fa-copy"></i> Копировать ID Пользователя</span>
                    </div>
                </div>
                <div class="code">
                    <div id="code" @click="notification('Индивидуальный код')" onclick="navigator.clipboard.writeText(this.childNodes[0].childNodes[1].innerHTML)">
                        <span><i class="fas fa-qrcode"></i><span id="copyCode">{{user.code}}</span></span>                   
                        <span class="tooltip"><i class="far fa-copy"></i> Копировать индивидуальный код пользователя</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="notification" class="notification"></div>
    </div>
</template>

<style lang="scss" scoped>
$gold: rgb(255, 212, 0);
$blood: rgb(180, 0, 0);
$grass: rgb(126, 200, 80);

.notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    border-radius: 2rem;
    background: rgb(56, 55, 59);
    color: $gold;    
    cursor: pointer;

    &:empty {
        display: none;
    }
}

.content {
    position: relative;
    left: 100px;
    margin: 0 20px;
    max-width: calc(100vw - 140px);
    font-family: 'Exo 2', sans-serif;
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);

    .text {
        grid-column: span 2;
        margin-top: 20px;
        font-size: 40px;
        font-weight: 800;
        margin-bottom: 20px;
    }

    .card-user { 
        position: relative;
        padding: 20px;
        max-width: 700px;
        background: linear-gradient(90deg, #22252E 0%, #16171d 100%);
        border-radius: 1.2rem;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        transition: all 100ms ease;
        margin-bottom: 20px;
        cursor: pointer;

        animation: card 1s ease;

        .card-over {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.7);
            width: 100%;
            height: 100%;
            border-radius: 1.2rem;
            visibility: hidden;
            opacity: 0;
            transition: all .2s ease;

            > .center {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: fit-content;
                display: grid;
                width: 100%;
                grid-template-columns: repeat(2, 1fr);
                
                > form {
                    margin: auto;

                    > .edit {
                        grid-column: span 1;
                        background: rgba(0, 0, 0, 0.8);
                        padding: 10px 40px;
                        font-size: 1.2rem;
                        font-weight: 700;
                        color: $grass;
                        margin: 0 20px;
                        cursor: pointer;
                        border: 3px solid $grass;
                        border-radius: 1.5rem;

                        transition: all .2s ease;

                        &:hover, &:focus {
                            background: $grass;
                            color: white;
                        }

                        > i {
                            margin-right: 10px;
                        }
                    }

                    > .delete {
                        grid-column: span 1;
                        background: rgba(0, 0, 0, 0.8);
                        padding: 10px 40px;
                        font-size: 1.2rem;
                        font-weight: 700;
                        color: $blood;
                        margin: 0 20px;
                        cursor: pointer;
                        border: 3px solid $blood;
                        border-radius: 1.5rem;

                        transition: all .2s ease;

                        &:hover, &:focus {
                            background: $blood;
                            color: white;
                        }

                        > i {
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
        
        &:hover {

            .card-over {
                opacity: 1;
                visibility: visible;
            }

            .id, .code {
                div {
                    background: inherit;
                    color: gold;
                    border: 3px solid $gold;

                    &:hover {
                        background: $gold;
                        color: rgb(0, 0, 0);
                    }
                }
            }

        }

        .card-header {
            grid-column: span 2;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 20px;
            text-align: center;

            i {
                font-size: 30px;
            }
        }

        .info  {
            grid-column: span 4;
            padding: 5px;

            label {
                font-size: 16px;
                font-weight: 400;
            }

            p {
                text-transform: uppercase;
                word-wrap: break-word;
                font-size: 24px;
                font-weight: 600;
                margin-top: 5px;
                margin-bottom: 10px;
            }
        }

        .id {
            grid-column: span 3;
            margin: auto;
            margin-top: 20px;
            z-index: 100;
            transition: all .2s ease;

            div {    
                padding: 10px 20px;
                width: fit-content;
                border-radius: 2rem;
                border: 3px solid #373d4e;
                cursor: pointer;
                background: #373d4e;
                position: relative;
                
                i {
                    margin-right: 10px;
                }

                .tooltip {         
                    z-index: 100;
                    display: block;
                    position: absolute;
                    background-color: $gold;
                    padding: 8px 15px;
                    border-radius: 3px; 
                    left: 50%;
                    top: -80%;
                    transform: translate(-50%, -50%);
                    width: max-content;
                    opacity: 0;
                    visibility: hidden;
                    font-size: 13px;
                    letter-spacing: .5px;
                    transition: display 5s ease 5s;
                    
                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        left: 50%;
                        top: 100%;
                        margin-top: -5px;
                        transform: rotate(45deg);
                        width: 10px;
                        height: 10px;
                        background-color: inherit;
                    }
                }

                &:hover {
                    background: #0e111a;
                    color: $gold;

                    .tooltip {
                        visibility: visible;
                        opacity: 1;
                    }
                }   
            }
        }

        .code {
            grid-column: span 3;
            margin: auto;
            margin-top: 20px;
            z-index: 100;
            transition: all .2s ease;

            div {    
                padding: 10px 20px;
                width: fit-content;
                border-radius: 2rem;
                cursor: pointer;
                background: #373d4e;
                border: 3px solid #373d4e;
                position: relative;
                
                i {
                    margin-right: 10px;
                }

                .tooltip {         
                    z-index: 100;
                    display: block;
                    position: absolute;
                    background-color: $gold;
                    padding: 8px 15px;
                    border-radius: 3px; 
                    left: 50%;
                    top: -80%;
                    transform: translate(-50%, -50%);
                    width: max-content;
                    opacity: 0;
                    visibility: hidden;
                    font-size: 13px;
                    letter-spacing: .5px;
                    transition: display 5s ease 5s;
                    
                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        left: 50%;
                        top: 100%;
                        margin-top: -5px;
                        transform: rotate(45deg);
                        width: 10px;
                        height: 10px;
                        background-color: inherit;
                    }
                }

                &:hover {
                    background: #0e111a;
                    color: $gold;

                    .tooltip {
                        visibility: visible;
                        opacity: 1;
                    }
                }            
            }
        }

        .login {
            text-transform: capitalize;
        }

        .avatar {
            grid-column: span 2;
            margin: auto;
            padding: 10px;
            width: calc(100% - 20px);
            border-radius: 5px;
        }
    }
}

@media (max-width: 1700px) {
    .content {
        grid-template-columns: repeat(1, 1fr);
        
        .text {
            grid-column: span 1;
        }

        .card-user {
            grid-column: span 1;
        }

        .onHands {
            grid-column: span 1;
        }
    }
}

@keyframes card {
    0% {
        margin-left: -1500px;
    }
    100% {
        margin-left: 0;
    }
}
</style>

<script>
import NavBar from '../components/NavBar.vue'
import { http } from '../scripts/http'

export default {
    title: 'ADAS | Профиль',
    data() {
        return {
            users: []
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')  
            this.$router.push('/')
        }, 
        notification(text) {       
            let notification = document.getElementById('notification');
            notification.innerHTML = '<i class="far fa-copy"></i>&nbsp;&nbsp;&nbsp;' + text + ' пользователя успешно скопирован';
            notification.addEventListener('click', () => {notification.innerHTML = ''})
            setTimeout(() => {
                notification.innerHTML = '';
            }, 3000)
        }
    },
    mounted: async function() {     
        http.post('/admin/users').then(response => {
            this.users = response.data.users
            if (response.data.logout) {
                this.logout()
            }
        })   
    }, 
    components: {
        NavBar
    }, 
    computed: { 
    }
}
</script>