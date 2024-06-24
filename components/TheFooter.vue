<template>
    <footer class="the-footer">

        <div class="content">
            <small class="license">
                <img src="https://andrexduarte.github.io/adx/img/icon-passaro.png" alt="ilustração de uma página construida">
                © Todos direitos reservados.<br>
                Feito com NuxtJs.
                <NuxtLink to="https://andrexduarte.github.io/adx/" target="_blank">André Duarte</NuxtLink> 2024.
            </small>
        </div>
    </footer>
</template>

<style lang="scss">
    .license {
        display: block;
        margin: 0 0 48px 0;
        text-align: center;
        font-size: 14px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        img {
            margin: 0 15px 0 10px;
        }
    }
</style>