<template>        
    <div class="content">
        <div class="card">
            <b class="card-header"><div class="center">Авторизация</div></b>
            <div class="card-body">
                <form class="input-form">
                    <label class="error-lable">Ошибка:</label>
                    <label class="error">Логин или пароль введены неверно</label>
                    <div class="br"></div>
                    <label class="input-lable">Логин:</label>
                    <input class="input" type="text">
                    <div class="br"></div>
                    <label class="input-lable">Пароль:</label>
                    <input class="input" type="password">
                </form>
            </div>
            <div class="card-footer">
                <router-link class="card-footer-button" to="/reg"><div class="center">Создать личный кабинет</div></router-link>
                <span class="card-footer-button light"><div class="center">ВОЙТИ</div></span>
            </div>
        </div>
    </div>
</template>


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

.input-form {
    display: grid;
    margin-top: 20px;
    margin-bottom: 50px;
    grid-template-columns: repeat(2, 1fr);
    font-size: 1.5rem;
}

.br {
    grid-column: span 2;
    height: 5px;
}

.input-lable {
    grid-column: span 1;
    justify-self: end;
    padding-right: 10px;
}

.error {
    grid-column: span 1;
    font-size: 14px;
    color: rgb(241, 125, 125);
    padding-right: 10px;
}

.error-lable {
    grid-column: span 1;
    justify-self: end;
    font-size: 14px;
    color: rgb(241, 125, 125);
    padding-right: 10px;
}

.input {
    grid-column: span 1;
    @include media(width, (50%, 50%, 75%, 100%));
    outline: none;
}

.btn {
    grid-column: span 1;
    width: 100%;
    font-size: 1.5rem;
    height: 40px;
    margin: auto;
    border: none;
    border-bottom: 5px solid rgba(35, 35, 206, 0.616);

    &:hover {
        border-bottom: 5px solid rgb(36, 36, 184);

    }
}

.light {
    background: rgba(255, 255, 255, 0.082);
    border-bottom: 5px solid rgba(35, 35, 206, 0.616);

    &:hover {
        border-bottom: 5px solid rgb(5, 5, 173);
        background: rgba(255, 255, 255, 0.212);
    }
}

</style>