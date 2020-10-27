<template>
    <div class="container">
        <div class="nav">
            <router-link class="nav-back" to="/">&#8249;&nbsp;Назад</router-link>
        </div>
        <form class="form">
            <div class="form-head">
                <h3>Регистрация.</h3>
                <p>Мы любим новых пользователей &#128150;</p>
            </div>
            <div class="form-inputs">
                <label for="login">&#129333; Логин</label><br>
                <input type="text"><br>
                <label for="text">&#128195; ФИО, № группы</label><br>
                <input type="text"><br>
                <label for="password">&#128274; Пароль</label><br>
                <input type="text"><br>
            </div>
            <div class="form-inputs">
                <label for="login">&#128231; E-mail</label><br>
                <input type="text"><br>
                <label for="login">&#128241; Телефон</label><br>
                <input type="text"><br>
                <label for="password">&#128274; Повторите пароль</label><br>
                <input type="text"><br>
            </div>
            <div class="form-inputs span-2">
                <label class="loose">Пароль должен сосотоять как минимум из 8 латинских букв, цифр или знаков @?!,.#</label><br>
                <button>Завершить регистрацию</button><br>
                <label>У Вас уже есть аккаунт? </label><router-link to="/signin">Войти в систему</router-link>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    title: 'ADAS | Регистрация',
}
</script>

<style lang="scss" scoped>

.nav {
    position: absolute;
    z-index: 100;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    height: 50px;
    min-width: 960px;
    width: 100%;
    color: white;
    animation: back-in 500ms ease-in-out;
    cursor: pointer;
}

.nav-back {
    grid-column: span 4;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 15px;
    margin-left: 50px;
    animation: back-jump 2s ease-in-out alternate infinite;

    &:hover {
        color: lightgray;
    }
}

.form {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    border: 1px solid rgb(29, 29, 29);
    background: rgb(49, 49, 49);
    height: 600px;
    min-width: 800px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    animation: form-in 2s ease-in-out;

    box-shadow: -5px 3px 25px rgba(0, 0, 0, 0.418);
}

.form-head {
    grid-column: span 2;
    text-align: center;
    margin-top: 25px;
    font-size: 2.2rem;
    animation: for 2s ease-in-out;

    > p {        
        margin-top: 20px;
        font-size: 1.2rem;
        font-weight: lighter;
    }
}

.span-2 {
    grid-column: span 2 !important;
    text-align: center !important;
}

.form-inputs {
    grid-column: span 1;
    margin: 0 20px;
    font-size: 2rem;
    animation: for 2s ease-in-out;
    text-align: left;

    > input {
        outline: none;
        width: 480px;
        height: 40px;
        border: 1px solid rgb(15, 15, 15);
        border-radius: .2rem;
        background: rgb(34, 34, 34);
        font-size: 1.2rem;
        padding: 5px;
        color: whitesmoke;
    }

    > button {
        outline: none;
        width: 492px;
        height: 52px;
        margin-top: 10px;
        border: 1px solid rgb(16, 0, 104);
        border-radius: .2rem;
        background: rgb(0, 126, 199);
        font-size: 1.2rem;
        color: whitesmoke;
        cursor: pointer;
    }

    > label {
        font-size: 1rem;
        font-weight: lighter;
        text-align: left;
    }

    > a {
        font-size: 1rem;
        color: rgb(0, 126, 199);
    }

    > .loose {
        font-size: 1rem;
        color: rgb(255, 134, 134);
    }

}

@keyframes back-in {
    0% {
        top: -300px;
    }
    100% {
        top: 0;
    }
}


@keyframes back-jump {
    0% {
        margin-left: 50px;
    }
    100% {
        margin-left: 15px;
    }
}


@keyframes form-in {
    0% {
        height: 0;
        min-width: 20px;
        width: 20px;
        color: rgba(0, 0, 0, 0);
    }
    35% {        
        height: 600px;
        min-width: 20px;
        width: 20px;
    }
    75% {
        min-width: 1066px;
    }
    100% {
        min-width: 1066px;
    }
}


@keyframes for {
    0% {
        opacity: 0;
    }
    90% {
        opacity: 0
    }
    100% {
        opacity: 1;
    }
}
</style>