<template>    
    <div v-if="isLoggedIn">
    
    </div>
    <div v-else>
        <div class="content">
        <div class="card">
            <b class="card-header"><div class="center">Доступ к сайту ограничен</div></b>
            <div class="card-body">
                <p>Для получения доступа к системе необходимо <router-link class="blue" to="/auth">авторизоваться</router-link>.</p>
                <p>– Если у Вас нет аккаунта в системе, Вам предстоит пройти <router-link class="blue" to="/auth">регистрацию</router-link> и дождать подтверждения аккаунта администрацией.</p>
                <p>– Если у Вас уже есть аккаунт в системе, для этого <router-link class="blue" to="/auth">авторизируйтесь</router-link>.</p>
                <br><br>
                <p>Для одобрения аккаунта необходимо:</p>
                <p>– в поле информации ввести настощие Фамилию Имя (Отчество) и  номер группы. <i>[Например: Иванов Иван Иванович, 717-1]</i></p>
                <p>– пароль должен содержать как минимум 8 латинских символов, цифр и знаков: ?!,._-@# <i>[Например: 7@.U?v2t]</i></p>
            </div>
            <div class="card-footer">
                <router-link class="card-footer-button" to="/auth"><div class="center">Войти в личный кабинет</div></router-link>
                <router-link class="card-footer-button" to="/reg"><div class="center">Создать личный кабинет</div></router-link>
            </div>
        </div>
        </div>
    </div>
</template>